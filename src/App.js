import React from 'react';
import {Cards,Charts,CountryPicker} from './Components'
import styles from './App.module.css'
import {fetchData} from './api/index'

class App extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:{},
            choosenCountry:""
        }
    }

    async componentDidMount(){
        const res = await fetchData("");
        this.setState({data:res});
    }

    handleCountryChange = async(countryName)=>{
        const res = await fetchData(countryName);
        this.setState({data:res,choosenCountry:countryName});
        console.log(countryName);
        console.log(res);
    }
    render(){

        const {data, choosenCountry} = this.state;
        console.log(data)
        return(
            <div>
                <div className={styles.container}>
                <div className={styles.header}>
                    <h3>COVID-19 Application</h3>
                </div>   
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={choosenCountry}/>
                </div>
                <div className={styles.designer}>
                    <h6><a href="https://github.com/riteshzd/Covid19-Application">designed by riteshzd</a></h6>
                </div>
            </div>
    
        )
    }
}

export default App;