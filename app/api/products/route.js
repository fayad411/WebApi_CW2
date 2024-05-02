
import connectMongoDB from "@/data/connectMongoose";
import Cooking from "@/models/Cooking";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { Title, Description , CookingTime, DifficultyLevel,NutrtionInfo,Ingredients } = await request.json();
  await connectMongoDB();
  await Cooking.create({ title, description, cookingTime, difficultyLevel,nutritionalInfo,ingredients });
  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}
export async function GET() {
  await connectMongoDB();
  const products = await Cooking.find();
  return NextResponse.json({ products });
}