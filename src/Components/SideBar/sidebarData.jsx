import IMAGES from "../assets/index.js";

const menuItems = [
  {
    icon: <img src={IMAGES.Dashboard} alt="Dashboard" />,
    label: "Dashboard",
  },
  {
    icon: <img src={IMAGES.Videos} alt="Videos" />,
    label: "Videos",
  },

  {
    icon: <img src={IMAGES.StudyMaterials} alt="StudyMaterials" />,
    label: "Study materials",
  },

  {
    icon: <img src={IMAGES.Tests} alt="Tests" />,
    label: "Tests",
  },

  {
    icon: <img src={IMAGES.Doubts} alt="Doubts" />,
    label: "Doubts",
  },

  {
    icon: <img src={IMAGES.Community} alt="Community" />,
    label: "Community",
  },

  {
    icon: <img src={IMAGES.OnlineClass} alt="OnlineClass" />,
    label: "Online Class",
  },

  {
    icon: <img src={IMAGES.Events} alt="Events" />,
    label: "Events",
  },

  {
    icon: <img src={IMAGES.Messages} alt="Messages" />,
    label: "Messages",
  },
];

export default menuItems;
