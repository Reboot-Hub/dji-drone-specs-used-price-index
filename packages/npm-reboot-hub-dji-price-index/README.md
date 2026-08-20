# Reboot Hub DJI Drone Price Index

`reboot-hub-dji-drone-price-index` is a zero-dependency JavaScript data package for the **Q3 2026 Reboot Hub DJI Drone Specs and Used Price Index**.

It contains **43 aircraft model-level listed-price aggregates** summarising **251 public Reboot Hub catalog configurations**. It is designed for reproducible inspection of the release data, not for live inventory, completed-sale pricing, financial advice, or automated purchasing decisions.

## Install

```bash
npm install reboot-hub-dji-drone-price-index
```

## Use

```js
const priceIndex = require("reboot-hub-dji-drone-price-index");

console.log(priceIndex.metadata);
console.log(priceIndex.getByModel("DJI Mavic 3"));
console.log(priceIndex.listModels());
```

## What the values mean

Each record is an aircraft model-level aggregate of publicly listed Reboot Hub catalog configurations observed on the release snapshot date. `listed_price_low_usd`, `listed_price_high_usd`, and `median_listed_price_usd` are **listed-price** values. They are not completed-sale prices, trade-in offers, an inventory feed, or a prediction of current resale value.

The package does not include customer information, supplier data, private repair records, raw order data, or configuration-level inventory records.

## Provenance and citation

- Human-readable data page: [reboot-hub.com/pages/reboot-hub-data](https://reboot-hub.com/pages/reboot-hub-data)
- Exact Q3 2026 release DOI: [10.5281/zenodo.21387578](https://doi.org/10.5281/zenodo.21387578)
- Concept DOI for the evolving dataset: [10.5281/zenodo.21246532](https://doi.org/10.5281/zenodo.21246532)
- Public source repository: [Reboot-Hub/dji-drone-specs-used-price-index](https://github.com/Reboot-Hub/dji-drone-specs-used-price-index)

Suggested citation:

> Reboot Hub. *Reboot Hub DJI Drone Specs and Used Price Index*, version 0.2.0, Q3 2026. https://doi.org/10.5281/zenodo.21387578

## License and trademark notice

The dataset and package metadata are made available under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Attribution to Reboot Hub and the exact release DOI is required when reusing the release.

DJI is a trademark of DJI. Reboot Hub is an independent business and is not affiliated with, endorsed by, or officially authorized by DJI.
