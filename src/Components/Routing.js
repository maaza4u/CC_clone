import React, { useState } from 'react';

const Routing = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderDetail = () => {
    switch (selectedItem) {
      case 'Routing Table':
        return <p>Detail about Routing Table...</p>;
      case 'Static Routes':
        return <p>Detail about Static Routes...</p>;
      case 'Dynamic Routing':
        return <p>Detail about Dynamic Routing...</p>;
      default:
        return <p>Select an item to view details.</p>;
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Routing</h1>
      <div className="flex space-x-4">
        <div className="flex-1">
          <ul className="list-disc pl-5 cursor-pointer">
            {['Routing Table', 'Static Routes', 'Dynamic Routing'].map((item) => (
              <li key={item} onClick={() => handleItemClick(item)} className="hover:underline">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{selectedItem}</h2>
          {renderDetail()}
        </div>
      </div>
    </div>
  );
};

export default Routing;
