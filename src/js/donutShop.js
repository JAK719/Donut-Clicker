class DonutShop {
    constructor() {
        this._donutCount = 0;
        this._donutValue = 1;
        this._multiCount = 0;
        this._multiCost = 10
        this._autoClickCount = 0;
        this._autoClickCost = 100;
        this._donutsPerSecond = 0;
    }

    click() {
        this._donutCount += this._donutValue;
    }

    getDonutCount() {
        return this._donutCount;
    }

    addAutoClick() {
        if (this._donutCount >= this._autoClickCost){
            this._donutCount -= this._autoClickCost;
            this._autoClickCount++;
            this._autoClickCost *= 1.1;
        }
        else {
            alert("Make more donuts!");
        }
    }

    activateAutoClick() {
       this._donutCount += this._donutValue * this._autoClickCount;
    };

    getAutoClickCount() {
        return (this._autoClickCount);
    }

    getAutoClickCost() {
        return Math.round((this._autoClickCost + Number.EPSILON) * 100) / 100;
    }

    addClickMultiplier() {
        if (this._donutCount >= this._multiCost) {
            this._donutCount -= this._multiCost;
            this._multiCount++;
            this._multiCost *= 1.2;
            this._donutValue *= 1.1;
        }
        else {
            alert("Make more donuts!");
        }
    }

    getMultiClickCount() {
        return (this._multiCount);
    }

    getMultiClickCost() {
        return Math.round((this._multiCost + Number.EPSILON) * 100) / 100;
    }

    getDonutValue() {
        return Math.round((this._donutValue + Number.EPSILON) * 100) / 100;
    }

    resetStats() {
        this._donutCount = 0;
        this._donutValue = 1;
        this._multiCount = 0;
        this._multiCost = 10
        this._autoClickCount = 0;
        this._autoClickCost = 100;
    }

    getDonutsPerSecond() {
        this._donutsPerSecond = this._donutValue *= this._autoClickCost;
        return this._donutsPerSecond;
    }



    

}