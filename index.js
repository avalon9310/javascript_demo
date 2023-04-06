let start = 1;
let end = 49;
let lottos = [];
// 函式表達式(把函式當作變數使用)
const getRandNumber = (start, end) => Math.floor(Math.random() * (end - start + 1) + start);



document.write("<h2>大樂透號碼</h2>")
for (let i = 0; i < 5; i++) {
    let lotto = getLotto(start, end);
    lottos.push(lotto)
}

// 三元運算子

a = 10;
b = 20;
c = 0;
if (a > b) {
    c = a + b;
} else {
    c = a - b;
}
console.log(c);
//c = a + b if a > b else a - b

c = a > b ? a + b : a - b;

console.log(c);

for (let i = 0; i < lottos.length; i++) {
    document.write(`<li style=${i % 2 == 0 ? "color:red" : "color:blue"}>${lottos[i].join(",")}</li>`)

    // if (i % 2 == 0) {
    //     document.write(`<li style="color:red">${lottos[i].join(",")}</li>`)
    // } else {
    //     document.write(`<li style="color:blue">${lottos[i].join(",")}</li>`)
    // }
}

//lottos.forEach((x => document.write(`<li style="color:blue">${x.join(",")}</li>`)));

console.log(lottos);


// 函式宣告
function getLotto(start, end, count = 6) {
    let lotto = [];
    for (let i = 0; i < count;) {
        number = getRandNumber(start, end);
        // 1.不重複
        if (!lotto.includes(number)) {
            lotto.push(number);
            i++;
        }
    }
    // 2.排序
    lotto.sort((a, b) => (a - b));




    return lotto;
}


let user = {
    name: 'avalon',
    email: 'asd95027@gmail.com',
    password: '123456678',
}

console.log(user);
console.log(user.name);
console.log(user.email);
console.log(user["name"]);


let users = [
    {
        name: 'avalon',
        email: 'asd95027@gmail.com',
        password: '123456678',
    },
    {
        name: 'mary',
        email: 'mary@gmail.com',
        password: 'mary1234',
    },
    {
        name: 'kevin',
        email: 'kevin@gmail.com',
        password: 'kevin123',
    }
]

//console.log(users);
//console.log(users[0]);

// 使用for 迴圈取值，姓名跟email輸出document
for (let i = 0; i < users.length; i++) {
    document.write(`${users[i].name}-${users[i].email}<br>`);
}

users.forEach(user => document.write(`${user.name}-${user.email}<br>`));
// 使用forEach取值，姓名跟email輸出document