import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import {icon} from 'react-icons';
import {Link} from 'react-router-dom';

//import {cross} from 'react-icons/icomoon/cross';
//import {checkmark} from 'react-icons/icomoon/checkmark';

function TabContentThree() {
    return (
        <TabContainer>
            <div className='tan-content'>
                <div className='tab-top-content'>
                    <span style={{fontSize: '1.5rem'}}>Choose one plan and watch everything on Netflix</span>
                    <Link className='btn' to='/choose-plan'>
                    <Button>Try it now</Button>
                    </Link>
                </div>
                {/* Tab Bottom content */}
                <div className='tab-button-content'>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Basic</th>
                                <th>Standard</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monthly Price</td>
                                <td>$9.99</td>
                                <td>$13.99</td>
                                <td>$16.99</td>
                            </tr>
                            <tr>
                            <td>HD Available</td>
                            <td style={{fontSize: '10'}}>No</td>
                            <td style={{fontSize: '10'}}>Yes</td>
                            <td style={{fontSize: '10'}}>Yes</td>
                            </tr>
                            <tr>
                            <td>Ultra HD Available</td>
                            <td style={{fontSize: '10'}}>No</td>
                            <td style={{fontSize: '10'}}>No</td>
                            <td style={{fontSize: '10'}}>Yes</td>
                            </tr>
                            <tr>
                            <td>Screen you can watch at the same time</td>
                            <td>1</td>
                            <td>2</td>
                            <td>4</td>
                            </tr>
                            <tr>
                            <td>Watch on your laptop, TV, phone and tablet</td>
                            <td style={{fontSize: '10'}}>Yes</td>
                            <td style={{fontSize: '10'}}>Yes</td>
                            <td style={{fontSize: '10'}}>Yes</td>
                            </tr>
                            <tr>
                            <td>Unlimited movies and TV shows</td>
                            <td style={{fontSize: '10'}}>Yes</td>
                            <td style={{fontSize: '10'}}>Yes</td>
                            <td style={{fontSize: '10'}}>Yes</td>
                            </tr>
                            <tr>
                            <td>Cancel anytime</td>
                            <td style={{fontSize: '10'}}>Yes</td>
                            <td style={{fontSize: '10'}}>Yes</td>
                            <td style={{fontSize: '10'}}>Yes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </TabContainer>
    )
}

export default TabContentThree

//Main Container
const TabContainer = styled.div`
    background: var(--main-deep-dark);

    .tab-content {
        margin: 0 15%;
        padding-bottom: 1%;
    }

    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        padding: 3rem 0 0;
    }

    span {
        grid-column: 3 / 9;
    }

    .btn {
        grid-column: 9 / 12;
        margin-0left: 3rem;
        margin-right: 5.1rem;
    }

    //Tab Bottom Content
    .tab-bottom-content {
        margein: 2rem auto;
    }

    //Table
    table {
        width: 100%;
        margin-top: 2rem;
        border-collapse: collapse;
    }

    table thead th {
        text-transform: uppercase;
        padding: 0.8rem;
    }

    table tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }

    table tbody tr td {
        color: #999;
        padding: 0.8rem 1.2rem;
        text-align: center;
    }

    table tbody tr td:first-child {
        text-align: left;
    }

    table tbody tr:nth-child(even) {
        background: #222;
    }
`;