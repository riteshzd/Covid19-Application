import React, {useState, useEffect} from 'react'
import {fetchDailyData} from '../../api/index'
import styles from './Charts.module.css'
import {Line, Bar} from 'react-chartjs-2'

const Charts = ({data:{confirmed,recovered,deaths}, country})=>{
    const [dailyData, setDailyData] = useState([]);
    useEffect(()=>{
        const callAPI = async()=>{
            setDailyData(await fetchDailyData());
        }
        //console.log(dailyData);
        
        callAPI();
    },[])
    console.log(country);
    
    const lineChart =(
        dailyData.length !== 0
        ? (
            <Line
            data={{
                labels: dailyData.map(({date})=>date),
                datasets: [{
                    data: dailyData.map(({confirmed})=>confirmed),
                    label: 'Infected',
                    backgroundColor: 'rgb(0,0,255,0.3)',
                    fill: true
                },{
                    data: dailyData.map(({deaths})=>deaths),
                    label: 'Deaths',
                    backgroundColor: 'rgba(255,0,0,0.6)',
                    fill: true
                }]
            }}
        />) : null
    );

    const barChart = (
        confirmed
        ? (
            <Bar
                data={{
                    labels:['Infected', 'Recovered', 'Deaths'],
                    datasets:[{
                        label:'people',
                        backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                        data:[confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: {display:false},
                    title: {display:true, text:"Current scenario in "+country}
                }}
            />
        ) : null
    );

    return(
        <div className={styles.container}>
            {country&&country!=="Global" ? barChart : lineChart}
        </div>
    )
}

export default Charts;