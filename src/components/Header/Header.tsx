import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="flex flex-row">
                <div>LOGO</div>

                <ul>
                    <li>Home</li>
                    <li>
                        Services
                        <div>
                            <ul>
                                <li>Data Analytics</li>
                                <li>Data Engineering</li>
                            </ul>
                        </div>
                    </li>
                    <li>Community</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;