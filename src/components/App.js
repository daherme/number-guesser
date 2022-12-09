import React from "react";
import "../style.css";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

class App extends React.Component {
  checkClick() {
    const guess = Number(document.querySelector(".guess").value);

    console.log(guess, typeof guess, secretNumber);

    // When there is no input
    if (!guess) {
      document.querySelector(".message").textContent = "🚫 No number!";
      // When player wins
    } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "🎉 Correct Number";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#BF69C2";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".hidden").classList.remove("hidden");

      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }

      // when guess is wrong
    } else if (guess > secretNumber) {
      document.querySelector(".message").textContent = "Too High ⬆";
      //   this.displayMessage("Too High ⬆");
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector(".message").textContent = "Too Low ⬇";
      //   this.displayMessage("Too Low ⬇");
      score--;
      document.querySelector(".score").textContent = score;
    }
  }

  againClick() {
    score = 20;
    // secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector(".message").textContent = "Start guessing...";

    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#61346b";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".confetti").classList.add("hidden");
  }

  render() {
    return (
      <div>
        <div className="confetti hidden">
          <div className="confetti">
            <img
              className="confettiImg"
              src="https://media.giphy.com/media/jTwKMbg19B62MsNVMX/giphy.gif"
              alt="confetti"
            ></img>
          </div>
        </div>
        <header>
          <h1>Guess My Number!</h1>
          <p className="between">(Between 1 and 20)</p>
          <button className="btn again" onClick={this.againClick}>
            Again!
          </button>
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
              💫 Score: <span className="score">20</span>
            </p>
            <p className="label-highscore">
              ⭐️ Highscore: <span className="highscore">0</span>
            </p>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
