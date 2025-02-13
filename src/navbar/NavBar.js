import Nav from "react-bootstrap/Nav";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faBorderAll,
  faCalendarDays,
  faBookmark,
  faBriefcase,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import touristimg from "../images/tourist.png";
import jasonimg from "../images/jason.png";
import brenimg from "../images/brenn.png";
import { ListGroupItem } from "react-bootstrap";
import SwitchDemo from "../Switch/Switch";

function NavBar() {
  return (
    <div className="navbar-section">
      <div className="logo">
        <h3>
          <FontAwesomeIcon icon={faGear} /> ShowOps
        </h3>
      </div>

      <Nav className="navbar">
        <Nav.Item className="navlist active">
          <FontAwesomeIcon icon={faBorderAll} className="fonticon" />{" "}
          <Nav.Link className="navlink" href="#">
            Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="navlist">
          <FontAwesomeIcon icon={faCalendarDays} className="fonticon" />{" "}
          <Nav.Link className="navlink" disabled>
            Celender
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="navlist">
          <FontAwesomeIcon icon={faBookmark} className="fonticon" />{" "}
          <Nav.Link className="navlink" disabled>
            Events
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="navlist">
          <FontAwesomeIcon icon={faBriefcase} className="fonticon" />{" "}
          <Nav.Link className="navlink" disabled>
            {" "}
            Offers & Deals
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="navlist">
          <FontAwesomeIcon icon={faSliders} className="fonticon" />{" "}
          <Nav.Link className="navlink" disabled>
            Settings
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Card className="card">
        <p className="cardheading">Today's Events</p>
        <ListGroup>
          <ListGroup.Item className="cardlist">
            <img className="cardimage" src={touristimg} alt="" />
            <div className="cardtext">
              <p>Tourist</p>
              <p>
                <b>The Viper Room</b>
              </p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="cardlist">
            <img className="cardimage" src={jasonimg} alt="" />
            <div className="cardtext">
              <p>Jason Isbell</p>
              <p>
                <b>The Wiltern</b>
              </p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="cardlist">
            <img className="cardimage" src={brenimg} alt="" />
            <div className="cardtext">
              <p>Brenn!</p>
              <p>
                <b>The Troubadour</b>
              </p>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      <Card className="thememode">
        <SwitchDemo />
        <ListGroup>
          <ListGroupItem>
            <Nav.Link className="navlink" disabled>
              Term of use
            </Nav.Link>
          </ListGroupItem>
          <ListGroupItem>
            <Nav.Link className="navlink" disabled>
              Privacy Policy
            </Nav.Link>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
}

export default NavBar;
