let rotated = 0
let gameStarted = 0
let playerNum = 1
let currentPlayer = "noPlayesYet";

const guessedPeriodicTable = [

]
const periodicTable = [
    { symbol: 'H', name: 'هیدروژن', mass: 1.01 },
    { symbol: 'He', name: 'هلیم', mass: 4.0 },
    { symbol: 'Li', name: 'لیتیوم', mass: 6.94 },
    { symbol: 'Be', name: 'بریلیوم', mass: 9.01 },
    { symbol: 'B', name: 'بروم', mass: 10.81 },
    { symbol: 'C', name: 'کربن', mass: 12.01 },
    { symbol: 'N', name: 'نیتروژن', mass: 14.01 },
    { symbol: 'O', name: 'اکسیژن', mass: 16.0 },
    { symbol: 'F', name: 'فلوئور', mass: 19.0 },
    { symbol: 'Ne', name: 'نئون', mass: 20.18 },
    { symbol: 'Na', name: 'سدیم', mass: 22.99 },
    { symbol: 'Mg', name: 'منیزیم', mass: 24.31 },
    { symbol: 'Al', name: 'آلومینیوم', mass: 26.98 },
    { symbol: 'Si', name: 'سیلیسیم', mass: 28.09 },
    { symbol: 'P', name: 'فسفر', mass: 30.97 },
    { symbol: 'S', name: 'گوگرد', mass: 32.07 },
    { symbol: 'Cl', name: 'کلر', mass: 35.45 },
    { symbol: 'Ar', name: 'آرگون', mass: 39.95 },
    { symbol: 'K', name: 'پتاسیم', mass: 39.1 },
    { symbol: 'Ca', name: 'کلسیم', mass: 40.08 },
    { symbol: 'Sc', name: 'اسکاندیم', mass: 44.96 },
    { symbol: 'Ti', name: 'تیتانیوم', mass: 47.87 },
    { symbol: 'V', name: 'وانادیم', mass: 50.94 },
    { symbol: 'Cr', name: 'کروم', mass: 51.99 },
    { symbol: 'Mn', name: 'منگنز', mass: 54.94 },
    { symbol: 'Fe', name: 'آهن', mass: 55.85 },
    { symbol: 'Co', name: 'کبالت', mass: 58.93 },
    { symbol: 'Ni', name: 'نیکل', mass: 58.69 },
    { symbol: 'Cu', name: 'مس', mass: 63.55 },
    { symbol: 'Zn', name: 'روی', mass: 65.38 },
    { symbol: 'Ga', name: 'گالیوم', mass: 69.72 },
    { symbol: 'Ge', name: 'ژرمنیوم', mass: 72.63 },
    { symbol: 'As', name: 'آرسنیک', mass: 74.92 },
    { symbol: 'Se', name: 'سلنیوم', mass: 78.97 },
    { symbol: 'Br', name: 'برمین', mass: 79.9 },
    { symbol: 'Kr', name: 'کریپتون', mass: 83.8 },
    { symbol: 'Rb', name: 'روبیدیوم', mass: 85.47 },
    { symbol: 'Sr', name: 'استرانسیم', mass: 87.62 },
    { symbol: 'Y', name: 'ایتریم', mass: 88.91 },
    { symbol: 'Zr', name: 'زیرکونیم', mass: 91.22 },
    { symbol: 'Nb', name: 'نیوبیوم', mass: 92.91 },
    { symbol: 'Mo', name: 'مولیبدن', mass: 95.94 },
    { symbol: 'Tc', name: 'تکنسیم', mass: 98.0 },
    { symbol: 'Ru', name: 'روتنیوم', mass: 101.07 },
    { symbol: 'Rh', name: 'رادیم', mass: 102.91 },
    { symbol: 'Pd', name: 'پالادیم', mass: 106.42 },
    { symbol: 'Ag', name: 'نقره', mass: 107.87 },
    { symbol: 'Cd', name: 'کادمیوم', mass: 112.41 },
    { symbol: 'In', name: 'اندیم', mass: 114.82 },
    { symbol: 'Sn', name: 'قلع', mass: 118.71 },
    { symbol: 'Sb', name: 'آنتیموان', mass: 121.76 },
    { symbol: 'Te', name: 'تلوریم', mass: 127.6 },
    { symbol: 'I', name: 'یود', mass: 126.9 },
    { symbol: 'Xe', name: 'زئون', mass: 131.29 },
    { symbol: 'Cs', name: 'سزیم', mass: 132.91 },
    { symbol: 'Ba', name: 'باریم', mass: 137.33 },
    { symbol: 'La', name: 'لانتان', mass: 138.91 },
    { symbol: 'Ce', name: 'سریم', mass: 140.12 },
    { symbol: 'Pr', name: 'پراسیودیمیوم', mass: 140.91 },
    { symbol: 'Nd', name: 'نئودیمیوم', mass: 144.24 },
    { symbol: 'Pm', name: 'پرومتیم', mass: 145.0 },
    { symbol: 'Sm', name: 'ساماریوم', mass: 150.36 },
    { symbol: 'Eu', name: 'یوروپیوم', mass: 151.96 },
    { symbol: 'Gd', name: 'گادولینیوم', mass: 157.25 },
    { symbol: 'Tb', name: 'تربیوم', mass: 158.93 },
    { symbol: 'Dy', name: 'دیسپروسیوم', mass: 162.5 },
    { symbol: 'Ho', name: 'هولمیوم', mass: 164.93 },
    { symbol: 'Er', name: 'اربیوم', mass: 167.26 },
    { symbol: 'Tm', name: 'تولیوم', mass: 168.93 },
    { symbol: 'Yb', name: 'ایتربیوم', mass: 173.05 },
    { symbol: 'Lu', name: 'لوتتیوم', mass: 174.97 },
    { symbol: 'Hf', name: 'هافنیوم', mass: 178.49 },
    { symbol: 'Ta', name: 'تانتالوم', mass: 180.95 },
    { symbol: 'W', name: 'تنگستن', mass: 183.84 },
    { symbol: 'Re', name: 'رنیوم', mass: 186.21 },
    { symbol: 'Os', name: 'اسمیوم', mass: 190.23 },
    { symbol: 'Ir', name: 'ایریدیوم', mass: 192.22 },
    { symbol: 'Pt', name: 'پلاتین', mass: 195.08 },
    { symbol: 'Au', name: 'طلا', mass: 196.97 },
    { symbol: 'Hg', name: 'جیوه', mass: 200.59 },
    { symbol: 'Tl', name: 'تالیوم', mass: 204.38 },
    { symbol: 'Pb', name: 'سرب', mass: 207.2 },
    { symbol: 'Bi', name: 'بیسموت', mass: 208.98 },
    { symbol: 'Po', name: 'پولونیوم', mass: 209.0 },
    { symbol: 'At', name: 'آستاتین', mass: 210.0 },
    { symbol: 'Rn', name: 'رادون', mass: 222.0 },
    { symbol: 'Fr', name: 'فرانسیوم', mass: 223.0 },
    { symbol: 'Ra', name: 'رادیوم', mass: 226.0 },
    { symbol: 'Ac', name: 'اکتینیوم', mass: 227.0 },
    { symbol: 'Th', name: 'توریم', mass: 232.04 },
    { symbol: 'Pa', name: 'پروتاکتینیم', mass: 231.04 },
    { symbol: 'U', name: 'اورانیوم', mass: 238.03 },
    { symbol: 'Np', name: 'نپتونیوم', mass: 237.0 },
    { symbol: 'Pu', name: 'پلوتونیم', mass: 244.0 },
    { symbol: 'Am', name: 'آمریسیوم', mass: 243.0 },
    { symbol: 'Cm', name: 'کوریوم', mass: 247.0 },
    { symbol: 'Bk', name: 'برکلیوم', mass: 247.0 },
    { symbol: 'Cf', name: 'کالیفرنیوم', mass: 251.0 },
    { symbol: 'Es', name: 'اینشتینیوم', mass: 252.0 },
    { symbol: 'Fm', name: 'فرمیوم', mass: 257.0 },
    { symbol: 'Md', name: 'مندلیوم', mass: 258.0 },
    { symbol: 'No', name: 'نوبلیوم', mass: 259.0 },
    { symbol: 'Lr', name: 'لارنسیوم', mass: 262.0 },
    { symbol: 'Rf', name: 'روترفوردیوم', mass: 267.0 },
    { symbol: 'Db', name: 'دوبنیوم', mass: 268.0 },
    { symbol: 'Sg', name: 'سیبورژیوم', mass: 271.0 },
    { symbol: 'Bh', name: 'بوریوم', mass: 270.0 },
    { symbol: 'Hs', name: 'هاسیوم', mass: 277.0 },
    { symbol: 'Mt', name: 'مایتنریوم', mass: 276.0 },
    { symbol: 'Ds', name: 'دارمشتاتیوم', mass: 281.0 },
    { symbol: 'Rg', name: 'رونتژنیوم', mass: 280.0 },
    { symbol: 'Cn', name: 'کوپرنیسیوم', mass: 285.0 },
    { symbol: 'Nh', name: 'نیهونیوم', mass: 286.0 },
    { symbol: 'Fl', name: 'فلروویوم', mass: 289.0 },
    { symbol: 'Mc', name: 'ماسکوویوم', mass: 290.0 },
    { symbol: 'Lv', name: 'لیورموریوم', mass: 293.0 },
    { symbol: 'Ts', name: 'تنسین', mass: 294.0 },
    { symbol: 'Og', name: 'اوگانسون', mass: 294.0 }

];
const Players = [

]


