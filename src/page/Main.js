import React, {useEffect, useState} from "react";
import {
  RelationContents,
  Event,
  AddInfo,
  ServiceApply,
  OurModels
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
  
  <OurModels windowWidth={windowWidth}/>
  <ServiceApply windowWidth={windowWidth}/>

  <div>
    ㅋㅋㅋㅋㅋㅋ어워즠ㅋㅋㅋㅋㅋ 이미지 바뀌는거
  </div>

  <AddInfo windowWidth={windowWidth}/>
  <Event windowWidth={windowWidth}/>
  <RelationContents windowWidth={windowWidth}/>

  <div>
    풋터
    ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
  </div>
  엄마보고싶다..
  </>

  

  )

}
export default Main;
