import styled from "styled-components";
import ImgServiceApply from "./ImgServiceApply"
import { ServiceApplyData } from "../../data/data";


const ServiceApply = (props) => {

  return (
    <Wrap>
      <InsideWrap windowWidth={props.windowWidth}>

        {ServiceApplyData.map((data, index) => (
          <>
            {props.windowWidth > 770 ?
              <ItemBox key={data.key}>
                <ImgServiceApply 
                  hoverImg={data.hoverImg}
                  imgUrl={data.imgUrl}/>
                <div>
                  <span>{data.title}</span>
                </div>
              </ItemBox>
              :
              <ItemListBox key={data.key}>
              <div>
                <img src={data.imgUrl} />
              </div>
              <div className="TitleDiv">
                <span>{data.title}</span>
              </div>
            </ItemListBox>
            }
          </>
        ))}
      </InsideWrap>

    </Wrap>

  )
}
export default ServiceApply

const Wrap = styled.div`
max-height: 500px;
min-height: 467px;
padding: 0 0 10% 0;
`;

const InsideWrap = styled.div`
height: 100%;
padding: ${(props)=> props.windowWidth >770? "10% 0 0 0;":"0"};
display: flex;
justify-content: center;
flex-direction: ${(props)=> props.windowWidth >770? "row":"column"}
`;

const ItemBox = styled.div`
padding: 0 3rem;
div{
  display: flex;
  justify-content: center;
}
span{
  width: 100%;
  margin: 25px 0;
}
`;

const ItemListBox = styled.div`
display:flex;
align-items: center;
height: 100px;
border-bottom: 1px solid #BBBBBB;;

img{
  width: 28px;
}
div{
  padding: 5%;
}
.TitleDiv{
  padding: 0 0 0 0;
}
`;