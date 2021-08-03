// Example Response Algorithm from the Simulation Data;
export const dummyAlgorithmData = {
    percentageTimeSlotsSatisfied: '80',
    // user Data Response
    userData : {
        id: 'User',
        selectedTimeSlots: [
            {
                'time': `00:00 AM \n to \n 01:00 AM`,
                'image': './assets/svg/bright-moon.svg'
            },
            {
                'time': '12:00 PM \n to \n 13:00 PM',
                'image': './assets/svg/image2vector.svg'
            }
        ],
        allocatedTimeSlots: [
            {
                'time': `00:00 AM \n to \n 01:00 AM`,
                'image': './assets/svg/bright-moon.svg'
            },
            {
                'time': '12:00 PM \n to \n 13:00 PM',
                'image': './assets/svg/image2vector.svg'
            }
        ],
    },
    // array of household responses by the algorithm,
    householdData: [
        // example 1 response,
        {
            id: 'Household 1',
            selectedTimeSlots: [
                {
                    'time': `01:00 AM \n to \n 01:00 AM`,
                    'image': './assets/svg/bright-moon.svg'
                },
                {
                    'time': '12:00 PM \n to \n 13:00 PM',
                    'image': './assets/svg/image2vector.svg'
                }
            ],
            allocatedTimeSlots: [
                {
                    'time': `00:00 AM \n to \n 01:00 AM`,
                    'image': './assets/svg/bright-moon.svg',
                    'preferred': true,
                },
                {
                    'time': '12:00 PM \n to \n 13:00 PM',
                    'image': './assets/svg/image2vector.svg',
                    'preferred': false,
                }
            ],
        },
        // example 2 response,
        {
            id: 'Household 2',
            selectedTimeSlots: [
                {
                    'time': `00:00 AM \n to \n 01:00 AM`,
                    'image': './assets/svg/bright-moon.svg'
                },
                {
                    'time': '12:00 PM \n to \n 13:00 PM',
                    'image': './assets/svg/image2vector.svg'
                }
            ],
            allocatedTimeSlots: [
                {
                    'time': `00:00 AM \n to \n 01:00 AM`,
                    'image': './assets/svg/bright-moon.svg'
                },
                {
                    'time': '12:00 PM \n to \n 13:00 PM',
                    'image': './assets/svg/image2vector.svg'
                }
            ],
        }
    ]
}