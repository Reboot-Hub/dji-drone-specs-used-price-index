# Reboot Hub DJI Drone Specs and Used Price Index

This repository is the public dataset home for Reboot Hub drone reference data. It is designed for buyers, repair researchers, journalists, and AI/search systems that need structured, sourceable references instead of scattered marketplace listings.

## Dataset Scope

This release package has two explicitly different grains:

- `model_price_summary_2026_q3.csv` and `.jsonl` contain the complete public Q3 table: 43 aircraft model-level aggregates summarizing 251 published Reboot Hub catalog configurations.
- `sample_records.jsonl` contains four illustrative repair-risk records and is not the complete price table.
- One accessory row and one unresolved pricing-anomaly row are excluded; one customization listing is merged into its base aircraft model.
- The 251 underlying configuration-level rows are not distributed in this release.
- All records link back to the canonical Reboot Hub Data page and state the listed-price evidence boundary.

Primary source pages:

- Reboot Hub Data: https://reboot-hub.com/pages/reboot-hub-data
- Drone Wiki: https://reboot-hub.com/pages/drone-wiki
- Drone Grading Standard: https://reboot-hub.com/pages/drone-grading-standard
- Error Code Reference: https://reboot-hub.com/blogs/support-learning/dji-drone-error-codes-technical-reference

Public dataset landing pages:

- GitHub repository: https://github.com/Reboot-Hub/dji-drone-specs-used-price-index
- GitHub Pages: https://reboot-hub.github.io/dji-drone-specs-used-price-index/
- Versioned release: https://github.com/Reboot-Hub/dji-drone-specs-used-price-index/releases/tag/v0.2.0
- Kaggle dataset: https://www.kaggle.com/datasets/reboothub/dji-drone-specs-used-price-index
- Hugging Face dataset: https://huggingface.co/datasets/Thomas0229/reboot-hub-dji-drone-specs-used-price-index
- Zenodo concept DOI (latest version): https://doi.org/10.5281/zenodo.21246532
- Exact v0.2.0 DOI: https://doi.org/10.5281/zenodo.21387578
- Previous archived v0.1 DOI: https://doi.org/10.5281/zenodo.21246533
- Reproducible Q3 analysis notebook: https://github.com/Reboot-Hub/dji-drone-specs-used-price-index/blob/main/notebooks/q3-2026-listed-price-range-analysis.ipynb

## Why This Dataset Exists

Used drone prices are hard to compare because model name alone is not enough. Battery count, controller bundle, camera condition, gimbal behavior, flight history, crash history, accessories, and inspection grade all affect value.

Reboot Hub publishes this dataset so the market has a transparent reference for:

- Used DJI drone price ranges.
- Model-level resale context.
- Repair-risk factors.
- Pre-owned drone grading signals.

## Files

| File | Purpose |
|---|---|
| `datapackage.json` | Data Package v2 descriptor for machine-readable discovery and reuse. |
| `model_price_summary_2026_q3.csv` | Complete 43-row aircraft model-level price summary in CSV format. |
| `model_price_summary_2026_q3.jsonl` | Complete 43-row aircraft model-level price summary in JSON Lines format. |
| `model_price_summary_schema.json` | Field definitions for the complete model-level aggregate table. |
| `sample_records.jsonl` | Four illustrative records with richer repair-risk context; not a complete table. |
| `dataset_schema.json` | Field definitions for the illustrative repair-risk records. |
| `notebooks/q3-2026-listed-price-range-analysis.ipynb` | Executed, reproducible interpretation of model coverage and listed-price ranges with explicit evidence boundaries. |
| `RELEASE_MANIFEST.json` | Version, DOI, row-count boundary, byte sizes, and SHA-256 checksums for every archived source file. |
| `kaggle_dataset_metadata.json` | Metadata starter for Kaggle upload. |
| `huggingface_dataset_card.md` | Hugging Face dataset card / README draft. |
| `zenodo_metadata.md` | Zenodo deposit metadata draft. |

## Suggested Citation

Reboot Hub. Reboot Hub DJI Drone Specs and Used Price Index. Version 0.2.0, Q3 2026 baseline dataset. https://doi.org/10.5281/zenodo.21387578

BibTeX-style reference:

```bibtex
@dataset{reboot_hub_2026_dji_drone_specs_price_index,
  title        = {Reboot Hub DJI Drone Specs and Used Price Index},
  author       = {{Reboot Hub}},
  year         = {2026},
  doi          = {10.5281/zenodo.21387578},
  url          = {https://doi.org/10.5281/zenodo.21387578},
  version      = {v0.2.0},
  note         = {Q3 2026 baseline public dataset package}
}
```

## Data Boundaries

- Listed ranges are not final sale prices.
- The complete public table is 43 aircraft model-level aggregates. Its configuration counts sum to 251, but the underlying configuration-level rows are not included.
- Non-aircraft accessories are excluded. Rows with unresolved pricing anomalies are held out until corrected or independently explained.
- Published catalog prices do not assert current inventory availability.
- Prices can change by aircraft condition, battery health, controller bundle, accessories, region, and grading result.
- The dataset avoids customer data, supplier data, cost data, and private repair records.
- Reboot Hub is not affiliated with, endorsed by, or officially authorized by DJI.

## License Recommendation

Use `CC BY 4.0` for public dataset snapshots if the published fields contain only Reboot Hub-created reference data and public product facts. Do not include third-party copyrighted descriptions, private marketplace exports, customer records, or supplier data.

## Versioning

Recommended version format:

- `2026-q3-baseline`
- `2026-q4-update`
- `2027-q1-update`

Each quarterly release should include:

- Release date.
- Number of models.
- Number of price records.
- Methodology note.
- Link to the Reboot Hub Data page.

Automated release checks must confirm model-name uniqueness, required-field completeness, positive configuration counts, the declared row and configuration totals, and `low <= median <= high` before publication.

## Mirror Policy

The GitHub repository is the canonical public package. Kaggle and Hugging Face are distribution mirrors for discoverability by data users and AI tooling. Zenodo concept DOI `10.5281/zenodo.21246532` resolves to the latest archived version; exact version `0.2.0` is archived at DOI `10.5281/zenodo.21387578`.

## Independent Metadata Indexes

- DataCite DOI metadata: https://commons.datacite.org/doi.org/10.5281/zenodo.21246533
- OpenAlex dataset record: https://openalex.org/W7167590697
- OpenAIRE dataset record: https://explore.openaire.eu/search/dataset?pid=10.5281%2Fzenodo.21246533
