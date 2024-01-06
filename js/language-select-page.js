const selectLanguage = (event) =>{
    let button = event.target.closest("button");
    selectedLang = button.querySelector("h2").id;
    localStorage.setItem('selectedLang', selectedLang);

    window.location.href = "../html/signup.html";
}