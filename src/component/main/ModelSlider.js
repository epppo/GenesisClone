import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";



const SliderComponent =(props)=> {
  const [sliderNum , setSliderNum] = useState(); 
  
  useEffect(()=>{
    if(props.windowWidth>770){
      setSliderNum(3)
    }else if(props.windowWidth<770){
      setSliderNum(1)
    }
  },[props.windowWidth])


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: sliderNum,
      slidesToScroll: sliderNum,
      nextAroww: <ArrowDiv/>,
      prevArrow: <ArrowDiv/>
    }

    return (
      <div>
        <StyledSlider {...settings}>
          {props.data.map((data, idx)=>(
            <div>
             <ItemBox>
              {data.type2 ==="ELECTRIFIED"? 
                <span>{data.type2}</span>
              :
              <span><br/></span>}
              <p>{data.name}</p>
              {data.semiName.length===0? 
              <span><br/></span>
              :
              <span>{data.semiName}</span>
              }
              <img src={data.img}/>

              <div>자세히보기</div>
             </ItemBox>
             </div>
          ))}
         
        </StyledSlider>
      </div>
    );
  
}
export default SliderComponent

const ItemBox = styled.div`
min-height: 225px;
max-height: 535px;
height: 100%;
padding: 7% 7% 10% 7% ;
margin: 5%;
background-color: #151515;
color:#BBBBBB;

display: flex;
flex-direction: column;
justify-content: flex-end;


img{
  width: 100%;
  margin: 10% 0;
}

div{
  width: 100%;
  height: 50px;
  border: 1px solid white;

  display: flex;
  justify-content: center;
  align-items: center;
  

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
