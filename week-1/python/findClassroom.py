# ! if the classroom input starts with a lowercase character it wont display the room number

def find_room(subject):
    rooms = {
        'Computing': '401',
        'Biology': '211',
        'Electronics': '75'
    }
    return rooms.get(subject, None)

def main():
    name = input("Enter your name: ").strip()
    subject = input("Enter the subject you are studying: ").strip()
    
    room = find_room(subject)
    
    if room:
        print(f"Hi {name}, go to room {room} for {subject}.")
    else:
        print("I don't know which room that class is in.")

if __name__ == "__main__":
    main()
