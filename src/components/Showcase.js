import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">BOT</h1>
        <h2 className="showcase-header-text h-color">
          Don't let one mistake ruin your Discord server.
        </h2>
        <p className="showcase-para p-color">
          Revert has it all: anti-links, anti-invite-links, anti-spam, etc.
        </p>

        <span className="p-color">Revert is online (99.99%)</span>
        <div className="showcase-btn">
          <button className="btn">
            <a
              className="h-color no-decoration"
              href="https://discord.com/oauth2/authorize?client_id=1323812197750538331&permissions=8&integration_type=0&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add Bot
            </a>
          </button>

          <button className="btn">
            <a
              className="h-color no-decoration"
              href="https://discord.gg/S3xCWWHsNr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support Server
            </a>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
