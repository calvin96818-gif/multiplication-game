class CoinSystem {
  constructor() {
    this.coins = 0;
    this.coinHistory = [];
  }

  addBasicCoins(correctAnswers) {
    const basicCoins = correctAnswers * 10;
    this.coins += basicCoins;
    this.recordTransaction('基礎獎勵', basicCoins);
    return basicCoins;
  }

  addSpeedBonus(avgTimePerQuestion) {
    if (avgTimePerQuestion < 5) {
      const speedBonus = 20;
      this.coins += speedBonus;
      this.recordTransaction('速度獎勵', speedBonus);
      return speedBonus;
    }
    return 0;
  }

  addPerfectBonus(correctAnswers, totalQuestions) {
    if (correctAnswers === totalQuestions && totalQuestions > 0) {
      const perfectBonus = 50;
      this.coins += perfectBonus;
      this.recordTransaction('完美獎勵', perfectBonus);
      return perfectBonus;
    }
    return 0;
  }

  addStreakBonus(streakCount) {
    if (streakCount >= 10) {
      const streakBonus = 30;
      this.coins += streakBonus;
      this.recordTransaction('連勝獎勵', streakBonus);
      return streakBonus;
    }
    return 0;
  }

  addDailyLoginBonus(consecutiveDays) {
    let dailyBonus = 10;
    if (consecutiveDays >= 3) dailyBonus = 30;
    if (consecutiveDays >= 5) dailyBonus = 50;
    if (consecutiveDays >= 7) dailyBonus = 100;
    this.coins += dailyBonus;
    this.recordTransaction('每日登入獎勵', dailyBonus);
    return dailyBonus;
  }

  spendCoins(amount, itemName) {
    if (this.coins >= amount) {
      this.coins -= amount;
      this.recordTransaction(`購買 ${itemName}`, -amount);
      return true;
    }
    return false;
  }

  recordTransaction(type, amount) {
    this.coinHistory.push({ type, amount, timestamp: new Date(), balance: this.coins });
  }

  getBalance() {
    return this.coins;
  }

  getHistory() {
    return this.coinHistory;
  }

  reset() {
    this.coins = 0;
    this.coinHistory = [];
  }
}

export default CoinSystem;