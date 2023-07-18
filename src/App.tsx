import React, { useState } from "react";
import Filter from "./Filter";
import DataDisplay from "./DataDisplay";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
}

const App: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: "Product 1", brand: "Samsung", price: 500 },
    { id: 2, name: "Product 2", brand: "Apple", price: 1200 },
    { id: 3, name: "Product 3", brand: "Xiaomi", price: 300 },
    // Add more sample products here
  ];

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  // Handler for brand selection change
  const handleBrandChange = (value: string) => {
    setSelectedBrand(value);
  };

  // Handler for price range selection change
  const handlePriceRangeChange = (value: string) => {
    setSelectedPriceRange(value);
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-4 text-center justify-end text-white font-mono text-2xl font-black">
        <h1>Business Intelligence Dashboard</h1>
      </div>
      <div className="container mx-auto my-8">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Filter
              selectedBrand={selectedBrand}
              selectedPriceRange={selectedPriceRange}
              onBrandChange={handleBrandChange}
              onPriceRangeChange={handlePriceRangeChange}
            />
          </div>
          <div>
            <DataDisplay
              products={products}
              selectedBrand={selectedBrand}
              selectedPriceRange={selectedPriceRange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
