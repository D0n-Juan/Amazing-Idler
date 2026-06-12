const debug1 = document.getElementById("debug1")

debug1.addEventListener("click", ()=>{

})

document.addEventListener("keydown",(e)=>{
    if(e.key === "1"){
        console.log(WeightedRandom(CountryProfiles))
    }
})



