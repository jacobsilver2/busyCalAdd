const inquirer = require("inquirer");
const open = require("open");
const questions = require("./busyCalQuestions");

inquirer.prompt(questions.questions).then(answers => {
  addToCalendar(answers);
});

function addToCalendar(answers) {
  const encodedName = encodeURIComponent(answers.name);
  const encodedDateTime = encodeURIComponent(answers.dateTime);
  const encodedEmail = encodeURIComponent(answers.email);
  const url = `busycalevent://new/${encodedName}%20${encodedDateTime}%20%2F${answers.calendar}/${encodedEmail}`;
  open(url);
}
