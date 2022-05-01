import AuthorCard from "../../components/ui/author-card/AuthorCard";
import "./style.scss";

const MainPortfolio = () => {
  return (
    <div className="main_portfolio_component">
      <div className="main_portfolio_left">
        <h1 className="main_title">👋 Hi, I’m Alvin</h1>
        <div className="main_contents">
          <p className="main_texts">
            I’m a Software Engineer with passion in tech, loves participating in
            every stage of project development, from discovery to delivery.
            Helping to focus the business goals on users.
          </p>
          <p className="main_texts">
            I’m currently{" "}
            <span className="unavailable_color">unavailable.</span> <br />
            Currently building a world class solution{""}{" "}
            <a href="https://springblock.io">@SpringBlock.</a>
          </p>
        </div>
      </div>
      <div className="main_portfolio_right">
        <AuthorCard />
      </div>
    </div>
  );
};

export default MainPortfolio;
