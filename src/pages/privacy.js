const PrivacyPolicy = () => {
  return (
    <div className="content">
      <h1>Privacy Policy</h1>
      <p>Last updated: July 13, 2025</p>
      <p>
        Revert does not collect personal data unless explicitly stated. We may
        store server IDs, user preferences, and command usage data for bot
        functionality.
      </p>
      <h2>Data Collected</h2>
      <ul>
        <li>Server ID and channel ID for configuration</li>
        <li>User IDs for moderation or role tracking</li>
        <li>Command usage logs (non-personal)</li>
      </ul>
      <h2>Data Sharing</h2>
      <p>
        We do not share any data with third parties unless required by law.
      </p>
      <h2>Contact</h2>
      <p>
        For questions or concerns, contact the bot owner via Discord.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
