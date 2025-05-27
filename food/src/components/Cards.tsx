import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaList } from 'react-icons/fa';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
}

export default function Cards() {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      setMeals(data.meals);
    }

    fetchData();
  }, []);


  const [saveWish, setSaveWish] = useState<any[]>([]);;

  const handleMeal = (meal: Meal) => setSaveWish([...saveWish, meal]);


  return (
    <>
      <div className="card-container">
        {meals.map((meal) => (
          <div className="card" key={meal.idMeal}>
            <Link to={`/details/${meal.idMeal}`}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </Link>
            <h3>{meal.strMeal}</h3>
            <p>{meal.strCategory}</p>
            <p>{meal.strArea}</p>

            <StarRating />

            <button key={meal.idMeal} onClick={() => handleMeal(meal)}>add Wishlyst</button>
          </div>
        ))}
      </div>

      <ul>
        {saveWish.map((meal, index) => (<li key={index}>{meal.strMeal}</li>))}
        
      </ul>
    </>

  );
}


const StarRating = () => {
  const [hoveredStar, setHoveredStar] = useState<number>(0);
  const [selectedStar, setSelectedStar] = useState<number>(0);

  const handleMouseEnter = (index: number) => {
    setHoveredStar(index + 1);
  };

  const handleMouseLeave = () => {
    setHoveredStar(0);
  };

  const handleClick = (index: number) => {
    setSelectedStar(index + 1);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const isFilled = hoveredStar > i || selectedStar > i;
      stars.push(
        <span
          key={i}
          className={`star ${isFilled ? "filled" : ""}`}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};
