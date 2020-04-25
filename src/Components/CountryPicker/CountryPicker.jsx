import React,{useState, useEffect} from 'react'
import {fetchCountries} from '../../api/index'
import Select from 'react-select'

const CountryPicker = ({handleCountryChange})=>{
    const[fetchedCountries, setFetchedCountries] = useState([])

    useEffect(()=>{
        const fetchAPI= async()=>{
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI();
    },[setFetchedCountries]);

    console.log(fetchedCountries);
    
    const customStyles = {
        option: (provided, state) => ({  //manages the options
          ...provided,
          backgroundColor: state.isSelected ? 'gray' : 'cornsilk',
          '&:hover': {
            backgroundColor:'darkgray'
        }
        }),
        control: base => ({  //manages the select bar
            ...base,
            width: '300px',
            backgroundColor: 'black'
          }),
          singleValue: styles=>({  //manages the selected option
              ...styles,
              color:'#808080'
          }),
          placeholder:(defaultStyles) =>{  //manages the placeholder string
              return{
                  ...defaultStyles,
                  color:'#808080'
              }
          }  
        
      }
    
    let countryList = []
    let count = 0;
    let singleCountry={}
    countryList = fetchedCountries.map(function (country){
        count === 0 ? singleCountry = {value:"World",label:"Global"}: singleCountry = {value:country,label:country}
        count+=1
        return singleCountry
    })

    return(
        <div>
        <Select 
            styles={customStyles}
            options={countryList} 
            onChange={(e)=>handleCountryChange(e.value)}
            placeholder="Select a country"
            defaultValue={countryList[0]}/>
        </div>
        
    )
}

export default CountryPicker;