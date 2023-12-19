import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import {connectMongoDB} from "../mongodb"
import User from "../User"

export async function POST(req){
    try{
        const {name, email, password} = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        await connectMongoDB();
        await User.create({
            name, email, password: hashedPassword
        });

        return NextResponse.json({ message: "User registered." }, {status: 201});
    }catch (error) {
        return NextResponse.json(
            {message: "An error occured while registering the user. "},
            {status: 500}
        );
    }
}