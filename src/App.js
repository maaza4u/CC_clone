import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Select, MenuItem, Tooltip, Fab } from '@mui/material';
import { ExitToApp, HelpOutline, Info, Message, Settings, Build, CloudQueue, Language, Wifi, Router, Security, Lock, Shield, Equalizer,Home,Assessment } from '@mui/icons-material';
import Administration from './Components/Administration';
import SystemConfiguration from './Components/SystemConfiguration';
import WAN from './Components/WAN';
import LAN from './Components/LAN';
import Wireless from './Components/Wireless';
import Routing from './Components/Routing';
import Firewall from './Components/Firewall';
import VPN from './Components/VPN';
import SecurityComponent from './Components/Security';
import QoS from './Components/Qos';
import MessagePopup from './Components/MessagePopup'; // Import the MessagePopup component
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('System Summary');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [systemData, setSystemData] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);

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

  const handleFabClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
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
        return <SecurityComponent />;
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
    <div className="h-screen bg-gray-100">
      <AppBar position="static" color="default" className="w-full">
        <Toolbar className="flex justify-between">
          <Typography variant="h6" color="inherit" className="flex items-center">
            <img
              src="https://aurus5.com/blog/images/2017-cisco-logo-1.png"
              alt="Cisco"
              className="h-8 mr-2"
            />
            RV-router
          </Typography>
          <div className="flex items-center space-x-4">
            <Typography variant="body1"> User (admin)</Typography>
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

      <div className="flex">
        <aside className="w-64 bg-gray-800 text-white flex flex-col">
          <nav className="flex-grow">
            <ul>
              {[
               { name: 'Getting started', icon: <Home className="mr-2" /> },
               { name: 'Status and Statistics', icon: <Assessment className="mr-2" /> },
                { name: 'Administration', icon: <Settings className="mr-2" /> },
                { name: 'System Configuration', icon: <Build className="mr-2" /> },
                { name: 'WAN', icon: <CloudQueue className="mr-2" /> },
                { name: 'LAN', icon: <Language className="mr-2" /> },
                { name: 'Wireless', icon: <Wifi className="mr-2" /> },
                { name: 'Routing', icon: <Router className="mr-2" /> },
                { name: 'Firewall', icon: <Security className="mr-2" /> },
                { name: 'VPN', icon: <Lock className="mr-2" /> },
                { name: 'Security', icon: <Shield className="mr-2" /> },
                { name: 'QoS', icon: <Equalizer className="mr-2" /> },
              ].map((item) => (
                <li
                  key={item.name}
                  className={`px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center ${activeSection === item.name ? 'bg-gray-700' : ''}`}
                  onClick={() => handleSectionClick(item.name)}
                >
                  {item.icon}
                  {item.name}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="flex-grow p-4">
          {renderSection()}
        </main>
      </div>

      <Fab
        color="primary"
        aria-label="message"
        className="fixed bottom-4 right-4"
        onClick={handleFabClick}
      >
        <Message />
      </Fab>

      <MessagePopup open={popupOpen} handleClose={handleClosePopup} style={{ paddingRight: '20px' }} />
    </div>
  );
};

export default App;
