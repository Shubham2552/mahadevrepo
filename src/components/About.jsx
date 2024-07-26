import React from 'react';
import { Card } from 'primereact/card';

function About() {
  return (
    <div
      className="about"
      style={{
        paddingTop: '4rem', // Space for the Menubar
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <Card
        title="About Us"
        className="p-mb-4"
        style={{
          width: '90%',
          maxWidth: '1200px',
          padding: '2rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f9f9f9',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <p className="p-mb-3" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          Welcome to Mahadev Enterprises! We are dedicated to providing
          high-quality electronic appliances and exceptional customer service.
        </p>
        <p className="p-mb-3" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          Our mission is to offer a wide range of products to meet your needs,
          backed by years of experience in the industry.
        </p>

        {/* Formal Details Section */}
        <section style={{ marginTop: '2rem', textAlign: 'left' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Enterprise Details
          </h3>
          <p>
            <strong>Address:</strong> 10 Bhati Complex, Saraswati Nagar, Basni,
            Jodhpur, Rajasthan, 342005
          </p>
          <p>
            <strong>GSTIN:</strong> 08AFTPB8717R2ZH
          </p>
          <p>
            <strong>Contact Number:</strong> +91 982 908 5295
          </p>
          <p>
            <strong>Email:</strong> blbhati721@gmail.com
          </p>
        </section>
      </Card>
    </div>
  );
}

export default About;
