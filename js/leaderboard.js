import arrayForProfiles from './leaderBfetch.js';
// console.log(arrayForProfiles);
const profileList = arrayForProfiles;
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
  const profilePicture = document.getElementById('profilePicture');
  profilePicture.src = userData.profileImage;
}

  sortingArray();
  placeuserStatistics();
function sortingArray(){
  profileList.forEach(profile=>{
    profileList.sort((a, b) => b.xp - a.xp );
  })
  renderLeaderboard(profileList);
}

  function renderLeaderboard(profileList) {
    console.log("entered into function");
    
    const leaderboardList = document.getElementById("centre-container-secdiv");

    profileList.forEach((entry, index) => {
      const listItem = document.createElement("a");
      listItem.classList.add('eachprofile');
      listItem.setAttribute('id',`eachprofile_${index + 1}`);
      const profindex =document.createElement('div');
      
      if((index+1) <=3 ){
        if((index+1) == 1){
          profindex.classList.add('indImage');
          const indImage = document.createElement('img');
          indImage.classList.add('indImage');
          indImage.src='//d35aaqx5ub95lt.cloudfront.net/images/leagues/9e4f18c0bc42c7508d5fa5b18346af11.svg';
          profindex.appendChild(indImage);
        }else if((index+1) == 2){
          profindex.classList.add('indImage');
          const indImage = document.createElement('img');
          indImage.classList.add('indImage');
          indImage.src='https://d35aaqx5ub95lt.cloudfront.net/images/leagues/cc7b8f8582e9cfb88408ab851ec2e9bd.svg';
          profindex.appendChild(indImage);
        }else {
          profindex.classList.add('indImage');
          const indImage = document.createElement('img');
          indImage.classList.add('indImage');
          indImage.src='https://d35aaqx5ub95lt.cloudfront.net/images/leagues/eef523c872b71178ef5acb2442d453a2.svg';
          profindex.appendChild(indImage);
        }
                   
      }
      else{
        profindex.classList.add('profindex');
        profindex.textContent=`${index+1}`;
      }
      const pic =document.createElement('div');
      pic.classList.add('divforimg');
      const profpic =document.createElement('img');
      profpic.classList.add('image');
      profpic.src=entry.profileImage;

      const bubblepicdiv =document.createElement("div");
      bubblepicdiv.classList.add('divforbubble');
      const bubblepic =document.createElement('img');
      bubblepic.classList.add('bubble');
      bubblepic.setAttribute('id','bubble');
      bubblepic.src='//d35aaqx5ub95lt.cloudfront.net/images/leagues/a35f1db4398fd29e66f1abc33a0d11a2.svg';
      bubblepicdiv.appendChild(bubblepic);
      

      pic.appendChild(profpic);
      pic.appendChild(bubblepicdiv);
      const namediv =document.createElement("div");
      namediv.classList.add('divforname');
      const namespan =document.createElement("span");
      namespan.classList.add('spanforname');
      namespan.textContent =`${entry.name}`;
      namediv.appendChild(namespan);
      const xpSpan =document.createElement('span');
      xpSpan.classList.add('spanforxp');
      xpSpan.textContent = `${entry.xp}`;
      // listItem.appendChild(bubblepicdiv);
      listItem.appendChild(profindex);
      listItem.appendChild(pic);
      listItem.appendChild(namediv);
      listItem.appendChild(xpSpan);
      leaderboardList.appendChild(listItem);
      
      //For Highlighting logined profile
      let userData = JSON.parse(sessionStorage.getItem("user-info"));
      let userName = userData.name;
      if(userName == entry.name){
          const profHighlight = document.getElementById(`eachprofile_${index + 1}`);
          profHighlight.style.border = '1px solid red';
          profHighlight.style.borderColor = ' #84d8ff';
          profHighlight.style.backgroundColor = ' #ddf4ff';
          

      } 

      
    });
  }
  
  
  function change(num){
    changeImage(num,profileList);
  }

  
  
  
  function changeImage(num,profileList){
    const addImage = document.getElementById('addImage');
    const getImage = document.getElementById('bubble');
    logInName = 'Alice';  
    profileList.forEach(profile => {
      
      if(profile.name ==  logInName){
        console.log(profile.name);
        if(num == 1){
          getImage.src='https://d35aaqx5ub95lt.cloudfront.net/images/leagues/2439bac00452e99ba7bf6a7ed0b04196.svg';
          addImage.src='https://d35aaqx5ub95lt.cloudfront.net/images/leagues/2439bac00452e99ba7bf6a7ed0b04196.svg';
        }

      }
    })
  }
    

  