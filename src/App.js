import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Language, ExitToApp, HelpOutline, Info } from '@mui/icons-material';
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

  const handleSectionClick = (section) => {
    setActiveSection(section);
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
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">System Summary</h1>
            <div className="flex space-x-4">
              <div className="flex-1 mb-4">
                <h2 className="text-xl font-semibold">System Information</h2>
                <ul className="list-disc pl-5">
                  <li>Serial No.: XXXXXXXX</li>
                  <li>System Up Time: 123 days</li>
                  <li>PID VID: XXXXXXXX</li>
                  <li>LAN MAC: XX:XX:XX:XX:XX:XX</li>
                  <li>WAN MAC: XX:XX:XX:XX:XX:XX</li>
                </ul>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">Firmware Information</h2>
                <ul className="list-disc pl-5">
                  <li>Firmware Version: X.X.X</li>
                  <li>Firmware MDS Checksum: XXXXXXXX</li>
                  <li>Location: XXXXXXXX</li>
                  <li>Language Version: X.X.X</li>
                  <li>Language MDS Checksum: XXXXXXXX</li>
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
              <IconButton>
                <Language />
              </IconButton>
              <IconButton>
                <HelpOutline />
              </IconButton>
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
