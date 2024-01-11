
const scrollButton = document.getElementById('scrollNow');
const scrollButtonLog = document.getElementById('logInButtonScroll');
let userLearnLang = localStorage.getItem("lang");
localStorage.setItem("selectedLang", userLearnLang)
// Function to toggle button visibility based on scroll position
function toggleScrollButton() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    scrollButton.style.display = 'inline-flex';
    scrollButtonLog.style.display = 'inline-flex'; // Show button when scrolled beyond a certain point (e.g., 20px)
  } else {
    scrollButton.style.display = 'none';
    scrollButtonLog.style.display = 'none'; // Hide button otherwise
  }
}

// Event listener for scroll
window.addEventListener('scroll', toggleScrollButton);



const button = document.getElementById('buttonDropdown');
const list = document.getElementById('hoverTable');
const table = document.getElementById('hoverTable');
// Show the list when hovering over the button
button.addEventListener('mouseover', function () {
  list.style.display = 'block';
});

// Hide the list when the mouse leaves the button or the list
button.addEventListener('mouseleave', function () {
  list.style.display = 'none';
});

table.addEventListener('mouseover', function () {
  list.style.display = 'block';
});
table.addEventListener('mouseleave', function () {
  list.style.display = 'none';
});

const loginButtonAnimation = () => {
  document.getElementById("learningaButtonText").classList.toggle('clicked');
  setTimeout(() => document.getElementById("learningaButtonText").classList.toggle('clicked'), 500)
 window.location.href="./signup.html";
}

const getstartedAnimation = () => {
  document.getElementById("learningButton").classList.toggle('clicked');
  setTimeout(() => document.getElementById("learningButton").classList.toggle('clicked'), 500)
 window.location.href="./signup.html";
}

const loginAnimation = () => {
  document.getElementById("loginButtonText").classList.toggle('clicked');
  setTimeout(() => document.getElementById("loginButtonText").classList.toggle('clicked'), 500)
  window.location.href="./loginpage.html";
}

const alreadyAnimation = () => {
  document.getElementById("accountButton").classList.toggle('clicked');
  setTimeout(() => document.getElementById("accountButton").classList.toggle('clicked'), 500)
  window.location.href="./loginpage.html";
}

changeToLanguage('en');
// new Page
function changeToLanguage(language) {
  let userLearnLang = localStorage.getItem("lang");
  localStorage.setItem("selectedLang", userLearnLang)

  fetch(`https://duolingo-serverless-endpoint.vercel.app/api/individual-lang-page-translation?lang=${language}`) // Assuming data.json is your JSON file
    .then(response => response.json())
    .then(language => {
      let userLearnLang = localStorage.getItem("lang");
      document.getElementById('siteLan').textContent = language.siteLan;
      document.getElementById('heading').textContent = `${language.heading + language.lang[userLearnLang] + language.head2}`
      document.getElementById('startLearning').textContent = language.startLearning;
      document.getElementById('lessonflag').src = language.flag[userLearnLang];
      document.getElementById('alreadyHave').textContent = language.alreadyHave;
      document.getElementById('fireHead').textContent = language.fireHead;
      document.getElementById('tickHead').textContent = language.tickHead;
      document.getElementById('crownHead').textContent = language.crownHead;
      document.getElementById('girlHead').textContent = language.girlHead;
      document.getElementById('apple').textContent = language.apple;
      document.getElementById('playStore').textContent = language.playStore;
      document.getElementById('secDivHeading').textContent = language.secDivHeading;
      document.getElementById('paraOne').textContent = language.paraOne;
      document.getElementById('tickPara').textContent = language.tickPara;
      document.getElementById('crownPara').textContent = language.crownPara;
      document.getElementById('girlPara').textContent = language.girlPara;
      document.getElementById('divThreeHead').textContent = language.divThreeHead;
      document.getElementById('owlHead').textContent = language.owlHead;
      document.getElementById('superDuoPara').textContent = language.superDuoPara;
      document.getElementById('superDuoLink').textContent = language.superDuoLink;
      document.getElementById('bagOwlPara').textContent = language.bagOwlPara;
      document.getElementById('computerHead').textContent = language.computerHead;
      document.getElementById('computerPara').textContent = language.computerPara;
      document.getElementById('computerRef').textContent = language.computerRef;
      document.getElementById('loginButtonText').textContent = language.loginButtonText;
      document.getElementById('learningaButtonText').textContent = language.learningaButtonText;
      document.getElementById('secthreehead').textContent = language.secthreehead;
      let a = document.getElementById('reference');
      a.textContent = language.reference;
      document.getElementById('paraTwo').textContent = language.paraTwo;
      document.getElementById('paraTwo').append(a);
      let b = document.getElementById('fireLinkPara');
      b.textContent = language.fireLinkPara;
      document.getElementById('firePara').textContent = language.firePara;
      document.getElementById('firePara').append(b);


    })
    .catch(error => console.error('Error fetching data:', error));
}        
