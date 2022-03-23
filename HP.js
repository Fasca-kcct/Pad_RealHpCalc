class HP {
  constructor(LeaderHp = 0, LeaderReductionRate = 0, FriendHp = 0, FriendReductionRate = 0){
    this.LeaderHp = LeaderHp;
    this.LeaderReductionRate = LeaderReductionRate;
    this.FriendHp = FriendHp;
    this.FriendReductionRate = FriendReductionRate;
  }

  getHP () {
    let LeaderRealHp = this.LeaderHp / ((100 - this.LeaderReductionRate) / 100);
    let FriendRealHp = this.FriendHp / ((100- this.FriendReductionRate) / 100);
    let RealHp = LeaderRealHp * FriendRealHp;
    RealHp *= 100;
    RealHp = Math.round(RealHp);
    RealHp /= 100;
    return RealHp;
  }
}