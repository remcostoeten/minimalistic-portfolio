import { db } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    const newUser = await db.user.create({
      data: {
        name, email, password
      },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}