const categoryLinks = document.querySelectorAll('ul li a');
const elementCards = document.querySelectorAll('.element-card');
categoryLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedCategory = e.target.getAttribute('data-category');

        elementCards.forEach((card) => {
            if (selectedCategory === 'all' || card.classList.contains(selectedCategory)) {

                card.style.backgroundColor = getColorByCategory(selectedCategory);
            } else {

                card.style.backgroundColor = '';
            }
        });
    });
});
function getColorByCategory(category) {
    switch (category) {
        case 'nao-metal':
            return 'rgb(180, 210, 100, 0.200)';
        case 'gas-nobre':
            return 'hsl(202, 68%, 64%, 0.300)';
        case 'metal-alcalino':
            return 'rgb(245,200,100, 0.200)';
        case 'metal-alcalino-terroso':
            return 'rgb(240,230,90, 0.100)';
        case 'semimetal':
            return 'rgb(110,200,190, 0.300)';
        case 'halogenio':
            return 'rgb(170,225,255, 0.200)';
        case 'outros-metais':
            return 'rgb(190,210,210, 0.300)';
        case 'metal-transicao':
            return 'rgb(245,175,175, 0.300)';
        case 'lantanideo':
            return 'rgb(150,225,225, 0.300)';
        case 'actinidio':
            return 'rgb(230,190,220, 0.300)';
        default:
            return '';
    }
}

