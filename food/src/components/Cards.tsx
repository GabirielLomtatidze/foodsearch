import { useState, useEffect } from "react";
import "../styles/components.css"


export default function Cards() {

    const [product, setProduct] = useState<any[]>([]);

    useEffect(() => {

        async function getData() {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            const data = await response.json();
            setProduct(data.meals);
        }

        getData();
    }, []);


    return (
        <>
            {product.map((prod: any) => (
                <div className="cards" key={prod.id}>
                    <img src={prod.strMealThumb} alt="" />
                </div>
            ))}
        </>
    )
}