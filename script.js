let balance = 100;

const symbols  = ["🍒", "🍋", "🍉", "⭐", "💎"];

function spin() {
    if(balance <= 0) {
        document.getElementById("result").textContent = 
            "Недостаточно монет";
        return;
    }

    balance -= 10;

    const a = symbols[Math.floor(Math.random() * symbols.length)];
    const b = symbols[Math.floor(Math.random() * symbols.length)];
    const c = symbols[Math.floor(Math.random() * symbols.length)];

    let  text = `${a} ${b} ${c}`;

    if (a === b && b === c ) {
        balance += 50;
        text += "Вы Выйграли 50 монет!";
    } else if (a === b || b === c || a === c) {
        balance += 20;
        text += "Вы Выйграли 20 монет!";
    } else {
        text += "Попробуйте еще раз!";
    }

    document.getElementById("balance").textContent = balance;
    document.getElementById("result").textContent = text;
}