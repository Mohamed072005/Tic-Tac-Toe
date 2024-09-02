# Tic-Tac-Toe Game

Welcome to the Tic-Tac-Toe game project! This project is a web-based implementation of the classic Tic-Tac-Toe game, with customizable grid size and win conditions.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Customizable Grid Size**: Choose the number of rectangles (grid cells) for the game board.
- **Customizable Win Condition**: Set the number of consecutive marks (X or O) needed to win.
- **Responsive Design**: The game layout is designed to be responsive and works well on different screen sizes.
- **Player Scores**: Tracks and displays the scores for both players.
- **Restart Option**: Easy restart option to play again without reloading the page.

## Installation

### Prerequisites

- Web browser (Google Chrome, Firefox, Safari, etc.)
- [Node.js](https://nodejs.org/) (optional, for serving the project locally)

### Steps

1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/tic-tac-toe.git
    ```

2. Navigate to the project directory:
    ```bash
    cd tic-tac-toe
    ```

3. Open the `index.html` file in your preferred web browser:
    - You can simply double-click the file, or
    - Use a local server (like `Live Server` in VSCode) for better performance.

## Usage

1. Open the game in your web browser.
2. Set the desired grid size (number of rectangles) and win condition using the provided input fields.
3. Click the "Play!" button to start the game.
4. Players take turns clicking on the grid to place their marks (X or O).
5. The game will automatically check for a win or draw condition.
6. Click "Play again?" to reset the game and play another round.

## Customization

### Grid Size & Win Condition

You can customize the grid size and win condition directly in the UI using the input fields before starting the game.

### Styling

The game uses [Tailwind CSS](https://tailwindcss.com/) for styling. You can customize the styles by editing the `index.html` file and adjusting the Tailwind classes.

### JavaScript Logic

The game logic is implemented in the `index.html` file using JavaScript. You can customize or extend the logic as needed.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request with any improvements or features.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.