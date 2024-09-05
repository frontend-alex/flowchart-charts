def check_password():
    predefined_password = 'Banana'
    attempts = 3

    while attempts > 0:
        user_password = input("Enter your password: ").strip()

        if user_password == predefined_password:
            print("Password correct")
            break
        else:
            attempts -= 1
            if attempts > 0:
                print(f"Password incorrect. You have {attempts} attempts left.")
            else:
                print("Your account has been blocked.")

if __name__ == "__main__":
    check_password()
