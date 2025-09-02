from flask import Flask, jsonify
import os

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"service": "backend", "status": "running"})

@app.route('/health')
def health_check():
    return jsonify({"status": "healthy", "service": "backend"})

@app.route('/users')
def get_users():
    return jsonify({
        "users": [
            {"id": 1, "name": "Alice", "email": "alice@example.com"},
            {"id": 2, "name": "Bob", "email": "bob@example.com"},
            {"id": 3, "name": "Charlie", "email": "charlie@example.com"}
        ]
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)