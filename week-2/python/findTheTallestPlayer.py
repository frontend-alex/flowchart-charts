# def findTallestPlayer():
#     heights = []
#     names = []

#     for i in range(3):
#         name = str(input(f'Enter the name of player {i + 1}: '))
#         height = float(input(f'Enter the heigh of { name } in meters: '))
#         names.append(name)
#         heights.append(height)

#     tallestPlayer = heights.index(max(heights))

#     tallestPlayerName = names[tallestPlayer]
#     tallestPlayerHeight = heights[tallestPlayer]

#     print(f"The tallest player's name is { tallestPlayerName } and his/hers height is { tallestPlayerHeight }")



# if __name__ == "__main__":
#     findTallestPlayer()

def findTallestPlayer():
    players = []

    for i in range(3):
        name = input(f'Enter the name of player {i + 1}: ')
        
        while True:
            try:
                height = float(input(f'Enter the height of {name} in meters: '))
                if height <= 0: 
                    print("Height must be a positive number. Please try again.")
                    continue
                break
            except ValueError:
                print("Invalid input! Please enter a valid number for height.")
        
        players.append((name, height))

    tallestPlayer = max(players, key=lambda player: player[1])

    tallestPlayerName, tallestPlayerHeight = tallestPlayer

    print(f"The tallest player's name is {tallestPlayerName} and their height is {tallestPlayerHeight} meters.")



if __name__ == "__main__":
    findTallestPlayer()
