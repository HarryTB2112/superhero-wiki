import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="about">
      <h1>The Superhero Wiki</h1>
      <p>
        Welcome to the Superhero wiki, where you can find out more about the
        superheroes you love!
      </p>
      <Link to="/superheroes">Superheroes</Link>
    </div>
  );
}
