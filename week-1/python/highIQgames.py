def play_game():
    while True:
        try:
            player_input = int(input("Type any number lower than 10: "))

            if player_input < 10:
                if player_input == 9:
                    print("You typed 9, which is valid.")
                print(f"{player_input + 1} I win!")
            else:
                print("The number must be lower than 10.")

            play_again = input("Do you want to play another game? (J/N): ").strip().upper()
            if play_again != 'J':
                break
        except ValueError:
            print("Please enter a valid integer.")

if __name__ == "__main__":
    play_game()
