# Reboot Hub DJI Drone Price Index

`reboot-hub-dji-drone-price-index` is a small, dependency-free Python package
for reading Reboot Hub's public Q3 2026 model-level used DJI listed-price
aggregate.

## What is included

- 43 aircraft model-level aggregates that summarize 251 published Reboot Hub
  catalog configurations.
- Listed low, high, and median bundle-price fields in USD.
- Snapshot, methodology, and non-affiliation fields retained with each record.

## What it is not

This is not a completed-sale database, appraisal, live inventory feed, price
guarantee, or whole-market index. A model's observed listed range can vary with
condition grade, controller bundle, battery health, accessories, inspection
result, and repair risk. The underlying 251 configuration-level observations
are not distributed in this package.

Reboot Hub is independent and is not affiliated with, endorsed by, or officially
authorized by DJI.

## Install

```bash
pip install reboot-hub-dji-drone-price-index
```

## Use

```python
from reboot_hub_drone_data import get_model, load_model_price_summary

records = load_model_price_summary()
mavic_3 = get_model("DJI Mavic 3")
```

`load_model_price_summary()` returns an immutable tuple of dictionaries.
`get_model()` returns one record or `None` when the exact model is not in the
public release.

## Canonical sources and citation

- [Reboot Hub Data](https://reboot-hub.com/pages/reboot-hub-data) explains the
  scope, current status, and methodology.
- [Canonical GitHub repository](https://github.com/Reboot-Hub/dji-drone-specs-used-price-index)
  carries the versioned data release and schemas.
- [Python package source](https://github.com/Reboot-Hub/dji-drone-specs-used-price-index/tree/main/packages/pypi-reboot-hub-dji-drone-price-index)
  contains the release-specific package code.
- Exact archived version: `10.5281/zenodo.21387578`.

Suggested citation:

> Reboot Hub. *Reboot Hub DJI Drone Specs and Used Price Index: Q3 2026 Baseline*.
> Version 0.2.0. https://doi.org/10.5281/zenodo.21387578

## License

The public aggregate and package code are released under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
Do not imply that this license covers non-public source rows, customer, supplier,
serial-number, repair-order, account, or other private data.
