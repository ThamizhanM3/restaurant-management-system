import React from 'react'
import Navigation from '../Navigation/Navigation'
import './Transactions.css'
import { expenseData, history, incomeData } from '../Utils/transactionData'

let dateData

function Transactions() {
    return (
        <div className='Transactions'>
            <main>
                <Navigation />
                <div className="content">
                    <h2>All Transactions History</h2>
                    <div className="context">

                        <div className="incomes">
                            {incomeData.map((item) =>{
                                const {_id, title, amount, type} = item
                                return (
                                    <div key={_id} className="history-item">
                                        <p style={{
                                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                                        }}>
                                            {title}
                                        </p>
                                        <p style={{
                                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                                        }}>
                                            {
                                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                                            }
                                        </p>
                                    </div>
                                ) 
                            })}
                        </div>
                        <div className="expenses">
                            {expenseData.map((item) =>{
                                const {_id, title, amount, type} = item
                                return (
                                    <div key={_id} className="history-item">
                                        <p style={{
                                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                                        }}>
                                            {title}
                                        </p>
                                        <p style={{
                                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                                        }}>
                                            {
                                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                                            }
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Transactions
