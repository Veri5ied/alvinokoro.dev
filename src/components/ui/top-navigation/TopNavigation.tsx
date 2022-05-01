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
const TopNavigation = () => {
  return (
    <div className="top_navigation">
      <div className="top_navigation_left">
        <h1 className="top_navigation_title">Alvin Okoro</h1>
        <button className="top_navigation_status">Unavailable</button>
      </div>
      <div className="top_navigation_right">
        {socialProfiles.map((profile) => (
          <a href={profile.linkUrl} key={profile.id}>
            <img src={profile.icon} alt={profile.alt} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopNavigation;
