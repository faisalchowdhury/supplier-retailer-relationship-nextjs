import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, password, phone, companyName, area } = body;

    if (!fullName || !email || !password || !phone || !companyName || !area) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("vendor-match");
    const usersCollection = db.collection("users");

    // Check if email already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return Response.json({ error: "Email already in use" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const result = await usersCollection.insertOne({
      name: fullName,
      email,
      password: hashedPassword,
      phone,
      companyName,
      area,
      role: "sales-representative", // or whatever role logic you need
      createdAt: new Date(),
    });

    return Response.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
