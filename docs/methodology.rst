Methodology and Evidence Boundaries
===================================

Snapshot scope
--------------

Version 0.2.0 is a Q3 2026 baseline snapshot of published Reboot Hub catalog
configuration prices. Aircraft names are normalized to model-level rows, then
the observed low, high, and median listed prices are summarized in USD.

The public table covers:

* 43 aircraft model-level aggregates.
* Configuration counts totaling 251 published catalog configurations.
* Low, high, and median listed prices for each normalized model.
* A dated snapshot and declared data boundary.

What the prices mean
--------------------

The values are listed-price observations. They are not completed-sale prices,
inventory guarantees, appraisals, or forecasts. A model can have a wide range
because controller type, battery count, accessories, visible condition,
inspection grade, and bundle completeness differ between configurations.

Exclusions and normalization
----------------------------

The release excludes one non-aircraft accessory and one unresolved pricing
anomaly. One customization listing is merged into its base aircraft model. The
full release boundary and checksums are recorded in ``RELEASE_MANIFEST.json``.

Repair-risk examples
--------------------

``sample_records.jsonl`` contains four illustrative repair-risk records. These
records demonstrate how condition, battery context, gimbal behavior, crash
history, and inspection evidence can affect interpretation. They are not the
complete price table and must not be used as a representative sample of all
repairs or all listed aircraft.

Canonical methodology
---------------------

The maintained methodology and current release notes are published on the
`Reboot Hub Data page <https://reboot-hub.com/pages/reboot-hub-data>`_.
