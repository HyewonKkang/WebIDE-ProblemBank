import React from 'react'
import Header from '../components/Header';
import FooterMainPage from '../pages/ContestFinish/components/FooterContestPage';

function ContestFinishLayout(props) {
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


export default ContestFinishLayout

