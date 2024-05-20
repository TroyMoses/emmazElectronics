import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {User} from "@/models/User";
import {UserInfo} from "@/models/UserInfo";
import mongoose from "mongoose";
import {getServerSession} from "next-auth";

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  const {_id, name, image, ...otherUserInfo} = data;

  let filter = {};
  const session = await getServerSession(authOptions);
  // const email = "test@example.com";
  const email = "emmanuelarube123@gmail.com";
  filter = {email};

  const user = await User.findOne(filter);
  await User.updateOne(filter, {name, image});
  await UserInfo.findOneAndUpdate({email:user.email}, otherUserInfo, {upsert:true});

  return Response.json(true);
}

export async function GET(req) {
  mongoose.connect(process.env.MONGO_URL);

  const url = new URL(req.url);
  const userId = url.searchParams.get('_id');
  console.log(url);
  // console.log(userId);

  // let filterUser = {};
  // if (userId) {
  //   filterUser = {userId};
  // } else {
  //   let email = "test@example.com";
  //   // let email = "emmanuelarube123@gmail.com";
  //   if (!email) {
  //     return Response.json({});
  //   }
  //   filterUser = {email};
  // }
  let filterUser = {};
  // let email = "test@example.com";
  let email = "emmanuelarube123@gmail.com";
  if (!email) {
    return Response.json({});
  }
  filterUser = {email};

  const user = await User.findOne(filterUser).lean();
  const userInfo = await UserInfo.findOne({email:user.email}).lean();

  return Response.json({...user, ...userInfo});

}