import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface MealDetails {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    [key: string]: string | null;
}

export default function Details() {
    const [meal, setMeal] = useState<MealDetails | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        async function fetchMealDetails() {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();
            setMeal(data.meals[0]);
        }

        if (id) {
            fetchMealDetails();
        }
    }, [id]);

    if (!meal) return <div>Loading...</div>;

    return (
        <div className="details-container">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h2>{meal.strMeal}</h2>
            <p><strong>Category:</strong> {meal.strCategory}</p>
            <p><strong>country:</strong> {meal.strArea}</p>
            <p><strong>Instructions:</strong> {meal.strInstructions}</p>
            <h4>Ingredients:</h4>
            <div className="ingredients">

                <ul>
                    {Object.keys(meal)
                        .filter(key => key.includes('strIngredient') && meal[key])
                        .map((key) => (
                            <li key={key}>{meal[key]}</li>
                        ))}
                </ul>
                <ul>
                    {Object.keys(meal)
                        .filter(key => key.includes('strMeasure') && meal[key])
                        .map((key) => (
                            <li key={key}>{meal[key]}</li>
                        ))}
                </ul>
            </div>

        </div>
    );
}
