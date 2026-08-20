/** A bounded public aggregate from the Reboot Hub Q3 2026 price-index release. */
export interface PriceIndexRecord {
  readonly model: string;
  readonly source_listing_labels: string;
  readonly source_row_count: number;
  readonly configurations_tracked: number;
  readonly listed_price_low_usd: number;
  readonly listed_price_high_usd: number;
  readonly median_listed_price_usd: number;
  readonly snapshot_date: string;
  readonly release_quarter: string;
  readonly observation_unit: string;
  readonly quality_status: string;
  readonly source_url: string;
  readonly methodology_note: string;
  readonly non_affiliation_note: string;
}
