function SkillList({ skill }) {
  const myStyle = {
    backgroundColor: skill.color,
    border: 0,
    borderRadius: "6px",
    display: "flex",
    padding: "4px",
    margin: "4px",
    color: "rgb(9, 9, 9)",
    fontWeight: "bold",
    paddingLeft: "10px",
    paddingRight: "10px",
  };

  return (
      <div>
        <button style={myStyle}>
          {skill.skill}
          {skill.level === "advanced" ? "💪" : skill.level === "intermediate" ? "👍" : "👶"}
        </button>
      </div>
  );
}

export default SkillList;
