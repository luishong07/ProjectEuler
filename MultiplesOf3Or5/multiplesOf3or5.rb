total = 0

1000.times do |number|
    if(number % 3 == 0 || number % 5 == 0)
        total += number
    end
end

puts total