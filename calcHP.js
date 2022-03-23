function onCalcHPButtonClick() {
  let LeaderHp = document.getElementById("LeaderHpInput").value;
  let LeaderReductionRate = document.getElementById("LeaderReductionRateInput").value;
  let FriendHp = document.getElementById("FriendHpInput").value;
  let FriendReductionRate = document.getElementById("FriendReductionRateInput").value;

  let realHpObj = new HP(LeaderHp, LeaderReductionRate, FriendHp, FriendReductionRate);
  let realHp = realHpObj.getHP();

  let realHpResult = document.getElementById("HPResult");
  realHpResult.textContent = realHp;
  let resultMessage = document.getElementById("resultMessage");
  resultMessage.classList.remove("displayNone");
}

window.addEventListener("DOMContentLoaded", function(){
  let LeaderHpInput = document.getElementById("LeaderHpInput");
  LeaderHpInput.addEventListener("input", checkInput);
  LeaderHpInput.addEventListener("blur", checkInput);

  let LeaderReductionRateInput = document.getElementById("LeaderReductionRateInput");
  LeaderReductionRateInput.addEventListener("input", checkInput);
  LeaderReductionRateInput.addEventListener("blur", checkInput);

  let FriendHpInput = document.getElementById("FriendHpInput");
  FriendHpInput.addEventListener("input", checkInput);
  FriendHpInput.addEventListener("blur", checkInput);

  let FriendReductionRateInput = document.getElementById("FriendReductionRateInput");
  FriendReductionRateInput.addEventListener("input", checkInput);
  FriendReductionRateInput.addEventListener("blur", checkInput);

  function checkInput(){
    let buttonEnabled = true;

    let LeaderHpStr = LeaderHpInput.value
    let LeaderHp = Number(LeaderHpStr);
    let LeaderHpInputMsg = document.getElementById("LeaderHpInputMsg");
    if(LeaderHpStr.length === 0){
      buttonEnabled = false;
      LeaderHpInputMsg.textContent = "リーダーのHP倍率を入力してね。";
    }else if(LeaderHp <= 0){
      buttonEnabled = false;
      LeaderHpInputMsg.textContent = "ここには自然数を入力してね。";
    }else if (LeaderHp === NaN){
      LeaderHpInputMsg.textContent = "ここに文字列は入力しないでね。"
    }else {
      LeaderHpInputMsg.textContent = "";
    }

    let LeaderReductionRateStr = LeaderReductionRateInput.value
    let LeaderReductionRate = Number(LeaderReductionRateStr);
    let LeaderReductionRateInputMsg = document.getElementById("LeaderReductionRateInputMsg");
    if(LeaderReductionRateStr.length === 0){
      buttonEnabled = false;
      LeaderReductionRateInputMsg.textContent = "リーダーの軽減率を入力してね。";
    }else if(LeaderReductionRate <= 0){
      buttonEnabled = false;
      LeaderReductionRateInputMsg.textContent = "ここには自然数を入力してね。";
    }else if (LeaderReductionRate === NaN){
      LeaderReductionRateInputMsg.textContent = "ここに文字列は入力しないでね。"
    }else {
      LeaderReductionRateInputMsg.textContent = "";
    }

    let FriendHpStr = FriendHpInput.value
    let FriendHp = Number(FriendHpStr);
    let FriendHpInputMsg = document.getElementById("FriendHpInputMsg");
    if(FriendHpStr.length === 0){
      buttonEnabled = false;
      FriendHpInputMsg.textContent = "フレンドのHP倍率を入力してね。";
    }else if(FriendHp <= 0){
      buttonEnabled = false;
      FriendHpInputMsg.textContent = "ここには自然数を入力してね。";
    }else if (FriendHp === NaN){
      FriendHpInputMsg.textContent = "ここに文字列は入力しないでね。"
    }else {
      FriendHpInputMsg.textContent = "";
    }

    let FriendReductionRateStr = FriendReductionRateInput.value
    let FriendReductionRate = Number(FriendReductionRateStr);
    let FriendReductionRateInputMsg = document.getElementById("FriendReductionRateInputMsg");
    if(FriendReductionRateStr.length === 0){
      buttonEnabled = false;
      FriendReductionRateInputMsg.textContent = "フレンドのHP倍率を入力してね。";
    }else if(FriendReductionRate <= 0){
      buttonEnabled = false;
      FriendReductionRateInputMsg.textContent = "ここには自然数を入力してね。";
    }else if (FriendReductionRate === NaN){
      FriendReductionRateInputMsg.textContent = "ここに文字列は入力しないでね。"
    }else {
      FriendReductionRateInputMsg.textContent = "";
    }

    let calcHpButton = document.getElementById("calcHpButton");
        if(buttonEnabled){
            calcHpButton.removeAttribute("disabled");
        }else {
            calcHpButton.setAttribute("disabled", "disabled");
        }
  }
});