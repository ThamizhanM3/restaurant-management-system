import React from 'react'
import { incomeData } from '../Utils/transactionData'
import { dateFormat } from '../Utils/dateFormat'
import { Line } from "react-chartjs-2"
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'
function Chart() {
    const data = {
        labels: incomeData.map((inc) =>{
            const {date} = inc
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomeData.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
                tension: .2
            },
            {
                label: 'Expenses',
                data: [
                    // ...expenses.map((expense) => {
                    //     const {amount} = expense
                    //     return amount
                    // })
                    500, 600, 100, 5000
                ],
                backgroundColor: 'red',
                tension: .2
            }
        ]
    }

    return (
        <div className='Chart'>
            <Line data={data} />
        </div>
    )
}

export default Chart
