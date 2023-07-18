import React, { useState } from "react";

interface FilterProps {
  selectedBrand: string;
  selectedPriceRange: string;
  onBrandChange: (value: string) => void;
  onPriceRangeChange: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  selectedBrand,
  selectedPriceRange,
  onBrandChange,
  onPriceRangeChange,
}) => {
  // Handler for brand selection
  const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onBrandChange(event.target.value);
  };

  // Handler for price range selection
  const handlePriceRangeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onPriceRangeChange(event.target.value);
  };

  return (
    <div>
      <h2>Filters</h2>
      <label htmlFor="brand">Brand:</label>
      <select id="brand" value={selectedBrand} onChange={handleBrandChange}>
        <option value="">All</option>
        <option value="Samsung">Samsung</option>
        <option value="Apple">Apple</option>
        <option value="Xiaomi">Xiaomi</option>
      </select>
      <br />
      <label htmlFor="priceRange">Price Range:</label>
      <select
        id="priceRange"
        value={selectedPriceRange}
        onChange={handlePriceRangeChange}
      >
        <option value="">All</option>
        <option value="0 - 1000 rs">Less than 1K rs</option>
        <option value="1000 - 5000 rs">1K - 5K rs</option>
        <option value="5000 - 10000 rs">5K - 10K rs</option>
        <option value="10000 - 100000 or more rs">More than 10K rs</option>
      </select>
    </div>
  );
};

export default Filter;
