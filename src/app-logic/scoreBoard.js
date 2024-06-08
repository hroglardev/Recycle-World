class ScoreBoard {
  constructor() {
    this.score = 0;
    this.mistakes = 0;
  }

  checkMistakes() {
    return this.mistakes >= 0;
  }

  checkScore() {
    return this.score >= 10;
  }

  incrementScore() {
    this.score += 1;
    return this.score;
  }

  incrementMistakes() {
    this.mistakes += 1;
    return this.mistakes;
  }

  resetScoreBoard() {
    this.score = 0;
    this.mistakes = 0;
  }
}
