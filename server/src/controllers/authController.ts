import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma";

const generateToken = (userId: string): string => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });
};

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res
        .status(400)
        .json({
          success: false,
          error: "Name, email and password are required",
        });
      return;
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      res.status(409).json({ success: false, error: "Email already in use" });
      return;
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashed },
      select: { id: true, name: true, email: true, createdAt: true },
    });

    const token = generateToken(user.id);
    res.status(201).json({ success: true, data: { user, token } });
    return;
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res
        .status(400)
        .json({ success: false, error: "Email and password are required" });
      return;
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(401).json({ success: false, error: "Invalid credentials" });
      return;
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      res.status(401).json({ success: false, error: "Invalid credentials" });
      return;
    }

    const token = generateToken(user.id);
    const userResponse = {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
    res.json({ success: true, data: { user: userResponse, token } });
    return;
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

export const getMe = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, error: "Unauthorized" });
      return;
    }

    res.json({ success: true, data: { user: req.user } });
    return;
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};
