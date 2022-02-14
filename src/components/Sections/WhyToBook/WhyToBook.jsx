import React from 'react'
import './whytobook.scss'
import { GiReceiveMoney, GiCalendar, GiTakeMyMoney, GiTicket, GiBanknote } from "react-icons/gi";

export const WhyToBook = () => {
    return (
        <div className='whybook'>
            <h1>Everything you need for a perfect holiday</h1>
            <div className="whybook_list">
                <div className="whybook_list-item">
                    <GiReceiveMoney />
                    <h3>Competitive prices</h3>
                    <p>Find the best deals available from 900+ travel sites</p>
                </div>
                <div className="whybook_list-item">
                    <GiCalendar />
                    <h3>Booking flexibility</h3>
                    <p>Easily find flights with no change fees.</p>
                </div>
                <div className="whybook_list-item">
                    <GiTakeMyMoney />
                    <h3>Deposit option</h3>
                    <p>Secure the price of your desired
                    holiday today with just
                    €50 per person.</p>
                </div>
                <div className="whybook_list-item">
                    <GiTicket />
                    <h3>Countless options</h3>
                    <p>Specially selected destinations for your
                    perfect getaway</p>
                </div>
                <div className="whybook_list-item">
                    <GiBanknote />
                    <h3>Miles by Miles+Bonus</h3>
                    <p>Earn tier and award miles, simply
                    by booking both your flight and
                    your hotel at once</p>
                </div>
            </div>
        </div>
    )
}
