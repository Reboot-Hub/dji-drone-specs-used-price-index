Reboot Hub DJI Drone Data
=========================

This documentation describes the public **Reboot Hub DJI Drone Specs and Used
Price Index**, version 0.2.0. The release contains 43 aircraft model-level
aggregates summarizing 251 published catalog configurations, plus four separate
illustrative repair-risk records.

The dataset is intended for buyers, repair researchers, journalists, and data
users who need a versioned reference with explicit evidence boundaries. It is
not a completed-sale price index, an inventory feed, or a market-wide valuation.

Primary references
------------------

* `Canonical Reboot Hub Data page <https://reboot-hub.com/pages/reboot-hub-data>`_
* `GitHub source repository <https://github.com/Reboot-Hub/dji-drone-specs-used-price-index>`_
* `Exact version 0.2.0 DOI <https://doi.org/10.5281/zenodo.21387578>`_
* `Concept DOI for the latest release <https://doi.org/10.5281/zenodo.21246532>`_
* `Drone Wiki <https://reboot-hub.com/pages/drone-wiki>`_
* `Pre-owned drone grading standard <https://reboot-hub.com/pages/drone-grading-standard>`_

Documentation
-------------

.. toctree::
   :maxdepth: 2

   methodology
   data-files
   citation

Release boundary
----------------

The public model table contains one row per normalized aircraft model. The
``configurations_tracked`` values sum to 251, but the underlying
configuration-level rows are not distributed. One accessory row and one
unresolved pricing-anomaly row are excluded, and one customization listing is
merged into its base aircraft model.

Reboot Hub is independent and is not affiliated with, endorsed by, or officially
authorized by DJI.
