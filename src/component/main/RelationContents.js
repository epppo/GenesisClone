import styled from "styled-components";
import {RightArrow} from "../../assets/svg"
import { RelationContentsData } from "../../data/data"


const RelationContents = (props) => {

  return (
    <Wrap windowWidth={props.windowWidth}>
      <Title><span>연관 컨텐츠</span></Title>

      <ContentsListWrap windowWidth={props.windowWidth}>
        {RelationContentsData.map((data, idx) => (
          <ContentWrap 
            windowWidth={props.windowWidth}
            key={data.key}>
            <ImgBox>
              <img src={data.img} />
            </ImgBox>
            <TextBox>
              <p>{data.title}</p>
              <span>{data.contents}</span><br />
              <div className="link">
                <span style={{ borderBottom: "1px solid black" }}>자세히보기 </span>
                <div><RightArrow /></div>
              </div>
            </TextBox>
          </ContentWrap>
        ))}

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