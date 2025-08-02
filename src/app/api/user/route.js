import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET(req){
   
    const searchQuery = req.nextUrl.searchParams;
    const email = searchQuery.get('email');
    

    const client = await clientPromise;
    const db = client.db("vendor-match");
    const usersCollection = db.collection("users");
    const user = await usersCollection.findOne({email});


    return NextResponse.json(user)
}