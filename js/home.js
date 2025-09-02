function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

const now = new Date().toLocaleTimeString();
// const now = new Date();

// Use padStart to add a leading zero to single-digit numbers

// console.log(localTimeString);
getElement("card-box").addEventListener("click", function (e) {
  if (e.target.className.includes("call-btn")) {
    const cartButton = e.target;
    // alert("call btn");

    const countCoin = Number(getElement("count-coin").innerText);
    // console.log(countCoin);

    const totalCoin = countCoin - 20;

    if (totalCoin < 0) {
      alert("You don't have enough coins. You need 20 coins to call");
      return;
    }
    getElement("count-coin").innerText = totalCoin;
    const cardTitle =
      cartButton.parentNode.parentNode.children[1].children[0].innerText;

    const callNumber =
      cartButton.parentNode.parentNode.children[1].children[2].innerText;
    // console.log(cardTitle, callNumber);
    const cardContainer = getElement("card-container");
    alert("📞 Calling " + cardTitle + " " + callNumber + "...");
    const newCard = document.createElement("div");
    newCard.innerHTML = `
            <div
              class="flex justify-between items-center bg-[#fafafa] p-4 rounded-lg mt-3 mb-4"
            >
              <div>
                <h1 class="font-semibold text-left text-lg">
               ${cardTitle}
                </h1>
                <p class="text-[#5c5c5c]">${callNumber}</p>
              </div>
              <div>
                <time datetime="">${now}</time>
              </div>
            </div>
            `;
    cardContainer.append(newCard);
  }
});

// love reacts

getElement("card-box").addEventListener("click", function (event) {
  if (event.target.className.includes("love")) {
    const loveBtn = event.target;
    const countLove =
      loveBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode.parentNode.children[0].children[1].children[0].children[0]
        .innerText;
    console.log(countLove);
    const loveBtns = getElement("love-button").innerText;
    getElement("love-button").innerText = Number(loveBtns) + 1;
  }
});

getElement("clear-btn").addEventListener("click", function () {
  // alert("click");
  const cartContainer = getElement("card-container");
  cartContainer.innerHTML = "";
});



getElement("card-box").addEventListener("click", function (ev) {
  if (ev.target.className.includes("btn-copy")) {
    const buttonCopy = ev.target;
    const callNumber =
      buttonCopy.parentNode.parentNode.children[1].children[2].innerText;

    navigator.clipboard.writeText(callNumber).then(() => {
      alert("The number has been copied " + callNumber);
    });

    // const copybtns = buttonCopy.parentNode.children[0].innerText;
    // console.log(copybtns);
    const cardCopy = getElement("card-copy").innerText;
    getElement("card-copy").innerText = Number(cardCopy) + 1;
  }
});

