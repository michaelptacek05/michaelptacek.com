import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
    const filePath = path.resolve(".", "public/underpass.pdf");
    const imageBuffer = fs.readFileSync(filePath);
    return new NextResponse(imageBuffer, {
        status: 200,
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": 'inline; filename="underpass.pdf"',
        },
    });
}
