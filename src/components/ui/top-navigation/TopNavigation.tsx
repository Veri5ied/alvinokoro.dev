import "./style.scss";
import GitHub from "../../../assets/svgs/github.svg";
import LinkedIn from "../../../assets/svgs/linkedin.svg";
import Twitter from "../../../assets/svgs/twitter.svg";
import toast, { Toaster } from "react-hot-toast";

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
  const handleToast = ():void => {
    toast("Sorry, I'm not available for a role!", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#101010",
        color: "#fff",
      },
    });
  };
  return (
    <div className="top_navigation">
      <Toaster />
      <div className="top_navigation_left">
        <h1 className="top_navigation_title">Alvin Okoro</h1>
        <button className="top_navigation_status" onClick={handleToast}>
          Unavailable
        </button>
      </div>
      <div className="top_navigation_right">
        {socialProfiles.map((profile) => (
          <a
            href={profile.linkUrl}
            key={profile.id}
            target="_blank"
            rel="noreferrer"
          >
            <img src={profile.icon} alt={profile.alt} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopNavigation;
