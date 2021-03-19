class DonutShop {
    constructor() {
        this._donutCount = 0;
        this._donutValue = 1;
        this._multiCount = 0;
        this._multiCost = 10
        this._autoClickCount = 0;
        this._autoClickCost = 100;
     
    }

    click() {
        this._donutCount += this._donutValue;
    }

    getDonutCount() {
        return this._donutCount;
    }

    addAutoClick() {
        if (this._donutCount >= this._autoClickCost 
            // && this._autoClickCount == 0   // Do I need?
            ){
            this._donutCount -= this._autoClickCost;
            this._autoClickCount++;
            this._autoClickCost *= 1.1;
        }
        else {
            alert("Make more donuts!");
        }
    }

    addClickMultiplier() {
        if (this._donutCount >= this._multiCost) {
            this._donutCount -= this._multiCost;
            this._multiCount++;
            this._multiCost *= 1.2;
        }
        else {
            alert("Make more donuts!");
        }
    }

    

}