import { SignInButton, SignUpButton } from "@clerk/clerk-react"


export default function Welcome() {

    return (
        <>
            <div className="enter_page">
                <div className="enter_page_leftSide">
                    <h1 className="welcome_text">Welcome to Our Recipe Hub!</h1>
                    <div className="leftSide_texts">
                        <h3 className="min_title">Share Your Recipe</h3>
                        <p className="min_text">It's easy to add your favorite recipes to our collection. Simply click, fill in the details, and voilà! Your creation will be available for everyone to enjoy.</p>
                        <div className="line"></div>
                        <h3 className="min_title">Explore Recipes</h3>
                        <p className="min_text">Looking for inspiration? Browse through a variety of dishes, from quick weeknight dinners to indulgent desserts. Whether you’re a beginner or a seasoned chef, there's something here for everyone.</p>
                    </div>
                </div>
                <div className="enter_page_rightSide">
                    <div className="sign_area">
                        <div className="sign_area_top"></div>
                        <div className="sign_area_left"></div>
                        <div className="sign_button_area">
                            <SignInButton className="sign_area_btn"/>
                            <SignUpButton className="sign_area_btn"/>
                        </div>
                        <div className="sign_area_buttom"></div>
                        <div className="sign_area_right"></div>
                    </div>
                </div>
            </div>
        </>
    )
}