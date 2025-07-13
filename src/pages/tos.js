import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Terms of Service - Revert</title>
        <meta name="description" content="Revert Bot Terms of Service" />
      </Head>

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />

        <main style={{ flex: 1 }}>
          <section className="legal-section">
            <div className="legal-container">
              <h1 className="h-color">Terms of Service</h1>
              <p className="p-color">Last updated: July 13, 2025</p>
              <br />
              <p className="p-color">
                By using Revert, you agree to follow these Terms. You must be in compliance with Discord's
                Terms of Service and Community Guidelines. You may not use the bot for abuse, harassment,
                or malicious activity.
              </p>
              <p className="p-color">
                We reserve the right to ban or restrict access to Revert at any time, without notice,
                for violations or suspicious behavior.
              </p>
              <p className="p-color">
                These terms may be updated at any time. Continued use of the bot implies acceptance of
                the current version of these Terms.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
