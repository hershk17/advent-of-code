data=list(map(int,open("inputs/day6.txt","r").readlines()[0].split(',')))

def simulate_days(days):
    fishies=[0]*9
    for i in data:
        fishies[i]+=1
    for i in range(days):
        fishies.append(fishies.pop(0))
        fishies[6]+=fishies[8]
    print(sum(fishies))

simulate_days(80)
simulate_days(256)