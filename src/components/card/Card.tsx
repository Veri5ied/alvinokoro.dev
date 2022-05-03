import "./style.scss";

interface CardProps {
  imgUrl: string;
  linkUrl: string;
  altText: string;
}
const Card = ({ imgUrl, linkUrl, altText }: CardProps) => {
  return (
    <div className="card_container">
      <a href={linkUrl} target="_blank" rel="noreferrer">
        <img src={imgUrl} alt={altText} />
      </a>
    </div>
  );
};

export default Card;
