import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Select, MenuItem, Tooltip } from '@mui/material';
import { ExitToApp, HelpOutline, Info } from '@mui/icons-material';
import Administration from './Components/Administration';
import SystemConfiguration from './Components/SystemConfiguration';
import WAN from './Components/WAN';
import LAN from './Components/LAN';
import Wireless from './Components/Wireless';
import Routing from './Components/Routing';
import Firewall from './Components/Firewall';
import VPN from './Components/VPN';
import Security from './Components/Security';
import QoS from './Components/Qos';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('System Summary');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [systemData, setSystemData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setSystemData(data[0])); // Assuming you want to display the first item for simplicity
  }, []);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'Administration':
        return <Administration />;
      case 'System Configuration':
        return <SystemConfiguration />;
      case 'WAN':
        return <WAN />;
      case 'LAN':
        return <LAN />;
      case 'Wireless':
        return <Wireless />;
      case 'Routing':
        return <Routing />;
      case 'Firewall':
        return <Firewall />;
      case 'VPN':
        return <VPN />;
      case 'Security':
        return <Security />;
      case 'QoS':
        return <QoS />;
      default:
        if (!systemData) return <div>Loading...</div>;
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">System Summary</h1>
            <div className="flex space-x-4">
              <div className="flex-1 mb-4">
                <h2 className="text-xl font-semibold">System Information</h2>
                <ul className="list-disc pl-5">
                  <li>Serial No.: {systemData.systemInfo.serialNo}</li>
                  <li>System Up Time: {systemData.systemInfo.systemUpTime}</li>
                  <li>PID VID: {systemData.systemInfo.pidVid}</li>
                  <li>LAN MAC: {systemData.systemInfo.lanMac}</li>
                  <li>WAN MAC: {systemData.systemInfo.wanMac}</li>
                </ul>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">Firmware Information</h2>
                <ul className="list-disc pl-5">
                  <li>Firmware Version: {systemData.firmwareInfo.firmwareVersion}</li>
                  <li>Firmware MDS Checksum: {systemData.firmwareInfo.firmwareMdsChecksum}</li>
                  <li>Location: {systemData.firmwareInfo.location}</li>
                  <li>Language Version: {systemData.firmwareInfo.languageVersion}</li>
                  <li>Language MDS Checksum: {systemData.firmwareInfo.languageMdsChecksum}</li>
                </ul>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <nav className="flex-grow">
          <ul>
            {[
              'Getting started',
              'Status and Statistics',
              'Administration',
              'System Configuration',
              'WAN',
              'LAN',
              'Wireless',
              'Routing',
              'Firewall',
              'VPN',
              'Security',
              'QoS'
            ].map((item) => (
              <li
                key={item}
                className={`px-4 py-2 hover:bg-gray-700 cursor-pointer ${activeSection === item ? 'bg-gray-700' : ''}`}
                onClick={() => handleSectionClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-grow">
        <AppBar position="static" color="default">
          <Toolbar className="flex justify-between">
            <Typography variant="h6" color="inherit" className="flex items-center">
              <img
                src="https://www.cisco.com/c/dam/en_us/signin/branding/cisco-logo-blue.svg"
                alt="Cisco"
                className="h-8 mr-2"
              />
              RV260W-router3D2211
            </Typography>
            <div className="flex items-center space-x-4">
              <Typography variant="body1">Cisco (admin)</Typography>
              <Select
                value={selectedLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="text-white"
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Spanish">Spanish</MenuItem>
                {/* Add more language options as needed */}
              </Select>
              <Tooltip title="How can I help you">
                <IconButton>
                  <HelpOutline />
                </IconButton>
              </Tooltip>
              <IconButton>
                <Info />
              </IconButton>
              <IconButton>
                <ExitToApp />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        <div className="p-4">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default App;
