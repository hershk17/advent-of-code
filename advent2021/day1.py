file=open("inputs/day1.txt","rt")
data=file.readlines()
cnt=0
for i in range(len(data)):
    if int(data[i]) > int(data[i-1]):        
        cnt+=1
print(cnt)