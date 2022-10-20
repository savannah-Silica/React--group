//  icons
import {
  FaFacebookSquare,
  FaTwitter,
  FaSlack,
  FaInstagram,
} from "react-icons/fa";
import {ImWhatsapp} from "react-icons/im"
// contact
export const contact = [
  {
    icon: <ImWhatsapp style={{ color: "#25D366" }} />,
    title: "Chat with us",
    description: "0711 111 111",
  },
  {
    icon: <FaTwitter style={{ color: "#1DA1F2" }} />,
    title: "Tweet to us",
    description: "@savannahtechies",
  },
  {
    icon: (
      <FaSlack style={{ background: "rgba(#3eb991,#6ecadc,#e01563,#e9a820)" }} />
    ),
    title: "Follow our channel",
    description: "Savannah Silica",
  },
  {
    icon: (
      <FaInstagram
        style={{
          color: "#fff",
          background: "#d6249f",
          background:
            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
        }}
      />
    ),
    title: "Follow us",
    description: "@Savannah_Silica",
  },
  {
    icon: <FaFacebookSquare style={{ color: "#4267B2" }} />,
    title: "Friend us",
    description: "Savannah Silica",
  },
];
