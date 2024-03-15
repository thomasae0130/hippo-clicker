let hippo = 0;
let lilStickBoy = 0;
let lilStickBoyCost = 20;
let stickMan= 0;
let stickManCost = 100;
let stickRobot = 0;
let stickRobotCost = 1000;
let mysticalStick = 0;
let mysticalStickCost = 10000;
let jackieChanClone = 0;
let jackieChanCloneCost = 100000;
let alien = 0;
let alienCost = 1000000;
let clickMultiplier= 0;
let clickMultiplierCost = 10;
let hippoGod = 0;
let hippoGodCost = 100000000;

const hippoImage = document.querySelector(".hippoImage");
const hippoTotal = document.querySelector("#hipposText");


boyButton.onclick = buyStickBoy;
manButton.onclick = buyStickMan;
robotButton.onclick = buyStickRobot;
minecraftButton.onclick = buyMysticalStick;
jackieChanButton.onclick = buyJackieChanClone; 
alienButton.onclick = buyAlien;
clickerButton.onclick = buyClickerMultiplier; 
hippoGodButton.onclick= buyHippoGod;
 //^^^^^^^^^^^^^^^^ VARIABLES ^^^^^^^^^^^^^^^^^^^^^^^^

hippoImage.addEventListener('click', function() {
hippo += 1 * (1+(0.2 *clickMultiplier));
    hipposText.innerText = hippo;
    
});
function buyClickerMultiplier() {
    if ( hippo >= clickMultiplierCost) {
        hippo -= clickMultiplierCost;
        hippoTotal.innerText = hippo;
        clickMultiplier += 1;
        chatText.innerText = "Congrats you own a click multiplier"
        clickerMultiplerText.innerText =parseFloat(((clickMultiplier * 0.2) + 1).toFixed(2));
        clickMultiplierCost = parseFloat((10 *((0.3 * clickMultiplier) + 1)).toFixed(2));
        costNumber.innerText = clickMultiplierCost;
    } else {
        chatText.innerText = "Error insufficient funds for a clicker multiplier!";
    }
}
//^^^^^^^^^^^^^ HIPPO IMAGE CLICKER ^^^^^^^^^^^^^^^^^^
function buyStickBoy() {
    if (hippo >= lilStickBoyCost) {
        hippo -= lilStickBoyCost;
        hippoTotal.innerText = hippo;
        lilStickBoy += 1;
        chatText.innerText = "Congrats you own a little boy. God, Mom, and Dad must be so proud!";
        stickBoyText.innerText = lilStickBoy;
        lilStickBoyCost = parseFloat((20 * ((0.3 * lilStickBoy) + 1)).toFixed(2));
        costNumberStickBoy.innerText = lilStickBoyCost;
        lsbpsn.innerText = parseFloat((lilStickBoy * 0.2).toFixed(2));

    }else {
        chatText.innerText = "Error insufficient funds for a little boy with a stick!";
    }
//^^^^^^^^^^^^^^^^^^^^^^^^ BUYING STICK BOY ^^^^^^^^^^^^^^^^^
} 
function buyStickMan() {
    if (hippo >= stickManCost) {
        hippo -= stickManCost;
        hippoTotal.innerText = hippo;
        stickMan += 1;
        chatText.innerText = "Congrats you own a full grown man. Didn't know you were on that side of the civil war.";
        stickManText.innerText = stickMan;
        stickManCost = parseFloat((100 * ((0.3 * stickMan) + 1)).toFixed(2));
        costNumberStickMan.innerText = stickManCost;
        smpsn.innerText = parseFloat((stickMan * 1.4).toFixed(2));
    } else {
        chatText.innerText = "Error insufficient funds for a man with a stick!";
    }
}
//^^^^^^^^^^^^^^^^^^^^^ BUYING STICK MAN ^^^^^^^^^^^^^^^^^^^^^^
function buyStickRobot() {
    if (hippo >= stickRobotCost) {
        hippo -= stickRobotCost;
        hippoTotal.innerText = hippo;
        stickRobot += 1;
        chatText.innerText = "Congats you own a robot. Ahead of the technical revolution are we?"
        stickRobotText.innerText = stickRobot;
        stickRobotCost = parseFloat((1000 * ((0.3 * stickRobot) + 1)).toFixed(2));
        stickRobotCostNumber.innerText = stickRobotCost;
        srpsn.innerText = parseFloat((stickRobot * 16).toFixed(2));
    }else {
        chatText.innerText = "Error insufficient funds for a robot with a stick!";
    }
}
//^^^^^^^^^^^^^^^^^^^^^^^^^ BUYING STICK ROBOT ^^^^^^^^^^^^^^^^^^^^^^^^^
function buyMysticalStick() {
    if (hippo >= mysticalStickCost) {
        hippo -= mysticalStickCost;
        mysticalStick += 1;
        chatText.innerText = "Congrats you own a mystical minecraft stick. How did you even get that here?";
        minecraftStickText.innerText = mysticalStick;
        mysticalStickCost = parseFloat((10000 * ((0.3 * mysticalStick) + 1)).toFixed(2));
        mysticalStickNumber.innerText = mysticalStickCost;
        mspsn.innerText = parseFloat((mysticalStick * 180).toFixed(2));
    } else {
        chatText.innerText = "Error insufficient funds for a minecraft stick!"
    }
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^ BUYING MINECRAFT STICK ^^^^^^^^^^^^^^^^^^^^^^^^^
function buyJackieChanClone() {
    if (hippo >= jackieChanCloneCost) {
        hippo -= jackieChanCloneCost;
        jackieChanClone += 1;
        chatText.innerText = "Congrats you have hired a Jackie Chan clone!";
        jackieChanText.innerText = jackieChanClone;
        jackieChanCloneCost = parseFloat((100000 * ((0.3 * jackieChanClone) + 1)).toFixed(2));
        jackieChanNumber.innerText = jackieChanCloneCost;
        jccpsn.innerText = parseFloat((jackieChanClone * 2000).toFixed(2));
    }else {
        chatText.innerText = "Error insufficient funds for a Jackie Chan clone!"
    }
}
function buyAlien() {
    if (hippo >= alienCost) {
        hippo -= alienCost;
        alien += 1;
        chatText.innerText = "Congrats you have now hired an alien!";
        alienStickText.innerText = alien;
        alienCost = parseFloat((1000000 * ((0.3 * alien) + 1)).toFixed(2));
        alienNumber.innerText = alienCost;
        apsn.innerText = parseFloat((alien * 22000).toFixed(2));
    }else {
        chatText.innerText = "Error insufficient funds for an alien!";
    }
}
function buyHippoGod() {
    if(hippo >= hippoGodCost) {
        hippo -= hippoGodCost;
        hippoGod += 1;
        chatText.innerText = "Congrats you have now bought hippo god magic!";
        godHippoText.innerText = hippoGod;
        hippoGodCost = parseFloat((100000000 *((0.3 * hippoGod) + 1)).toFixed(2));
        hippoGodNumber.innerText = hippoGodCost;
        ghpsn.innerText = parseFloat((240000 * hippoGod).toFixed(2));
    } else{
        chatText.innerText = "Error insufficient funds for hippo god magic!"
    }

}
function increaseHippo() {
    hippo += (lilStickBoy * 0.2);
    hippo += (stickMan * 1.4);
    hippo += (stickRobot * 16);
    hippo += (mysticalStick * 180);
    hippo += (jackieChanClone * 2000);
    hippo += (alien * 22000);
    hippo+= (hippoGod * 240000);
    hippo = parseFloat(hippo.toFixed(2));
    hippoTotal.innerText = hippo;
}

setInterval (increaseHippo, 1000);
//^^^^^^^^^^^^^^^ SETS ITEMS TO ADD TO HIPPO AT A SELECT RATE PER SECOND ^^^^^^^^^^^^^^^^
window.onload = function() {
    if(localStorage.getItem('savedGameState')) {
        let savedGameState = JSON.parse(localStorage.getItem('savedGameState'));
        hippo = savedGameState.hippo;
        lilStickBoy = savedGameState.lilStickBoy;
        stickMan = savedGameState.stickMan;
        stickRobot = savedGameState.stickRobot;
        mysticalStick = savedGameState.mysticalStick;
        jackieChanClone = savedGameState.jackieChanClone;
        alien = savedGameState.alien;
        clickMultiplier = savedGameState.clickMultiplier;
        
        // Update the display with the loaded values
        updateDisplay();
    }
}
function saveGameState() {
    let gameState = {
        hippo: hippo,
        lilStickBoy: lilStickBoy,
        stickMan: stickMan,
        stickRobot: stickRobot,
        mysticalStick: mysticalStick,
        jackieChanClone: jackieChanClone,
        alien: alien,
        clickMultiplier: clickMultiplier
    };

    localStorage.setItem('savedGameState', JSON.stringify(gameState));
}
function updateDisplay() {
    hipposText.innerText = hippo;
    stickBoyText.innerText = lilStickBoy;
    stickManText.innerText = stickMan;
    stickRobotText.innerText = stickRobot;
    minecraftStickText.innerText = mysticalStick;
    jackieChanText.innerText = jackieChanClone;
    alienStickText.innerText = alien;
    clickerMultiplerText.innerText = (clickMultiplier * 0.2) + 1;
}
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('beforeunload', function() {
        saveGameState();
    });
});