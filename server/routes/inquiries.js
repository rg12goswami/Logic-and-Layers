import { Router } from "express";
import { Inquiry } from "../models/Inquiry.js";
import { sendInquiryNotification } from "../lib/email.js";

const router = Router();

router.post("/", async (req, res) => {
  const { name, email, company, projectType, budget, description } = req.body;

  if (!name || !email || !projectType || !budget || !description) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    const inquiry = await Inquiry.create({
      name,
      email,
      company,
      projectType,
      budget,
      description,
    });

    // The inquiry is already saved at this point — an email hiccup shouldn't
    // make the form look broken to the person who just submitted it.
    try {
      await sendInquiryNotification(inquiry);
    } catch (emailError) {
      console.error("Inquiry saved, but the notification email failed:", emailError);
    }

    return res.status(201).json({ id: inquiry._id });
  } catch (error) {
    console.error("Failed to save inquiry:", error);
    return res.status(500).json({ message: "Couldn't save that inquiry. Try again." });
  }
});

export default router;
