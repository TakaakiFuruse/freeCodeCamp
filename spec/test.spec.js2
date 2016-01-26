var _ = require("underscore");

function Calculator(price, cash, cid) {
    this.price = price;
    this.cash = cash;
    this.cid = cid;
    this.coinsAr = this.coinsAr();
    this.currencyName = this.currencyName();

    this.change = this.getChange();

    this.cidWithCount = this.addCidCoinCount();
    this.heresChange = this.heresChange();
}

Calculator.prototype.getChange = function() {
    return this.cash - this.price
}

Calculator.prototype.currencyName = function() {
    return {
        0.01: "PENNY",
        0.05: "NICKEL",
        0.10: "DIME",
        0.25: "QUARTER",
        1: "ONE",
        5: "FIVE",
        10: "TEN",
        20: "TWENTY",
        100: "ONE HUNDRED"
    };
};

Calculator.prototype.coinsAr = function() {
    return [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01]
};


Calculator.prototype.heresChange = function() {
    var changeAr = []
    var self = this;
    for (var i = 0; i < self.coinsAr.length; i++) {
        if (self.change / self.coinsAr[i] >= 1) {
            var coinCounter = 0
            while (self.change >= self.coinsAr[i]) {
                self.change = (Math.floor(self.change * 100) / 100) - self.coinsAr[i]
                coinCounter += 1
            };
            changeAr.push(
                [
                    self.currencyName[self.coinsAr[i]],
                    coinCounter * self.coinsAr[i]
                ]
            )
        };
    };
    return changeAr;


};

Calculator.prototype.addCidCoinCount = function() {
    var self = this;
    var curName = self.currencyName;
    console.log(self.currencyName[100])
    for (var i = 0; i < self.cid.length; i++) {
        var totalCid = self.cid[i][1]
        var curAmount = (_.invert(curName))[self.cid[i][0]]
        var curCount = Math.floor(totalCid / curAmount)
        self.cid[i].push(curCount)
    };
}


function drawer(price, cash, cid) {
    var calc = new Calculator(price, cash, cid);
    console.log(calc)
    return '';
}

describe('1 -', function() {
    // it("1", function() {
    //     expect(drawer(19.50, 20.00, [
    //         ["PENNY", 1.01],
    //         ["NICKEL", 2.05],
    //         ["DIME", 3.10],
    //         ["QUARTER", 4.25],
    //         ["ONE", 90.00],
    //         ["FIVE", 55.00],
    //         ["TEN", 20.00],
    //         ["TWENTY", 60.00],
    //         ["ONE HUNDRED", 100.00]
    //     ])).toEqual([
    //         ["QUARTER", 0.50]
    //     ])
    // });

    it("2", function() {
        expect(drawer(3.26, 100.00, [
            ["PENNY", 1.01],
            ["NICKEL", 2.05],
            ["DIME", 3.10],
            ["QUARTER", 4.25],
            ["ONE", 90.00],
            ["FIVE", 55.00],
            ["TEN", 20.00],
            ["TWENTY", 60.00],
            ["ONE HUNDRED", 100.00]
        ])).toEqual([
            ["TWENTY", 60.00],
            ["TEN", 20.00],
            ["FIVE", 15],
            ["ONE", 1],
            ["QUARTER", 0.50],
            ["DIME", 0.20],
            ["PENNY", 0.04]
        ])
    });
    // it("3", function() {
    //     expect(drawer(19.50, 20.00, [
    //         ["PENNY", 0.01],
    //         ["NICKEL", 0],
    //         ["DIME", 0],
    //         ["QUARTER", 0],
    //         ["ONE", 0],
    //         ["FIVE", 0],
    //         ["TEN", 0],
    //         ["TWENTY", 0],
    //         ["ONE HUNDRED", 0]
    //     ])).toEqual("Insufficient Funds")

    // });
    // it("4", function() {
    //     expect(drawer(19.50, 20.00, [
    //         ["PENNY", 0.01],
    //         ["NICKEL", 0],
    //         ["DIME", 0],
    //         ["QUARTER", 0],
    //         ["ONE", 1.00],
    //         ["FIVE", 0],
    //         ["TEN", 0],
    //         ["TWENTY", 0],
    //         ["ONE HUNDRED", 0]
    //     ])).toEqual("Insufficient Funds")

    // });
    // it("5", function() {
    //     expect(drawer(19.50, 20.00, [
    //         ["PENNY", 0.50],
    //         ["NICKEL", 0],
    //         ["DIME", 0],
    //         ["QUARTER", 0],
    //         ["ONE", 0],
    //         ["FIVE", 0],
    //         ["TEN", 0],
    //         ["TWENTY", 0],
    //         ["ONE HUNDRED", 0]
    //     ])).toEqual("Closed")
    // });
})
