import { useEffect, useState } from "react";
import Cards from "../components/Cards";



export default function MainPage() {

    return (
        <>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px"
            }}>

                <Cards />
            </div>
        </>
    );
}
