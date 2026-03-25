import { aboutMeData } from "../../data/aboutMe";
import "./aboutMeSection.css";

export default function AboutMeSection() {
  return (
    <div className="AboutMeSectionContainer">
      <p className="AboutMeSectionTitle">About Me</p>
      {aboutMeData.map((item) => (
        <div>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
