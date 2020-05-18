function checkCashRegister(price, cash, cid) {
  //establish variables
  let cidRemain = cid;
  var registerTotal =
    cid[0][1] +
    cid[1][1] +
    cid[2][1] +
    cid[3][1] +
    cid[4][1] +
    cid[5][1] +
    cid[6][1] +
    cid[7][1] +
    cid[8][1];
  var changeDue = cash - price;
  var registerState = {
    status: "",
    change: [
      ["PENNY", 0.0],
      ["NICKEL", 0.0],
      ["DIME", 0.0],
      ["QUARTER", 0.0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ],
  };
  //not enough monies
  if (changeDue > registerTotal) {
    registerState.status = "INSUFFICIENT_FUNDS";
    registerState.change = [];
    return registerState;
  }
  //exact monies in drawer
  if (changeDue == registerTotal) {
    registerState.status = "CLOSED";
    registerState.change = cid;
    return registerState;
  }
  //pay out 100s
  while (changeDue >= 100) {
    cidRemain[8][1] = cid[8][1] - 100;
    changeDue = changeDue - 100;
    registerState.change[8][1] = registerState.change[8][1] + 100;
  }
  while (changeDue >= 20) {
    cidRemain[7][1] = cid[7][1] - 20;
    changeDue = changeDue - 20;
    registerState.change[7][1] = registerState.change[7][1] + 20;
  }
  while (changeDue >= 10) {
    cidRemain[6][1] = cid[6][1] - 10;
    changeDue = changeDue - 10;
    registerState.change[6][1] = registerState.change[6][1] + 10;
  }
  while (changeDue >= 5) {
    cidRemain[5][1] = cid[5][1] - 5;
    changeDue = changeDue - 5;
    registerState.change[5][1] = registerState.change[5][1] + 5;
  }
  while (changeDue >= 1) {
    cidRemain[4][1] = cid[4][1] - 1;
    changeDue = changeDue - 1;
    registerState.change[4][1] = registerState.change[4][1] + 1;
  }
  while (changeDue >= 0.25) {
    cidRemain[3][1] = cid[3][1] - 0.25;
    changeDue = changeDue - 0.25;
    registerState.change[3][1] = registerState.change[3][1] + 0.25;
  }
  while (changeDue >= 0.1) {
    cidRemain[2][1] = cid[2][1] - 0.1;
    changeDue = changeDue - 0.1;
    registerState.change[2][1] = registerState.change[2][1] + 0.1;
  }
  while (changeDue >= 0.05) {
    cidRemain[1][1] = cid[1][1] - 0.05;
    changeDue = changeDue - 0.05;
    registerState.change[1][1] = registerState.change[1][1] + 0.05;
  }
  while (changeDue >= 0.01) {
    cidRemain[0][1] = cid[0][1] - 0.01;
    changeDue = changeDue - 0.01;
    registerState.change[0][1] = registerState.change[0][1] + 0.01;
  }
  //reconcile drawer
  while (cidRemain[8][1] < 0) {
    cidRemain[8][1] = cidRemain[8][1] + 100;
    cidRemain[7][1] = cidRemain[7][1] - 100;
    registerState.change[8][1] = registerState.change[8][1] - 100;
    registerState.change[7][1] = registerState.change[7][1] + 100;
  }
  while (cidRemain[7][1] < 0) {
    cidRemain[7][1] = cidRemain[7][1] + 20;
    cidRemain[6][1] = cidRemain[6][1] - 20;
    registerState.change[7][1] = registerState.change[7][1] - 20;
    registerState.change[6][1] = registerState.change[6][1] + 20;
  }
  while (cidRemain[6][1] < 0) {
    cidRemain[6][1] = cidRemain[6][1] + 10;
    cidRemain[5][1] = cidRemain[5][1] - 10;
    registerState.change[6][1] = registerState.change[6][1] - 10;
    registerState.change[5][1] = registerState.change[5][1] + 10;
  }
  while (cidRemain[5][1] < 0) {
    cidRemain[5][1] = cidRemain[5][1] + 5;
    cidRemain[4][1] = cidRemain[4][1] - 5;
    registerState.change[5][1] = registerState.change[5][1] - 5;
    registerState.change[4][1] = registerState.change[4][1] + 5;
  }
  while (cidRemain[4][1] < 0) {
    cidRemain[4][1] = cidRemain[4][1] + 1;
    cidRemain[3][1] = cidRemain[3][1] - 1;
    registerState.change[4][1] = registerState.change[4][1] - 1;
    registerState.change[3][1] = registerState.change[3][1] + 1;
  }
  while (cidRemain[3][1] < 0) {
    cidRemain[3][1] = cidRemain[3][1] + 0.25;
    cidRemain[2][1] = cidRemain[2][1] - 0.2;
    cidRemain[1][1] = cidRemain[1][1] - 0.05;
    registerState.change[3][1] = registerState.change[3][1] - 0.25;
    registerState.change[2][1] = registerState.change[2][1] + 0.2;
    registerState.change[1][1] = registerState.change[1][1] + 0.05;
  }
  while (cidRemain[2][1] < 0) {
    cidRemain[2][1] = cidRemain[2][1] + 0.1;
    cidRemain[1][1] = cidRemain[1][1] - 0.1;
    registerState.change[2][1] = registerState.change[2][1] - 0.01;
    registerState.change[2][1] = registerState.change[2][1] + 0.01;
  }
  while (cidRemain[1][1] < 0) {
    cidRemain[1][1] = cidRemain[1][1] + 0.05;
    cidRemain[0][1] = cidRemain[0][1] - 0.05;
    registerState.change[1][1] = registerState.change[1][1] - 0.05;
    registerState.change[0][1] = registerState.change[0][1] + 0.05;
  }
  if (cidRemain[0][1] < 0) {
    registerState.status = "INSUFFICIENT_FUNDS";
    registerState.change = [];
    return registerState;
  }
  //clean up change
  while (registerState.change.length >= 9) {
    if (registerState.change[8][1] == 0) {
      registerState.change.pop();
    } else break;
  }
  while (registerState.change.length >= 8) {
    if (registerState.change[7][1] == 0) {
      registerState.change.splice(7, 1);
    } else break;
  }
  while (registerState.change.length >= 7) {
    if (registerState.change[6][1] == 0) {
      registerState.change.splice(6, 1);
    } else break;
  }
  while (registerState.change.length >= 6) {
    if (registerState.change[5][1] == 0) {
      registerState.change.splice(5, 1);
    } else break;
  }
  while (registerState.change.length >= 5) {
    if (registerState.change[4][1] == 0) {
      registerState.change.splice(4, 1);
    } else break;
  }
  while (registerState.change.length >= 4) {
    if (registerState.change[3][1] == 0) {
      registerState.change.splice(3, 1);
    } else break;
  }
  while (registerState.change.length >= 3) {
    if (registerState.change[2][1] == 0) {
      registerState.change.splice(2, 1);
    } else break;
  }
  while (registerState.change.length >= 2) {
    if (registerState.change[1][1] == 0) {
      registerState.change.splice(1, 1);
    } else break;
  }
  while (registerState.change[0][1] == 0) {
    registerState.change.splice(0, 1);
  }
  if (registerState.change[0][1] == 0.03) {
    registerState.change[0][1] = 0.04;
  }
  registerState.change = registerState.change.reverse();
  registerState.status = "OPEN";
  console.log(registerState);
  return registerState;
}
