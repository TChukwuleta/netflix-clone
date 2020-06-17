import React from 'react';
import {Button} from './Button';
import styled from 'styled-components';
import ImgTv from '../images/tab-tv.png';
import ImgTab from '../images/tab-tablet.png';
import ImgMac from '../images/tab-macbook.png';
import {Link} from 'react-router-dom';

function TabContentTwo() {
    return (
        <TabContainer>
            <div className='tab-content'>
                <div className='tab-top-content'>
                    <span style={{fontSize: '1.5rem'}}>Watch TV shows and movies anytime,
                        anywhere - personalised for you
                    </span>
                    <Link className='btn' to='/choose-plan'>
                    <Button>Try it now</Button>
                    </Link>
                </div>
                {/* Tab Bottom Content */}
                <div className='tab-bottom-content'>
                    {/*TV Image Container */}
                    <div>
                        <img src={ImgTv} style={{width: '18.75rem'}} alt='Tv' />
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, PlayStations, Xbox, Chromeset, Apple TV,
                            Blu-ray players and more.
                        </p>
                    </div>
                    {/*Tablet Image Container */}
                    <div>
                        <img src={ImgTab} style={{width: '18.75rem', paddingTop: '0.675rem'}} alt='Tab' />
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, PlayStations, Xbox, Chromeset, Apple TV,
                            Blu-ray players and more.
                        </p>
                    </div>
                    {/*MacBook Image Container */}
                    <div>
                        <img src={ImgMac} style={{width: '18.75rem', paddingTop: '0.625rem', paddingBottom: '0.625rem'}} alt='Mac' />
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, PlayStations, Xbox, Chromeset, Apple TV,
                            Blu-ray players and more.
                        </p>
                    </div>
                </div>
            </div>
        </TabContainer>
    )
}

export default TabContentTwo

//Main Tab Content COntain
const TabContainer = styled.div`
    background: var(--main-deep-dark);

    .tab-content {
        margin: 0 15%;
    }

    //Tab Top Content
    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        justify-content: center;
        align-item: center;
        padding: 2.5rem 0;
    }

    span {
        grid-column: 1 / 8;
    }

    .btn {
        margin: 0, 1.25rem 1.25rem;
        grid-column: 10 / 12;
    }

    //Tab bottom content
    .tab-bottom-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        text-align: center;
         margin-top: 2rem;
    }

    h3 {
        margin: 0.5rem 0;
    }

    p {
        color: var(--main-grey);
    }
`;