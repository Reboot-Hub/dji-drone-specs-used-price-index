Data Files and Field Reference
==============================

Model-level aggregates
----------------------

``model_price_summary_2026_q3.csv`` and
``model_price_summary_2026_q3.jsonl`` contain the same complete 43-row public
table in two formats. Field definitions are maintained in
``model_price_summary_schema.json``.

Key fields include:

``model``
   Normalized aircraft model name.

``configurations_tracked``
   Number of published catalog configurations represented by the model row.

``listed_price_low_usd``
   Lowest observed listed price in the snapshot.

``listed_price_high_usd``
   Highest observed listed price in the snapshot.

``median_listed_price_usd``
   Median observed listed price across represented configurations.

``snapshot_date``
   Date associated with the release snapshot.

Illustrative records
--------------------

``sample_records.jsonl`` contains four richer examples with repair-risk context.
Its fields are described in ``dataset_schema.json``. This file must not be
mistaken for the complete model-level table.

Reproducibility files
---------------------

* ``datapackage.json`` provides machine-readable Data Package metadata.
* ``RELEASE_MANIFEST.json`` records version, byte sizes, row counts, and SHA-256
  checksums.
* ``notebooks/q3-2026-listed-price-range-analysis.ipynb`` provides an executed
  interpretation of model coverage and listed-price ranges.
* ``CITATION.cff`` provides machine-readable citation metadata.

Download sources
----------------

* `CSV table <https://raw.githubusercontent.com/Reboot-Hub/dji-drone-specs-used-price-index/main/model_price_summary_2026_q3.csv>`_
* `JSON Lines table <https://raw.githubusercontent.com/Reboot-Hub/dji-drone-specs-used-price-index/main/model_price_summary_2026_q3.jsonl>`_
* `Versioned release package <https://github.com/Reboot-Hub/dji-drone-specs-used-price-index/releases/tag/v0.2.0>`_
