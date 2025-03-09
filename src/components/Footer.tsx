import "../styles/components/Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 ArtGalleryManager. All rights reserved.</p>
      <div className="social-icons">
        <Link
          to="https://www.instagram.com/nationalgallery"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon className="social-icon" />
        </Link>
        <Link
          to="https://twitter.com/NationalGallery"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="social-icon" />
        </Link>
        <Link
          to="https://www.facebook.com/thenationalgallery"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className="social-icon" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
