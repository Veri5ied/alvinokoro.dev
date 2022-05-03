import "./style.scss";
import { motion } from "framer-motion";

interface CardProps {
  imgUrl: string;
  linkUrl: string;
  altText: string;
}
const Card = ({ imgUrl, linkUrl, altText }: CardProps) => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="card_container"
    >
      <a href={linkUrl} target="_blank" rel="noreferrer">
        <img src={imgUrl} alt={altText} />
      </a>
    </motion.div>
  );
};

export default Card;
