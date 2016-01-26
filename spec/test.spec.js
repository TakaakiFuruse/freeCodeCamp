function Calculator(price, cash, cid) {
    this.price = price;
    this.cash = cash;
    this.cid = cid;
    this.currencyName = this.currencyName();
    this.change = this.getChange();
    this.cidTotal = this.cidTotal();
    this.heresChange = this.heresChange();
}

Calculator.prototype.getChange = function() {
    return (this.cash * 100 - this.price * 100) / 100
}

Calculator.prototype.currencyName = function() {
    return {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.10,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };
};

Calculator.prototype.cidTotal = function(arguments) {
    var counter = 0
    var self = this;
    for (var i = self.cid.length - 1; i >= 0; i--) {
        counter += self.cid[i][1]
    };
    return Math.floor(counter * 100) / 100
}

Calculator.prototype.heresChange = function() {
    var changeAr = []
    var self = this;
    var change = this.change;
    for (var i = self.cid.length - 1; i >= 0; i--) {
        var curName = self.cid[i][0]
        var curTotal = self.cid[i][1]
        var curAmount = self.currencyName[curName]
        if (self.change / curAmount >= 1) {
            var counter = 0
            while (self.change >= curAmount && counter < curTotal) {
                counter += curAmount
                self.change = (Math.floor(self.change * 100 - curAmount * 100)) / 100
            };
            if (counter > 0) {
                changeAr.push([curName, counter])
            };
        };
    };
    if (this.cidTotal < change || this.change > 0) {
        return "Insufficient Funds"
    } else if (this.cidTotal === change) {
        return "Closed"
    } else {
        return changeAr;
    }
};


function drawer(price, cash, cid) {
    var calc = new Calculator(price, cash, cid);
    return calc.heresChange;
}

describe('1 -', function() {
    it("1", function() {
        expect(drawer(19.50, 20.00, [
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
            ["QUARTER", 0.5]
        ])
    });

    it("2", function() {
        expect(drawer(3.28, 100.00, [
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
            ["PENNY", 0.02]
        ])
    });
    it("3", function() {
        expect(drawer(19.50, 20.00, [
            ["PENNY", 0.01],
            ["NICKEL", 0],
            ["DIME", 0],
            ["QUARTER", 0],
            ["ONE", 0],
            ["FIVE", 0],
            ["TEN", 0],
            ["TWENTY", 0],
            ["ONE HUNDRED", 0]
        ])).toEqual("Insufficient Funds")

    });
    it("4", function() {
        expect(drawer(19.50, 20.00, [
            ["PENNY", 0.01],
            ["NICKEL", 0],
            ["DIME", 0],
            ["QUARTER", 0],
            ["ONE", 1.00],
            ["FIVE", 0],
            ["TEN", 0],
            ["TWENTY", 0],
            ["ONE HUNDRED", 0]
        ])).toEqual("Insufficient Funds")

    });
    it("5", function() {
        expect(drawer(19.50, 20.00, [
            ["PENNY", 0.50],
            ["NICKEL", 0],
            ["DIME", 0],
            ["QUARTER", 0],
            ["ONE", 0],
            ["FIVE", 0],
            ["TEN", 0],
            ["TWENTY", 0],
            ["ONE HUNDRED", 0]
        ])).toEqual("Closed")
    });
})
