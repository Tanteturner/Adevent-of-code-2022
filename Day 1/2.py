def readInput():
    lines = []
    with open(r"D:\Files\Workpaces\Adevent of code 2022\Day 1\input.txt", "r") as file1:
        lines = file1.readlines()
        file1.close()
    return lines


lines = readInput()

elves = []
currentElf = 0

for i in range(len(lines)):
    line = lines[i]
    if line == "\n":
        currentElf += 1
    else:
        if len(elves) <= currentElf:
            elves.append(0)
        elves[currentElf] += int(line)

elves.sort(reverse=True)

print(elves[0] + elves[1] + elves[2])