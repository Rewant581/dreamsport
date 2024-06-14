import React from 'react';

const FAQ = () => {
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
      fontSize: '2em',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center',
      color: '#1a73e8',
    },
    faqItem: {
      marginBottom: '20px',
    },
    heading2: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#1a73e8',
    },
    paragraph: {
      marginBottom: '10px',
      textAlign: 'justify',
      color: '#555',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading1}>Frequently Asked Questions (FAQ)</h1>

      <div style={styles.faqItem}>
        <h2 style={styles.heading2}>1. How do I create an account on DreamSport?</h2>
        <p style={styles.paragraph}>
          Creating an account on DreamSport is simple. Click on the "Sign Up" button on the homepage, fill in your details including your email and password, and follow the instructions to verify your account. Once verified, you can start participating in contests.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h2 style={styles.heading2}>2. What are the system requirements to use DreamSport?</h2>
        <p style={styles.paragraph}>
          DreamSport is accessible via most modern web browsers on desktops, laptops, and mobile devices. We recommend using the latest version of Chrome, Firefox, Safari, or Edge for the best experience. For mobile access, you can download our app from the App Store or Google Play Store.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h2 style={styles.heading2}>3. How do I participate in a contest?</h2>
        <p style={styles.paragraph}>
          To participate in a contest, log into your DreamSport account, navigate to the "Contests" section, and select the contest you wish to join. Follow the prompts to create and submit your team. Ensure you meet any entry requirements before joining.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h2 style={styles.heading2}>4. What are the rules for creating a fantasy team?</h2>
        <p style={styles.paragraph}>
          Each contest may have specific rules for creating a fantasy team. Generally, you need to select a set number of players within a given budget. The team must comply with the position and player limitations set by the contest. Check the contest details for specific rules.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h2 style={styles.heading2}>5. How can I deposit money into my DreamSport account?</h2>
        <p style={styles.paragraph}>
          Depositing money into your DreamSport account is easy. Go to the "My Account" section and click on "Deposit". Choose your preferred payment method and enter the amount you wish to deposit. Follow the instructions to complete the transaction securely.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h2 style={styles.heading2}>6. What should I do if I encounter a problem during gameplay?</h2>
        <p style={styles.paragraph}>
          If you experience any issues during gameplay, please contact our customer support team immediately. You can reach us via the "Support" section on our website or app. Provide as much detail as possible about the problem to help us assist you quickly.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h2 style={styles.heading2}>7. How can I withdraw my winnings from DreamSport?</h2>
        <p style={styles.paragraph}>
          To withdraw your winnings, go to the "My Account" section and click on "Withdraw". Select your preferred withdrawal method, enter the amount you wish to withdraw, and follow the prompts to complete the process. Ensure your account is fully verified to avoid any delays.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h2 style={styles.heading2}>8. What happens if a contest is canceled?</h2>
        <p style={styles.paragraph}>
          If a contest is canceled, any entry fees you paid will be refunded to your DreamSport account. Cancellations can occur due to unforeseen circumstances, and we strive to notify users as soon as possible when a contest is canceled.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h2 style={styles.heading2}>9. Is my personal information safe on DreamSport?</h2>
        <p style={styles.paragraph}>
          Yes, DreamSport takes your privacy and security very seriously. We use advanced security measures to protect your personal information and ensure that your data is safe. For more details, please refer to our Privacy Policy.
        </p>
      </div>

      <div style={styles.faqItem}>
        <h2 style={styles.heading2}>10. How does DreamSport ensure fair play?</h2>
        <p style={styles.paragraph}>
          DreamSport is committed to maintaining a fair and transparent gaming environment. We have strict policies in place to prevent fraud and cheating. We monitor all activities on our platform and take appropriate action against any users found violating our Fair Play Terms.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
