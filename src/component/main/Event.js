import styled from "styled-components";

const Event = (props) =>{
  return (
    <Wrap>
      <EventPageWrap >
        <ImgBox>
        {props.windowWidth > 770 ? 
          <img src="https://www.genesis.com/content/dam/genesis-p2/kr/assets/main/genesis-kr-main-genesis-events-17-desktop-1920x960-ko.jpg"/>
          :
          <img src="https://www.genesis.com/content/dam/genesis-p2/kr/assets/main/genesis-kr-main-genesis-events-17-mobile-750x1280-ko.jpg"/>
        }
        </ImgBox>
        <EventContents windowWidth={props.windowWidth}>
          <p>GENESIS EVENTS</p>
          <span>제네시스에서 진행중인 다양한 이벤트를 소개합니다. </span>
          <div>
            이벤트보기
          </div>
        </EventContents>
      </EventPageWrap>
      
    </Wrap>
  )

}
export default Event;

const Wrap = styled.div`
width: 100%;
margin: 0 0 15% 0;

`;

const EventPageWrap = styled.div`
position: relative;
max-height: 1800px;
`;

const ImgBox = styled.div`
max-width: 100%;

img{
  max-width: 100%;
}
`;

const EventContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  justify-content: center;
  position: absolute;
  top: 0;
  margin: 0 10%;
  p{
    font-size: ${(props)=> props.windowWidth >770? "1.6rem":"2.5rem"};
    margin: ${(props)=> props.windowWidth >770? "3%":"5%"} 0 ;
  }

  div{
    width: ${(props)=> props.windowWidth >770? "25%":"100%"} ;
    margin: ${(props)=> props.windowWidth >770? "2%":"5%"} 0 ;
    height: 50px;
    border: 1px solid white;

    display: flex;
    justify-content: center;
    align-items: center;
  }

`;