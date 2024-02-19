let btn = document.querySelector("button");
let result = document.querySelector(".result");

btn.addEventListener("click", () => {
  let name = document.querySelector(".input").value;

  let url = `https://api.genderize.io/?name=${name}`;

  if (name === "") {
    result.innerHTML = "Please enter valid name!";
  } else {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        result.innerHTML = `The entered name is<span> ${data.name} </span>. <br/> The predicted gender will be <span> ${data.gender} </span>.<br/>The probability of predicted result will be <span> ${data.probability} </span>. `;
      })
      .catch((e) => (result.innerHTML = "Something went wrong..!"));
  }
});

document.querySelector(".input").addEventListener("click", () => {
  result.innerHTML = "";
});
