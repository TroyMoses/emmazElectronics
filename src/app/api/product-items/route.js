// import {isAdmin} from "@/app/api/auth/[...nextauth]/route";
import {ProductItem} from "@/models/ProductItem";
import mongoose from "mongoose";

export async function POST(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  console.log(data);
  if (!data.category) {
    throw new Error("Missing required field: category");
  } else if (data) {
    const productItemDoc = await ProductItem.create(data);
    return Response.json(productItemDoc);
  } else {
    return Response.json({});
  }
}

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  if (data) {
    const {_id, ...data} = await req.json();
    await ProductItem.findByIdAndUpdate(_id, data);
  }
  return Response.json(true);
}

export async function GET() {
  mongoose.connect(process.env.MONGO_URL);
  return Response.json(
    await ProductItem.find()
  );
}

export async function DELETE(req) {
  mongoose.connect(process.env.MONGO_URL);
  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  if (_id) {
    await ProductItem.deleteOne({_id});
  }
  return Response.json(true);
}