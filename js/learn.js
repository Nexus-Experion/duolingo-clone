const openSuper = () => {
    document.getElementById("try-super-button").classList.toggle('clicked');
    setTimeout(() => document.getElementById("try-super-button").classList.toggle('clicked'), 200)
    location.href = "../html/superduolingo.html"
}

const increasePercentage = (event) => {
    let parentDiv = event.target.closest(".alignment-div");
    parentDiv.querySelector(".lesson-button").classList.toggle('clicked')
    parentDiv.querySelector(".floating-start-box-bottom").classList.toggle("hidden");
    setTimeout(() => parentDiv.querySelector(".lesson-button").classList.toggle('clicked'), 150)
    parentDiv.querySelector(".floating-start-box")?.classList.toggle("hidden");
}
// This should be replaced with API call ========================
var sectionData = {
    "section": {
        "name": "Section 1: Rookie",
        "units": [
            {
                "name": "Unit 1",
                "description": "Tell others what to do, talk about health",
                "chapters": ["Chapter m1", "Chapter m2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7","Chapter 8","Chapter 9"]
            },{
                "name": "Unit 2",
                "description": "Describe places, tell time",
                "chapters": ["Chapter m1", "Chapter m2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7","Chapter 8","Chapter 9"]
            },{
                "name": "Unit 3",
                "description": "Describe what people do, make comparisons",
                "chapters": ["Chapter 31", "Chapter m2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7","Chapter 8","Chapter 9"]
            },{
                "name": "Unit 4",
                "description": "Use the future tense, talk about days",
                "chapters": ["Chapter m1", "Chapter m2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7","Chapter 8","Chapter 9"]
            },{
                "name": "Unit 5",
                "description": "Discuss weather, describe relationships",
                "chapters": ["Chapter m1", "Chapter m2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7","Chapter 8","Chapter 9"]
            },{
                "name": "Unit 6",
                "description": "Discuss food, talk about the past",
                "chapters": ["Chapter m1", "Chapter m2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7","Chapter 8","Chapter 9"]
            },{
                "name": "Unit 7",
                "description": "Discuss nature, describe people",
                "chapters": ["Chapter m1", "Chapter m2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7","Chapter 8","Chapter 9"]
            },
        ]
    }
}
//======================End of JSON==============================
let completedUnits = 2;
let lockedUnits = 4

let finishedUnitHeader = `
<header class="unit unit-colorful">
  <h1 class="unit-number">Unit 2</h1>
  <span class="unit-description">
  Introduce yourself, order food and drink</span>
</header>`

let incompleteUnitHeader = `<section>
<header class="unit unit-unfinished">
  <h1 class="unit-number">Unit 3</h1>
  <span class="unit-description">
  Talk about countries, ask for directions
  </span>
</header>
</section>`

let onProgressHtml = `
<div class="circle_box">
  <button class="lesson-button" onclick="increasePercentage(event);">
    <img src="../assets/svg/star-in-lesson-white.svg" alt="star" class="star-image">
    <circle-progress value="0" max="100" text-format="none" ></circle-progress>
  </button>
  <div class="floating-start-box">
    <div class="text">
      START
    </div>
    <div class="triangle"></div>
  </div>
</div>
<div class="floating-start-box-bottom hidden">
  <div class="triangle-top"></div>
  <div class="text-container">
    <h1>Form basic sentences</h1>
    <p>Lesson 2 of 4</p>
    <button>Start +10 XP</button>
  </div>
</div>`

