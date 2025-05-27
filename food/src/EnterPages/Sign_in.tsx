import { SignIn } from "@clerk/clerk-react";


export default function Sign_in() {

    return (
        <>
            <div className="enter_page">
                <div className="enter_page_leftSide">

                </div>
                <div className="enter_page_rightSide">
                    <div className="component"><SignIn /></div>
                </div>
            </div>
        </>
    )
}