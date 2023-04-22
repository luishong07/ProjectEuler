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

long_chain = 0
def longest_chain(a,b)
    is_it_prime = true
    n = 0

    while(is_it_prime)
        number = n**2 + a*n + b
        if(!is_prime(number))
            is_it_prime = false
            return n
        end
        n+=1
    end
end

big_a = 999
big_b = 1000

count = 0 
longest = 0
a1 = 0
b1 = 0
prime_chain = 0
longest = 0
for i in -1*big_a..big_a
    for j in -1*big_b..big_b
        prime_chain = longest_chain(i,j)
        if(prime_chain >=  longest)
            longest = prime_chain
            a1 = i
            b1 = j
            
        end
        count+=1
    end
end

puts longest
puts a1
puts b1

# for i in -5..5
#     for j in -5..5
#         if(i < 0 && j > 0)
#             puts 'rs'
#         end
#     end
# end