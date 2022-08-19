import React from "react";
import style from "./SuperHeroCard.module.css";

const SuperHeroCard = ({ superHero }) => {
  const { name, images, appearance, biography,powerstats } = superHero;
  return (
    <div className={style.superHeroCard}>
      <img className={style.image} src={images?.md} alt={name} />
      <div className={style.content}>
        <p className={style.name}>{name}</p>
        <div>
          <article>Appearence</article>
          <ul>
            <li>Gender: {appearance?.gender}</li>
            <li>Eye color: {appearance?.eyeColor}</li>
            <li>Hair color: {appearance?.hairColor}</li>
            <li>Race: {appearance?.race}</li>
          </ul>
        </div>
        <div>
          <article>Biography</article>
          <ul>
            <li>Full Name: {biography?.fullName}</li>
            <li>
              Aliases: 
              {biography?.aliases?.length ? biography?.aliases.map((alias, index) => (
                <span key={index}>{alias}</span>
              )) : "No aliases"}
            </li>
            <li>Place Of Birth: {biography?.placeOfBirth}</li>
            <li>First Appearance: {biography?.firstAppearance}</li>
            <li>Alter Egos: {biography?.alterEgos}</li>
            <li>Alignment: {biography?.alignment}</li>
            <li>Publisher: {biography?.publisher}</li>
          </ul>
        </div>
        <div>
        <article>Powerstats</article>
        <ul>
          <li>Combat: {powerstats?.combat}</li>
          <li>Durability: {powerstats?.durability}</li>
          <li>Intelligence: {powerstats?.intelligence}</li>
          <li>Power: {powerstats?.power}</li>
          <li>Speed: {powerstats?.speed}</li>
          <li>Strength: {powerstats?.strength}</li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default SuperHeroCard;
