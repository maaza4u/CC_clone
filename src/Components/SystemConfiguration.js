import React, { useState } from 'react';

const SystemConfiguration = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderDetail = () => {
    switch (selectedItem) {
      case 'General Settings':
        return <p>Detail about General Settings...</p>;
      case 'Time Settings':
        return <p>Detail about Time Settings...</p>;
      case 'Maintenance':
        return <p>Detail about Maintenance...</p>;
      default:
        return <p>Select an item to view details.</p>;
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">System Configuration</h1>
      <div className="flex space-x-4">
        <div className="flex-1">
          <ul className="list-disc pl-5 cursor-pointer">
            {['General Settings', 'Time Settings', 'Maintenance'].map((item) => (
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

export default SystemConfiguration;
