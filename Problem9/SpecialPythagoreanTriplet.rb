count = 0

for a in 1..999 do
    for b in 1..999 do
        for c in 1..999 do
            if(a < b && b < c && a < c )
                big_a = a**2
                big_b = b**2
                big_c = c**2
                if(big_a + big_b == big_c)
                    if(a + b +c == 1000)
                        product = a*b*c
                        puts product
                    end
                end
            end
        end        
    end
end
