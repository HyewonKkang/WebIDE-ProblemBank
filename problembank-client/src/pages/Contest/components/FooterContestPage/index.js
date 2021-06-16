import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getProblemsInformation } from '../../../../_actions/problemAction';
import { withRouter } from 'react-router-dom';
import './style.scss'

function FooterMainPage({history}) {

    const [value, setValue] = useState({})
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProblemsInformation()).then(response => {
            const { data } = response.payload
            setValue(data)
        })
    }, [])

    return (
        <div className="footer__contestpage">
            <div className="wrapper">
                <button className="col" onClick={() => {window.location.replace("/conteststart")}}>
                    <h2>경진대회 시작하기</h2>
                </button>
            </div>
        </div>
    )
}

export default withRouter(FooterMainPage)
