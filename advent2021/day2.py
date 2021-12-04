def part1():
    file=open("inputs/day2.txt","rt")
    data=file.readlines()
    h=0
    d=0
    for i in range(len(data)):
        fields=data[i].split()
        if fields[0] == 'forward':
            h+=int(fields[1])
        elif fields[0] == 'up':
            d-=int(fields[1])
        elif fields[0] == 'down':
            d+=int(fields[1])
    print(h*d)

def part2():
    file=open("inputs/day2.txt","rt")
    data=file.readlines()
    h=0
    d=0
    a=0
    for i in range(len(data)):
        fields=data[i].split()
        if fields[0] == 'forward':
            h+=int(fields[1])
            d+=a*int(fields[1])
        elif fields[0] == 'up':
            a-=int(fields[1])
        elif fields[0] == 'down':
            a+=int(fields[1])
    print(h*d)

part1()
part2()