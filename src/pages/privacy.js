import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Revert</title>
        <meta name="description" content="Revert Bot Privacy Policy" />
      </Head>

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />

        <main style={{ flex: 1 }}>
          <section className="legal-section">
            <div className="legal-container">
              <h1 className="h-color">Privacy Policy</h1>
              <p className="p-color">Last updated: July 13, 2025</p>
              <br />
              <p className="p-color">
                Revert is committed to protecting your privacy. We only collect the minimum data necessary
                to ensure the bot functions properly. This includes server IDs, user IDs for moderation
                commands, and command usage statistics. We do not collect or store personal messages.
              </p>
              <p className="p-color">
                We do not share, sell, or rent your information to third parties. All data is stored securely
                and only accessible to the bot owner.
              </p>
              <p className="p-color">
                By using Revert, you agree to this policy. If you have questions, please reach out via
                our support server.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
