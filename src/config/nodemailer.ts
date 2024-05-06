const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
  host: "gmail",
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});
