import { useState } from "react";



//함수방식
function Counter(){
    const [number, setNumber] = useState(0); //초기값 설정 0으로 설정함 대괄호는 리액트 규칙
    
    //핸들러 구성
    //더하는 함수
    function onIncrease(){
        //1더하기
        setNumber((prev) => prev +1)
    }

    //빼는함수
    function onDecrease(){
        //1빼기
        setNumber((prev) => prev -1);

    }

    return(

        //화면을 랜더링하는 부분 (규칙)
        //html h1 h2  br div
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button> 
            <button onClick={onDecrease}>-1</button>           
            
        </div>

    )

}



export default Counter;