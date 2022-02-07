const isEmailValid = (req, res, next) => { // adaptado do comentário do michael em https://trybecourse.slack.com/archives/C023YHXAEGM/p1634319081263300
  const { email } = req.body;
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const validateEMail = regexEmail.test(email);
  
  if (!validateEMail) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }

  next();
};

module.exports = isEmailValid;
