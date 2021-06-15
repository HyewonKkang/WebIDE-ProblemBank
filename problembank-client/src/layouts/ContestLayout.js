import React from 'react'
import Header from '../components/Header';
import FooterMainPage from '../pages/Contest/components/FooterContestPage';

function ContestLayout(props) {
    const { children } = props;
    return (
        <div className="row">
            <Header/>
            <div className="body-container">
                { children }
            </div>
            <FooterMainPage />
        </div>
    )
}


export default ContestLayout

