import React from 'react'
import './mobileapp.scss'

export default function MobileApp() {
    return (
        <div className='mobileapp'>
            <div className="mobileapp_container">
                <img src={require('../../../assets/mobile-app.webp')} alt="" />
                <div className="mobileapp_container_details">
                    <h2>Plan your trip in a snap, download the app</h2>
                    <p>From home or hammock, organize your entire escape and explore app offers</p>
                    <div className="mobileapp_container_details-group">
                        <select defaultValue="uk">
                            <option value="gr">Greece +30</option>
                            <option value="uk">UK +44</option>
                            <option value="usa">USA +1</option>
                            <option value="de">Germany +49</option>
                        </select>
                        <input type="text" placeholder='Phone number'/>
                        <button>Get the app</button>
                    </div>
                    <p>By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</p>
                </div>
                <img src={require('../../../assets/mobile-laptop.jpg')} alt="" />
            </div>
        </div>
    )
}
