import axios from 'axios'

const apiURL = "https://covid19.mathdro.id/api";
const apiURLDaily = "https://covid19.mathdro.id/api/daily"
const apiURLCountry = "https://covid19.mathdro.id/api/countries"

export const fetchData = async(countryName)=>{
    let dynamicURL = apiURL;
    console.log(countryName);
    if(countryName && countryName!=="global"){
        dynamicURL = apiURLCountry.concat("/").concat(countryName)
    }
    try {
        console.log(dynamicURL);
        let {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(dynamicURL);
        return {confirmed,recovered,deaths,lastUpdate};

    } catch (error) {
        console.log("Error fetching data from the API..!!");
        
    }
}

export const fetchDailyData = async()=>{
    try {
        const {data} = await axios.get(apiURLDaily)
        const modifiedData = data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date : dailyData.reportDate
        }));
        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchCountries = async()=>{
    try {
        const {data:{countries}} = await axios.get(apiURLCountry)
        return countries.map((Country)=>Country.name)
    } catch (error) {
        
    }
}