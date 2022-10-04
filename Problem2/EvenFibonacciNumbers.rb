total = 0
n1  = 0 
n2 = 1
limit = 4000000
temp = 0
while(n2 <= limit)
    temp = n1
    n1 = n1 + n2
    n2 = temp
    if(n2 % 2 == 0)
        total += n2
    end
end
puts total