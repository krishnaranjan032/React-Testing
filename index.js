const getFullname = (fname, lname) => {
  return `${fname} ${lname}`;
};

const actualFullname = getFullname("Krishna", "Ranjan");
const expectedFullname = "KrishnaRanjan";
if (actualFullname !== expectedFullname) {
  throw new Error(`${actualFullname} is not equal to ${expectedFullname}`);
}
