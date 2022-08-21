import React, {useEffect, useState} from "react";
import {
  RelationContents,
  Event,
  AddInfo
}from "../component/main"

function Main(){

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);


  return (
  <>
    <div>메인 슬라이더</div> 
    {/* 이거 너무 지친다.. 나중에 하자  */}
  
  <div>
    <div>제품소개</div>
    <div>드롭박스</div>
    <div>슬라이더..ㅋㅋㅋ</div>
  </div>

  <div>
    견적내기 / 구매상담신청 / 시승신청 / 카탈로그 
    {/* 아이콘 링크, 별도 애니메이션 없음  */}
  </div>

  <div>
    ㅋㅋㅋㅋㅋㅋ어워즠ㅋㅋㅋㅋㅋ 이미지 바뀌는거
  </div>

  <div>
    <AddInfo windowWidth={windowWidth}/>
  </div>

  <div>
    <Event windowWidth={windowWidth}/>
  </div>

  <div>
    <RelationContents windowWidth={windowWidth}/>
  </div>

  <div>
    풋터
    ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
  </div>
  엄마보고싶다..
  </>

  

  )

}
export default Main;
