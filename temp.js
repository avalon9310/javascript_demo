console.log(Math);
console.log(Math.PI);

x = 7.7;
// 絕對值
console.log(Math.abs(x));
// 大於等於最接近的整數值
console.log(Math.ceil(x));
// 小於等於最接近的整數值
console.log(Math.floor(x));
// 回傳四捨五入的值
console.log(Math.round(x));
console.log("========================")
for (let i = 0; i < 10; i++) {
    // 0~9
    // 1~10
    // random.randint(0,10)
    // console.log(Math.floor(Math.random() * 10) + 1);
    // 5~20(包含)
    console.log(Math.floor(Math.random() * (20 - 5 + 1)) + 5);
    let email = "ava@gmail.com"
    console.log(email);
    console.log(email.length);
    console.log(email[0]);
    console.log(email[email.length - 1]);

    for (let i = 0; i < email.length; i++) {
        document.write(email[i]);
    }

    console.log("=========================")
    // let x = 10;
    let y = "20";

    console.log(x + Number(y));
    console.log(x - Number(y));
    console.log(x * Number(y));
    console.log(x / Number(y));
    console.log("=========================")


    let count = 0;
    for (let i = 0; i < 10; i++) {
        // count=count+1
        console.log(i, count++);
    }
    console.log("=========================")

    x = 10;
    y = "10";

    console.log(x === y);
    console.log("=========================");

    // x = 0;
    0, '', NaN, null, undefined => false
    if (x) {
        console.log('yes!');
    }

    // let/var/const 用法
    // 圓面積
    // 圓周率
    const PI = 3.1415926;
    let radius = 0;
    // while (true) {
    //     radius = prompt("請輸入半徑");
    //     // !=not
    //     if (!isNaN(radius)) {
    //         break;
    //     }
    //     alert("請輸入數值");

    // }


    let area = radius ** 2 * PI;
    console.log(area);
    // 區域
    if (radius >= 10) {
        let radius = "5";
        area = radius ** 2 * PI;
        console.log(typeof (area));

    }

    // 三種輸出方式
    // 1.給開發者看的:console
    //const result = "半徑為" + radius + "面積為:" + area
    //console.log(result)
    // 2.給使用者看的:document
    // document.write("<h3>" + result + "</h3>");

    // // 3.警告:alert
    // alert(result);
}