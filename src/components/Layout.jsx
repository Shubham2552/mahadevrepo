import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Outlet } from 'react-router-dom';
import '../TemplateDemo.css'; // Import the CSS file for styling

function Layout() {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => (window.location.href = '/'),
    },
    // {
    //   label: 'About Us',
    //   icon: 'pi pi-info-circle',
    //   command: () => (window.location.href = '/about'),
    // },
    // {
    //   label: 'Contact Us',
    //   icon: 'pi pi-phone',
    //   command: () => (window.location.href = '/contact'),
    // },
  ];

  const start = (
    <div></div>
    // <img
    //   alt="logo"
    //   src="https://primefaces.org/cdn/primereact/images/logo.png"
    //   height="40"
    //   className="logo"
    // ></img>
  );
  const end = <div className="flex align-items-center gap-2"></div>;

  return (
    <div className="layout">
      <Menubar model={items} start={start} end={end} className="menubar" />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
