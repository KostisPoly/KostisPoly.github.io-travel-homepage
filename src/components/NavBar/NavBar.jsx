import './navbar.scss'
import { CgGlobeAlt, CgEuro } from "react-icons/cg";

export default function NavBar() {

    return (
        <div className='nav'>
            <div className='nav_navbar'>
                <div className='nav_navbar-links'>
                    <div className='nav_navbar-links_logo'>
                        <img src="#" alt="logo" className="logo" />
                    </div>
                    <div className="nav_navbar-links_item">
                        <button className='language-select'>
                            <CgGlobeAlt />
                            <p>English</p>
                        </button>
                    </div>
                    <div className="nav_navbar-links_item">
                        <button className='currency-select'>
                            <CgEuro />
                            <p>Euro</p>
                        </button>
                    </div>
                    <div className="nav_navbar-links_item">
                        <button className='faq'>FAQ</button>
                    </div>
                    <div className="nav_navbar-links_item">
                        <button className='signin'>Sign In</button>
                    </div>
                    {/* <div className="nav_navbar-links_submenu">
                        <div className="nav_navbar_submenu-links">
                            <div className="nav_navbar-submenu-links_item">
                                <button className='language-select'>
                                    <CgGlobeAlt />
                                    <p>English</p>
                                </button>
                            </div>
                            <div className="nav_navbar-submenu-links_item">
                                <button className='currency-select'>
                                    <CgEuro />
                                    <p>Euro</p>
                                </button>
                            </div>
                            <div className="nav_navbar-submenu-links_item">
                                <button className='faq'>FAQ</button>
                            </div>
                            <div className="nav_navbar-submenu-links_item">
                            <button className='signin'>Sign In</button>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>

        </div>
    )
}
