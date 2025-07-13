import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>Revert | Commands</title>
        <meta
          name="description"
          content="Revert | Commands"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              ⚡ Commands
            </label>
          </header>

          {/* Automod / Security */}
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              ⚡ Automod / Security
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>antilink</kbd> -{" "}
                  <span className="p-color">
                    Enables / disables anti-link prevention.
                  </span>
                </li>
                <li>
                  <kbd>antiinvite</kbd> -{" "}
                  <span className="p-color">
                    Enables / disables anti-invite-link prevention.
                  </span>
                </li>
                <li>
                  <kbd>antispam</kbd> -{" "}
                  <span className="p-color">
                    Enables / disables anti-spam prevention.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Utilities */}
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              ⚙️ Utilities
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>ping</kbd> -{" "}
                  <span className="p-color">
                    Check the bot's response time / ping.
                  </span>
                </li>
                <li>
                  <kbd>userinfo</kbd> -{" "}
                  <span className="p-color">Sends information about a user.</span>
                </li>
                <li>
                  <kbd>serverinfo</kbd> -{" "}
                  <span className="p-color">
                    Fetches information about the server.
                  </span>
                </li>
                <li>
                  <kbd>avatar</kbd> -{" "}
                  <span className="p-color">Get an avatar of a user.</span>
                </li>
                <li>
                  <kbd>8ball</kbd> -{" "}
                  <span className="p-color">
                    Ask a yes or no question to get a random answer.
                  </span>
                </li>
                <li>
                  <kbd>remind</kbd> -{" "}
                  <span className="p-color">Set a reminder in specified time.</span>
                </li>
                <li>
                  <kbd>poll</kbd> -{" "}
                  <span className="p-color">Create a poll.</span>
                </li>
                <li>
                  <kbd>time</kbd> -{" "}
                  <span className="p-color">
                    Get the current time in a timezone.
                  </span>
                </li>
                <li>
                  <kbd>quote</kbd> -{" "}
                  <span className="p-color">
                    Get a random inspirational quote.
                  </span>
                </li>
                <li>
                  <kbd>meme</kbd> -{" "}
                  <span className="p-color">Get a randomly found meme.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Moderation */}
          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              🛡️ Moderation
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>warn</kbd> -{" "}
                  <span className="p-color">Warns a member.</span>
                </li>
                <li>
                  <kbd>warnings</kbd> -{" "}
                  <span className="p-color">
                    View / Check the warnings of a member.
                  </span>
                </li>
                <li>
                  <kbd>clearwarnings</kbd> -{" "}
                  <span className="p-color">
                    Clears all the warnings from a member.
                  </span>
                </li>
                <li>
                  <kbd>ban</kbd> -{" "}
                  <span className="p-color">Bans a member from the server.</span>
                </li>
                <li>
                  <kbd>kick</kbd> -{" "}
                  <span className="p-color">Kicks a member from the server.</span>
                </li>
                <li>
                  <kbd>mute</kbd> -{" "}
                  <span className="p-color">Permanently mute a member.</span>
                </li>
                <li>
                  <kbd>tempmute</kbd> -{" "}
                  <span className="p-color">Temporarily mutes a member.</span>
                </li>
                <li>
                  <kbd>tempban</kbd> -{" "}
                  <span className="p-color">
                    Temporarily ban / long kick a member.
                  </span>
                </li>
                <li>
                  <kbd>deafen</kbd> -{" "}
                  <span className="p-color">
                    Deafens a member in a voice chat (does not allow member to
                    hear other people).
                  </span>
                </li>
                <li>
                  <kbd>undeafen</kbd> -{" "}
                  <span className="p-color">Undeafens a member of choice.</span>
                </li>
                <li>
                  <kbd>role</kbd> -{" "}
                  <span className="p-color">
                    Grant or remove a role from a member provided.
                  </span>
                </li>
                <li>
                  <kbd>whois</kbd> -{" "}
                  <span className="p-color">
                    Fetch essential / non-essential information of a member.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>

      <Footer />
    </motion.div>
  );
}
