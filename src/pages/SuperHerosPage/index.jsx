import { SuperHeroCard } from "../../components";
import { useState, useEffect } from "react";

export default function SuperHerosPage() {
  const [superHeroes, setSuperHeroes] = useState([]);
  const grabSuperHeroes = async () => {
    let i = 0;
    while (i < 50) {
      const response = await fetch(
        `https://superheroapi.com/api/1577444655998791/${i + 1}`
      );
      if (response.ok) {
        data = await response.json();
        setSuperHeroes((superHeroes) => [...superHeroes, data]);
      } else {
        throw new Error("Could not fetch superheroes");
      }
    }
  };
  return <div className="superheroes"></div>;
}
