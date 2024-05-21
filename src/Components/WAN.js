import React, { useState } from 'react';

const WAN = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderDetail = () => {
    switch (selectedItem) {
      case 'WAN Settings':
        return <p>Detail about WAN Settings...</p>;
      case 'WAN Status':
        return <p>Detail about WAN Status...</p>;
      case 'WAN Statistics':
        return <p>Detail about WAN Statistics...</p>;
      default:
        return <p>Select an item to view details.</p>;
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">WAN</h1>
      <div className="flex space-x-4">
        <div className="flex-1">
          <ul className="list-disc pl-5 cursor-pointer">
            {['WAN Settings', 'WAN Status', 'WAN Statistics'].map((item) => (
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

export default WAN;
