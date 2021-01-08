const isWoman = 1;
const isMan = 2;

const getGenderText = (gender) => {
  switch (gender) {
    case isWoman:
      return "Female";
    case isMan:
      return "Male";
  }

  return "Not Specified";
};

export default getGenderText;
