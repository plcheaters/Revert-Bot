const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Secure your server!</h3>
        </div>
        <div className="joinUs-para p-color">
          Invite Revert to your own server!
        </div>
        <button className="btn">
          <a
            className="h-color no-decoration"
            href="https://discord.com/oauth2/authorize?client_id=1323812197750538331&permissions=8&integration_type=0&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
          >
            Invite now
          </a>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
