import { useState } from "react";

const ImgServiceApply=(props)=>{
  const [isHover, setIsHover] = useState(false);
  return(
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      style={{cursor:"pointer"}}>
      <img src={isHover ? props.hoverImg : props.imgUrl} />
    </div>
  )
}
export default ImgServiceApply;