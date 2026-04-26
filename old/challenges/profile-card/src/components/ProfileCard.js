import photo from "../images/tobi.jpg";
import "../styles/styles.css";
import SkillList from "./Skill";

const skills = [
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#FF3B00"
  },
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "Node",
    level: "beginner",
    color: "#C3DCAF"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#E84F33"
  }
];

function ProfileCard() {
  return (
    <div className="ProfileCard">
      <div className="card-container">
        <img src={photo} alt="Profile" className="photo"></img>
        <div className="name-description">
          <h2> Felipe Magalhães</h2>
          <p className="description">
            Full-stack web developer I am a software Developer currently dealing
            with fullstack WEB development with a focus on Spring Framework
            (Back-End) and React(Front-End)
          </p>
        </div>
        <div className="skill-container">
          {skills.map((skill) => (
            <SkillList skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
