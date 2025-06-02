import { useEffect, useState } from "react";
import Cards from "../components/Cards";


export default function MainPage() {

    // const [title, setTitle] = useState<string>("")


    return (
        <>
        {/* <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/> */}

            <Cards />
        </>
    );
}
