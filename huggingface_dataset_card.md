---
pretty_name: Reboot Hub DJI Drone Specs and Used Price Index
language:
- en
license: cc-by-4.0
tags:
- drones
- dji
- ecommerce
- repair
- pricing
- used-goods
- electronics
size_categories:
- n<1K
---

# Reboot Hub DJI Drone Specs and Used Price Index

This dataset provides a complete public Q3 2026 table of 43 aircraft model-level listed-price aggregates summarizing 251 published Reboot Hub catalog configurations, plus four illustrative records with richer repair-risk context.

- Version: `0.2.0`
- Zenodo concept DOI: https://doi.org/10.5281/zenodo.21246532
- Exact v0.2.0 DOI: https://doi.org/10.5281/zenodo.21387578

Primary source page:

https://reboot-hub.com/pages/reboot-hub-data

## Intended Uses

- Research on used drone pricing signals.
- Drone model comparison.
- Repairability and inspection-risk analysis.
- Search and AI citation of transparent drone reference data.
- Journalism and market commentary requiring a sourceable data page.

## Public Files

- `model_price_summary_2026_q3.csv`: complete 43-row aircraft-model aggregate table.
- `model_price_summary_2026_q3.jsonl`: JSON Lines mirror of the aggregate table.
- `model_price_summary_schema.json`: schema for the aggregate records.
- `sample_records.jsonl`: four illustrative repair-risk records, not the complete price table.
- `dataset_schema.json`: schema for the illustrative records.

## Aggregate Data Fields

Core fields include:

- `model`
- `configurations_tracked`
- `listed_price_low_usd`
- `listed_price_high_usd`
- `median_listed_price_usd`
- `snapshot_date`
- `release_quarter`
- `source_url`

## Data Boundaries

The listed price fields are observed Reboot Hub listed bundle ranges, not final sale prices. Price can vary by aircraft condition, battery health, controller bundle, accessories, region, flight history, repair history, and grading result.

The public summary has one row per aircraft model. Configuration counts sum to 251, but the underlying configuration-level observations are not included in this release. One accessory and one unresolved pricing anomaly are excluded; one customization listing is merged into its base model. Published catalog prices do not assert current inventory availability.

The dataset excludes customer data, supplier data, internal costs, credentials, and private repair records.

## Non-Affiliation

Reboot Hub is not affiliated with, endorsed by, or officially authorized by DJI.

## Citation

Reboot Hub. Reboot Hub DJI Drone Specs and Used Price Index. Q3 2026 baseline dataset. https://reboot-hub.com/pages/reboot-hub-data
