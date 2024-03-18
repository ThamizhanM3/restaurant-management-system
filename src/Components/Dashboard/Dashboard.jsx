import React from 'react'
import './Dashboard.css'
import Orb from '../Orb/Orb'
import Navigation from '../Navigation/Navigation'
import { mydata } from '../Utils/dataNew'
import History from '../History/History'
import { expenseData, incomeData, totalExpense, totalIncome } from '../Utils/transactionData'
import { dollar } from '../Utils/Icons'
// import Chart from '../Chart/Chart'

let newData = [
    {
        hii: "HIII11",
        helloo: "HELLOO11"
    },
    {
        hii: "HIII22",
        helloo: "HELLOO22"
    },
]

const Dashboard = () => {
    return (
        <div className='Dashboard'>
            <main>
                <Navigation />
                <div className="content">
                    <div className="chart-con">
                        {/* <Chart /> */}
                        <h2>Your Total Income and Expense</h2>
                        <div className="amount-con">
                            <div className="income">
                                <h2>Restaurant Sales</h2>
                                <p>
                                    {dollar} {totalIncome[totalIncome.length - 1]}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Restaurant Expense</h2>
                                <p>
                                    {dollar} {totalExpense[totalExpense.length - 1]}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Account Balance</h2>
                                <p>
                                    {dollar} {totalIncome[totalIncome.length - 1] - totalExpense[totalExpense.length - 1]}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Income</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                {Math.min(...incomeData.map(item => item.amount))}
                            </p>
                            <p>
                                {Math.max(...incomeData.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                            {Math.min(...expenseData.map(item => item.amount))}
                            </p>
                            <p>
                            {Math.max(...expenseData.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard
