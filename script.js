const display = document.getElementById("display");
const buttons = Array.from(document.getElementsByClassName("button"));
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerText;
    switch (value) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText || "0");
        } catch {
          display.innerText = "Error";
        }
        break;
      case "←":
        display.innerText = display.innerText.slice(0, -1);
        break;
      default:
        display.innerText += value;
    }
  });
});
