import React from 'react';
import { Card } from 'primereact/card';
import { ListBox } from 'primereact/listbox';
import { Divider } from 'primereact/divider';

function Contact() {
  const contactInfo = [
    {
      label: 'Email',
      value: 'blbhati721@gmail.com',
      icon: 'pi pi-envelope',
    },
    {
      label: 'Phone',
      value: '+91 982 908 5295',
      icon: 'pi pi-whatsapp',
    },
  ];

  return (
    <div
      className="contact"
      style={{
        paddingTop: '4rem', // Space for the Menubar
        minHeight: '100vh',
        width: '100%',
        padding: '2rem',
      }}
    >
      <Card
        title="Contact Us"
        className="p-mb-4"
        style={{
          width: '100%', // Take full width of container
          padding: '2rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f9f9f9',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        {/* <img
          src="https://plus.unsplash.com/premium_photo-1661434914660-c68d9fd54753?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3VzdG9tZXIlMjBzdXBwb3J0fGVufDB8fDB8fHww"
          alt="Contact Us Banner"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            marginBottom: '20px',
            objectFit: 'cover',
          }}
        /> */}
        <p className="p-mb-4">
          We would love to hear from you! Please reach out to us through the
          following methods:
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

        {/* Contact Person Section */}
        <section style={{ marginTop: '2rem', textAlign: 'left' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Contact Person
          </h3>
          <p>
            <strong>Name:</strong> Babulal Bhati
          </p>
          <p>
            <strong>Role:</strong> Owner/Operator
          </p>
          <p>
            <strong>Phone:</strong> +91 982 908 5295
          </p>
          <p>
            <strong>Email:</strong> blbhati721@gmail.com
          </p>
        </section>

        <Divider />
        <p className="p-mt-4">
          Feel free to get in touch with us for any queries or support. We are
          here to assist you!
        </p>
      </Card>
    </div>
  );
}

export default Contact;
