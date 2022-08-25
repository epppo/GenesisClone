import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {
  RelationContents,
  Event,
  AddInfo,
  ServiceApply,
  OurModels, 
  MainSlider,
  Awards
}from "../component/main"
import Footer from "../component/Footer"

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
    <TitleAward>THE AWARDS</TitleAward>
    <Awards windowWidth = {windowWidth}/>
    
  </AwardsBox>

  <AddInfo windowWidth={windowWidth}/>
  <Event windowWidth={windowWidth}/>
  <RelationContents windowWidth={windowWidth}/>
  <Footer></Footer>
</>
  )

}
export default Main;

const AwardsBox = styled.div`

`;
const TitleAward = styled.span`
    margin-bottom: 100px;
padding: 0 0 0 20%;
font-size: 1.75rem;`;