import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {

  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
    onClick();
  }

  if (liked ) return <AiFillHeart size="20px" color="#ff6b81" onClick={toggle}/>
  return <AiOutlineHeart size="20px" onClick={toggle}/>

};

export default Like;
