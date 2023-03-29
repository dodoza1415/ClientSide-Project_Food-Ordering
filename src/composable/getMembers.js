import data from "../../data/db.json";

const getMembers = () => {
  return data.members;
};

export { getMembers };