A sequence of questions for an AI algorithm to examine user behaviour on the enregy allocations.

The Official Web AI Internship Repository.

Under 2021 Copyright Laws & other.

---

**Developer Instructions**

- clone this repository, using ```git clone <this_repo_git_url>```
- inside the cloned & downloaded repository folder, run ```npm install```
- followed by ```npm run dev``` to deploy the development enviroment
- then navigate to your browser and open ```http://localhost:3000/```

---

**How it Works?**

### Project Configuration:

- ... ```project_config.js``` file inside ```src/utils/``` folder, to adjust for the necessary variables,
- ... ```timeslots_data.js``` file inside ```src/store/``` folder, to add/remove/modify the exisitng time-slots displayed,

### Alternative Code:

Alternative Navbar Checkpoint Roadmap -> using simple images and the correct div allocations,

```
<!-- The Website Checkpoint Roadmap -->
    <div id='checkpoint-container'>
        <!-- choose-preferred-time-slot -->
        <a rel=prefetch href="/choose-preferred-time-slots">
            <img src="./assets/svg/checkpoint-active.svg" alt="choose-preferred-time-slots">
            <!-- width='20' height="20" -->
            <!-- <h5>Choose preferred time slots</h5> -->
        </a>

        <!-- dashed-next-checkpoint-line -->
        <img src="./assets/svg/next-point-dash-line-top.svg" alt="next-line-dash-top">
        <!-- choose-agent-type-checkpoint -->
        <a rel=prefetch href="/">
            <img src="./assets/svg/checkpoint-next.svg" alt="choose-preferred-time-slots">
            <!-- <h5>Choose agent type</h5> -->
        </a>
        <!-- dashed-next-checkpoint-line -->
        <img src="./assets/svg/next-point-dash-line-bottom.svg" alt="next-line-dash-top">
        <!-- view-summary-checkpoint -->
        <a rel=prefetch href="/">
            <img src="./assets/svg/checkpoint-next.svg" alt="choose-preferred-time-slots">
            <!-- <h5>View Summary</h5> -->
        </a>
    </div>
```

```
Other useful import values and CDN's: (used on the template.html - file);

<!-- Import Ionicon icons & Google Fonts our Bootstrap theme relies on -->
<!-- <link href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css"> -->
<!-- <link href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
    rel="stylesheet" type="text/css"> -->
<!-- Import the custom Bootstrap 4 theme from our hosted CDN -->
<!-- <link rel="stylesheet" href="//demo.productionready.io/main.css"> -->
```
