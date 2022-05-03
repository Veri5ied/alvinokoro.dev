import AuthorCard from "../../components/ui/author-card/AuthorCard";
import ProjectCard from "../../components/ui/project-card/ProjectCard";
import "./style.scss";

const MainPortfolio = () => {
  return (
    <>
      <div className="main_portfolio_component">
        <div className="main_portfolio_left">
          <h1 className="main_title">👋 Hi, I’m Alvin</h1>
          <div className="main_contents">
            <p className="main_texts">
              I’m a Software Engineer with passion in tech, loves participating
              in every stage of project development, from discovery to delivery.
              Helping to focus the business goals on users.
            </p>
            <p className="main_texts">
              I’m currently{" "}
              <span className="unavailable_color">unavailable.</span> <br />
              Currently building a world class solution{""}{" "}
              <a href="https://springblock.io" target="_blank" rel="noreferrer">
                @SpringBlock.
              </a>
            </p>
            <p className="main_texts">👇 Checkout what I'm working on</p>
          </div>
        </div>
        <div className="main_portfolio_right">
          <AuthorCard />
        </div>
      </div>
      <div className="main_project_section">
        <ProjectCard />
      </div>
    </>
  );
};

export default MainPortfolio;
