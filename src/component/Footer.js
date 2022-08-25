import styled from "styled-components";
import { Twitter} from "../assets/svg"

const Footer = () => {
  return(
  <Wrap>
    <ShareMenu>
      <ShareBox>
      </ShareBox>
      <TopBox></TopBox> 

    </ShareMenu>



    

  </Wrap>
  )
}
export default Footer;

const Wrap = styled.div`
background: blak;
`;

const ShareMenu = styled.div`
height: 60px;
`;

const ShareBox = styled.div``;
const TopBox = styled.div``;