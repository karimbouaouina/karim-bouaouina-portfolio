import React, { useEffect } from "react";

export default function Opening({ Opening, setOpening }) {
  useEffect(() => {
    let danger = setTimeout(() => {
      setOpening(false);
    }, 3000);

    return () => {
      clearTimeout(danger);
    };
  }, []);

  return (
    <div
      className={`${
        !Opening && "fade-out"
      } fixed inset-0 bg-primary flex items-center justify-center z-[9999] select-none`}
    >
      <div class="progress-loader">
        <div class="progress"></div>
      </div>
    </div>
  );
}
