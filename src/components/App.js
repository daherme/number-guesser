import React from "react";
import "../style.css";

class App extends React.Component {
  checkClick() {
    let secretNumber = Math.trunc(Math.random() * 20) + 1;
    let score = 20;
    let highscore = 0;

    const guess = Number(document.querySelector(".guess").value);
    //console.log(guess);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
      document.querySelector(".message").textContent = "🚫 No number!";
      // When player wins
    } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "🎉 Correct Number";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#BF69C2";
      document.querySelector(".number").style.width = "30rem";

      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }

      // when guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent =
          guess > secretNumber ? "📈 Too high!" : "📉 Too low!";

        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent =
          "💥 You lost the game!";
        document.querySelector(".score").textContent = 0;
      }
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>Guess My Number!</h1>
          <p className="between">(Between 1 and 20)</p>
          <button className="btn again">Again!</button>
          <div className="number">?</div>
        </header>
        <main>
          <section className="left">
            <input type="number" className="guess" />
            <button className="btn check" onClick={this.checkClick}>
              Check!
            </button>
          </section>
          <section className="right">
            <p className="message">Start guessing...</p>
            <p className="label-score">
              💯 Score: <span className="score">20</span>
            </p>
            <p className="label-highscore">
              🥇 Highscore: <span className="highscore">0</span>
            </p>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
