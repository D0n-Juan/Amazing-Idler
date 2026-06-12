document.title = window.location.pathname.split("/").at(-2)

UpdateScreen(startScreen)
RenderShop()
UpdateUi()

setInterval(() => {
  cash += Roster.length;
  UpdateUi()
}, 1000);



function RandomInt(min,max){
  return Math.floor(Math.random()*(max-min+1))+min
}

function WeightedRandom(list){
    if(!Array.isArray(list)){
    console.error("WeightedRandom expected an array, got:", list)
    return null
    }

    let TotalWeight = 0
    let WeightTracker = 0
    for(const element of list){
        TotalWeight += element.weight
    };
    const Choice = (Math.random()*TotalWeight)
    for (const element of list){
        WeightTracker += element.weight
        if(WeightTracker>=Choice){
            return element
        }
    }
    console.error("This shouldnt happen...", list)
    console.error("Choice:", Choice)
    return 
}
