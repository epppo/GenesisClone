import styled from "styled-components";
import {RightArrowW} from "../../assets/svg"

const AddInfo = (props) => {
  return (
    <Wrap>
      <InfoWrap windowWidth={props.windowWidth } >

        <div>
          {props.windowWidth > 1010? 
            <img src="https://www.genesis.com/content/dam/genesis-p2/kr/assets/main/genesis-kr-main-space-15-desktop-960x540-ko.jpg" />
          :
            <img src="https://www.genesis.com/content/dam/genesis-p2/kr/assets/main/genesis-kr-main-space-15-mobile-750x1000-ko.jpg" />
          }

          <div className="addinfoTextContents">
            <p>스페이스</p>
            <span>
              제네시스의 디자인과 고유한 감각을 반영한 현대적 공간으로 여러분을 초대합니다.
              제네시스에 관한 다양한 체험으로 당신만의 제네시스를 찾는 여정을 지원합니다.
            </span>

            <LinkBox>
              <div>
                <span style={{ borderBottom: "1px solid white" }}>자세히보기 </span>
                <RightArrowW />
              </div>
            </LinkBox>


          </div>
        </div>

        <div style={{width:"20px"}}></div>
        
        <div>

          {props.windowWidth > 1010? 
          <img src="https://www.genesis.com/content/dam/genesis-p2/kr/assets/main/genesis-kr-main-road-trip-16-desktop-960%20x%20540-ko.jpg" />
          :
          <img src="https://www.genesis.com/content/dam/genesis-p2/kr/assets/main/genesis-kr-main-road-trip-16-mobile-750x1000-ko.jpg" />
          }

          
          <div className="addinfoTextContents">
            <p>로드트립</p>
            <span>
              제네시스와 내셔널지오그래픽 트래블러와 함께하는 서사적 여행, 
              제네시스 로드트립을 통해 자세한 정보를 확인하세요.
            </span>

            <LinkBox>
              <div>
                <span style={{ borderBottom: "1px solid white" }}>자세히보기 </span>
                <RightArrowW />
              </div>
            </LinkBox>

          </div>
        </div>

      </InfoWrap>
    </Wrap>

  )
}
export default AddInfo;

const Wrap = styled.div`
max-height: 2030px;
min-height: 500px;
padding: 0 0 15% 0;
`;

const InfoWrap = styled.div`
width: 100%;
display: flex;
flex-direction: ${(props)=> props.windowWidth >770? "row":"column"};

div{
  width: ${(props)=> props.windowWidth >770? "50":"100"}%;
  position: relative;
  img{
    width: 100%;
  }

  .addinfoTextContents{
    top: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 5%;
    p{
      font-size:${(props)=> props.windowWidth >770? "1.25rem":"1.9rem"};
    }
    span{
      margin-top: 1%;
      font-size:${(props)=> props.windowWidth >770? "0.75rem":"0.875rem"};
      line-height: 150%;
    }
  }
}
`;

const LinkBox = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2%;
  div{
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

