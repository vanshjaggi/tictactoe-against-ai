from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# Function to check if a player has won
def check_win(board, player):
    win_combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for combo in win_combinations:
        if all(board[i] == player for i in combo):
            return True
    return False

# Minimax algorithm to choose the best AI move
def minimax(board, player):
    available_spots = [i for i in range(9) if board[i] == ""]

    if check_win(board, "X"):
        return {"score": -10}
    elif check_win(board, "O"):
        return {"score": 10}
    elif not available_spots:
        return {"score": 0}

    moves = []
    for spot in available_spots:
        move = {"index": spot}
        board[spot] = player

        if player == "O":
            move["score"] = minimax(board, "X")["score"]
        else:
            move["score"] = minimax(board, "O")["score"]

        board[spot] = ""  # Reset the spot after trying it
        moves.append(move)

    if player == "O":
        best_move = max(moves, key=lambda x: x["score"])
    else:
        best_move = min(moves, key=lambda x: x["score"])

    return best_move

# API endpoint to get AI move
@app.route('/ai-move', methods=['POST'])
def ai_move():
    data = request.json
    board = data['board']
    ai_player = "O"
    move = minimax(board, ai_player)
    return jsonify(move)

if __name__ == '__main__':
    app.run(debug=True)
