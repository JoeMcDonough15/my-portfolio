const CurrentYear = () => {
  const currentDate = new Date();
  return <span>{currentDate.getFullYear()}</span>;
};

export default CurrentYear;
