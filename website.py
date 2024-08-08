from flask import Flask, render_template, request, redirect, url_for
import sqlite3

app = Flask(__name__)

# Function to get a database connection
def get_db_connection():
    conn = sqlite3.connect('words.db')
    conn.row_factory = sqlite3.Row
    return conn

# Route to display the form
@app.route("/update", methods=['GET', 'POST'])
def add_word():
    if request.method == 'POST':
        japanese_word = request.form['japanese_word']
        translation = request.form['translation']

        # Insert into database
        conn = get_db_connection()
        conn.execute('''
        INSERT INTO words (japanese_word, translation)
        VALUES (?, ?)
        ''', (japanese_word, translation))
        conn.commit()
        conn.close()

        return redirect(url_for('add_word'))
    
    conn = get_db_connection()
    words = conn.execute('SELECT japanese_word, translation, id FROM words').fetchall()
    conn.commit()
    conn.close()
    return render_template('addword.html', words=words)

@app.route("/delete/<int:id>", methods=['POST'])
def delete_word(id):
    conn = get_db_connection()
    conn.execute('DELETE FROM words WHERE id = ?', (id,))
    conn.commit()
    conn.close()
    return redirect(url_for('add_word'))
# Route to display words
@app.route("/")
def home():
    conn = get_db_connection()
    words = conn.execute('SELECT japanese_word, translation FROM words').fetchall()
    conn.close()
    return render_template("index.html", words=words)