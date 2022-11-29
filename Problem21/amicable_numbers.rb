def amicableNumber(n)
    list = []
    number_of_divisors = 0

    for i in 1..Math.sqrt(n)
        if(n % i == 0)
            if((n/i).to_i == i)
                list.append(i)
            else
                list.append(i)
                list.append(n/i)                
            end
        end
    end
    number_of_divisors = list.length
    # index_of_self = list.index(n)
    # puts list
    list.delete(n)
    amicable_num = list.sum {|obj| obj}
    return amicable_num
end

# puts amicableNumber(220)
amicable_total = 0
for i in 1..10000
    b = amicableNumber(i)
    a = amicableNumber(b)
    # puts i
    if(amicableNumber(b) == i && amicableNumber(i) == b && a != b)
        amicable_total += i
    end
end
puts amicable_total