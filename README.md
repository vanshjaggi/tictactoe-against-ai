# Tic-Tac-Toe Against AI

This repository features a Tic-Tac-Toe game where players compete against an AI powered by the **Minimax Algorithm**. The game’s frontend is built using **HTML, CSS, and JavaScript**, while the AI backend is implemented in Python with **Flask** providing the connection between the two.

---

## Table of Contents
1. [Features](#features)  
2. [Prerequisites](#prerequisites)  
3. [Installation](#installation)  
4. [How to Play](#how-to-play)  
5. [How It Works](#how-it-works)  
6. [Support](#support)  

---

## Features
- Play against an AI that uses the Minimax algorithm for optimal moves.
- Simple, user-friendly interface created with HTML, CSS, and JavaScript.
- Backend integration using Python Flask for handling game logic.
- Lightweight and easy to set up.

---

## Prerequisites
- **Python 3.8 or above**
- **Browser** to run `index.html`
- Python libraries:
  - `flask` (to create the backend API)

---

## Installation

1. **Clone the Repository**
   ```bash
   git clone <repository_url>
   cd tictactoe-ai
   ```

2. **Install Required Python Modules**
   Install Flask using `pip`:
   ```bash
   pip install flask
   ```

3. **Set Up the Backend**
   The AI logic is implemented in the `app.py` file. This file sets up a Flask server to handle AI moves.

---

## How to Play

1. **Run the Python Backend**
   Open a terminal, navigate to the project directory, and run:
   ```bash
   python app.py
   ```
   This starts the Flask server, which listens for requests from the frontend.

2. **Launch the Game**
   - Open the `index.html` file in your browser.
   - You can start playing Tic-Tac-Toe against the AI.

3. **Gameplay**
   - Make your move on the board, and the AI will respond instantly.
   - Try to win or settle for a draw against the Minimax-powered AI!

---

## How It Works
- **Frontend:** The game interface is built with HTML, CSS, and JavaScript. It handles user interactions and communicates with the backend.
- **Backend:** Python Flask provides an API for the AI. The `app.py` file processes the game state and calculates the best move using the Minimax algorithm.
- **Communication:** The frontend sends the current board state to the backend, and the backend returns the AI's move.

---

## Support
If you encounter issues or have questions, feel free to raise an issue in this repository.
