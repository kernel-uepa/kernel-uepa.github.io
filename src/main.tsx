import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { community } from "./config/community";

// Apply accent colour from community config to CSS custom properties.
// Change accentColor (HSL string) or accentColorHex in src/config/community.ts
// to retheme the entire site without touching CSS files.
const root = document.documentElement;
root.style.setProperty("--primary", community.accentColor);
root.style.setProperty("--accent", community.accentColor);
root.style.setProperty("--primary-foreground", "0 0% 2%");
root.style.setProperty("--accent-foreground", "0 0% 2%");

createRoot(document.getElementById("root")!).render(<App />);
