import React from 'react'
import './footer.scss'
import { FaFacebookSquare, FaTwitterSquare, FaTwitch, FaInstagramSquare, FaPinterestSquare, FaYoutubeSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer_icons">
                <FaFacebookSquare />
                <FaTwitterSquare />
                <FaInstagramSquare />
                <FaPinterestSquare />
                <FaTwitch />
                <FaYoutubeSquare />
            </div>
            <div className="footer_links">
                <div className="footer_links_company">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>About</li>
                        <li>Affiliates</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="footer_links_contact">
                    <h2>CONTACT</h2>
                    <ul>
                        <li>Support</li>
                        <li>Newsletter</li>
                        <li>Contacts</li>
                        <li>International travel documents</li>
                    </ul>
                </div>
                <div className="footer_links_other">
                    <h2>OTHER</h2>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of use</li>
                        <li>Accessibility</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
            </div>
            <div className="footer_links_copyright">
                <h2>&copy;2022 KostisPoly</h2>
                <p>Assets and media not owned by project creators.</p>
            </div>
        </div>
    )
}
