import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">BOT</h1>
        <h2 className="showcase-header-text h-color">
          Dont let one mistake ruin your Discord server.
        </h2>
        <p className="showcase-para p-color">
          Revert has it all, anti-links, anti-invite-links, antispam, etc.
        </p>

        <span className="p-color">Revert is online (99.99%)</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="#">
              Add Bot
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="#">
              Support Server
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
