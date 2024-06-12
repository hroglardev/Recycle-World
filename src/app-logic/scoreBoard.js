export class ScoreBoard {
  constructor() {
    this.score = 0;
    this.mistakes = 0;
  }

  checkMistakes() {
    return this.mistakes >= 3;
  }

  checkScore() {
    return this.score >= 1;
  }

  incrementScore() {
    this.score += 1;
    return this.score;
  }

  incrementMistakes() {
    this.mistakes += 1;
    return this.mistakes;
  }

  getScore() {
    return this.score;
  }

  getMistakes() {
    return this.mistakes;
  }

  resetScoreBoard() {
    this.score = 0;
    this.mistakes = 0;
  }
}
