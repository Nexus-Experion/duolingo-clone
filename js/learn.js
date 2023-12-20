const openSuper=()=>{
    document.getElementById("try-super-button").classList.toggle('clicked');
    setTimeout(() => document.getElementById("try-super-button").classList.toggle('clicked'), 200)
    location.href="../html/superduolingo.html"
}