import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar-header">
        <ul>
          <li>
            <Link className="h-color" href="/">
              Revert
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="navbar-items">
        <ul>
          <li>
            <Link className="p-color" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="p-color" href="/commands">
              Commands
            </Link>
          </li>
          <li>
            <a
              className="p-color"
              href="https://discord.com/oauth2/authorize?client_id=1323812197750538331&permissions=8&integration_type=0&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add Bot
            </a>
          </li>
          <li>
            <Link className="p-color" href="/tos">
              Terms
            </Link>
          </li>
          <li>
            <Link className="p-color" href="/privacy">
              Privacy
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

