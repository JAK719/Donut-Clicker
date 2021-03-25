const donutCount = document.getElementById("donut-count");
const makeDonuts = document.getElementById("clickBtn");
const buyMultiplier = document.getElementById("multiBtn");
const multiCount = document.getElementById("multi-count");
const multiCost = document.getElementById("multi-cost");
const buyAutoClick = document.getElementById("autoBtn");
const autoCount = document.getElementById("auto-count");
const autoCost = document.getElementById("auto-cost");
const donutValue = document.getElementById("donut-value");
const resetGame = document.getElementById("resetBtn");
const donutsPerSecond = document.getElementById("dPs");


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

resetGame.addEventListener('click', function(){
    donutMaker.resetStats();
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
    UpdateButtons();
};

function UpdateButtons(){
    autoBtn.disabled = !(donutMaker.getDonutCount() >= donutMaker.getAutoClickCost());
    multiBtn.disabled = !(donutMaker.getDonutCount() >= donutMaker.getMultiClickCost());

}

function DisplayDonutsPerSecond(){
    donutsPerSecond = donutValue *= autoCount;
    updateDom();
}

var modal = document.getElementById("myModal");

var btn = document.getElementById("modalBtn")

var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

// document.getElementById("multiBtn").innertext = "Buy For: " + donutmaker.getMultClickCost();


// document.querySelector(".donut-count").innerHTML = "Donuts: " + donutMaker.getDonutCount();