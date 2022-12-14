import InstagramLogo from "../Images/instagramLogo.png";
import FacebookLogo from "../Images/facebook.png";
import LinkedInLogo from "../Images/linkedin.png";
import YoutubeLogo from "../Images/youtube.png";
import TwitterLogo from "../Images/twitter.png";

export default function Footer() {
  return (
    <div class="footer">
      <div>
        <h3 id="fartcolor">CONTACT MOLLOY</h3>
        <ul class="contact">
          <li class="contact">1000 Hempstead Avenue</li>
          <li class="contact">
            P.O. Box 5002, Rockville Centre, New York 11571-5002
          </li>
          <li class="contact">1-888-4-MOLLOY</li>
          <li class="contact">Email: info@molloy.edu</li>
        </ul>
      </div>

      <div id="socialtabs">
        <h3 id="fartcolor">STAY CONNECTED</h3>
        <ul id="socialcenter">
          <li>
            <a href="https://www.instagram.com/molloy_u/" target="_blank">
              <img src={InstagramLogo} alt="Instagram " />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/edu/molloy-college-18978"
              target="_blank"
            >
              <img src={LinkedInLogo} alt="Linked In " />
            </a>
          </li>
          <li>
            <a href="http://www.youtube.com/user/MolloyCollege" target="_blank">
              <img src={YoutubeLogo} alt="Youtube" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/MolloyUNews" target="_blank">
              <img src={TwitterLogo} alt="Twitter" />
            </a>
          </li>
          <a href="http://www.facebook.com/GoMolloy" target="_blank">
            <img src={FacebookLogo} alt="Facebook" />
          </a>
        </ul>
      </div>
    </div>
  );
}
