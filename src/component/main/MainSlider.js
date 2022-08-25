import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import {MainSliderData} from "../../data/data"
import {RightArrowW} from "../../assets/svg"


const MainSlider =(props)=> {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextAroww: <ArrowDiv/>,
      prevArrow: <ArrowDiv/>,
      autoplay: true,
      autoplaySpeed: 4000,
    }

    return (
      <Wrap>
        <StyledSlider {...settings}>
          {MainSliderData.map((data, idx)=>(
            <div>
             <ItemBox>
              <ImgBox>
              {props.windowWidth >770?
                <img src={data.img}/>
              :
              <img src={data.mobileImg}/>}

              </ImgBox>
              <ContentsBox>
                <span>{data.type}</span>
                <p>{data.modelName}</p>
                <span>{data.comment}</span>
                <div className="bottonText">
                  <span>더 알아보기 <RightArrowW/></span>
                  <span>견적내기<RightArrowW/></span>
                </div>
               
              </ContentsBox>
             </ItemBox>


             </div>
          ))}
         
        </StyledSlider>
      </Wrap>
    );
  
}
export default MainSlider


const Wrap = styled.div`
min-height: 750px;
max-height: 835px;
margin-bottom: 100px;
`;

const ItemBox = styled.div`
height: 100%;
width: 100%;
background-color: #151515;
color:#BBBBBB;
display: flex;
flex-direction: column;
justify-content: flex-end;

`;


const ImgBox = styled.div`
position: relative;



img{
  width: 100%;
  min-height: 745px;
  max-height: 835px;
  object-fit: cover;
}

`;

const ContentsBox = styled.div`
width: 100%;
padding: 0.3% 1%;
position: absolute;
top: 0;
color: white;

p{
  font-size: 3.75rem;
  padding: 0.02% 0;
  
}d
span{
  font-size: 1.25rem;
}

.bottonText{
  margin-top: 2.5%;
  display: flex;
  align-items: center;
  span{
    display: flex;
    font-size: 0.8rem;
    font-weight: 500;
    margin-right: 0.3%;
    align-items: center;
    div{
      display: flex;
    }
  };

}

`;





const StyledSlider = styled(Slider)`
    .slick-list {
        width: 100%;
        height: 100%;
    }
    .slick-dots {
        bottom{
         size: 10px;
        }
        bottom: 5%;
    }
    .slick-dots li.slick-active button:before {
        color: black;
        display: flex;
        align-items: center;
        margin-top: 2px;
        border: 3px solid white;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        opacity: 1;
    }
    .slick-dots li button:before {
        color: #999;
        opacity: 1;
    }
    
    .slick-prev::before,
    .slick-next::before {
      opacity: 0;
      display: none;
    }
`;

const ArrowDiv = styled.div`
display: none;
`;