/*PC Functions*/
const ShowAllElements = () => {
    for (let index = 0; index < 56; index++) {
        const element = periodicTable[index];
        elementCards[index].innerHTML = "<span>" + (index + 1) + "</span><h2>" + element.symbol + "</h2><p>" + element.name + "</p><p>" + element.mass + "</p>"
        elementCards[index].setAttribute('atomicNumber', index + 1)

    }
    for (let index = 56; index < 71; index++) {
        const element = periodicTable[index];
        elementCards[index + 34].innerHTML = "<span>" + (index + 1) + "</span><h2>" + element.symbol + "</h2><p>" + element.name + "</p><p>" + element.mass + "</p>"
        elementCards[index + 34].setAttribute('atomicNumber', index + 1)
    }
    for (let index = 71; index < 88; index++) {
        const element = periodicTable[index];
        elementCards[index - 14].innerHTML = "<span>" + (index + 1) + "</span><h2>" + element.symbol + "</h2><p>" + element.name + "</p><p>" + element.mass + "</p>"
        elementCards[index - 14].setAttribute('atomicNumber', index + 1)
    }
    for (let index = 88; index < 103; index++) {
        const element = periodicTable[index];
        elementCards[index + 17].innerHTML = "<span>" + (index + 1) + "</span><h2>" + element.symbol + "</h2><p>" + element.name + "</p><p>" + element.mass + "</p>"
        elementCards[index + 17].setAttribute('atomicNumber', index + 1)
    }
    for (let index = 103; index < 118; index++) {
        const element = periodicTable[index];
        elementCards[index - 28].innerHTML = "<span>" + (index + 1) + "</span><h2>" + element.symbol + "</h2><p>" + element.name + "</p><p>" + element.mass + "</p>"
        elementCards[index - 28].setAttribute('atomicNumber', index + 1)
    }
}
const HideAllElements = () => {
    for (let index = 0; index < 118; index++) {
        elementCards[index].style.background = "rgb(53, 53, 53)";
        elementCards[index].style.color = getColorByCategory(elementCards[index].className);

    }
    for (let index = 0; index < 56; index++) {

        elementCards[index].innerHTML = "<span> </span><h2 >" + (index + 1) + "</h2><p>****</p><p>----</p>"

    }
    for (let index = 56; index < 71; index++) {

        elementCards[index + 34].innerHTML = "<span> </span><h2 >" + (index + 1) + "</h2><p>****</p><p>----</p>"

    }
    for (let index = 71; index < 88; index++) {

        elementCards[index - 14].innerHTML = "<span> </span><h2 >" + (index + 1) + "</h2><p>****</p><p>----</p>"

    }
    for (let index = 88; index < 103; index++) {

        elementCards[index + 17].innerHTML = "<span> </span><h2 >" + (index + 1) + "</h2><p>****</p><p>----</p>"

    }
    for (let index = 103; index < 118; index++) {

        elementCards[index - 28].innerHTML = "<span> </span><h2 >" + (index + 1) + "</h2><p>****</p><p>----</p>"

    }
}
const showElement = (atomicNum, color) => {
    // console.log(atomicNum);
    let element = periodicTable[atomicNum]
    // console.log(element);
    for (let index = 0; index < periodicTable.length; index++) {
        if (elementCards[index].getAttribute('atomicNumber') == atomicNum + 1) {
            // console.log("it findes element");
            // console.log(element);
            elementCards[index].innerHTML = "<span>" + (atomicNum + 1) + "</span><h2>" + element.symbol + "</h2><p>" + element.name + "</p><p>" + element.mass + "</p>"
            elementCards[index].style.background = color;
            elementCards[index].style.color = "black";
        }

    }
}
const showHideControllPanel = () => {
    if (controllPanel.style.right == 0 || controllPanel.style.right == "0%") {
        controllPanel.style.right = "-20%"
        HideShowCP.style.right = "20%";
        HideShowCP.style.transform = "rotateZ(" + (rotated += 180) + "deg)"
    }
    else {
        controllPanel.style.right = "0%"
        HideShowCP.style.right = "0%";
        HideShowCP.style.transform = "rotateZ(" + (rotated += 180) + "deg)"
    }
}
const UpdateLeaderboard = () => {
    leaderBoard.innerHTML = "";
    Players.sort((a, b) => a.score - b.score);
    Players.reverse();
    for (let index = 0; index < Players.length; index++) {
        const element = Players[index];
        let item = document.createElement("div")
        let itemName = document.createElement("div")
        let itemScore = document.createElement("div")
        if (index == 0) {
            item.style.border = "5px solid gold";
            item.style.background = "rgb(255,215,0,0.4)";
            itemName.style.color = "yellow";
        }
        else if (index == 1) {
            item.style.border = "5px solid silver";
            item.style.background = "rgb(192,192,192,0.4)";
        }
        else if (index == 2) {
            item.style.border = "5px solid orangered";
            item.style.background = "rgb(255,69,0,0.4)";
            itemName.style.color = "darkred";
        }
        else {
            item.style.border = "5px solid darkslategray";
            item.style.background = "rgb(47,79,79,0.4)";
            itemName.style.color = "deepskyblue";
        }
        itemName.innerHTML = element.name;
        itemScore.innerHTML = element.score;
        item.className = "leaderItem"
        itemName.className = "leaderName"
        itemScore.className = "leaderScore"
        item.appendChild(itemName)
        item.appendChild(itemScore)
        leaderBoard.appendChild(item)


    }
}
const ShowHideLeaderBoard = () => {
    UpdateLeaderboard();
    if (leaderBoard.style.left == "1%") {
        leaderBoard.style.left = "-25%"
    }
    else {
        leaderBoard.style.left = "1%"
    }
}
const FullGame = (name) => {
    var playerAnswer = "";
    let AskedElement = Math.floor(Math.random() * 118);
    //let ChoiceElement = Math.floor(Math.random()*4);
    if (AskedElement >= 0 && AskedElement < 54) {
        elementCards[AskedElement].style.background = "white";
    }
    else if (AskedElement > 53 && AskedElement < 71) {
        elementCards[AskedElement + 34].style.background = "white";
    }
    else if (AskedElement > 70 && AskedElement < 88) {
        elementCards[AskedElement - 14].style.background = "white";
    }
    else if (AskedElement > 87 && AskedElement < 103) {
        elementCards[AskedElement + 17].style.background = "white";
    }
    else if (AskedElement > 102 && AskedElement < 118) {
        elementCards[AskedElement - 28].style.background = "white";
    }
    setTimeout(() => {
        playerAnswer = window.prompt("نماد اتم را بگو: ");
        // console.log(AskedElement+1);
        if (playerAnswer.toLocaleLowerCase() == (periodicTable[AskedElement].symbol).toLocaleLowerCase() || playerAnswer == periodicTable[AskedElement].name) {
            guessedPeriodicTable.push(periodicTable[AskedElement]);
            showElement(AskedElement, "limeGreen");
            Players[Players.findIndex(obj => obj.name === name)].score += (AskedElement + 1);
            UpdateLeaderboard();
        }
        else {
            Players[Players.findIndex(obj => obj.name === name)].score -= (Math.ceil((AskedElement - 1) / 2))
            Players[Players.findIndex(obj => obj.name === name)].mistakes += 1;
            showElement(AskedElement, "red");
            console.log("mistaka")
            console.log("Your Answer: " + playerAnswer);
            console.log("Right Answer: " + periodicTable[AskedElement].symbol);
            UpdateLeaderboard();
        }
    }, 1000);

}
/*PC Functions*/

