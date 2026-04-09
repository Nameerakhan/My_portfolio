import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#F5D6C3",
            letterSpacing: -0.5,
          }}
        >
          NK
        </span>
      </div>
    ),
    { ...size },
  );
}
