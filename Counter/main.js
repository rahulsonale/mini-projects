document.addEventListener("DOMContentLoaded", () => {
  const plus = document.querySelector("#plus");
  const minus = document.querySelector("#minus");
  const count = document.querySelector(".Count");

  let value = 0;

  plus.addEventListener("click", () => {
    value++;
    count.textContent = value;
  });

  minus.addEventListener("click", () => {
    if (value > 0) value--;
    count.textContent = value;
  });
});
