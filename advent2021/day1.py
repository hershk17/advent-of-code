def part1():
    file=open("inputs/day1.txt","rt")
    data=file.readlines()
    cnt=0
    for i in range(len(data)):
        if int(data[i]) > int(data[i-1]):        
            cnt+=1
    print(cnt)

def part2():
    file=open("inputs/day1.txt","rt")
    data=file.readlines()
    l=len(data)
    cnt=0
    for i in range(len(data)):
        val1=int(data[i])
        val2=0
        if(i+1<l):
            val1+=int(data[i+1])
            val2+=int(data[i+1])
        if(i+2<l):
            val1+=int(data[i+2])
            val2+=int(data[i+2])
        if(i+3<l):
            val2+=int(data[i+3])
        if (val1<val2):        
            cnt+=1
    print(cnt)

part1()
part2()