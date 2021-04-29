import { Link as RouterLink } from 'react-router-dom';
import { Link } from "@chakra-ui/react";
import './styles.scss';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__contact">
          Do you have any questions? <Link className="footer__link" as={RouterLink} to="/contact">Contact us</Link>
        </div>
        <div className="footer__copy">© 2021 Team London. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