/*Phone Functions*/
const hideCard = (el) => {
    console.log(getColorByCategory(elementCards[el]));
    phoneyElements.style.color = "white"
    phoneyElements.style.border = "5px solid white"
    phoneyElements.style.backgroundColor = "rgba(53,53,53)"
}
const showCard = (element, color) => {
    let el = periodicTable[element]
    phoneyElements.innerHTML = "<span>" + (element+1) + "</span><h2>" + el.symbol + "<h2><p>" + el.name + "</p><p>" + el.mass + "</p>"
    phoneyElements.style.backgroundColor = color
    phoneyElements.style.color = "black"
    phoneyElements.style.border = "5px solid black"
}
const phoneGame = (name) => {
    // alert("PhoneGame")
    var playerAnswer = "";
    let AskedElement = Math.floor(Math.random() * 118);
    hideCard(AskedElement)
    phoneyElements.innerHTML = "<span></span><h2>" + (AskedElement + 1) + "<h2><p></p><p></p>"
    setTimeout(() => {
        playerAnswer = window.prompt("نماد اتم را بگو: ");
        // console.log(AskedElement+1);
        if (playerAnswer.toLocaleLowerCase() == (periodicTable[AskedElement].symbol).toLocaleLowerCase() || playerAnswer == periodicTable[AskedElement].name) {
            guessedPeriodicTable.push(periodicTable[AskedElement]);
            showCard(AskedElement, "limeGreen");
            Players[Players.findIndex(obj => obj.name === name)].score += (AskedElement + 1);
            UpdateLeaderboard();
        }
        else {
            Players[Players.findIndex(obj => obj.name === name)].score -= (Math.ceil((AskedElement - 1) / 2))
            Players[Players.findIndex(obj => obj.name === name)].mistakes += 1;
            showCard(AskedElement, "red");
            console.log("mistaka")
            console.log("Your Answer: " + playerAnswer);
            console.log("Right Answer: " + periodicTable[AskedElement].symbol);
            UpdateLeaderboard();
        }
    }, 1000);

}
/*Phone Functions*/
const StartNewGame = () => {
    const displayStyle = window.getComputedStyle(phoneyElements).getPropertyValue('display');
    let playerName = window.prompt(":نام خود را وارد کنید", "بازیکن " + playerNum)
    let playerExists = false;
    for (let i = 0; i < Players.length; i++) {
        if (playerName == Players[i].name) {
            playerExists = true;
            break;
        }
    }
    if (displayStyle === 'none') {
        HideAllElements();
        // alert("PC")
        if (playerExists) {
            if (Players[Players.findIndex(obj => obj.name === currentPlayer)].mistakes >= 5) { alert(currentPlayer + "پنج بار باخته و اخراج شده") }
            else {
                HideAllElements();
                FullGame(playerName)
            }

        }
        else {
            playerNum++;
            gameStarted = 1;
            Players.push({ name: playerName, score: 0, mistakes: 0 })
            HideAllElements();
            FullGame(playerName);
        }
        currentPlayer = playerName;
    }
    else if(displayStyle === 'flex') {
        controllPanel.style.right = "0%"
        // alert("PHONE")
        if (playerExists) {
            if (Players[Players.findIndex(obj => obj.name === currentPlayer)].mistakes >= 5) { alert(currentPlayer + "پنج بار باخته و اخراج شده") }
            else {
                phoneGame(playerName)
            }

        }
        else {
            playerNum++;
            gameStarted = 1;
            Players.push({ name: playerName, score: 0, mistakes: 0 })
            phoneGame(playerName);
        }
        currentPlayer = playerName;
    }

    /*update*/


}
const Continue = () => {
    const displayStyle = window.getComputedStyle(phoneyElements).getPropertyValue('display');
    if(displayStyle === 'none'){
        if (gameStarted == 0) {
            alert("باید بازی جدید شروع کنی تا ادامش بدی")
        }
        else {
            if (Players[Players.findIndex(obj => obj.name === currentPlayer)].mistakes >= 5) { alert(currentPlayer + "پنج بار باخته و اخراج شده") }
            else { FullGame(currentPlayer) }
        }
    }
    else if(displayStyle === 'flex'){
        controllPanel.style.right = "0%"
        if (gameStarted == 0) {
            alert("باید بازی جدید شروع کنی تا ادامش بدی")
        }
        else {
            if (Players[Players.findIndex(obj => obj.name === currentPlayer)].mistakes >= 5) { alert(currentPlayer + "پنج بار باخته و اخراج شده") }
            else { phoneGame(currentPlayer) }
        }
    }
}
HideShowCP.onmouseover = () => { HideShowCP.style.transform = "rotateZ(" + (rotated += 180) + "deg)" }
HideShowCP.onmouseout = () => { HideShowCP.style.transform = "rotateZ(" + (rotated += 180) + "deg)"; if (String(rotated).length > 5) { rotated = 0 } }

