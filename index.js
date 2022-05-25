const boxA = () => {
  return Number(document.getElementById("BoxA").value);
};

const boxB = () => {
  return Number(document.getElementById("BoxB").value);
};

const addNum = () => {
  let input1 = boxA();
  let input2 = boxB();
  let result = input1 + input2;

  document.getElementById("BoxC").innerHTML = result;
};

const subNum = () => {
  let input1 = boxA();
  let input2 = boxB();
  let result = input1 - input2;

  document.getElementById("BoxC").innerHTML = result;
};

const multiplyNum = () => {
  let input1 = boxA();
  let input2 = boxB();
  let result = input1 * input2;

  document.getElementById("BoxC").innerHTML = result;
};

const divideNum = () => {
  let input1 = boxA();
  let input2 = boxB();
  let result = input1 / input2;
  if (input2 == 0) {
    result = "Error: Cannot divide by 0";
  }

  document.getElementById("BoxC").innerHTML = result;
};

const clearNum = () => {
  /* boxA() = "";
  boxB() = "";
  boxC() = ""; 
  */

  document.getElementById("BoxA").value = "";
  document.getElementById("BoxB").value = "";

  document.getElementById("BoxC").innerHTML = "";
};

const eventListener = () => {
  const plusSign = document.getElementById("Add");
  plusSign.addEventListener("click", addNum);

  const subtractSign = document.getElementById("Subtract");
  subtractSign.addEventListener("click", subNum);

  const multiplySign = document.getElementById("Multiply");
  multiplySign.addEventListener("click", multiplyNum);

  const divideSign = document.getElementById("Divide");
  divideSign.addEventListener("click", divideNum);

  const clearSign = document.getElementById("Clear");
  clearSign.addEventListener("click", clearNum);
};

eventListener();
