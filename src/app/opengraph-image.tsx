import { ImageResponse } from "next/og";

export const alt = "fresco. — Programa para la creación contemporánea en Carabanchel, Madrid";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "58px 66px",
          background: "#181817",
          color: "#e7e3da",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: 86, fontWeight: 800, letterSpacing: "-5px" }}>fresco.</div>
          <div style={{ color: "#416cff", fontSize: 22, letterSpacing: "5px", textTransform: "uppercase" }}>Madrid · desde 2021</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 0.94, letterSpacing: "-4px" }}>Programa para la</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 0.94, letterSpacing: "-4px", color: "#98968f" }}>creación contemporánea.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "2px solid #2252e2", paddingTop: 22, fontSize: 24 }}>
          <span>Fresca. La Nave · Carabanchel</span>
          <span style={{ color: "#416cff" }}>fresco.art</span>
        </div>
      </div>
    ),
    size,
  );
}
