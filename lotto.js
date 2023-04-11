const dateEls = document.querySelectorAll(".date");
console.log(dateEls);
dateEls.forEach(x => x.innerText = getToday());
dateEls[0].innerText = getTime();
dateEls[0].setAttribute("style", "color:black;fontsize=16")
showTime()

function showTime() {
    dateEls[0].innerText = getTime();

    setTimeout(() => {
        showTime()
        if (!click) {
            lottoClick();
        }
    }, 1000);
}

//  取得今天日期
function getToday() {
    let today = new Date()
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    return `${year}-${month}-${date}`;
}

// 取得時分秒跟年月日
function getTime(fullTime = true) {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = String(now.getSeconds()).padStart(2, "0");

    if (fullTime) {
        return `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;
    }

    return `${year}/${month}/${date}`;
}
// const startEl = document.querySelector("#start");
// console.log; (startEl)
// startEl.innerText = "開獎";
// startEl.addEventListener("click", lottoClick);

function lottoClick() {
    click = true
    let lottos = [];
    const lottoEl = document.querySelector(".lotto-number ul");
    lottoEl.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        let lotto = getLotto(start, end);
        lottos.push(lotto);
    }

    let htmlText = "<table border=1>";
    for (let i = 0; i < lottos.length; i++) {
        htmlText += "<tr>";
        for (let j = 0; j < lottos[i].length; j++) {
            htmlText += `<td>${lottos[i][j]}</td>`
        }

        htmlText += "</tr>";
    }
    htmlText += "</table>"

    console.log(htmlText);
    lottoEl.innerHTML = htmlText;

    // for (let i = 0; i < lottos.length; i++) {
    //     lottoEl.innerHTML += `<li style=${i % 2 == 0 ? "color:black" : "color:blue"}>${lottos[i].join(",")}</li>`;
    // }
}