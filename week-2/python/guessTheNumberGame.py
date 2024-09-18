import random  

def guess_the_number():     
    best_score = float('inf')     
    play_again = True      

    while play_again:         
        number_to_guess = random.randint(1, 100)          
        attempts = 0          
        print("Welcome to 'Guess the Number'! I'm thinking of a number between 1 and 100.")          
        
        while True:             
            try:                 
                user_guess = int(input("Enter your guess: "))                 
                attempts += 1                  

                if user_guess < 1 or user_guess > 100:                     
                    print("Please enter a valid number between 1 and 100.")                     
                    continue                                  


                if abs(user_guess - number_to_guess) <= 5 and user_guess != number_to_guess:
                    print("You're almost there!") 

                if user_guess < number_to_guess:                     
                    print("Too low!")                 
                elif user_guess > number_to_guess:                     
                    print("Too high!")                 
                else:                     
                    print(f"Congratulations! You've guessed the number {number_to_guess} in {attempts} attempts.")                     
                    break               
                
            except ValueError:                 
                print("Invalid input! Please enter a number.")          

        if attempts < best_score:             
            best_score = attempts             
            print(f"This is your best score! {best_score} attempts.")         
        else:             
            print(f"Your score this time: {attempts} attempts. Best score: {best_score} attempts.")          
        
        play_again_input = input("Do you want to play again? (yes/no): ").strip().lower()         
        play_again = play_again_input == 'yes'      
    
    print("Thank you for playing! Goodbye!")  

guess_the_number()
