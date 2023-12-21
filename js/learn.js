const openSuper=()=>{
    document.getElementById("try-super-button").classList.toggle('clicked');
    setTimeout(() => document.getElementById("try-super-button").classList.toggle('clicked'), 200)
    location.href="../html/superduolingo.html"
}
i=0
const increasePercentage=()=>{
    document.querySelector("circle-progress").setAttribute("value",i+=20);
    document.querySelector(".floating-start-box-bottom").classList.toggle("hidden");
    document.querySelector(".floating-start-box").classList.toggle("hidden");
    document.querySelector(".lesson-button").classList.toggle('clicked')
    setTimeout(() => document.getElementById(".lesson-button").classList.toggle('clicked'), 300)
}


