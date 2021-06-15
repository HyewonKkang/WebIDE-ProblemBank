import React, { useEffect, useRef, useState } from 'react'
import './style.scss'
import ContestLayout from '../../../../layouts/ContestLayout';

var moment = require('moment');

function ContestMainPage(props) {
    return (
        <ContestLayout>
            <div className="slide__container">
                <div className="wrapper__image">
                    <img src="https://ucarecdn.com/bc4908de-f56e-483e-a49f-41577b5b04a9/-/crop/653x653/326,0/-/preview/"
                    alt="algoritm-image-page"
                    />
                </div>
                <div className="modal">
                    <div>
                        <h2>경진 대회</h2>
                        <p>코딩테스트 형식으로 사용자의 역량 체크를 진행합니다.</p>
                    </div>
                </div>
            </div>
        </ContestLayout>
    )
}


export default ContestMainPage

