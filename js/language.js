
const scrollButton = document.getElementById('scrollNow');
const scrollButtonLog =document.getElementById('logInButtonScroll');

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
button.addEventListener('mouseover', function() {
  list.style.display = 'block';
});

// Hide the list when the mouse leaves the button or the list
button.addEventListener('mouseleave', function() {
  list.style.display = 'none';
});

table.addEventListener('mouseover', function() {
  list.style.display = 'block';
});
table.addEventListener('mouseleave', function() {
  list.style.display = 'none';
});


// new Page
function changeToLanguage(language){
  console.log("function is called");
fetch(`../assets/JSON/${language}.json`) // Assuming data.json is your JSON file
      .then(response => response.json())
      .then(language => {
        document.getElementById('siteLan').textContent = language.siteLan;
        document.getElementById('heading').textContent = language.heading;
        document.getElementById('startLearning').textContent = language.startLearning;
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
        let a=document.getElementById('reference');
        a.textContent=language.reference;
        document.getElementById('paraTwo').textContent = language.paraTwo;
        document.getElementById('paraTwo').append(a);
        let b=document.getElementById('fireLinkPara');
        b.textContent=language.fireLinkPara;
        document.getElementById('firePara').textContent = language.firePara;
        document.getElementById('firePara').append(b);
      })
      .catch(error => console.error('Error fetching data:', error));
  }        
