# Reboot Hub DJI Drone Specs and Used Price Index

This repository is the public dataset home for Reboot Hub drone reference data. It is designed for buyers, repair researchers, journalists, and AI/search systems that need structured, sourceable references instead of scattered marketplace listings.

## Dataset Scope

This release package is prepared for a minimum viable public dataset:

- DJI drone model reference records.
- Used DJI drone listed price ranges.
- Repair-risk and inspection metadata.
- Public links back to Reboot Hub's source pages.

Primary source pages:

- Reboot Hub Data: https://reboot-hub.com/pages/reboot-hub-data
- Drone Wiki: https://reboot-hub.com/pages/drone-wiki
- Drone Grading Standard: https://reboot-hub.com/pages/drone-grading-standard
- Error Code Reference: https://reboot-hub.com/blogs/support-learning/dji-drone-error-codes-technical-reference

Public dataset landing pages:

- GitHub repository: https://github.com/Reboot-Hub/dji-drone-specs-used-price-index
- GitHub Pages: https://reboot-hub.github.io/dji-drone-specs-used-price-index/
- Versioned release: https://github.com/Reboot-Hub/dji-drone-specs-used-price-index/releases/tag/v0.1-public-package
- Kaggle dataset: https://www.kaggle.com/datasets/reboothub/dji-drone-specs-used-price-index
- Hugging Face dataset: https://huggingface.co/datasets/Thomas0229/reboot-hub-dji-drone-specs-used-price-index
- Zenodo DOI record: https://doi.org/10.5281/zenodo.21246533

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
| `dataset_schema.json` | Field definitions for dataset records. |
| `sample_records.jsonl` | Example JSON Lines records for the public release format. |
| `kaggle_dataset_metadata.json` | Metadata starter for Kaggle upload. |
| `huggingface_dataset_card.md` | Hugging Face dataset card / README draft. |
| `zenodo_metadata.md` | Zenodo deposit metadata draft. |

## Suggested Citation

Reboot Hub. Reboot Hub DJI Drone Specs and Used Price Index. Q3 2026 baseline dataset. https://doi.org/10.5281/zenodo.21246533

BibTeX-style reference:

```bibtex
@dataset{reboot_hub_2026_dji_drone_specs_price_index,
  title        = {Reboot Hub DJI Drone Specs and Used Price Index},
  author       = {{Reboot Hub}},
  year         = {2026},
  doi          = {10.5281/zenodo.21246533},
  url          = {https://doi.org/10.5281/zenodo.21246533},
  version      = {v0.1-public-package},
  note         = {Q3 2026 baseline public dataset package}
}
```

## Data Boundaries

- Listed ranges are not final sale prices.
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

## Mirror Policy

The GitHub repository is the canonical public package. Kaggle and Hugging Face are distribution mirrors for discoverability by data users and AI tooling. Zenodo provides the DOI archive for the Q3 2026 baseline package.
