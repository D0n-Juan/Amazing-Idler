const CardDis = document.getElementById("CardDisplay")


function CreateHuman(){
    const Country = WeightedRandom(CountryProfiles)

    let countryName = Country.name
    let sex = WeightedRandom(Country.sex).name
    let income = ChooseIncome(Country, sex)
    let lifeExpectancy = RandomInt(Country.lifeExpectancy[sex]-10, Country.lifeExpectancy[sex]+10)
    let nameChoice = ChooseName(Country, sex)
    let name = `${nameChoice.NameFirst} ${nameChoice.NameLast}`
    let age = RandomInt(10, Country.medianAge[sex])
    let ethnicity = WeightedRandom(Country.ethnicity).name
    let religion = WeightedRandom(Country.religion).name
    let languages = ChooseLanguage(Country)
    let location = WeightedRandom(Country.locations).name
    let iq = ChooseIQ(Country, sex)

    rewardDis.textContent = name
    SetLabel(".country", "Country", countryName)
    SetLabel(".sex", "Sex", sex)
    SetLabel(".income", "Income", income)
    SetLabel(".lifeExpectancy", "Life Expectancy", lifeExpectancy)
    SetLabel(".age", "Age", age)
    SetLabel(".ethnicity", "Ethnicity", ethnicity)
    SetLabel(".religion", "Religion", religion)
    SetLabel(".languages", "Languages", languages)
    SetLabel(".location", "Location", location)
    SetLabel(".iq", "IQ", iq)
}

function SetLabel(className, label, value){
    CardDis.querySelector(className).textContent = `${label}: ${value}`
}

function ChooseName(Country, sex){
    let name = Country.name
    let choice = RandomInt(0, NamePools[name][sex].length - 1)
    let First = NamePools[name][sex][choice]
    choice = RandomInt(0, NamePools[name]["last"].length - 1)
    let Last = NamePools[name]["last"][choice]
    return{
        NameFirst: First,
        NameLast: Last
    }
}

function ChooseLanguage(Country){
    let languages = []
    while(languages.length === 0){
    Country.languages.forEach(element => {
        let choice = RandomInt(0,Country.weight)
        if(choice<=element.weight){
            languages.push(element.name)
        }
    })}
    console.log(languages)
    return languages
}

function ChooseIQ(Country, sex){
    let avg = Country.education.averageIQ[sex]
    let total = 0
    let divider = 3
    for (let i = 0; i<divider; i++){
        total += RandomInt(avg - 30, avg + 30)
    }
    return Math.round(total/divider)
}

function ChooseIncome(Country, sex){
    return Country.economy.gdpPerCapitaUSD
}