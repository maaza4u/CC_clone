import React, { useState } from 'react';

const Security = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderDetail = () => {
    switch (selectedItem) {
      case 'Security Settings':
        return <p>Detail about Security Settings...</p>;
      case 'Certificates':
        return <p>Detail about Certificates...</p>;
      case 'Access Control':
        return <p>Detail about Access Control...</p>;
      default:
        return <p>Select an item to view details.</p>;
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Security</h1>
      <div className="flex space-x-4">
        <div className="flex-1">
          <ul className="list-disc pl-5 cursor-pointer">
            {['Security Settings', 'Certificates', 'Access Control'].map((item) => (
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

export default Security;
