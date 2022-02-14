import React from "react";
import './searchform.scss';
import { HiOutlineLocationMarker, HiUsers, HiOutlineCalendar } from 'react-icons/hi';

export default function SearchForm() {
    return (
        <div className="search">
            <h1 className="h1-title">Find and compare cheap flights</h1>
            <form className="search_container">
                <div className="search_container_group">
                    <HiOutlineLocationMarker /> 
                    <input type="text" className="search_container-input" />
                </div>
                <div className="search_container_group">
                    <HiOutlineLocationMarker /> 
                    <input type="text" className="search_container-input" />
                </div>
                <div className="search_container_group">
                    <HiUsers />
                    <input type="text" className="search_container-input" />
                </div><div className="search_container_group">
                    <HiOutlineCalendar /> 
                    <input type="text" className="search_container-input" />
                </div>
                <button className="search_container-button">
                    SEARCH
                </button>
            </form>
            <h1>We search and compare billions of real-time prices on plane tickets so you can easily find the cheapest, quickest, and best flight deals for you.</h1>
        </div>
    );
}
