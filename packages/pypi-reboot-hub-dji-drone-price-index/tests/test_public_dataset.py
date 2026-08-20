from reboot_hub_drone_data import __version__, get_model, load_model_price_summary


def test_public_release_boundary_is_preserved():
    assert __version__ == "0.2.0"
    records = load_model_price_summary()
    assert len(records) == 43
    assert all(record["observation_unit"] == "aircraft model-level aggregate" for record in records)
    assert all("completed-sale" in record["methodology_note"] for record in records)
    assert all("not affiliated" in record["non_affiliation_note"] for record in records)


def test_model_lookup_is_exact_and_case_insensitive():
    record = get_model("dji mavic 3 enterprise")
    assert record is not None
    assert record["model"] == "DJI Mavic 3 Enterprise"
    assert get_model("not a real model") is None
