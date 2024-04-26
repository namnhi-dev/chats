import bcrypt from "bcrypt";

import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, password } = body;

        if (!name || !email || !password) {
            return new NextResponse("Missing info", { status: 400 });
        }

        const hashPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: { email, name, hashPassword },
        });

        return NextResponse.json(user);
    } catch (error: any) {
        console.log(error.message, "Error creating");
        return new NextResponse("Error creating", { status: 500 });
    }
}
