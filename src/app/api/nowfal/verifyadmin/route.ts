import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const password = await req.json()
    const ADMIN_PASS = process.env.ADMIN_PASSWORD;

    if (String(password) === ADMIN_PASS) {
      return NextResponse.json(
        { message: "Success", admin: true },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Incorrect Password", admin: false },
        { status: 401 }
      );
    }
  } catch (err) {
    console.log(err)
    const error = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}