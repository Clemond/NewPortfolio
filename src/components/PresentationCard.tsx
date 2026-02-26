import ProfilePic from "../assets/profilePic.jpg";
import "./PresentationCard.css";

export default function PresentationCard() {
  return (
    <div className="containerProfile">
      <img
        style={{
          borderRadius: "192px",
          height: "250px",
          width: "250px"
        }}
        src={ProfilePic}
        alt="Profile Pic"
      />
      <div>
        <p className="helloImText">Hello, I'm</p>
        <p className="nameText">Nicholas Nieminen Jönsson</p>
        <p className="jobText">Application Developer Student</p>
        <div className="buttonField">
          <button className="buttonStyle" onClick={() => alert("TBD")}>
            Download CV
          </button>
          <button className="buttonStyle" onClick={() => alert("TBD")}>
            Contact Info
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "12px"
          }}
        >
          {/* <SocialMediaLinks /> */}
        </div>
      </div>
    </div>
  );
}
