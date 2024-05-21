import React, { useState } from 'react';

const Administration = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderDetail = () => {
    switch (selectedItem) {
      case 'User Management':
        return <p>Detail about User Management...</p>;
      case 'System Logs':
        return <p>Detail about System Logs...</p>;
      case 'Backup & Restore':
        return <p>Detail about Backup & Restore...</p>;
      default:
        return <p>Select an item to view details.</p>;
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Administration</h1>
      <div className="flex space-x-4">
        <div className="flex-1">
          <ul className="list-disc pl-5 cursor-pointer">
            {['User Management', 'System Logs', 'Backup & Restore'].map((item) => (
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

export default Administration;
