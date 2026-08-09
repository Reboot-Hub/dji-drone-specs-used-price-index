from __future__ import annotations

from datetime import date


project = "Reboot Hub DJI Drone Data"
author = "Reboot Hub"
copyright = f"{date.today().year}, Reboot Hub"
release = "0.2.0"
version = release

extensions: list[str] = []
templates_path = ["_templates"]
exclude_patterns: list[str] = []

html_theme = "alabaster"
html_static_path = ["_static"]
html_css_files = ["reboot-hub-docs.css"]
html_title = "Reboot Hub DJI Drone Data Documentation"
html_short_title = "Reboot Hub Data"
html_show_sourcelink = True
html_theme_options = {
    "description": "Versioned DJI drone listed-price and inspection-context documentation.",
    "fixed_sidebar": True,
    "github_button": True,
    "github_repo": "dji-drone-specs-used-price-index",
    "github_user": "Reboot-Hub",
    "github_type": "star",
}

rst_prolog = """
.. |canonical-data| replace:: https://reboot-hub.com/pages/reboot-hub-data
.. |concept-doi| replace:: https://doi.org/10.5281/zenodo.21246532
.. |version-doi| replace:: https://doi.org/10.5281/zenodo.21387578
"""
