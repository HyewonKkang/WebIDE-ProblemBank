import React, { useEffect, useRef, useState } from 'react'
import './style.scss'
import ContestFinishLayout from '../../../../layouts/ContestFinishLayout';

var moment = require('moment');

function ContestFinishPage(props) {
    return (
        <ContestFinishLayout>
            <div className="slide__container">
                <div className="wrapper__image">
                </div>
                <div className="modal">
                    <div>
                        <h2>채점 결과입니다</h2>
                        <p>오른쪽 링크로 이동하여 해당 문제를 다시 연습하시길 권장합니다.</p>
                    </div>
                </div>
            </div>
        </ContestFinishLayout>
    )
}


export default ContestFinishPage

