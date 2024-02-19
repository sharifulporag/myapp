import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB();
    const extractData = await req.json();

    const newCreateBlogData = await Blog.create(extractData);

    if (newCreateBlogData) {
      return NextResponse.json({
        success: true,
        message: "Blog Added Successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Blog Not Added for somekind of problem. Please Try again!!",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong!",
    });
  }
}
