import React from 'react';

const Hello = (props) => {
    return (
        <div>
            <div>
                <h1>내이름은 : {props.name}</h1>
                <h1>내나이는 : {props.age}</h1>
                <h1>내키는 : {props.height}</h1>
                {props.isMan.toString() ? <h1>남성입니다. </h1> : <h1>여성힙니다</h1>} {/* 조건부 랜더링 적용함 ? 쓰고 :*/}
                {/* <h1>남성여부 : {props.isMan.toString()}</h1> */}
                <h1>나의정보 : {props.info.desc}</h1>
                <h1>등록시간 : {props.info.date.toLocaleString()}</h1>

            </div>
        </div>



    );
};
// props 를 꼮써줘야하나 구조분해가능 디폴트값주기 예시 name = " 박진우 " App쪽 name은 주석처리 안하면 App쪽이 표기
// const Hello = (name , age , height,isMan,info) => {

//     return(
//         <div>
//             <div>


//             </div>
//         </div>
//     )
// }

//defaultProps 디폴트값을 준다 App에 있는걸 지우고 사용가능
//컴퍼넌트.defaultProps 



export default Hello;