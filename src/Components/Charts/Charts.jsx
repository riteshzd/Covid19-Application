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
                    backgroundColor: 'rgba(127, 127, 255, 0.3)',
                    opacity:0.5,
                    fill: true
                },{
                    data: dailyData.map(({deaths})=>deaths),
                    label: 'Deaths',
                    backgroundColor: 'rgba(255, 127, 127, 0.6)',
                    opacity:0.5,
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
                        backgroundColor:['rgba(127, 127, 255, 1)','rgba(127,255,127,1)','rgba(255, 127, 127, 1)'],
                        data:[confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: {display:false},
                    title: {display:true, text:"Current scenario in "+country , fontColor:"white"},
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