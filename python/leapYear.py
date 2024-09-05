def is_leap_year(year):
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)  


year = int(input('Check if year is leap: '))

if is_leap_year(year):
    print(f"{year} is leap year")
else:
    print(f"{year} is NOT leap year")