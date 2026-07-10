import { renderToBuffer, type DocumentProps } from "@react-pdf/renderer";
import { CVDocument } from "./CVDocument";
import { createElement, type ReactElement } from "react";
import path from "path";

export const runtime = "nodejs";

export async function GET() {
    const avatarSrc = path.join(process.cwd(), "public", "avatar.jpeg");
    const element = createElement(CVDocument, { avatarSrc }) as ReactElement<DocumentProps>;
    const buffer = await renderToBuffer(element);

    return new Response(new Uint8Array(buffer), {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": 'inline; filename="michael-ptacek-cv.pdf"',
        },
    });
}
