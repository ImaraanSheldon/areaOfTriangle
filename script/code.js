let base = document.getElementById("base");
let height = document.getElementById("uhh");

document.getElementById("click").addEventListener("click", (event) => {
    event.preventDefault()
  let baseValue = base.value;
  let heightValue = height.value;

  let answer =  1/2 * baseValue * heightValue
  console.log(answer);
  document.getElementById("area").value = answer
});
