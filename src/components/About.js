import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Why use Revert?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">🔥 Commands</h4>
              <p className="p-color">
                Explore Revert’s powerful commands designed for security, moderation, and handy utilities to keep your server safe and running smoothly.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✉ 24/7 Support</h4>
              <p className="p-color">
                We offer 24/7 support, but response times may be slow right now as we have only one support team member.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">🛡️ Best Security</h4>
              <p className="p-color">
                Revert has everything you need for effortless security.
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/commands" className="h-color no-decoration">
            Check out Commands &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">nil</h4>
            <p className="p-color">Total Servers</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">2K</h4>
            <p className="p-color">Total Users</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">33</h4>
            <p className="p-color">Total Commands</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
