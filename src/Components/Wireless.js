import React, { useState } from 'react';

const Wireless = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    openHtmlPage(item);
  };

  const openHtmlPage = (item) => {
    let url;
    switch (item) {
      case 'Wireless Settings':
        url = `${process.env.PUBLIC_URL}/wireless-settings.html`;
        break;
      case 'Wireless Status':
        url = `${process.env.PUBLIC_URL}/wireless-status.html`;
        break;
      case 'SSID Configuration':
        url = `${process.env.PUBLIC_URL}/ssid-configuration.html`;
        break;
      default:
        return;
    }
    window.open(url, '_blank');
  };

  const renderDetail = () => {
    switch (selectedItem) {
      case 'Wireless Settings':
        return <p>Detail about Wireless Settings...</p>;
      case 'Wireless Status':
        return <p>Detail about Wireless Status...</p>;
      case 'SSID Configuration':
        return <p>Detail about SSID Configuration...</p>;
      default:
        return <p>Select an item to view details.</p>;
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Wireless</h1>
      <div className="flex space-x-4">
        <div className="flex-1">
          <ul className="list-disc pl-5 cursor-pointer">
            {['Wireless Settings', 'Wireless Status', 'SSID Configuration'].map((item) => (
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

export default Wireless;
