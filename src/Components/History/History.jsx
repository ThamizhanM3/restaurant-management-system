import React from 'react'
import "./History.css"
import { history } from '../Utils/transactionData'

function History() {
    return (
        <div className='History'>
            <h2>Recent History</h2>
            {history.map((item) =>{
                const {id, title, amount, type} = item
                return (
                    <div key={id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {id}
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
    )
}

export default History
