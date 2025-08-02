import { collectionList } from "@/lib/collectionList";
import dbConnect from "@/lib/dbConnect";
import { verifyAuth } from "@/lib/verifyAuth";

import { NextResponse } from "next/server";

export async function GET(req) {
  const { authorized, session, response } = await verifyAuth(
    req,
    "sales-representative"
  );
  if (!authorized) return response;

  const searchQuery = req.nextUrl.searchParams;
  const email = searchQuery.get("email");

  const usersCollection = await dbConnect(collectionList.users);
  const user = await usersCollection.findOne({ email });
  console.log(user);
  return NextResponse.json(user);
}
