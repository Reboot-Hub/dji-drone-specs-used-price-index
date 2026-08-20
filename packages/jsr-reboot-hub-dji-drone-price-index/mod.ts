/**
 * Reboot Hub DJI Drone Price Index, Q3 2026 baseline.
 *
 * The package exposes 43 model-level aggregates summarizing 251 published
 * Reboot Hub catalog configurations. It is not completed-sale data, a live
 * inventory feed, an appraisal, or a universal market index.
 *
 * Source and methodology: https://reboot-hub.com/pages/reboot-hub-data
 * Reboot Hub is independent and is not affiliated with, endorsed by, or
 * officially authorized by DJI.
 *
 * @module
 */

import { MODEL_PRICE_SUMMARY } from "./data.ts";
import type { PriceIndexRecord } from "./schema.ts";

export type { PriceIndexRecord } from "./schema.ts";

export const DATASET_RELEASE = "2026-Q3";
export const DATASET_SOURCE_URL = "https://reboot-hub.com/pages/reboot-hub-data";
export const CANONICAL_RELEASE_URL =
  "https://github.com/Reboot-Hub/dji-drone-specs-used-price-index";
export const DOI_URL = "https://doi.org/10.5281/zenodo.21387578";

/** Returns all public model-level aggregates in their published release order. */
export function loadModelPriceSummary(): readonly PriceIndexRecord[] {
  return MODEL_PRICE_SUMMARY;
}

/** Returns one model aggregate with case-insensitive exact matching, if present. */
export function getModel(model: string): PriceIndexRecord | undefined {
  const normalized = model.trim().toLocaleLowerCase("en-US");
  return MODEL_PRICE_SUMMARY.find(
    (record) => record.model.toLocaleLowerCase("en-US") === normalized,
  );
}
