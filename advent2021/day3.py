def part1():
    file=open("inputs/day3.txt","rt")
    data=file.readlines()
    n=12
    l=len(data)
    bitCnts=[0]*n
    cnt=0
    for i in range(l):
        for j in range(len(data[i])-1):
            bitCnts[j]+=int(data[i][j])
        cnt+=1
    g=''
    e=''
    for i in range(n):
        r=bitCnts[i]>cnt/2
        g+=str(int(r))
        e+=str(int(not r))
    print(int(g,2)*int(e,2))

def filter_data_by_index(data,idx,mostCommon=True):
    l=len(data)
    if l==1:
        return data[0]
    cnt=0
    for i in range(l):
        cnt+=int(data[i][idx])
    filtered=[]
    if mostCommon:
        for i in range(l):
            if int(data[i][idx])==int(cnt>=l/2):
                filtered.append(data[i])
    else:
        for i in range(l):
            if int(data[i][idx])!=int(cnt>=l/2):
                filtered.append(data[i])
    return filter_data_by_index(filtered,idx+1,mostCommon)

def part2():
    file=open("inputs/day3.txt","rt")
    data=file.readlines()
    print(int(filter_data_by_index(data,0),2)*int(filter_data_by_index(data,0,False),2))

part1()
part2()