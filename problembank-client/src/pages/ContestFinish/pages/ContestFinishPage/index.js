import React, { useEffect, useRef, useState } from 'react'
import './style.scss'
import projectsAPI from '../../../../apis/projects';
import ContestFinishLayout from '../../../../layouts/ContestFinishLayout';
import {useLocation} from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { getProblemData } from '../../../../_actions/problemAction';
var moment = require('moment');

function ContestFinishPage(props) {
    const location = useLocation();
    const incorrectList = location.state.incorrect; // 틀린 문제 리스트 받아옴

    if (incorrectList === null) console.log("NULL")

    const [problems, setProblems] = useState([])
    let [problem, setProblem] = useState({})
    const {problemsAllData} = useSelector(state => state.problem);
    const dispatch = useDispatch();
    
    const [loading, setLoading] = useState(true)
    var id;
    //const { id } = queryString.parse(props.location.search);
    useEffect(() => {
        if(problemsAllData){
            const { data }  = problemsAllData;
            problems.push(data.filter(element =>Number(element.id) === Number(id)))
            // const [ problem ] = data.filter(element =>Number(element.id) === Number(id))
            console.log(problems)
            setProblems(data)
            setLoading(false)
            setProblem(problem)
        }else{
            dispatch(getProblemData()).then(response => {
                if (incorrectList !== null) {
                    const { data } = response.payload     
                    for(let i=0; i<10; i++) {
                        var arr = data.filter(element =>Number(element.id) === Number(incorrectList[i]));
                        problems.push(arr[0])
                    } 
                    setProblem(problem)
                    setProblems(problems)
                    setLoading(false)
                }
               
            })
        }
    }, [id])
    if (incorrectList !== null) {
        return (
            <ContestFinishLayout>
                <div className="slide__container">
                    <div className="modal">
                        <div>
                            <h2>채점 결과입니다 ({10-problems.length}/10)</h2>
                            <p>응시한 테스트의 오답입니다. 문제를 클릭하여 해당 문제를 다시 연습하시길 권장합니다.</p>
                        </div>
                    </div>
                </div>
                <div className="modelBox">
                    <table className="table table-contribution">
                    <thead>
                        <tr>
                            <th width = "5%">번호</th>
                            <th width = "55%">제목</th>
                            <th width = "10%">난이도</th>
                            <th width = "20%">카테고리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            problems.map((item,index) => {
                                return (
                                    <tr key = {index} onClick={() => props.history.push('/problem/view?id=' + incorrectList[index])}>
                                        <th>{index+1}</th>
                                        <td>{item.name}</td>
                                        <th>{item.level}</th>
                                        <td>{item.tagInfo.parent_name} - {item.tagInfo.name}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>     
                    </table>
                </div>
            </ContestFinishLayout>
        )
    } else {
        return (
            <ContestFinishLayout>
                <div className="slide__container">
                    <div className="modal">
                        <div>
                            <h2>시험 결과입니다</h2>
                            <p>응시한 시험에서 제한 시간을 초과하였습니다. 다시 응시하시기 바랍니다.</p>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <button className="col" onClick={() => {window.location.replace("/conteststart")}}>
                        <h2>경진대회 재시작하기</h2>
                    </button>
                </div>
            </ContestFinishLayout>
        )
    }
    
}


export default ContestFinishPage

