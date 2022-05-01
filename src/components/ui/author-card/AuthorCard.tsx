import "./style.scss";
import MyAvatar from "../../../assets/images/Male Memoji.png";
import JavaScriptIcon from "../../../assets/svgs/javascript logo.svg";
import ReactIcon from "../../../assets/svgs/react logo.svg";
import VSCodeIcon from "../../../assets/svgs/icons8-visual-studio-code-2019 1.svg";

const AuthorCard = () => {
  return (
    <div className="author_card">
      <div className="author_techs_box">
        <button className="author_techs reactjs_box">ReactJs</button>
        <button className="author_techs javascript_box">TypeScript</button>
      </div>
      <div className="author_card_container">
        <div className="author_card_img">
          <div className="icon_border">
            <img src={ReactIcon} alt="react icon" className="react_icon" />
          </div>
          <div className="javascript_icon_border">
            <img
              src={JavaScriptIcon}
              alt="javascript icon"
              className="javascript_icon"
            />
          </div>
          <img src={MyAvatar} alt="alvin okoro" />
        </div>
        <div className="author_techs_box">
          <button className="author_techs nextjs_box">NextJs</button>
          <button className="author_techs typescript_box">JavaScript</button>
        </div>
        <div className="author_details">
          <h2 className="author_name">Alvin Okoro</h2>
          <h3 className="author_stack">Software Engineer</h3>
          <div className="icon_border">
            <img src={VSCodeIcon} alt="vscode icon" className="vscode_icon" />
          </div>
        </div>
        <div className="author_techs_box">
          <button className="author_techs scss_box">SCSS</button>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
