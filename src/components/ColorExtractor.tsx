import React, { useState, useRef } from "react";
import { Vibrant } from "node-vibrant/browser";
import "../index.css";
import ColorSwatch from "./ColorSwatch";

const ColorExtractor: React.FC = () => {
  const [colors, setColors] = useState<string[]>([]);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImageSrc(url);

    Vibrant.from(url)
      .maxColorCount(64)
      .getPalette()
      .then((palette) => {
        const hexColors: string[] = [];
        Object.values(palette).forEach((swatch) => {
          if (swatch){
            hexColors.push(swatch.hex);
          }
        });

        const uniqueColors = Array.from(new Set(hexColors)); // ✅ Remove duplicates
        setColors(uniqueColors);
      })
      .catch((err) => {
        console.error("Vibrant error:", err);
        setColors([]);
      });
    };

    const handleCopy = async (hex: string) => {
        await navigator.clipboard.writeText(hex);
        setCopiedHex(hex);
        setTimeout(() => setCopiedHex(null), 1000);
    };

    return (
        <div className="color-extractor">
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={fileInputRef}
                style={{ display: "none" }}
            />

            <button onClick={handleButtonClick} className="upload-button">
                Upload Image
            </button>

            {imageSrc && (
                <div className="image-preview">
                <img src={imageSrc} alt="Uploaded preview" crossOrigin="anonymous" />
                </div>
            )}

            <div className="color-grid">
                {colors.map((hex, index) => (
                <ColorSwatch
                    key={`${hex}-${index}`} // prevent duplicate key error
                    hex={hex}
                    copied={copiedHex === hex}
                    onClick={() => handleCopy(hex)}
                />
                ))}
            </div>
        </div>
    );
};

export default ColorExtractor;