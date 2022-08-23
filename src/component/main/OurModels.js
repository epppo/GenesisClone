import React from "react";
import ModelSlider from "./ModelSlider"
import styled from "styled-components";
import {DownArrowW} from "../../assets/svg"
import {ModelList} from "../../data/data"

const OurModels = (props) =>{

  return (
    <Wrap>
      <OutsideWrap>
        <InSideWrap>

          <TitleBox>
            <p>OUR MODELS</p>
            <span>역동적이면서도 우아한 디자인과 최첨단 기술을 탑재한 제네시스 브랜드의 라인업을 살펴보세요</span>
          </TitleBox>

          <SelectBox>
            <ul className="menu">
              <li>
                <span style={{ padding: "0 0.5rem"}}>ALL</span>
                <ul className="depth_1">
                  <li><span>ALL</span></li>
                  <li><span>SEDAN</span></li>
                  <li><span>SUV</span></li>
                </ul>
                <DownArrowW/>
              </li>
            </ul>
           </SelectBox>
        

          <ModelsBox windowWidth={props.windowWidth}>
            <ModelSlider 
              data={ModelList}
              windowWidth={props.windowWidth}/>
          </ModelsBox >

        </InSideWrap>
      </OutsideWrap>
    </Wrap>
  )
}
export default OurModels;

const Wrap = styled.div`
width: 100%;
max-height: ${(props)=> props.windowWidth >770? "690":"950"}px;
min-height: 700px;
height: 100%;
display: flex;
`;

const OutsideWrap = styled.div`
width: 100%;
padding:  ${(props)=> props.windowWidth >770? " 6% 0 12% 0":"0%"};
`;

const InSideWrap = styled.div`
padding: 0 8%;
`;

const TitleBox = styled.div`
padding: 0 0 0 15%;
  p{
    font-size: 1.625rem;
  }
  span{
    color: #CCCCCC;
    font-size: 0.75rem;
  }
`;

const SelectBox = styled.div`
.menu{
  padding: 5% 0 0 15%;
  
  &:after{
    display:block; 
    content:''; 
    clear:both;
  }

  li{
    border-bottom: 1px solid white;
    width: 300px;
    height: max-content;
    position:relative; 
    float:left; 
    display: flex;

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    
    a{
      display:block; 
      padding:0 15px; 
      background:#333; 
      height:40px; 
      line-height:40px; 
      color:#fff;
    }

    &:hover{
      .depth_1{
        margin-top: 180px ;
        display:block;
      }
    }

    .depth_1{
      all: unset;
      display:none; 
      position:absolute; 
      left:0; 
      right:0; 
      border-bottom: 1px solid black;
      background-color: black;
      color: #CCCCCC;
      z-index: 1;

      a{
        display:block; 
        padding:5px; 
        background:#666; 
        color:#fff;}
      }

      &:hover{
        color: #fff;
      }

      span{
        padding: 0 1rem;
      }
    }

}
`;

const ModelsBox = styled.div`
padding: ${(props)=> props.windowWidth >770? "5% 0 0 15%":"0%"};
color: black;
width: 100%;
max-height: 530px;
min-height: 308px;
height: 100%;
`;


