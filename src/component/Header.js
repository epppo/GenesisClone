import React from "react";
import styled from "styled-components";
import { Login, Logo, ServicCenter, SearchIcon } from "../assets/svg"


const Header = () =>{
  return (
    <HeaderWrap>
      <MainSiteNaveBar>
        <MainInnerSiteNaviBar>
          
          <LogoWrap>
            <Logo height="100%"/>
          </LogoWrap>

          <ul>
            <li>모델</li>
            <li>구매</li>
            <li>체험</li>
            <li>멤버스</li>
            <li>제네시스</li>
          </ul>


          <MainNaviButtonArea>

            <div className="HederButtons"><img src={ServicCenter}/></div>
            <div className="HederButtons"><img src={Login}/></div>
            <div className="HederButtons"><img src={SearchIcon}/></div>

            <NaviBtn>
              <span style={{background:"white"}}></span>
              <span></span>
              <span style={{background:"white"}}></span>
            </NaviBtn>

          </MainNaviButtonArea>
        </MainInnerSiteNaviBar>

      </MainSiteNaveBar>


      <SubSiteNaveBar>
        <div> Sub Header</div>

      </SubSiteNaveBar>

    </HeaderWrap>
  )

}
export default Header;

const HeaderWrap = styled.div`
width: 100%;
height: 5.9rem;
`;

const MainSiteNaveBar = styled.div`
display: flex;
justify-content: center;
max-width: 1023px;
width: 100%;
`;

const MainInnerSiteNaviBar = styled.div`
display: flex;
height: 59px;
justify-content: space-between;
padding: 0 2rem;

ul{
  display: flex;
  width: 100%;
  align-items: center;
}
li{
  padding: 0 1rem 0 1rem;
  color: #BBBBBB;
  font-weight: 500;
  font-size: 0.9rem;
}

`;

const LogoWrap = styled.div`
padding: 0 2rem 0 0;

`;

const MainNaviButtonArea = styled.div`
display: flex;
align-items: center;
.HederButtons{
  padding: 0 1rem 0 0;
}
img{
  width:17px;
  height: 19px;
}
`;

const NaviBtn = styled.div`
  width:1.2rem;
  height: 12px;
  position: relative;
  cursor:pointer;

  span {
    display:block;
    width:100%;
    height:2px;
    margin-bottom: 4px;
    transition:all .5s;
    background-color: #000;
  }

`;

const SubSiteNaveBar = styled.div`
`;