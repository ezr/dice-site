const numbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six"
};

function getRandomNumber() {
    let array = new Uint8Array(1);
    let imbalanced = true;
    while (imbalanced) {
        window.crypto.getRandomValues(array);
        if (array[0] != 126 && array[0] != 127) {
        /* if we don't check this, then the dice will
           be slightly more likely to roll 1 or 2  */
            imbalanced = false;
        }
    }
    return (array[0] % 6) + 1;
}

function roller() {
    let diceArr = document.querySelectorAll('img');
    diceArr.forEach(myImage => {
        animater(myImage);
        let roll = getRandomNumber();
        myImage.setAttribute('src','images/200px-green-Dice-' + roll + '.png');
        myImage.setAttribute('title', numbers[roll])
        myImage.setAttribute('alt', numbers[roll])
    })
}

function animater(e) {
    e.className = "resetimage";
    window.requestAnimationFrame(function(time) {
        window.requestAnimationFrame(function(time) {
            e.className = "image";
        });
    });
}

function addDice() {
    var itm = document.getElementById("diceImage");
    var cln = itm.cloneNode(true);
    document.getElementById("dice").appendChild(cln);
}

function subtractDice() {
    var currentNumber = document.querySelectorAll("#diceImage").length
    if (currentNumber == 1) {
        return;
    }
    var itm = document.getElementById("diceImage");
    itm.remove()
}
