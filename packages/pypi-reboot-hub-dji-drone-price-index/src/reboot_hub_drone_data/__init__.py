"""Read the public Reboot Hub Q3 2026 used-drone price aggregate.

The bundled rows are model-level listed-price aggregates. They are deliberately
not a live inventory feed, completed-sale dataset, or market valuation tool.
"""

from __future__ import annotations

import json
from functools import lru_cache
from importlib.resources import files
from typing import Any, Dict, Optional, Tuple

__all__ = ["__version__", "get_model", "load_model_price_summary"]
__version__ = "0.2.0"


@lru_cache(maxsize=1)
def load_model_price_summary() -> Tuple[Dict[str, Any], ...]:
    """Return the immutable public set of model-level aggregate records."""
    data_path = files("reboot_hub_drone_data").joinpath(
        "data/model_price_summary_2026_q3.jsonl"
    )
    with data_path.open("r", encoding="utf-8") as handle:
        return tuple(json.loads(line) for line in handle if line.strip())


def get_model(model: str) -> Optional[Dict[str, Any]]:
    """Return a single record for an exact model name, or ``None`` if absent."""
    normalized = model.casefold().strip()
    for record in load_model_price_summary():
        if record["model"].casefold() == normalized:
            return record
    return None