let lockedDiv = `<div class="circle_box locked">
<button class="lesson-button inactive" onclick="increasePercentage(event);">
  <img src="../assets/svg/locked-button-grey.svg" alt="locked-button" class="star-image">
</button>
</div>
<div class="floating-start-box-bottom hidden locked">
<div class="triangle-top"></div>
<div class="text-container">
  <h1>Form basic sentences</h1>
  <p>Complete all the levels above to<br>unlock this</p>
  <button>Locked</button>
</div>
</div>`
let completedDiv = `
<div class="circle_box completed">
  <button
    class="lesson-button inactive"
    onclick="increasePercentage(event);"
  >
    <img
      src="../assets/svg/completed-lesson-background.svg"
      alt="finsished-tick"
      class="star-image bg"
    />
    <img
      src="../assets/svg/correct-tick-unit-completed.svg"
      alt="finsished-tick"
      class="star-image"
    />
  </button>
</div>
<div class="floating-start-box-bottom hidden completed">
  <div class="triangle-top"></div>
  <div class="text-container">
    <h1>Form basic sentences</h1>
    <p>You completed this level!</p>
    <button>Practice +5 XP</button>
  </div>
</div>`

let paddingArr = [0, 2, 4, 2, 0, -2, -4, -2, 0];
let index = 0;

const calculateTranslate = () => {
    if (paddingArr[index] < 0) {
        return `0 0 0 ${-50 * paddingArr[index++]}px`
    }
    return `0 ${50 * paddingArr[index++]}px 0 0`
}

const placeCompletedLessons = (lessonCount, sectionRef,unitRef,start=0) => {
    for (let i = start; i < lessonCount+start; i++) {
        let circleNode = document.createElement("div");
        circleNode.setAttribute("class", "alignment-div");
        circleNode.style.padding = calculateTranslate();
        circleNode.innerHTML = completedDiv;
        circleNode.querySelector("h1").textContent=sectionData.section.units[unitRef].chapters[i];
        sectionRef.appendChild(circleNode);
    }
}

const placeOngoingLessons = (sectionRef,unitRef,start=0) => {
    let circleNode = document.createElement("div");
    circleNode.setAttribute("class", "alignment-div");
    circleNode.style.padding = calculateTranslate();
    circleNode.innerHTML = onProgressHtml;
    circleNode.querySelector("h1").textContent=sectionData.section.units[unitRef].chapters[start];
    sectionRef.appendChild(circleNode);

}


const placeLockedLessons = (lessonCount, sectionRef,unitRef,start=0) => {
    for (let i = start; i < lessonCount+start; i++) {
        let circleNode = document.createElement("div");
        circleNode.setAttribute("class", "alignment-div");
        circleNode.style.padding = calculateTranslate();
        circleNode.innerHTML = lockedDiv;
        circleNode.querySelector("h1").textContent=sectionData.section.units[unitRef].chapters[i];
        sectionRef.appendChild(circleNode);
    }
}

let unitCounter=1;
let lessonContainer = document.querySelector(".scrollable-lesson-div");
for (i = 0; i < completedUnits; i++) {
    index = 0
    let section = document.createElement("section");
    section.setAttribute("id",`section-${unitCounter++}`);
    section.innerHTML = finishedUnitHeader;
    placeCompletedLessons(9, section,unitCounter-2);
    section.querySelector("h1").textContent=sectionData.section.units[unitCounter-2].name;
    section.querySelector("span").textContent=sectionData.section.units[unitCounter-2].description;
    lessonContainer.append(section);
}

index = 0;
let section = document.createElement("section");
section.setAttribute("id",`section-${unitCounter++}`);
section.innerHTML = incompleteUnitHeader;
placeCompletedLessons(3, section,unitCounter-2);
placeOngoingLessons(section,unitCounter-2,3);
placeLockedLessons(5, section,unitCounter-2,4);
section.querySelector("h1").textContent=sectionData.section.units[unitCounter-2].name;
section.querySelector("span").textContent=sectionData.section.units[unitCounter-2].description;
lessonContainer.append(section);

for (i = 0; i < lockedUnits; i++) {
    index = 0;
    let section = document.createElement("section");
    section.setAttribute("id",`section-${unitCounter++}`);
    section.innerHTML = incompleteUnitHeader;
    placeLockedLessons(9, section,unitCounter-2);
    section.querySelector("h1").textContent=sectionData.section.units[unitCounter-2].name;
    section.querySelector("span").textContent=sectionData.section.units[unitCounter-2].description;
    lessonContainer.append(section);
}
