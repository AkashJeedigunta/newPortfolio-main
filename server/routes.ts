import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      res.status(201).json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon.",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: "Please check your form data",
          errors: error.errors
        });
      }
      
      console.error("Contact form error:", error);
      res.status(500).json({
        success: false,
        message: "Sorry, there was an error sending your message. Please try again."
      });
    }
  });

  // Get all contacts (for admin purposes, if needed)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({
        success: false,
        message: "Error retrieving contacts"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
