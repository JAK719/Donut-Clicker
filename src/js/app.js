const donutCount = document.querySelector(".donut-count");
const makeDonuts = document.querySelector(".donut-button");
const buyMultiplier = document.querySelector(".multi-button");
const multiCount = document.querySelector(".multi-count");
const multiCost = document.querySelector(".multi-cost");
const buyAutoClick = document.querySelector(".auto-button");
const autoCount = document.querySelector(".auto-count");
const autoCost = document.querySelector(".auto-cost");
const donutValue = document.querySelector(".donut-value");


var donutMaker = new DonutShop();

makeDonuts.addEventListener('click', function(){
    donutMaker.click();
    updateDom();
});

buyMultiplier.addEventListener('click', function(){
    donutMaker.addClickMultiplier();
    updateDom();
});

buyAutoClick.addEventListener('click', function(){
    donutMaker.addAutoClick();
    setInterval(()=> {
        document.querySelector(".donut-button").click()
    }, 1000);
    // donutMaker.setInterval();
    donutMaker.activateAutoClick();
    updateDom();
});




// function multiBtn(){
//     document.getElementById("multi-btn").value = "multiCost";
// }



function updateDom(){
    donutCount.innerText = Math.round(donutMaker.getDonutCount());
    multiCount.innerText = donutMaker.getMultiClickCount();
    multiCost.innerText = donutMaker.getMultiClickCost();
    autoCount.innerText = donutMaker.getAutoClickCount();
    autoCost.innerText = donutMaker.getAutoClickCost();
    donutValue.innerText = donutMaker.getDonutValue();
};