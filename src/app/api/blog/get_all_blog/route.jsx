import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";



export async function GET(){
    try {
        await connectToDB();

        const AllBlogDB = await Blog.find({});

        if(AllBlogDB && AllBlogDB.length){
            return NextResponse.json({
                success: true,
                data:  AllBlogDB,
            })
        }else{
            return NextResponse.json({
                success: false,
                message: "Something goes wrong!!"
            })
        }


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "something went wrong!"
        })
    }
}
