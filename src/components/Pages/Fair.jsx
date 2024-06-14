import React from 'react';

const FairPlayViolation = () => {
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
    heading2: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      marginBottom: '15px',
      marginTop: '30px',
      color: '#1a73e8',
    },
    heading3: {
      fontSize: '1.2em',
      fontWeight: 'bold',
      marginBottom: '10px',
      marginTop: '20px',
      color: '#333',
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
      color: '#555',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading1}>Fair Play at DreamSport</h1>
      <p style={styles.paragraph}>
        At DreamSport, maintaining fair play is a top priority. We strive to ensure that all users have an equal and honest gaming experience. Any user violating DreamSport’s Fair Play Terms will face consequences, which may include the blocking of their account.
      </p>

      <h2 style={styles.heading2}>Fair Play Violations</h2>
      <p style={styles.paragraph}>Fair Play violations at DreamSport include, but are not limited to, the following actions:</p>
      
      <h3 style={styles.heading3}>Fake Referrals</h3>
      <p style={styles.paragraph}>
        Referrals must be genuine users. Creating fake accounts to exploit the 'Refer & Earn' Cash Bonus is strictly prohibited.
      </p>

      <h3 style={styles.heading3}>Unverified Referrals</h3>
      <p style={styles.paragraph}>
        All referred friends must verify their PAN cards. If more than 9 of your referrals fail to verify their PAN cards, you will be deemed in violation of DreamSport’s Fair Play Terms.
      </p>

      <h3 style={styles.heading3}>Multiple Accounts</h3>
      <p style={styles.paragraph}>
        Users are allowed to have only one account. Creating multiple accounts on the DreamSport platform is not permitted and is considered a Fair Play violation.
      </p>

      <h3 style={styles.heading3}>Illegal Withdrawals</h3>
      <p style={styles.paragraph}>
        Attempting to withdraw winnings through unlawful or illegal means is a serious violation. Any such actions will be treated as a breach of Fair Play.
      </p>

      <h3 style={styles.heading3}>Fake Documents</h3>
      <p style={styles.paragraph}>
        Submitting false documents or using someone else's documents during registration is considered a violation of the Fair Play Terms.
      </p>

      <h3 style={styles.heading3}>Multiple Accounts on Single Device</h3>
      <p style={styles.paragraph}>
        Creating and using multiple accounts on a single device is prohibited. Regular audits will be conducted, and any user found violating this rule will have their withdrawal requests put on hold.
      </p>

      <h2 style={styles.heading2}>Consequences of Fair Play Violations</h2>
      <p style={styles.paragraph}>Users who violate the Fair Play Terms at DreamSport will face the following consequences:</p>
      
      <h3 style={styles.heading3}>Account Blocking</h3>
      <p style={styles.paragraph}>
        The account of any user found violating the Fair Play Terms will be blocked. This measure ensures the integrity of the platform for all users.
      </p>

      <h3 style={styles.heading3}>Account Balance Reduction</h3>
      <p style={styles.paragraph}>
        The total amount in the violating user’s DreamSport account will be reduced to zero. This action serves as a deterrent against any unfair practices.
      </p>

      <h3 style={styles.heading3}>Verification Requirements for Multiple Accounts</h3>
      <p style={styles.paragraph}>
        If a user has created multiple accounts on a single device, they must ensure that all verification formalities, including mobile, email, PAN card, and bank account details, are completed for each account. Proper verification will allow smoother withdrawals despite the presence of multiple accounts on a single device.
      </p>

      <h2 style={styles.heading2}>Ensuring Fair Play</h2>
      <p style={styles.paragraph}>
        DreamSport is committed to providing a fair and transparent gaming environment. We continuously monitor user activities to uphold these standards. By adhering to the Fair Play guidelines, you contribute to a safe and enjoyable gaming community for everyone.
      </p>
      <p style={styles.paragraph}>
        If you have any questions or need assistance regarding our Fair Play policies, please contact our support team for more information.
      </p>
    </div>
  );
};

export default FairPlayViolation;
