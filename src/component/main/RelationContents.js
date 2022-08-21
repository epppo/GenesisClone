import styled from "styled-components";
import {RightArrow} from "../../assets/svg"


const RelationContents = (props) =>{
  
  return (
    <Wrap windowWidth={props.windowWidth}>
      <Title><span>연관 컨텐츠</span></Title>

      <ContentsListWrap windowWidth={props.windowWidth}>

        <ContentWrap windowWidth={props.windowWidth}>
          <ImgBox>
            <img src="https://www.genesis.com/content/dam/genesis-p2/kr/assets/main/genesis-kr-main-related-event-27-desktop-630x404-ko.jpg" />
          </ImgBox>
          <TextBox>
            <p>이벤트</p>
            <span>제네시스에서 진행중인 다양한 이벤트 정보를 전해드립니다. </span><br />
            <div className="link">
              <span style={{ borderBottom: "1px solid black" }}>자세히보기 </span>
              <div><RightArrow /></div>
            </div>
          </TextBox>
        </ContentWrap>

        <ContentWrap windowWidth={props.windowWidth}>
          <img src="https://www.genesis.com/content/dam/genesis-p2/kr/assets/main/genesis-kr-main-related-digital-services-28-desktop-630x404-ko.jpg" />
          <TextBox>
            <p>디지털 서비스</p>
            <span>제네시스의 디지털 서비스는 첨단 기술로 당신과 차가 함께하는 일상에 편리함을 한층 더해줍니다. </span><br/>
            <div className="link">
              <span style={{ borderBottom: "1px solid black" }}>자세히보기 </span>
              <div><RightArrow /></div>
            </div>
          </TextBox>
        </ContentWrap>

        <ContentWrap windowWidth={props.windowWidth}>
          <img src="https://www.genesis.com/content/dam/genesis-p2/kr/assets/main/genesis-kr-main-related-members-29-desktop-630x404-ko.jpg" />
          <TextBox>
            <p>멤버스</p>
            <span>제네시스 오너분들께만 주어지는 특별한 혜택과 이상적인 경험을 선사합니다.</span><br/>
            <div className="link">
              <span style={{ borderBottom: "1px solid black" }}>자세히보기 </span>
              <div><RightArrow /></div>
            </div>
          </TextBox>       
       </ContentWrap>
      </ContentsListWrap>


    </Wrap>
  )

}
export default RelationContents;

const Wrap = styled.div`
width: 100%;
background-color: white;
max-height: ${(props)=> props.windowWidth >700? "800":"2000"}px;
min-height: 640px;
height: 100%;
padding: 7% 0;
display: flex;
flex-direction: column;

`;

const Title = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;

span{

  font-size: 1.8rem;
  color: black;

}
`;
const ContentsListWrap = styled.div`

display:flex;
justify-content: center;
flex-direction: ${(props)=> props.windowWidth >700? "row":"column"};
width: 100%;


`;
const ContentWrap = styled.div`
margin: 3% 0;
width: ${(props)=> props.windowWidth >700? "30":"100"}%;
padding: 0 2%;
color: black;
display: flex;
flex-direction: column;
`;

const ImgBox = styled.div`
width: 100%;
img{
  width: 100%;

}
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;

  p{
    font-size: 1.2rem;
    margin: 1rem 0;
    font-weight: 500;
  }

  span{
    font-size: 1rem;
    line-height: 150%;
  }

  .link{
    display: flex;
    
    div{
      display: flex;
      align-items: center;
    }
  }

`;