const CashDis = document.getElementById("Cash")
const PeopleDis = document.getElementById("People")


function UpdateUiRoster(num){
    if (num <= maxSlots){
        for (let i = 1; i <= num; i++) {
            document.getElementById("roster"+i).classList.add("filled", "visible")
        }
    }
    else{
    }
}

function UpdateUi(){
    CashDis.textContent = "Cash:"+cash.toLocaleString();
    PeopleDis.textContent = "People:"+Roster.length;
    UpdateUiRoster(Roster.length)
}


