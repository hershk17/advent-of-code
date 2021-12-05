file=open("inputs/day4.txt","r")
data=file.readlines()

calls = list(map(int, data[0].split(',')))
drawn = []

boards = []
board = []
for i in range(2,len(data)):
    if data[i] == '\n':
        boards.append(board)
        board = []
    else:
        nums = list(map(int, data[i].split()))
        for num in nums:
            board.append(num)
boards.append(board)

def checkBingos():
    r = None
    for board in boards:
        for i in range(5):
            if board[5*i] in drawn and board[5*i+1] in drawn and board[5*i+2] in drawn and board[5*i+3] in drawn and board[5*i+4] in drawn:
                r = board
                break
            if board[5*0+i] in drawn and board[5*1+i] in drawn and board[5*2+i] in drawn and board[5*3+i] in drawn and board[5*4+i] in drawn:
                r = board
                break;
        if r != None:
            break
    return r

def part1():
    for i in range(len(calls)):
        drawn.append(calls[i])
        r = checkBingos()
        if r != None:
            print(sum(list(set(r) - set(drawn)))*drawn[len(drawn)-1])
            break


bingos = []
def checkBingos2():
    for board in boards:
        if board not in bingos:
            for i in range(5):
                if board[5*i] in drawn and board[5*i+1] in drawn and board[5*i+2] in drawn and board[5*i+3] in drawn and board[5*i+4] in drawn:
                    bingos.append(board)
                    break
                if board[5*0+i] in drawn and board[5*1+i] in drawn and board[5*2+i] in drawn and board[5*3+i] in drawn and board[5*4+i] in drawn:
                    bingos.append(board)
                    break;

def part2():
    for i in range(len(calls)):
        drawn.append(calls[i])
        checkBingos2()
        l1 = len(bingos)
        l2 = len(boards)
        if l1 == l2:
            print(sum(list(set(bingos[l1-1]) - set(drawn)))*drawn[len(drawn)-1])
            break

# part1()
part2()