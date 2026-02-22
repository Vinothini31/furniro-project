const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

exports.createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // 1️⃣ Save to Database
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save();

    // 2️⃣ Setup Email Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3️⃣ Mail Options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: subject || "New Contact Message",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // 4️⃣ Send Email
    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      message: "Message sent and stored successfully",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Email failed to send",
    });
  }
};