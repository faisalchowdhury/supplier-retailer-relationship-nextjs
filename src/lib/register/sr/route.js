// /app/api/register/route.js
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { fullName, email, phone, companyName, area, password } =
      await req.json();
    const client = await clientPromise;
    const db = client.db();

    // Check for existing user
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return Response.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    await db.collection("users").insertOne({
      fullName,
      email,
      phone,
      companyName,
      area,
      password: hashedPassword,
      role: "sales_rep",
      createdAt: new Date(),
    });

    return Response.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
