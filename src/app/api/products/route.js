import { collectionList } from "@/lib/collectionList";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const productCollection = await dbConnect(collectionList.products);
export async function POST(req) {
  const doc = await req.json();

  const result = await productCollection.insertOne(doc);
  return NextResponse.json(result);
}

export async function GET(req) {
  const searchQuery = req.nextUrl.searchParams;
  const email = searchQuery.get("email");

  const result = await productCollection.find({ email }).toArray();
  return NextResponse.json(result);
}
