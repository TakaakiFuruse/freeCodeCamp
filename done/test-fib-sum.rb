def fib(num)
  ar = [0, 1, 1]
  while ar[-1] <= num
    ar << ar[-1] + ar[-2]
  end
  ar.pop
  ar.delete_if{|elm| elm % 2 == 0}
  ar.inject do |sum, elm|
    sum + elm
  end
end

p fib(1000) == 1785
p fib(4000000) == 4613732
p fib(75024) == 60696
p fib(75025) == 135721
