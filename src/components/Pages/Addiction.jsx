import React from 'react';

const GameAddiction = () => {
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
    },
    contactInfo: {
      marginTop: '20px',
      color: '#555',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading1}>Understanding and Preventing Game Addiction</h1>
      <p style={styles.paragraph}>
        At DreamSport, we prioritize the well-being of our users and advocate for healthy gaming habits. While fantasy sports can be an enjoyable pastime, it's important to recognize and prevent gaming addiction. This page provides detailed information on game addiction, its signs, and ways to manage and seek help if needed.
      </p>

      <h2 style={styles.heading2}>What is Game Addiction?</h2>
      <p style={styles.paragraph}>
        Game addiction, also known as gaming disorder, is characterized by impaired control over gaming, prioritizing gaming over other life interests and daily activities, and continuing to game despite negative consequences. It can affect anyone, regardless of age or background.
      </p>

      <h2 style={styles.heading2}>Signs of Game Addiction</h2>
      <p style={styles.paragraph}>
        Recognizing the signs of game addiction is the first step toward managing it. Common indicators include:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}><strong>Preoccupation with Gaming:</strong> Constantly thinking about gaming or planning the next session.</li>
        <li style={styles.listItem}><strong>Loss of Interest:</strong> Losing interest in other hobbies or activities that were once enjoyable.</li>
        <li style={styles.listItem}><strong>Neglecting Responsibilities:</strong> Ignoring personal, social, or professional responsibilities in favor of gaming.</li>
        <li style={styles.listItem}><strong>Withdrawal Symptoms:</strong> Feeling irritable or anxious when unable to play.</li>
        <li style={styles.listItem}><strong>Increased Tolerance:</strong> Needing to spend more time gaming to achieve the same level of enjoyment.</li>
        <li style={styles.listItem}><strong>Failed Attempts to Reduce:</strong> Unsuccessful efforts to cut back on gaming time.</li>
        <li style={styles.listItem}><strong>Deception:</strong> Lying to family or friends about the amount of time spent gaming.</li>
        <li style={styles.listItem}><strong>Using Gaming to Escape:</strong> Playing games to avoid dealing with problems or uncomfortable emotions.</li>
      </ul>

      <h2 style={styles.heading2}>Tips for Preventing Game Addiction</h2>
      <p style={styles.paragraph}>
        Maintaining a balanced approach to gaming can help prevent addiction. Here are some tips to keep gaming healthy and enjoyable:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}><strong>Set Time Limits:</strong> Allocate specific times for gaming and stick to them.</li>
        <li style={styles.listItem}><strong>Balance Activities:</strong> Ensure you engage in a variety of activities, including exercise, socializing, and other hobbies.</li>
        <li style={styles.listItem}><strong>Avoid Marathon Sessions:</strong> Take regular breaks and avoid long, continuous periods of gaming.</li>
        <li style={styles.listItem}><strong>Be Mindful of Triggers:</strong> Recognize what triggers prolonged gaming sessions and try to manage these factors.</li>
        <li style={styles.listItem}><strong>Keep a Schedule:</strong> Maintain a balanced daily schedule that includes work, relaxation, and recreation.</li>
        <li style={styles.listItem}><strong>Stay Socially Active:</strong> Make time for family and friends outside of the gaming world.</li>
        <li style={styles.listItem}><strong>Seek Help Early:</strong> If you notice signs of addiction, don't hesitate to seek support from friends, family, or professionals.</li>
      </ul>

      <h2 style={styles.heading2}>Getting Help and Support</h2>
      <p style={styles.paragraph}>
        If you or someone you know is struggling with game addiction, it's important to seek help. Here are some resources and steps you can take:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}><strong>Talk to Someone:</strong> Discuss your concerns with a trusted friend or family member who can provide support and advice.</li>
        <li style={styles.listItem}><strong>Professional Counseling:</strong> Consider seeking help from a mental health professional who specializes in gaming addiction.</li>
        <li style={styles.listItem}><strong>Support Groups:</strong> Join support groups or online communities where you can share experiences and strategies for managing addiction.</li>
        <li style={styles.listItem}><strong>Helplines:</strong> Use available helplines and resources that offer assistance for those dealing with addiction.</li>
        <li style={styles.listItem}><strong>Adjust Your Environment:</strong> Create a gaming-free zone or set up your environment to reduce the temptation to game excessively.</li>
      </ul>

      <h2 style={styles.heading2}>DreamSport's Commitment to Responsible Gaming</h2>
      <p style={styles.paragraph}>
        DreamSport is committed to promoting responsible gaming. We provide tools and resources to help you manage your gaming activity, such as setting time limits and offering support for those who need it. Our platform is designed to encourage a balanced approach to gaming and to support the well-being of our users.
      </p>

      <h2 style={styles.heading2}>Contact Us for Assistance</h2>
      <p style={styles.paragraph}>
        If you need assistance or have any questions about game addiction, please reach out to our support team at:
      </p>
      <p style={styles.contactInfo}>
        Email: support@dreamsport.in<br />
        Address: Accelerator Coworking Space, Ground Floor, MGF Metropolis Mall, Mehrauli-Gurgaon Rd, Gurugram, Haryana 122002, India
      </p>
    </div>
  );
};

export default GameAddiction;
