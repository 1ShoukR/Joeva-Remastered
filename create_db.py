import mysql.connector


mydb = mysql.connector.connect(host='localhost', user='root', passwd = 'Rahmin12')

my_cursor = mydb.cursor()

my_cursor.execute('CREATE DATABASE Joeva_Remastered')

my_cursor.execute('SHOW DATABASES')


for db in my_cursor:
    print(db)