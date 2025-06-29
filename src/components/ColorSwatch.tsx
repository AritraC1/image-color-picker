import React from "react";

type Props = {
  hex: string;
  copied: boolean;
  onClick: () => void;
};

// It displays a colored swatch (a small colored box) with a hex color code, and shows a "Copied!" tooltip if the color has just been copied.
const ColorSwatch: React.FC<Props> = ({ hex, copied, onClick }) => (
  <div
    className={`swatch ${copied ? "copied" : ""}`}
    style={{ backgroundColor: hex }}
    onClick={onClick}
    title={`Click to copy ${hex}`}
  >
    {hex}
    {copied && <span className="tooltip">Copied!</span>}
  </div>
);

export default ColorSwatch;