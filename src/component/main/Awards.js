import React  from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import {AwardsData} from "../../data/data"

const Awards = (props) =>{
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
        {AwardsData.map((data, idx)=>(
          <div>
           <ItemBox>
            <ImgBox>
            {props.windowWidth >770?
              <img src={data.img}/>
            :
            <img src={data.mobileImg}/>}

            </ImgBox>
            <AwContentsBox>
              <p>{data.title}</p><br/>

              <span>{data.contents}</span>
          
             
            </AwContentsBox>
           </ItemBox>


           </div>
        ))}
       
      </StyledSlider>
    </Wrap>
  );
}
export default Awards


const Wrap = styled.div`
min-height: 789px;
max-height: 1077px;
margin: 50px 0
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
  max-height: 480px;
  object-fit: cover;
}

`;

const AwContentsBox = styled.div`

width: 6%;

padding: 2.5% 1%;
position: absolute;
top: 0;
color: white;

p{
  font-size: 2rem;
  padding: 0.01% 0;
  
}
span{
  line-height: 150%;
  padding: 0;
  font-size: 1rem;
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
