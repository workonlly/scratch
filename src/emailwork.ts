 import emailjs from '@emailjs/browser';
import { email } from './email'; // make sure this is the file returning your HTML

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

// Render the contact form HTML
const emai = document.getElementById("em");

if (emai) {
  emai.innerHTML = email();

  // Attach event listener after the form is injected
  const sendButton = document.getElementById("send-button");
  sendButton?.addEventListener("click", sendmail);
} else {
  console.log("Element with id='em' not found");
}

// Email sending function
function sendmail(): void {
  const name = (document.querySelector('input[name="name"]') as HTMLInputElement)?.value || '';
  const emailVal = (document.querySelector('input[name="email"]') as HTMLInputElement)?.value || '';
  const phone = (document.querySelector('input[name="phone"]') as HTMLInputElement)?.value || '';
  const subject = (document.querySelector('input[name="subject"]') as HTMLInputElement)?.value || '';
  const description = (document.querySelector('textarea[name="description"]') as HTMLTextAreaElement)?.value || '';

  const values = {
    name,
    email: emailVal,
    phone,
    subject,
    description,
  };

  // Send to first template
  emailjs.send('service_mp1avg9', 'template_les1jbh', values)
    .then(() => {
      alert('Email  sent successfully:');
    })
    .catch((error) => {
      console.error('Error sending template 1:', error);
    });

  // Send to second template
  emailjs.send('service_mp1avg9', 'template_ba0q7lm', values)
    .then(() => {
      alert('Email  sent successfully:');
    })
    .catch((error) => {
      console.error('Error sending template 2:', error);
    });
}
