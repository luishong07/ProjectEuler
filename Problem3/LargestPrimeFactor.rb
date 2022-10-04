target = 600851475143
# target = 13195
result = -1

while(target % 2 ==0)
    target = target /2
    result = 2
end

while(target % 3 ==0)
    target = target /3
    result = 3
end


i = 5 
begin 
    # puts "hmm"
    while(target % i ==0)
        result = i
        target = target / i
    end

    while(target % (i+2)==0)
        result = i + 2
        target = target / (i +2)
    end
    i = i +6
end until i >= Math.sqrt(target)
if(target > 4 )
    puts target
else
    puts result
end
# puts i
