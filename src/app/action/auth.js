"use server";

import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "jamiKhan01786076080";

const generateSessionToken = (user, rememberMe) => {
  const sessionToken = jwt.sign(
    {
      userId: user._id,
      email: user.email,
    },
    JWT_SECRET,
    { expiresIn: rememberMe ? "30d" : "24h" } 
  );
  return sessionToken;
}

export const registerUser = async (data) => {
  try {
    const { email, password, rememberMe } = data;
    console.log(email, "registerUser");
    await connectToDatabase();
    const existingUser = await User.findOne({ email });

    // if user exits
    if (existingUser) {
      return { success: false, error: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
    });
    await user.save();

    const sessionToken = generateSessionToken(user, rememberMe);

    return { success: true, message: "User registered successfully", };
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (data) => {
  try {
    const { email, password, rememberMe } = data;
    await connectToDatabase();
    // Find user by email
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return { success: false, error: "Invalid email or password" };
    }

    const sessionToken = generateSessionToken(user, rememberMe);
    console.log(sessionToken, "sessionToken");

    const userId = user._id.toString();
    return { success: true, userId, };
  } catch (error) {}
};

