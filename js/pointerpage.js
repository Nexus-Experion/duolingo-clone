function selectLesson(lang) {

    console.log("entered");
    console.log(lang);
    localStorage.setItem("lang", lang);
    window.location.href = "./html/language.html";
}