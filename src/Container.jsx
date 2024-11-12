import React from 'react';

// 전체 틀을 잡는 레이아웃 설정하고 싶어요 컴퍼넌트화 공통으로 쓰일거 같아요 children 렌더링

const Container = (props) => {
    return (
        <div>
            <div>{props.children}</div>



        </div>


    )



};

export default Container;