import React from 'react'
import './destinations.scss'

export default function Destinations() {
    return (
        <div className='destinations'>
            <h1>Trending destinations</h1>
            <div className="destinations_list">
                <div className="destinations_list-item dest">
                    <p>Stockholm</p>
                    <img src={require('../../../assets/stockholm.jpg')} alt="" />
                </div>
                <div className="destinations_list-item dest">
                    <p>Tokyo</p>
                    <img src={require('../../../assets/tokyo.jpg')} alt="tokyo" />
                </div>
                <div className="destinations_list-item dest">
                    <p>Canada</p>
                    <img src={require('../../../assets/canada.jpg')} alt="" />
                </div>
                <div className="destinations_list-item dest">
                    <p>Seattle</p>
                    <img src={require('../../../assets/seattle.jpg')} alt="" />
                </div>
                <div className="destinations_list-item dest">
                    <p>Rome</p>    
                    <img src={require('../../../assets/rome.jpg')} alt="" />
                </div>
                <div className="destinations_list-item dest">
                    <p>San-juan</p>
                    <img src={require('../../../assets/san-juan.jpg')} alt="" />
                </div>
                <div className="destinations_list-item dest">
                    <p>Sofia</p>
                    <img src={require('../../../assets/sofia.jpg')} alt="" />
                </div>
                <div className="destinations_list-item dest">
                    <p>Lisbon</p>
                    <img src={require('../../../assets/lisbon.jpg')} alt="" />
                </div>
            </div>
        </div>
    )
}
