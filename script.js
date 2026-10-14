const prvo = document.querySelector("#stevilo1");
const drugo = document.querySelector("#stevilo2");
const operacija = document.querySelector("#operacija");
const gumb = document.querySelector("#izracunaj");
const rezultat = document.querySelector("#rezultat");

gumb.addEventListener("click", () => {
  if (prvo.value === "" || drugo.value === "") {
    rezultat.textContent = "Vnesi obe števili.";
    return;
  }

  const a = Number(prvo.value);
  const b = Number(drugo.value);
  let odgovor;

  switch (operacija.value) {
    case "+":
      odgovor = a + b;
      break;
    case "-":
      odgovor = a - b;
      break;
    case "*":
      odgovor = a * b;
      break;
    case "/":
      if (b === 0) {
        rezultat.textContent = "Deljenje z nič ni dovoljeno.";
        return;
      }
      odgovor = a / b;
      break;
  }

  rezultat.textContent = `Rezultat: ${odgovor}`;
});
