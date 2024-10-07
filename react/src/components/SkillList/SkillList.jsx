import ListedSkill from "../ListedSkill/ListedSkill";

const SkillList = ({ listOfSkills }) => {
  return (
    <ul>
      {listOfSkills.map((skill, index) => {
        return <ListedSkill key={index + 1} skillName={skill} />;
      })}
    </ul>
  );
};

export default SkillList;
