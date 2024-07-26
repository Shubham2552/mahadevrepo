import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { useNavigate } from 'react-router-dom';

function Home() {
  const services = [
    {
      label: 'Solar Panels',
      value:
        'We offer a wide range of high-efficiency solar panels suitable for both residential and commercial applications.',
    },
    {
      label: 'Solar Components',
      value:
        'Find all the necessary components for solar installations, including inverters, mounts, and wiring.',
    },
    {
      label: 'On-Demand Supplier',
      value:
        'As an on-demand supplier, we ensure timely delivery of solar panels and related components to meet your project needs.',
    },
  ];

  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/contact');
  };

  return (
    <div
      className="home"
      style={{
        paddingTop: '4rem',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Card
        title="Welcome to Mahadev Enterprises"
        className="p-mb-4"
        style={{
          width: '100%',
          padding: '2rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f9f9f9',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <p>
          Discover top-quality solar panels and installation components at
          Mahadev Enterprises. As an on-demand supplier, we offer the latest in
          solar technology to meet your needs.
        </p>
        <p
          style={{
            fontSize: '1.2rem',
            marginBottom: '1.5rem',
          }}
        >
          Whether you're looking to power your home or business with solar
          energy, we provide a range of high-efficiency solar panels,
          professional installation services, and ongoing maintenance.
        </p>
        <p
          style={{
            fontSize: '1.2rem',
            marginBottom: '1.5rem',
          }}
        >
          With years of experience in the industry, we are committed to
          delivering exceptional products and services to ensure your complete
          satisfaction.
        </p>
        <Divider />
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Our Services</h3>
        <div>
          {services.map((service, index) => (
            <div
              key={index}
              className="p-d-flex p-ai-center"
              style={{
                marginBottom: '1rem',
                textAlign: 'left',
                padding: '0 1rem',
              }}
            >
              <i
                className="pi pi-check p-mr-2"
                style={{ color: '#4caf50' }}
              ></i>
              <span> {service.value}</span>
            </div>
          ))}
        </div>
        <Divider />
        <Button
          label="Get in touch and know more"
          icon="pi pi-info-circle"
          className="p-mt-2"
          onClick={handleLearnMoreClick}
        />
      </Card>
    </div>
  );
}

export default Home;
