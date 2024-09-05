def is_leap_year(year):
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

def check_leap_year():
    while True:
        try:
            year = int(input('Check if year is leap: '))

            if is_leap_year(year):
                print(f"{year} is a leap year.")
            else:
                print(f"{year} is NOT a leap year.")

            play_again = input("Do you want to check another year? (J/N): ").strip().upper()
            if play_again != 'J':
                break
        except ValueError:
            print("Please enter a valid integer.")

if __name__ == "__main__":
    check_leap_year()
