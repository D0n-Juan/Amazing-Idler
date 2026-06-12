//SCREEN---------------------------------------------------------------------------------------------------------------------
function UpdateScreen(Screen){
    document.getElementById(currentScreen).classList.remove("active");
    document.getElementById(Screen).classList.add("active");
    currentScreen = Screen
}

document.getElementById("StartButton").addEventListener("click", () =>{
    UpdateScreen("GameScreen")
});


//OVERLAY--------------------------------------------------------------------------------------------------------------------
function OpenOverlay(Overlay){
    if(currentOverlay){
        console.error("WARNING opening two overlays at once. currentOverlay: "+currentOverlay, "and trying to open: "+Overlay)
    }
    else{
        document.getElementById("OverlayRoot").classList.add("active")
        document.getElementById(Overlay).classList.add("active")
        currentOverlay = Overlay
    }
}

function CloseOverlay(Overlay){
    document.getElementById("OverlayRoot").classList.remove("active")
    document.getElementById(Overlay).classList.remove("active")
    currentOverlay = null
}

document.getElementById("OverlayRoot").addEventListener("click",(e)=>{
    if (e.target.id === "OverlayRoot" && currentOverlay != "PackOverlay"){
        CloseOverlay(currentOverlay)
    }
})

//ESCAPE-OVERLAY-------------------------------------------------------------------------------------------------------------
document.addEventListener("keydown",(e)=>{
    if(e.key === "Escape" && currentOverlay != "PackOverlay"){
        if(!currentOverlay){
            OpenOverlay("PauseOverlay")
        }
        else{
            CloseOverlay(currentOverlay)
        }
    }
    else if(e.key === "Escape" && currentOverlay === "PackOverlay"){
        ShowNextReward()
    }
})

document.getElementById("PauseOverlay").querySelector(".continue-btn").addEventListener("click",()=>{
    CloseOverlay("PauseOverlay")
})
