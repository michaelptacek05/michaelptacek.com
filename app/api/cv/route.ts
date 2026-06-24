import { renderToBuffer } from "@react-pdf/renderer";
import { CVDocument } from "./CVDocument";
import { createElement } from "react";
import path from "path";

export const runtime = "nodejs";

export async function GET() {
    const avatarSrc = path.join(process.cwd(), "public", "avatar.jpeg");
    const buffer = await renderToBuffer(createElement(CVDocument, { avatarSrc }));

    return new Response(buffer, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": 'inline; filename="michael-ptacek-cv.pdf"',
        },
    });
}
