import { contextBridge } from "electron";

// Expose protected APIs
contextBridge.exposeInMainWorld("electron", {
  nodeVersion: () => process.versions.node,
  chromeVersion: () => process.versions.chrome,
  electronVersion: () => process.versions.electron,
});
