import Image from "next/image";
import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

const Icon = () =>
  new ImageResponse(
    (
      <div
        style={{
          width: "40",
          padding: "2",
          height: "40",
          fontSize: "16",
          fontWeight: "400",
          color: "white",
          backgroundColor: "black",
          borderRadius: "10%",
          textAlign: "center",
        }}
      >
        CSK
      </div>
    ),
    { ...size }
  );
export default Icon;
