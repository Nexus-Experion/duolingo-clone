const showNextItem = () => {
    document.getElementById("footer-button").classList.toggle('clicked');
    setTimeout(() => document.getElementById("footer-button").classList.toggle('clicked'), 300)

    let userData = JSON.parse(sessionStorage.getItem("user-info"));
    console.log(userData);

    let prefillData = {
        "name": userData.name,
        "email": userData.email,
        "contact":'+91 8301801332'
    }
    makepayment(prefillData)
}
const makepayment = (prefillData) => {
    const amount = 199;
    var options = {
        "key": "rzp_test_meh8xKYwSVWkw0",
        "amount": amount * 100, // Example: 2000 paise = INR 20
        "name": "NEXUS-DUOLINGO",
        "currency":"INR",
        "description": "description",
        "image": "../assets/images/duo-logo.png",
        "handler": function (response) {
            console.log(response);
            setSuperStatus();
        },
        "prefill": prefillData,
        "notes": {
            "address": "address" //customer address
        },
        "theme": {
            "color": "#100F3E" // screen color
        }
    };
    console.log(options);
    var propay = new Razorpay(options);
    propay.open();
};

const setSuperStatus=()=>{
    localStorage.setItem("hearts",1000);
    localStorage.setItem("xpCount",100);
    window.location.href="learn.html"
}