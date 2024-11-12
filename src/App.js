
import Container from "./Container";
import "./app.css";
import Hello from "./Hello";
import Counter from "./Counter";

const App = () => {
//상태관리 및 조회

// 함수를 만들어서 API 통신 , 기타 작업들을 합니다

//랜더링을 합니다

//</ div> 셀프 클로징
  const style = {
    backgroundColor: "red",
    color: "blue",
    fontsize: 24,
    padding:"1rem"
  };
  const isGood = true;
  const name = "hi react ";
  const info = {desc:"react Tlqkf", date : new Date()}
//App 컴포넌트에서 Hello 컴포넌트로 데이터 전달하려면 props
  return (
    <div>  
      <Container>

        <Hello name ={name} age={10} height ={190} isMan={true} info={info}/>


        {isGood ? <Counter /> : <Badcomponet />  }
      </Container>

    </div>
  );
};
// h1 style = {style}>{name} 스타일 적용법 알아보기 {}주석하는법 알아오기 {/* */} 입니다
//children props 
//조건부 랜더링 isGood ? <Counter /> : <Badcomponet /> 참이면 카운터 거짓이면 배드컴퍼넌트 실행
export default App;