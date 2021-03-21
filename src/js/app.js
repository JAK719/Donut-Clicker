const donutCount = document.querySelector(".donut-count");
const makeDonuts = document.querySelector(".donut-button");

var donutMaker = new DonutShop();

makeDonuts.addEventListener('click', function(){
    donutMaker.click();
    updateDom();
});

function updateDom(){
    donutCount.innerText = donutMaker.getDonutCount();
};