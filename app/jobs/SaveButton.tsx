"use client";

import { useState } from "react";

export function SaveButton() {
  const [saved, setSaved] = useState(false);

  return (
    <button onClick={() => setSaved(!saved)}>
      {saved ? "Saved ✓" : "Save Job"}
    </button>
  );
}