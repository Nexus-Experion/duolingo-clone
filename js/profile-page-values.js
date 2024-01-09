document.addEventListener('DOMContentLoaded', () => {
    let userData = JSON.parse(sessionStorage.getItem("user-info"));
    console.log(userData);

    document.querySelector(".country-flag").src=getLanguageFlagPath(userData.learnLang);
    document.querySelectorAll(".fire-text").forEach(item => item.textContent = userData.xp);
    document.querySelectorAll(".heart-text").forEach(item => item.textContent = userData.hearts);
    document.querySelectorAll(".gem-text").forEach(item => item.textContent = userData.gems);
});

  const getLanguageFlagPath= (languageCode) => {
    console.log(`../assets/svg/country-flags/${languageCode}-flag.svg`)
    return `../assets/svg/country-flags/${languageCode}-flag.svg`
  }
