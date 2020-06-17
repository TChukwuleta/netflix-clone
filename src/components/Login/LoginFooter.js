import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Icon} from 'react-icons-kit';
import {iosWorld} from 'react-icons-kit/ionicons/iosWorld';
import {arrowSortedDown} from 'react-icons-kit/typicons/arrowSortedDown';

export class Footer extends Component {
    state = {
        langContent: false
    }

    handleToggle = e => {
        e.preventDefault();
        this.setState({
            langContent: !this.state.langContent
        })
    }

    render() {
        return (
            <FooterContainer>
                <span style={{marginLeft: '15%', fontSize: '1.25rem'}}>
                     Question? <Link>Call 1-877-742-1335</Link>
                      </span>
                <div className='footer-column'>
                    <div className='bt'>
                    <ul>
                       <li>
                           <Link>Gift Card Terms</Link>
                        </li>  
                    </ul>
                    </div>
                    <div className='bt2'>
                    <ul>
                       <li>
                           <Link>Terms of Use</Link>
                        </li>  
                    </ul>
                    </div>
                    <div className='bt3'>
                    <ul>
                       <li>
                           <Link>Privacy Statement</Link>
                        </li> 
                    </ul>
                    </div>

                    {/* Language Button */}
                    <div className='lang-btn' onClick={this.handleToggle}>
                        <Icon icon={iosWorld} size={15} />
                        &nbsp;&nbsp;English&nbsp;&nbsp;
                        <Icon icon={arrowSortedDown} />
                    </div>
                </div>
                {/* Toggle Language Content */}
                {this.state.langContent && (
                <div className='lang-toggle'>
                    <ul>
                        <li>English</li>
                    </ul>
                    <ul>
                        <li>French</li>
                    </ul>
                </div>
                )}
            </FooterContainer>
        )
    }
}

export default Footer

const FooterContainer = styled.footer`
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin-top: 6rem;
    position: relative;
    z-index: 5;
 
    .footer-column {
        width: 70%;
        margin: 1rem auto 0;
        color: #999;
        font-size: 0.9rem;
        overflow: auto;
        display: grid;    
        grid-template-colums: repeat(4, 1fr);
    }

    .bt {
        grid-column: 1 / 2;
    }

    .bt2 {
        grid-column: 2 / 3;
    }

    .bt3 {
        grid-column: 3 / 4;
    }

    ul li {
        list-style: none;
        line-height: 2.5;
    }

    a {
        color: #999;
    }

    a:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    //Language Button
    .lang-btn {
        background: transparent;
        border: 0.9px solid #333;
        padding: 1rem;
        width: 8rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 2rem 0 2rem;
        cursor: pounter;
    }
    
    //Toggle Language COntent
    .lang-toggle {
        margin-left: 15%;
        position: absolute;
        margin-top: -2rem;
    }

    .lang-toggle ul {
        background; var(--main-deep-dark);
        width: 8.125rem;
        border: 1px solid #999;
        text-align: center;
        &:hover {
            background: #0085ff; 
            color: #fff;
        }
    }
`;
