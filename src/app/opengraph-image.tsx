import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Mezin Food Products - Saravanampatti, Coimbatore";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF7F2",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "16px solid #496335",
          padding: "40px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              backgroundColor: "#C89539",
            }}
          />
          <span
            style={{
              fontSize: "24px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#496335",
              fontWeight: 700,
            }}
          >
            MEZIN FOOD PRODUCTS • SARAVANAMPATTI, COIMBATORE
          </span>
        </div>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#1A0E08",
            textAlign: "center",
            margin: "0 0 20px 0",
            lineHeight: 1.2,
          }}
        >
          Mezin Food Products
        </h1>

        <p
          style={{
            fontSize: "28px",
            color: "#5E3924",
            textAlign: "center",
            margin: 0,
            maxWidth: "900px",
          }}
        >
          Saravanampatti, Coimbatore, Tamil Nadu
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}

