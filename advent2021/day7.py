from math import inf
import statistics

data=list(map(int,open("inputs/day7.txt","r").readlines()[0].split(',')))

def part1():
    cost=0
    m=statistics.median(data)
    for pos in data:
        cost+=abs(pos-m)
    print(int(cost))
    
def part2():
    min_cost=inf
    m=round(statistics.mean(data))
    for closest in range(m-5,m+5):    
        cost=0 
        for pos in data:
            diff=abs(pos-closest)
            cost+=(diff*(diff+1)/2)
        if cost < min_cost:
            min_cost=cost
    print(int(min_cost))

part1()
part2()