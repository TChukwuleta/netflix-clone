import React from 'react';
import img from '../images/tab-1-pic.png';
import styled from 'styled-components';
import Button from './Button';
import {Link} from 'react-router-dom';

function TabContentOne() {
    return (
        <TabContentContainer>
            <div className='container'>
                <div className='tab-content'>
                    <div>
                    <span style={{marginButton : '2rem'}}> if you decide Netflix isn't for you
                        - no problem. No commitment. Cancel online anytime
                    </span>
                    <br />
                    <Link to='/choose-plan'>
                    <Button  style={{marginTop: '2rem'}}>Try it now</Button>
                    </Link>
                    </div>
                    <img src={img} alt={'Alt 1'} />
                </div>
            </div>
        </TabContentContainer>
    )
}

export default TabContentOne

// Main content Container
const TabContentContainer = styled.div`
    background: var(--main-deep-dark);

    .container {
        margin: 0 10%;
    }
    
    img {
        width: 31.875rem;
    }
    .tab-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        align-item: center;
        font-size: 2rem;
        padding: 2.5rem;
    }
`;