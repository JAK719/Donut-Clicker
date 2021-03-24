const donutCount = document.querySelector(".donut-count");
const makeDonuts = document.getElementById("clickBtn");
const buyMultiplier = document.getElementById("multiBtn");
const multiCount = document.querySelector(".multi-count");
const multiCost = document.querySelector(".multi-cost");
const buyAutoClick = document.getElementById("autoBtn");
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
    
   
    updateDom();
});

var interval = setInterval(autoClick, 1000)
function autoClick(){
    donutMaker.activateAutoClick();
    updateDom();
};


function updateDom(){
    donutCount.innerText = Math.round(donutMaker.getDonutCount());
    multiCount.innerText = donutMaker.getMultiClickCount();
    multiCost.innerText = donutMaker.getMultiClickCost();
    autoCount.innerText = donutMaker.getAutoClickCount();
    autoCost.innerText = donutMaker.getAutoClickCost();
    donutValue.innerText = donutMaker.getDonutValue();
};

function UpdateButtons(){
    autoButton.disabled = !(donutMaker.getTotalDonuts() >= donutMaker.getAutoClickerCost());
    multButton.disabled = !(donutMaker.getTotalDonuts() >= donutMaker.getMultiplierCost());
}

document.getbuttonbyid("multiplier button").innertext = "Buy For: " + donutmaker.getMultClickCost();
