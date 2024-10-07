import CheckMark from "./CheckMark";

const ListedSkill = ({ skillName }) => {
  return (
    <li>
      <CheckMark />
      <span>{skillName}</span>
    </li>
  );
};

export default ListedSkill;
