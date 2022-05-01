import "./style.scss";
import GitHub from "../../../assets/svgs/github.svg";
import LinkedIn from "../../../assets/svgs/linkedin.svg";
import Twitter from "../../../assets/svgs/twitter.svg";

interface SocialProfile {
  id: number;
  icon: string;
  alt: string;
  linkUrl: string;
}

const socialProfiles: SocialProfile[] = [
  {
    id: 1,
    linkUrl: "https://github.com/Veri5ied",
    icon: GitHub,
    alt: "GitHub",
  },
  {
    id: 2,
    linkUrl: "https://linkedin.com/in/alvinuchenna",
    icon: LinkedIn,
    alt: "LinkedIn",
  },
  {
    id: 3,
    linkUrl: "https://twitter.com/Veri5ied",
    icon: Twitter,
    alt: "Twitter",
  },
];

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_left">
        <p className="footer_feedback">Kitekurete Arigato👍🏻</p>
      </div>
      <div className="footer_center">
        <p className="footer_feedback">Alvin Okoro</p>
        <p className="footer_feedback">Software Engineer</p>
      </div>
      <div className="footer_right">
        <p className="footer_feedback">alvinuchenna14@gmail.com</p>
        <div className="footer_socials">
          {socialProfiles.map((profile) => (
            <a href={profile.linkUrl} key={profile.id}>
              <img src={profile.icon} alt={profile.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
