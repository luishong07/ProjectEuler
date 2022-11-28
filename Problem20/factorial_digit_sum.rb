total = 1
for number in 1..100
    total *= number

end

string_number = total.to_s
total_string = 0
for digit in 0..string_number.length 
    total_string += string_number[digit].to_i
end

puts total_string