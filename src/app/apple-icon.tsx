import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#7B1F3A",
          borderRadius: 36,
        }}
      >
        <span
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "#F5D6C3",
            letterSpacing: -2,
          }}
        >
          NK
        </span>
      </div>
    ),
    { ...size },
  );
}
