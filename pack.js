const rewardDis = document.getElementById("PackOverlay").querySelector(".reward")
const rewardImg = document.getElementById("RewardImage")
const shop = document.getElementById("shop")
let RewardIndex = 0
let CurrentReward = []

document.getElementById("shop").addEventListener("click", (e =>{
    if(e.target.matches("button")){
        BuyPack(e.target.id,e.target)
    }
}))

function ChooseRewardType(PackID){
    const reward = Packs[PackID].rewards
    let TotalWeight = 0
    reward.forEach(element => {
        TotalWeight += element.weight
    })
    
    const Choice = Math.floor(Math.random()*TotalWeight)+1
    let WeightTracker = 0

    for (const element of reward) {
        WeightTracker += element.weight
        if (WeightTracker >= Choice){
            return element
//          ADD THE AMOUNT WITH Custom Distribution!!
        }
    }
}

function ChooseRewardAmount(RewardType){
    let reward = RandomInt(RewardType.min, RewardType.max)
    return reward
}

function BuyPack(PackID, button){
    const pack = Packs[PackID]
    if(cash >= pack.cost){
        cash-=pack.cost
        OpenPack(PackID)
    }
    //Add to indicate WHY pack couldnt be bought (not enough cash or slots)
    else{
        clearTimeout(button.FlashTimeout)  //cancels FlashTimeout
        button.classList.add("FlashRed");
        button.FlashTimeout = setTimeout(() => {
            button.classList.remove("FlashRed");
        }, 500)
    }
}

function ApplyReward(RewardType, RewardAmount){
    document.getElementById("CardDisplay").classList.remove("active")
    if (RewardType==="Coins"){
       cash += RewardAmount
    }
    else if (RewardType==="Human"){
        document.getElementById("CardDisplay").classList.add("active")
        CreateHuman()
    }
    else{
        console.error("NO REWARD!!")
    }
}

function OpenPack(PackID){
    OpenOverlay("PackOverlay")
    for(let i=0; i<Packs[PackID].cards; i++){
        let RewardType = ChooseRewardType(PackID)
        let RewardAmount = ChooseRewardAmount(RewardType)
        CurrentReward.push({
            type: RewardType.type,
            amount: RewardAmount,
            img: RewardType.image
        })
    }
    ShowNextReward()
}

document.getElementById("OverlayRoot").addEventListener("click",(e)=>{
    if (e.target.id === "OverlayRoot" && currentOverlay === "PackOverlay"){
        ShowNextReward()
    }
})

function ShowNextReward(){
    if (RewardIndex >= CurrentReward.length){
        CloseOverlay("PackOverlay")
        RewardIndex = 0
        CurrentReward = []
        return
    }
    const reward = CurrentReward[RewardIndex]
    rewardDis.textContent = `${reward.type} ${reward.amount}`
    rewardImg.src = reward.img
    document.getElementById("PackOverlay").querySelector(".counter").textContent = `Cards: ${CurrentReward.length - RewardIndex}`
    RewardIndex ++
    ApplyReward(reward.type, reward.amount)
    UpdateUi()
}

function RenderShop(){
    shop.innerHTML = ""

    Object.entries(Packs).forEach(([PackID, pack])=>{
    const element = document.createElement("button")
    element.id = PackID
    element.classList.add("pack", "visible", pack.rarity)
    element.textContent = `Buy ${pack.name}\n\n${pack.cost}$\n\nCards: ${pack.cards}`
    shop.appendChild(element)
    })
}