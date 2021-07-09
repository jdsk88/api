import nodemailer from 'nodemailer';
import { confirmEmail } from './confirm.js';
import { shoppingListMail } from './shoppingList.js';


export const mailer = (to,subject,html) => {

  let transport = nodemailer.createTransport({
    host: 'smtp.domena.pl',
    port: 465,
    auth: {
      user: 'jns',
      pass: 'Egzul@22corP'
    }
  });

  const operation_types = {
    confirm: "confirm__after__register",
    reset: "reset__password",
    order: "order",
  }


  const confirmEmailTemplate = {
    to: 'm.jakobszy@ister.pl',
    subject: 'subject',
    html: confirmEmail('string1')
  }
  const shoppingListEmailTemplate = {
    to: 'm.jakobszy@ister.pl',
    subject: 'subject',
    html: shoppingListMail('string1', 'string1')
  }
  const resetPassEmailTemplate = {
    to: 'm.jakobszy@ister.pl',
    subject: 'subject',
    html: shoppingListMail('string1', 'string1')
  }
  const incomingData = {
    to: to,
    subject: subject,
    html: confirmEmail(html)
  }




  const directives = {
    from: 'm.jakobszy@ister.pl',
    to: incomingData.to,
    subject: incomingData.subject,
    html: incomingData.html
  }




  const message = (directives) => {
    const data = {
      from: directives.from,
      to: directives.to,
      subject: directives.subject,
      html: directives.html
    }
    return data
  };

  return transport.sendMail(message(directives), function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
  });

};