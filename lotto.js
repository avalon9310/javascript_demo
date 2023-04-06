const element = document.querySelector("h1");
console.log(element);

// 更改本文
element.innerText = element.innerText;
element.innerHTML = `<li style="color:red">${element.innerText}</li>`;

const dateEl = document.querySelector("span.date");
dateEl.innerText = "2023/4/6";
console.log(dateEl);


const dateEls = document.querySelectorAll(".date");
console.log(dateEls);
dateEls.forEach(x => x.innerText = getToday());
dateEls[0].remove();




//  取得今天日期
function getToday() {
    let today = new Date()
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    return `${year}-${month}-${date}`;
}


// const startEl = document.querySelector("#start");
// console.log; (startEl)
// startEl.innerText = "開獎";
// startEl.addEventListener("click", lottoClick);

function lottoClick() {
    const lottoEl = document.querySelector(".lotto-number ul");
    lottoEl.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        let lotto = getLotto(start, end);
        lottos.push(lotto)
    }

    for (let i = 0; i < lottos.length; i++) {
        lottoEl.innerHTML += `<li style=d${i % 2 == 0 ? "color:red" : "color:blue"}>${lottos[i].join(",")}</li>`
    }
}