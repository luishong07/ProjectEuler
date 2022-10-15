def is_prime(n)
    if(n <= 1)
        # puts false
        return false
    end

    if(n ==2 || n == 3)
        # puts true
        return true
    end

    if(n %2 == 0 || n % 3 == 0)
        # puts false
        return false
    end

    # i = 5
    # begin
    #     if(n % i == 0 || n % (i + 2) == 0)
    #         puts false
    #         return false
    #     end
    #     i = i + 6
    # end until i >= Math.sqrt(n)
    # puts true
    # return true

    i = 5
    while(i <= Math.sqrt(n))
        if(n % i == 0 || n % (i + 2) == 0)
            # puts false
            return false
        end
        i = i + 6
    end
    # puts true
    return true
end

# is_prime(7)
prime_sum = 0
for n in 1..2000000 do
    # puts n
    if(is_prime(n))
        # puts n
        prime_sum+=n
    end
end

puts prime_sum