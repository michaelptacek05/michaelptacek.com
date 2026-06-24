import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import path from "path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
    const avatarBuffer = readFileSync(path.join(process.cwd(), "public", "avatar.jpeg"));
    const avatarSrc = `data:image/jpeg;base64,${avatarBuffer.toString("base64")}`;

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#191b25",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 100px",
                    gap: "72px",
                }}
            >
                {/* Photo */}
                <img
                    src={avatarSrc}
                    style={{
                        width: 220,
                        height: 220,
                        borderRadius: "50%",
                        objectFit: "cover",
                        flexShrink: 0,
                    }}
                />

                {/* Text */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                    <div
                        style={{
                            fontSize: 68,
                            fontWeight: 700,
                            color: "#ededed",
                            letterSpacing: "-1px",
                            lineHeight: 1.1,
                        }}
                    >
                        Michael Ptáček
                    </div>
                    <div
                        style={{
                            fontSize: 30,
                            color: "#3d8f6f",
                            marginTop: "16px",
                        }}
                    >
                        Software Engineer
                    </div>
                    <div
                        style={{
                            fontSize: 22,
                            color: "#4b5563",
                            marginTop: "10px",
                        }}
                    >
                        Prague, Czechia
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
