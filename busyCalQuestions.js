const questions = [
  {
    type: "input",
    name: "name",
    message: "Name Of Event:\n"
  },
  {
    type: "input",
    name: "dateTime",
    message: "Date and Time:\n"
  },
  {
    type: "input",
    name: "email",
    message: "Email:\n"
  },
  {
    type: "list",
    name: "calendar",
    choices: ["Booking", "Jake"]
  }
];
module.exports = {
  questions
};
