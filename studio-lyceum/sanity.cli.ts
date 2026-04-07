import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "iw5edpoc",
  },
  /** Hostované Studio — rovnaké ako pri `sanity deploy` (bez opakovaného výberu hostname). */
  studioHost: "lyceum",
});
