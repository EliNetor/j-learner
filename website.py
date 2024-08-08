from flask import Flask, render_template
import sqlite3

app = Flask(__name__)
conn = sqlite3.connect('words.db')
cursor = conn.cursor()

def add_word(japanese_word, translation):
    cursor.execute('''
    INSERT INTO words (japanese_word, translation)
    VALUES (?, ?)
    ''', (japanese_word, translation))

cursor.execute('''
CREATE TABLE IF NOT EXISTS words (
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               japanese_word TEXT,
               translation TEXT
)
''')

add_word("こんにちは", "hallo")

cursor.execute('SELECT japanese_word, translation FROM words')
all_words = cursor.fetchall()

conn.commit()
conn.close()

@app.route("/")
def home():
    return render_template("index.html", words=all_words)