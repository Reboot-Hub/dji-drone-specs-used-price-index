# Reboot Hub DJI Drone Price Index

An installable TypeScript view of the Reboot Hub **Q3 2026** public baseline.
It provides 43 aircraft-model aggregates derived from 251 published Reboot Hub
catalog configurations.

```ts
import { getModel, loadModelPriceSummary } from "jsr:@reboot-hub/dji-drone-price-index";

const mavic3 = getModel("DJI Mavic 3");
const allModels = loadModelPriceSummary();
```

## What the package contains

- `listed_price_low_usd`, `listed_price_high_usd`, and median listed price
- model-level configuration counts and snapshot metadata
- the original public methodology and non-affiliation note on every record

## Evidence boundary

The release is a bounded aggregation of **published listed prices**, not
completed-sale prices, a live inventory feed, an appraisal, a price guarantee,
or a universal market index. It deliberately excludes the underlying 251
configuration rows and any private, customer, supplier, cost, or transaction
data.

Read the [source and methodology](https://reboot-hub.com/pages/reboot-hub-data).
The canonical public [repository](https://github.com/Reboot-Hub/dji-drone-specs-used-price-index)
and archival [DOI record](https://doi.org/10.5281/zenodo.21387578) document the
same bounded release.

Reboot Hub is independent and is not affiliated with, endorsed by, or
officially authorized by DJI. DJI is a trademark of its respective owner.

## License

CC BY 4.0. See [LICENSE.md](./LICENSE.md).
