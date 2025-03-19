"use client";
import { useEffect } from "react";

export default function FixScaling() {
	useEffect(() => {
		function detectAndFixScaling() {
			const testDiv = document.createElement("div");
			testDiv.style.position = "absolute";
			testDiv.style.visibility = "hidden";
			testDiv.style.fontSize = "16px";
			testDiv.innerText = "Test";
			document.body.appendChild(testDiv);

			const computedSize = window.getComputedStyle(testDiv).fontSize;
			document.body.removeChild(testDiv);
			const sizeNumber = parseFloat(computedSize);

			if (sizeNumber > 16) {
				const scaleFactor = 16 / sizeNumber;
				document.body.style.transform = `scale(${scaleFactor})`;
				document.body.style.transformOrigin = "top left";
			}
		}

		detectAndFixScaling();
		window.addEventListener("resize", detectAndFixScaling);

		return () => window.removeEventListener("resize", detectAndFixScaling);
	}, []);

	return null; // No UI, just logic
}