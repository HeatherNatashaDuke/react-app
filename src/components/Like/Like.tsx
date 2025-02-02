import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <FaHeart color="red" size={20} onClick={toggle} />;
  return <FaRegHeart color="red" size={20} onClick={toggle} />;
};

export default Like;
