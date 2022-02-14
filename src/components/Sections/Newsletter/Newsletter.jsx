import React from 'react'
import './newsletter.scss'

export default function Newsletter() {
    return (
        <div className='newsletter'>
            <p>Stay informed on the coolest new travel discounts and news!</p>
            <div className="newsletter_group">
                <input type="text" placeholder='Please fill in your email!'/>
                <button>Register</button>
            </div>
            <h2>Travel Smarter</h2>
        </div>
    )
}
