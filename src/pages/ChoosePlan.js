import React, {Component} from 'react';
import styled from 'styled-components';
import logo from '../svg/logo.svg';
import {Link, NavLink} from 'react-router-dom';
import CheckmarkLogo from '../images/Checkmark.png';
import Button from '../components/Button';
import FooterChoosePlan from '../components/ChoosePlan/FooterChoosePlan';

class ChoosePlan extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render(){
    return (
        <MainContainer>
            {/* Header Top */}
            <div className='header-top'>
                <Link to='/'>
                    <Logo src={logo} alt='logo' />
                </Link>
                <NavLink to='/login' className='btn signIn-btn'>
                    Sign In
                </NavLink>
            </div>
            {/* Header Content */}
            <div className='header-content'>
                <img className='checkmark-logo' src={CheckmarkLogo}
                alt='Check mark logo' />
                <p>Step <strong>1</strong> of <strong>3</strong></p>
                <h2>Choose your plan</h2>
                <div className='checked-list'>
                    <div className='bullet'>No commitment, cancel anytime.</div>
                    <div className='bullet'>Everything on Netflix for one low price.</div>
                    <div className='bullet'>Unlimited viewing on all your devices.</div>
                </div>
                <Button>See the plans</Button>
            </div>
            <FooterChoosePlan />
        </MainContainer> 
    )
    }
}
export default ChoosePlan

//Main COntainer
const MainContainer = styled.div`
    background: #fff;

    //Header Top
    .header-top {
        background: #fff;
        height: 6rem;
        border-bottom: 1px solid #e6e6e6;
    }

    //Header Content
    .header-content {
        display: grid;
        justify-content: center;
        background: #fff;
        color: rgba(20, 20, 20);
        margin-bottom: 6rem;
        width: 65%;
        position: relative;
        margin: auto;
        margin-top: 4.5rem;
        text-align: center;
        align-content: center;
        flex-direction: column;
        z-index: 2;
    }

    //Checkmark logo
    .checkmark-logo {
        width: 3rem;
        margin-top: 3.125rem;
        margin-bottom: 2rem;
    }

    .header-content img {
        margin: 6.25rem auto 1.875rem;
    }

    //Checked list
    .checked-list {
        text-align: left;
        margin: 1rem auto 3rem;
        padding-left: 1.5625rem;
        width: 85%;
        font-size: 17px;
        padding: auto;
    }

    //Bullets
    .bullet {
        margin-top: 1rem;
        margin-left: 1rem;
        text-indent: -1em;
        line-height: 1.2rem;
    }

    .checked-list .bullet::before {
        color: transparent;
        display: inline-block;
        position: relative;
        height: 0.3em;
        width: 0.8em;
        content: '';
        left: -0.9375rem;
        button: 0.1875rem;
        border-bottom: 1px solid #e50914;
        border-left: 1px solid #e50914;
        transform: rotate(-45deg);
    }

    //Sign In button
    .signIn-btn {
        margin: 1.5625rem 3% 0;
        padding: 0.4375rem 1.0635rem;
        font-width: 700;
        line-height: normal;
        color: rgba(20, 20, 20);
        font-size: 1.25rem;
        right: 0;
        position: absolute;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }

`;

//Logo
const Logo = styled.img`
    width: 10.5rem;
    height: 3.5rem;
    position: absolute;
    top: 49%;
    left: 8%;
    transform: translate(-50%, -50%);
    margin-left: 0;
`;