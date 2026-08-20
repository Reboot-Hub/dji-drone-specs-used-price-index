"use strict";

const records = require("./data/model_price_summary_2026_q3.json");

const metadata = Object.freeze({
  title: "Reboot Hub DJI Drone Specs and Used Price Index",
  version: "0.2.0",
  releaseQuarter: "2026-Q3",
  observationUnit: "aircraft model-level aggregate",
  recordCount: records.length,
  configurationsTracked: 251,
  source: "https://reboot-hub.com/pages/reboot-hub-data",
  exactDoi: "https://doi.org/10.5281/zenodo.21387578",
  conceptDoi: "https://doi.org/10.5281/zenodo.21246532",
  license: "CC-BY-4.0"
});

function listModels() {
  return records.map((record) => record.model);
}

function getByModel(model) {
  if (typeof model !== "string") {
    return undefined;
  }

  const normalized = model.trim().toLowerCase();
  return records.find((record) => record.model.toLowerCase() === normalized);
}

module.exports = Object.freeze({
  metadata,
  records,
  listModels,
  getByModel
});
