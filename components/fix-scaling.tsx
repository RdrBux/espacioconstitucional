"use client";
import { useEffect } from "react";

export default function FixScaling() {
	useEffect(() => {
		function detectTextScaling() {
			// Create a test element to measure text scaling
			const testDiv = document.createElement("div");
			testDiv.style.position = "absolute";
			testDiv.style.visibility = "hidden";
			testDiv.style.fontSize = "16px";
			testDiv.innerText = "Test";
			document.body.appendChild(testDiv);

			// Get the computed font size
			const computedSize = window.getComputedStyle(testDiv).fontSize;
			document.body.removeChild(testDiv);

			const sizeNumber = parseFloat(computedSize);

			// If the text size is larger than normal (larger than 16px), we’ll apply adjustments
			if (sizeNumber > 10) {
				document.body.classList.add("larger-text");
			} else {
				document.body.classList.remove("larger-text");
			}
		}

		// Detect the scaling once on page load
		detectTextScaling();

		// Add event listener to detect when the window is resized
		window.addEventListener("resize", detectTextScaling);

		return () => window.removeEventListener("resize", detectTextScaling);
	}, []);

	return null; // No UI, just logic
}
