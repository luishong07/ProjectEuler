def collatz_run(n, chain)
    initial = n

    while(n > 1)


        if(n % 2 ==0)
            n= n / 2
            chain+=1
        else
            n = 3*n +1
            chain+=1

        end

    end
    return [initial, chain]

end

# puts collatz_run(13,0)

longest_chain = 0
longest_starter = 0
current_chain = 0
current_value = 0
current_run = 0

for i in 1..1000000 do
  current_run = collatz_run(i,1)
  current_chain = current_run[1]
  current_value = current_run[0]
  if(current_chain > longest_chain)
    longest_chain = current_chain
    longest_starter = current_value
  end
end

puts longest_starter
puts longest_chain