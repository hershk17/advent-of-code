import re

file=open("inputs/day5.txt","rt")
lines=file.readlines()

points=[]

for line in lines:
    data=[]
    u=(re.compile(' -> |,')).split(line)
    for i in u:
        data.append(int(i))
    points.append(data)

pattern = []
factor = 1000
for i in range(factor):
    p = []
    for j in range(factor):
        p.append(0)
    pattern.append(p)

def part1():
    for point in points:
        if point[1] == point[3]:
            if point[0] <= point[2]:
                for j in range(point[0],point[2]+1):
                    pattern[point[1]][j]+=1
            else:
                for j in range(point[0],point[2]-1,-1):
                    pattern[point[1]][j]+=1
        elif point[0] == point[2]:
            if point[1] <= point[3]:
                for j in range(point[1],point[3]+1):
                    pattern[j][point[0]]+=1
            else:
                for j in range(point[1],point[3]-1,-1):
                    pattern[j][point[0]]+=1
    
    cnt = 0
    for i in pattern:
        for j in i:
            if j >= 2:
                cnt+=1
    print(cnt)


def part2():
    for point in points:
        if point[1] == point[3]:
            if point[0] <= point[2]:
                for j in range(point[0],point[2]+1):
                    pattern[point[1]][j]+=1
            else:
                for j in range(point[0],point[2]-1,-1):
                    pattern[point[1]][j]+=1
        elif point[0] == point[2]:
            if point[1] <= point[3]:
                for j in range(point[1],point[3]+1):
                    pattern[j][point[0]]+=1
            else:
                for j in range(point[1],point[3]-1,-1):
                    pattern[j][point[0]]+=1
        else:
            if point[0] <= point[2] and point[1] <= point[3]:
                for i,j in zip(range(point[0],point[2]+1), range(point[1],point[3]+1)):
                    pattern[j][i]+=1
            elif point[0] <= point[2] and point[1] >= point[3]:
                for i,j in zip(range(point[0],point[2]+1), range(point[1],point[3]-1,-1)):
                    pattern[j][i]+=1
            elif point[0] >= point[2] and point[1] <= point[3]:
                for i,j in zip(range(point[0],point[2]-1,-1), range(point[1],point[3]+1)):
                    pattern[j][i]+=1
            else:
                for i,j in zip(range(point[0],point[2]-1,-1), range(point[1],point[3]-1,-1)):
                    pattern[j][i]+=1
    
    cnt = 0
    for i in pattern:
        for j in i:
            if j >= 2:
                cnt+=1
    print(cnt)

# part1()
part2()