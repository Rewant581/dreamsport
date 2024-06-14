import React from 'react';

const Legalities = () => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    heading1: {
      fontSize: '2.5em',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center',
      color: '#1a73e8',
    },
    heading2: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      marginBottom: '15px',
      marginTop: '30px',
      color: '#1a73e8',
    },
    paragraph: {
      marginBottom: '15px',
      textAlign: 'justify',
      color: '#555',
    },
    list: {
      paddingLeft: '20px',
      marginBottom: '15px',
    },
    listItem: {
      marginBottom: '10px',
    },
    contact: {
      marginTop: '20px',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#1a73e8',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading1}>Legalities</h1>
      <p style={styles.paragraph}>
        At DreamSport, we are committed to ensuring that our platform operates in compliance with all applicable laws and regulations. This section outlines the legal framework governing the use of our website and services.
      </p>

      <h2 style={styles.heading2}>1. Compliance with Indian Laws</h2>
      <p style={styles.paragraph}>
        DreamSport operates in accordance with the laws of India. We adhere to regulations that govern online gaming, privacy, and data protection. Our platform is designed to provide a lawful and secure environment for our users.
      </p>

      <h2 style={styles.heading2}>2. Eligibility Criteria</h2>
      <p style={styles.paragraph}>
        To participate in any contest or use our services, you must meet the following eligibility criteria:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>You must be at least 18 years old.</li>
        <li style={styles.listItem}>You must reside in a region where participation in fantasy sports is legal.</li>
        <li style={styles.listItem}>Residents of Assam, Odisha, Telangana, Nagaland, Sikkim, and Andhra Pradesh are prohibited from participating in paid contests.</li>
      </ul>

      <h2 style={styles.heading2}>3. User Agreement and Terms of Use</h2>
      <p style={styles.paragraph}>
        By accessing or using DreamSport, you agree to comply with our Terms of Use and any other policies that we may establish. These terms govern your use of our services and outline your rights and responsibilities as a user.
      </p>

      <h2 style={styles.heading2}>4. Intellectual Property Rights</h2>
      <p style={styles.paragraph}>
        All content on the DreamSport platform, including text, graphics, logos, and software, is protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the content for personal purposes. Any unauthorized use of our content may result in legal action.
      </p>

      <h2 style={styles.heading2}>5. Data Protection and Privacy</h2>
      <p style={styles.paragraph}>
        We are committed to protecting your personal information. Our data protection practices are detailed in our Privacy Policy, which describes how we collect, use, and safeguard your data. We comply with the Information Technology Act, 2000, and other applicable data protection laws.
      </p>

      <h2 style={styles.heading2}>6. Prohibited Activities</h2>
      <p style={styles.paragraph}>
        Users of DreamSport are prohibited from engaging in the following activities:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>Creating multiple accounts or using fraudulent information.</li>
        <li style={styles.listItem}>Attempting to manipulate or interfere with the functioning of our services.</li>
        <li style={styles.listItem}>Engaging in any activity that violates applicable laws or regulations.</li>
      </ul>

      <h2 style={styles.heading2}>7. Dispute Resolution</h2>
      <p style={styles.paragraph}>
        Any disputes arising from the use of DreamSport will be resolved under the jurisdiction of courts in Gurugram, India. If a dispute cannot be resolved through mutual discussion, it will be subject to arbitration under the Arbitration and Conciliation Act, 1996.
      </p>

      <h2 style={styles.heading2}>8. Limitation of Liability</h2>
      <p style={styles.paragraph}>
        DreamSport is not liable for any losses or damages that arise from the use of our services. Users access and use our platform at their own risk. We recommend that users read and understand the terms and conditions before participating in any contests or activities on DreamSport.
      </p>

      <h2 style={styles.heading2}>9. Changes to Legal Terms</h2>
      <p style={styles.paragraph}>
        We reserve the right to update or modify these legal terms at any time. Any changes will be posted on our website and will take effect immediately. We encourage users to review these terms regularly to stay informed about their rights and obligations.
      </p>

      <h2 style={styles.heading2}>10. Contact Us</h2>
      <p style={styles.paragraph}>
        If you have any questions or concerns about these legalities, please contact us at:
      </p>
      <p style={styles.contact}>
        Email: support@dreamsport.in<br />
      </p>
    </div>
  );
};

export default Legalities;
