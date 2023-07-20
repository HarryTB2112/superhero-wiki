import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="about">
      <h1>The Pokemon Wiki</h1>
      <p>
        Welcome to the Pokemon wiki, where you can find out more about the
        pokemon you love!
      </p>
      <button className="button">
        <Link to="/pokemon">Pokemon</Link>
      </button>
    </div>
  );
}
