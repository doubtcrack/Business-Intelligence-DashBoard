import React from "react";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
}

interface DataDisplayProps {
  products: Product[];
  selectedBrand: string;
  selectedPriceRange: string;
}

const DataDisplay: React.FC<DataDisplayProps> = ({
  products,
  selectedBrand,
  selectedPriceRange,
}) => {
  const filteredProducts = products.filter((product) => {
    if (selectedBrand && product.brand !== selectedBrand) {
      return false;
    }
    if (selectedPriceRange) {
      const [minPrice, maxPrice] = selectedPriceRange.split("-");
      if (minPrice && product.price < parseInt(minPrice.trim())) {
        return false;
      }
      if (maxPrice && product.price >= parseInt(maxPrice.trim())) {
        return false;
      }
    }
    return true;
  });

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Data Display</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Brand
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.brand}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.price} rs
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataDisplay;
