import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Secure your server!</h3>
        </div>
        <div className="joinUs-para p-color">
          Invite Revert to your own server!{" "}
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="#">
            Invite now
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
