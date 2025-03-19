"use client";
import { useEffect } from "react";

export default function FixScaling() {
	useEffect(() => {
		function detectAndFixScaling() {
			// Create a test div with a known font size
			const testDiv = document.createElement("div");
			testDiv.style.position = "absolute";
			testDiv.style.visibility = "hidden";
			testDiv.style.fontSize = "16px";
			testDiv.innerText = "Test";
			document.body.appendChild(testDiv);

			// Get computed font size
			const computedSize = window.getComputedStyle(testDiv).fontSize;
			document.body.removeChild(testDiv);
			const sizeNumber = parseFloat(computedSize);

			// If the font is larger than expected, scale it down
			if (sizeNumber > 16) {
				const scaleFactor = 16 / sizeNumber;

				// Apply scale to the content container instead of the whole page
				const container = document.querySelectorAll<HTMLElement>(".content-container");
				if (container) {
					container.forEach((container) => {
						container.style.transform = `scale(${scaleFactor})`;
						container.style.transformOrigin = "top left";
						container.style.width = `${100 / scaleFactor}%`; // Prevent clipping
					})

				}
			} else {
				// Reset the transform if the size is normal
				const container = document.getElementById("content-container");
				if (container) {
					container.style.transform = "";
					container.style.width = "";
				}
			}
		}

		// Run once on page load
		detectAndFixScaling();

		// Run again when the viewport size changes (for rotation)
		window.addEventListener("resize", detectAndFixScaling);

		return () => window.removeEventListener("resize", detectAndFixScaling);
	}, []);

	return null; // No UI, just logic
}
