import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {
  RelationContents,
  Event,
  AddInfo,
  ServiceApply,
  OurModels, 
  MainSlider
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
  <MainSlider windowWidth={windowWidth}/>
  <OurModels windowWidth={windowWidth}/>
  <ServiceApply windowWidth={windowWidth}/>

  <AwardsBox>
    <span>THE AWARDS</span>
  </AwardsBox>

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

const AwardsBox = styled.div`
padding: 0 8%;

  span{
    padding: 0 0 0 15%;
    font-size: 1.75rem;
  }
`;