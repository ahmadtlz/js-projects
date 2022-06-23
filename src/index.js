const button = document.querySelector("button");

const changeBackgroundBody = () => {
  document.querySelector("body").style.backgroundColor = "red";
};
button.addEventListener("click", changeBackgroundBody);
