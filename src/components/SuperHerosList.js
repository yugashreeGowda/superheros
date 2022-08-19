import React, { useState, useEffect } from "react";
import SuperHeroCard from "./SuperHeroCard";
import style from "./SuperHerosList.module.css";

const SuperHerosList = () => {
  const [superHeros, setSuperHeros] = useState([]);

  const getSuperHeros = async () => {
    const res = await fetch(
      "https://akabab.github.io/superhero-api/api/all.json"
    );
    const data = await res.json();
    setSuperHeros(data);
  };

  useEffect(() => {
    getSuperHeros();
  }, []);

  return (
    <div className={style.superHerosList}>
      {superHeros?.map((superHero) => (
        <SuperHeroCard key={superHero.id} superHero={superHero} />
      ))}
    </div>
  );
};

export default SuperHerosList;
