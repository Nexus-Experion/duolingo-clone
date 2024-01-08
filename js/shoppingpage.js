


let myButton = document.getElementById('heartButton');
let mySpan = document.getElementById('text-in-button heart-text');
let userData = JSON.parse(sessionStorage.getItem("user-info"));
let diamond = userData.gems;
let hearts = userData.hearts;

const getUserDataFromSessionStorage = () => {
  return JSON.parse(sessionStorage.getItem("user-info"))
}
const getLanguageFlagPath=(languageCode)=>{
  console.log(`../assets/svg/country-flags/${languageCode}-flag.svg`)
  return `../assets/svg/country-flags/${languageCode}-flag.svg`
}

const placeuserStatistics = () => {
  let userData = getUserDataFromSessionStorage();
  document.querySelector(".country-flag").src=getLanguageFlagPath(userData.learnLang);
  document.querySelectorAll(".fire-text").forEach(item => item.textContent = userData.xp);
  document.querySelectorAll(".heart-text").forEach(item => item.textContent = userData.hearts);
  document.querySelectorAll(".gem-text").forEach(item => item.textContent = userData.gems);

}
placeuserStatistics();

const loginButtonAnimation = () => {
  document.getElementById("superLink").classList.toggle('clicked');
  setTimeout(() => document.getElementById("superLink").classList.toggle('clicked'), 500)
  window.location.href="./superduolingo.html";
}

// function checkSpanValue() {
//   userData = JSON.parse(sessionStorage.getItem("user-info"));
//   hearts=userData.hearts
//   console.log(userData.hearts);
//   if (hearts >= 4) {
//     myButton.disabled = true;
//     myButton.querySelector("span").textContent = "Full";
//   } else {
//     myButton.disabled = false;
//     myButton.style.color = 'rgb(var(--color-blue-space))';
//     myButton.querySelector("span").textContent = "Buy";
//   }
// }
// checkSpanValue();

function calcDiamond(){
  checkSpanValue();
  
  console.log("userdata is ",userData);
  userData.gems -= 10;
  userData.hearts += 1;
  sessionStorage.setItem("user-info",JSON.stringify(userData));
}
myButton.addEventListener('click',calcDiamond);