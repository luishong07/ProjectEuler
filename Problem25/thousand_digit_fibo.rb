f1 = 1
f2 = 1
temp = 0
is_long_fibo = false
index = 1
while(!is_long_fibo)
    temp = f1
    f1 = f1 + f2
    f2 = temp
    index += 1
    if(f2.to_s.length == 1000)
        is_long_fibo = true
        puts index
        return
    end

end