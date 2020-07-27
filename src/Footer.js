import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Modal from "react-bootstrap/Modal";
import { ToastsContainer, ToastsStore } from "react-toasts";
import "./App.css";
import { MDBBtn } from "mdbreact";
import { SocialMediaIconsReact } from "social-media-icons-react";
import NewWindow from "react-new-window";


class Footer extends Component {
  handleOnclick() {
    window.open();
  }

  render() {
    return (
      <MDBFooter className="footer">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6" className="toleft">
              <div className="colorpallet">
                <h5
                  className="title"
                  style={{ color: "#f7b748", fontSize: "17px" }}
                >
                  Quick Links
                </h5>
                <div
                  style={{
                    flexDirection: "row",
                    color: "white",
                    fontSize: "15px"
                  }}
                >
                  <MDBBtn>
                    <a style={{ color: "white", fontSize: "17px" }}>About</a>
                  </MDBBtn>
                  <MDBBtn>
                    <a style={{ color: "white", fontSize: "17px" }}>
                      Featured Products
                    </a>
                  </MDBBtn>
                  <MDBBtn>
                    <a style={{ color: "white", fontSize: "17px" }}>
                      How We Work
                    </a>
                  </MDBBtn>
                  <MDBBtn>
                    <a style={{ color: "white", fontSize: "17px" }}>
                      Contact Us
                    </a>
                  </MDBBtn>
                </div>

                <h5
                  className="toleft"
                  style={{ color: "#f7b748", fontSize: "17px" }}
                >
                  Get Started
                </h5>
                <div
                  style={{
                    flexDirection: "row",
                    color: "white",
                    fontSize: "17px"
                  }}
                >
                  <MDBBtn>
                    <a style={{ color: "white", fontSize: "17px" }}>
                      Our Process
                    </a>
                  </MDBBtn>
                  <MDBBtn>
                    <a style={{ color: "white", fontSize: "17px" }}>Sign Up</a>
                  </MDBBtn>
                  <MDBBtn>
                    <a style={{ color: "white", fontSize: "17px" }}>
                      Become A Partner
                    </a>
                  </MDBBtn>
                  <MDBBtn>
                    <a style={{ color: "white", fontSize: "17px" }}>Market</a>
                  </MDBBtn>
                  <MDBBtn>
                    <a style={{ color: "white", fontSize: "17px" }}>FAQ</a>
                  </MDBBtn>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div className="footer-copyright text-center py-3">
          <MDBContainer
            fluid
            style={{ color: "#f7b748", fontSize: "17px", marginright: ".5rem" }}
          >
            <div className="icon">Follow Us! </div>
            <SocialMediaIconsReact
              borderColor="rgba(242,233,233,0.25)"
              borderWidth="5"
              borderStyle="double"
              icon="linkedin"
              iconColor="rgba(1,0,15,1)"
              backgroundColor="rgba(255,255,255,1)"
              iconSize="5"
              roundness="26%"
              url="https://www.linkedin.com/company/producthub-inc/"
              size="37"
            />{" "}
            <SocialMediaIconsReact
              borderColor="rgba(255,255,255,0.25)"
              borderWidth="5"
              borderStyle="double"
              icon="facebook"
              iconColor="rgba(0,0,0,1)"
              backgroundColor="rgba(255,255,255,1)"
              iconSize="5"
              roundness="26%"
              url="https://www.facebook.com/producthub.in"
              size="37"
            />{" "}
            <SocialMediaIconsReact
              borderColor="rgba(255,255,255,0.25)"
              borderWidth="5"
              borderStyle="double"
              icon="instagram"
              iconColor="rgba(0,0,0,1)"
              backgroundColor="rgba(255,255,255,1)"
              iconSize="5"
              roundness="26%"
              url="https://www.instagram.com/producthub.in/?igshid=1hv66f6d3uldd"
              size="37"
            />{" "}
            <SocialMediaIconsReact
              borderColor="rgba(255,255,255,0.25)"
              borderWidth="5"
              borderStyle="double"
              icon="twitter"
              iconColor="rgba(0,0,0,1)"
              backgroundColor="rgba(255,255,255,1)"
              iconSize="5"
              roundness="26%"
              url="https://twitter.com/ProductHub2"
              size="37"
            />
          </MDBContainer>
          <MDBContainer className="tocenter">
            <div style={{ flexDirection: "row" }}>
              <MDBBtn>
                <td
                  style={{ color: "white", fontSize: "17px" }}
                  onClick={() =>
                    window
                      .open("", "Terms and Conditions", "width=200,height=100")
                      .document.write("<h1>Privacy Policy</h1>")
                  }
                >
                  {" "}
                  Privacy Policy
                </td>
              </MDBBtn>
              <MDBBtn>
              <Link to={{ pathname: "/Terms" }} style={{ color: "white", fontSize: "17px" }} target="_blank">
                  Terms and Conditions
              </Link>
              </MDBBtn>
            </div>
          </MDBContainer>
          <MDBContainer>Copyright @2020 ProductHub</MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;