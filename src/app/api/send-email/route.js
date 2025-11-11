import nodemailer from "nodemailer";
import { Notify } from "notiflix";

export async function POST(req) {
  const { firstname, lastname, email, phoneNumber, service, message } =
    await req.json();

  if (!firstname || !lastname || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({ error: "Invalid email format" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rnflanja06@gmail.com",
      pass: "fmqt peap rcis kkfe",
    },
  });

  const mailOptions = {
    from: `"${firstname} ${lastname}" <${email}>`,
    to: "rnflanja06@gmail.com",
    subject: `New Contact Form Submission from ${firstname} ${lastname}`,
    text: `
      Name: ${firstname} ${lastname}
      Email: ${email}
      Phone: ${phoneNumber || "Not provided"}
      Service: ${service || "Not selected"}
      Message: ${message}
    `,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .header {
            background: #007bff;
            color: #ffffff;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 20px;
          }
          .field {
            margin-bottom: 15px;
          }
          .field-label {
            font-weight: bold;
            color: #007bff;
          }
          .footer {
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #777;
            border-top: 1px solid #eee;
            margin-top: 20px;
          }
          @media only screen and (max-width: 600px) {
            .container {
              margin: 10px;
              padding: 10px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="field-label">Name:</span> ${firstname} ${lastname}
            </div>
            <div class="field">
              <span class="field-label">Email:</span> ${email}
            </div>
            <div class="field">
              <span class="field-label">Phone:</span> ${phoneNumber || "Not provided"}
            </div>
            <div class="field">
              <span class="field-label">Service:</span> ${service || "Not selected"}
            </div>
            <div class="field">
              <span class="field-label">Message:</span>
              <p style="margin: 0;">${message}</p>
            </div>
          </div>
          <div class="footer">
            This email was sent from your website's contact form.
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email: " + error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}