import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Login, Logo, ServicCenter, SearchIcon } from "../assets/svg"


const Header = () => {
  const [windowWidth, setWindowWidth] = useState();
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);


  return (
    <HeaderWrap>
      <MainSiteNaveBar windowWidth={windowWidth}>
        <LogoWrap>
          <Logo height="100%" />
        </LogoWrap>

        <MenuWrap>
          {windowWidth < 1050 ? "" :
            <ul>
              <li><Link to="/">모델</Link></li>
              <li><Link to="/">구매</Link></li>
              <li><Link to="/">체험</Link></li>
              <li><Link to="/">멤버스</Link></li>
              <li><Link to="/">제네시스</Link></li>
            </ul>
          }

        </MenuWrap>


        <MainNaviButtonArea >

          { windowWidth > 1400? 
            <>
              <div className="HederButtons">
                <Link to="/">고객센터</Link>
              </div>
              <div className="HederButtons">
                <Link to="/">마이페이지</Link>
              </div>
              <div className="HederButtons">
                <Link to="/"><img src={SearchIcon} /></Link>
              </div>
            </>
          : windowWidth > 1050 ?
            <>
              <div className="HederButtons">
                <Link to="/"><img src={ServicCenter} /></Link>
              </div>
              <div className="HederButtons">
                <Link to="/"><img src={Login} /></Link>
              </div>
              <div className="HederButtons">
                <Link to="/"><img src={SearchIcon} /></Link>
              </div>
            </>
          : 
            <div className="HederButtons">
              <Link to="/"><img src={Login} /></Link>
            </div>
          }


          <NaviBtn>
            <Link to="/">
            <span style={{ background: "white" }}></span>
            <span></span>
            <span style={{ background: "white" }}></span>
            </Link>
          </NaviBtn>

        </MainNaviButtonArea>


      </MainSiteNaveBar>


      {/* <SubSiteNaveBar>
        <div> Sub Header</div>

      </SubSiteNaveBar> */}

    </HeaderWrap>
  )

}
export default Header;

const HeaderWrap = styled.div`
width: 100%;
border : 0.5px solid gray;

`;

const MainSiteNaveBar = styled.div`
max-width: 100%;
height: ${(props) => props.windowWidth > 1050 ? 70 : 60}px;
display: flex;
margin:  ${(props) => props.windowWidth > 1050 ? "0 5rem 0 5rem" : "0 1rem 0 1rem"}; 
`;

const MenuWrap = styled.div`
width: 70%;
display: flex;
margin: 0 auto;

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
  transition: color 0.2s ease-in;

  &:hover{
  color: white;
  }
} 

`;

const LogoWrap = styled.div`
max-width: 100%;

`;

const MainNaviButtonArea = styled.div`
max-width: 100%;
display: flex;
align-items: center;
justify-content: flex-end;

.HederButtons{
  padding: 0 1.5rem 0 0;
  a{
    color: #BBBBBB;
    font-size: 0.9rem;
    transition: color 0.2s ease-in;

    &:hover{
     color: white;
    }
  }  
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