total = 1
for n in 0..999 do
    total *= 2    
end

total_array = total.to_s.split('').map(&:to_i)
# puts total_array 
sum = 0
# puts total_array.length()
for i in 0..total_array.length()-1 do
   sum += total_array[i]
end

puts sum