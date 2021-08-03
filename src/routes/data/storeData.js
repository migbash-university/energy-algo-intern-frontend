/**
 * Description:
 * ===
 * Store the user's responses &
 * data in a .CSV file for further & 
 * future analytics,
 */
const converter = require('json-2-csv');
var fs = require('fs');

/**
 * Desc: 
 * Intercepts the `POST` data from the Server-Middleware
 * and creates OR appends to existing .CSV file for user data storing,
 * ----
 * Returns:
 * NaN 
 * @param {*} req 
 * @param {*} res 
 */
export function post(req, res) {
  const data = req.body;
  // console.log('storeData.js', req.body);

  const userUID = data.userUID
  const formData = reformatJSONObj(data);

  let json2csvCallback;
  let path = 'data/' + userUID + '.csv'

  if (fs.existsSync(path)) {
    // convert JSON to CSV format,
    json2csvCallback = function (err, csv) {
      if (err) throw err;
      fs.appendFile(path, csv + '\r\n', function (err) {
        if (err) {
          console.log('Some error occured - file either not saved or corrupted file saved.');
          return
        } else {
          console.log('New data appened!');
          return
        }
      });
    };
    converter.json2csv(formData, json2csvCallback, {
      prependHeader: false // removes the generated header of "value1,value2,value3,value4" (in case you don't want it)
    });
  } else {
    json2csvCallback = function (err, csv) {
      if (err) throw err;
      // else: create & write to new file, 
      fs.writeFile(path, csv + '\r\n', 'utf8', function (err) {
        if (err) {
          console.log('Some error occured - file either not saved or corrupted file saved.');
          return
        } else {
          console.log('It\'s saved!');
          return
        }
      });
    }
    converter.json2csv(formData, json2csvCallback, {
      prependHeader: true // removes the generated header of "value1,value2,value3,value4" (in case you don't want it)
    });
  }
}


/**
 * Desc:
 * Function - Method updates re-formats the Object According
 * to the necessary properties and parameters of the data,
 * ---
 * Returns:
 * Reformatted JSON object in line with the CSV format outlined,
 * @param {*} dataObj 
 * @returns 
 */
function reformatJSONObj(dataObj) {
  delete dataObj.pastUserOptionsSelect;

  var newObj = {};

  // console.log('checkpointObject_1', dataObj.selectedTimeSlots);
  
  /**
   * Dealing with `selectedTimeSlots` 
  */
  let timeslotArray = dataObj.selectedTimeSlots;
  let timeSlotCounter = 0;
  for (let element of timeslotArray) {
    // console.log('element-time', element.time);
    let str = element.time.replace(/\r?\n|\r/g, " ");
    newObj['selectedTimeSlot_' + timeSlotCounter] = str;
    timeSlotCounter++;
  };

  // console.log('checkpointObject_1', newObj);

  /**
   * Dealing with `AllocatedTimeSlots` 
  */
  let timeslotArray_2 = dataObj.algorithmRoundResponseData.userData.allocatedTimeSlots;
  let timeSlotCounter_2 = 0;
  for (let element of timeslotArray_2) {
    // console.log('element-time', element.time);
    let str = element.time.replace(/\r?\n|\r/g, " ");
    newObj['allocatedTimeSlot_' + timeSlotCounter_2] = str;
    timeSlotCounter_2++;
  };

  // console.log('checkpointObject_2', newObj);

  /**
   * Piece the final Data Together;
  */
  newObj = {
    attempt: dataObj.attemptNumber,
    ...newObj,
    fairnessScore_1: dataObj.userSatisfaction1stRound.fairness,
    satisfactionScore_2: dataObj.userSatisfaction2ndRound.satisfaction,
    fairnessScore_2: dataObj.userSatisfaction2ndRound.fairness,
    percentageCorrectlyAllocated: dataObj.percentageTimeSlotsSatisfied,
  };

  return newObj;
}