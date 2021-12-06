file=open("inputs/day6.txt","rt")
lines=file.readlines()

lf = list(map(int,lines[0].split(',')))


def simulate_day():
    l = len(lf)
    for i in range(l):
        lf[i]-=1
        if lf[i] < 0:
            lf[i] = 6
            lf.append(8)

def part1():
    for i in range(80):
        simulate_day()
    print(len(lf))
    
def part2():
    pass

part1()
part2()