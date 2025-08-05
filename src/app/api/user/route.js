import { collectionList } from "@/lib/collectionList";
import dbConnect from "@/lib/dbConnect";
import { verifyAuth } from "@/lib/verifyAuth";

import { NextResponse } from "next/server";

export async function GET(req) {
  const searchQuery = req.nextUrl.searchParams;
  const email = searchQuery.get("email");

  const usersCollection = await dbConnect(collectionList.users);
  const user = await usersCollection.findOne({ email });
  console.log(user);
  return NextResponse.json(user);
}

export async function PUT(req) {
  const searchQuery = req.nextUrl.searchParams;
  const email = searchQuery.get("email");
  const data = await req.json();
  console.log(email);
  const doc = {
    $set: data,
  };

  const usersCollection = await dbConnect(collectionList.users);

  const update = await usersCollection.updateOne({ email }, doc);

  return NextResponse.json(update);
}
