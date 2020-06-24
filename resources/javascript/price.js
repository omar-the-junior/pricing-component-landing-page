let toggleBtn = document.querySelector(".pricing-switch__toggle");
let checkbox = document.getElementById("switch");
let annualPrice = document.querySelectorAll(".price-annual");
let monthPrice = document.querySelectorAll(".price-month");

toggleBtn.addEventListener("click", function () {


    if (checkbox.checked == true) {

        for (i = 0; annualPrice.length > i; i++) {
            annualPrice[i].style.display = "none";
            monthPrice[i].style.display = "block";
        }
        
    } else {

        for (i = 0; annualPrice.length > i; i++) {
            monthPrice[i].style.display = "none";
            annualPrice[i].style.display = "block";
        }
    }
})
