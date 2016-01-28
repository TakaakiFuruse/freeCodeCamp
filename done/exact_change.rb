require 'pry'
require 'bigdecimal'

def drawer(price, cash, cid)
  @price = price
  @cash = cash
  @change = @cash - @price
  @cid_hash = cid.reverse.to_h
  @res_ar = []

  if cid_total < @change
    "Insufficient Funds"
  elsif cid_total == @change
    "Closed"
  else
    pay_change
  end

end

def pay_change

  @cid_hash.each do |k, v|
    if can_pay_change?(k) && pay_more_change?(k)
      counter = 0
      while @change > 0 && @cid_hash["#{k}"] > counter && coin_left?(k)
        @change -= currency_hash[:"#{k}"].round(3)
        @change = @change.round(3)
        counter += currency_hash[:"#{k}"]
        counter = counter.round(3)
      end
      @res_ar << [k, counter]
    end
  end
  @res_ar
end


def cid_total
  counter = 0
  @cid_hash.each do |k, v|
    counter += v
  end
  counter
end

def coin_left?(key)
  @change - currency_hash[:"#{key}"] >= 0
end


def can_pay_change?(key)
  @change / currency_hash[:"#{key}"] > 0
end

def pay_more_change?(key)
  @change - currency_hash[:"#{key}"] >= 0
end

def currency_hash
  {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.0,
    "FIVE": 5.0,
    "TEN": 10.0,
    "TWENTY": 20.0,
    "ONE HUNDRED": 100.0
  }
end
