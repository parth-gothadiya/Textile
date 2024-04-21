import React from 'react'
import { Button, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../Asset/textlie.png";
function Header() {

    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    return (
        <>
            <header className='bg-dark w-100 hight'>
                <section className='d-flex align-items-center justify-content-between'>
                    <div className='logoset'>
                        <img className='logo1' src={logo} alt='logo'></img>
                    </div>

                    <div>
                        <ul className='d-flex align-items-center justify-content-center sub-menu' >
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Categories</a></li>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>About</a></li>
                        </ul>
                    </div>

                    <div className='mx-5'>
                        {
                            isAuthenticated ? (
                                <Button type="Login" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Button>
                            ) :
                                (
                                    <Button type="Login" onClick={() => loginWithRedirect()}>Login</Button>
                                )}
                        {/* ------------second--------------- */}
                        {isAuthenticated &&
                            <p>{user.name}</p>}

                    </div>
                </section>

            </header>
        </>
    )
}
export default Header;
