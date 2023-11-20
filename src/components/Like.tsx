import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {

  const [liked, setLiked] = useState(false);

  if (liked ) return <AiFillHeart size="20px" color="#ff6b81" onClick={() => setLiked(false)}/>
  return <AiOutlineHeart size="20px" onClick={() => setLiked(true)}/>

};

export default Like;
