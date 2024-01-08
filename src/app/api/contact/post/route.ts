import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import axios from "axios";
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const URL_ENDPOINT = process.env.SCRIPT_ENDPOINT;
    if (URL_ENDPOINT) {
      const response = await axios.post(URL_ENDPOINT, data);
      return NextResponse.json(
        { message: "Message Posted Sucessfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
