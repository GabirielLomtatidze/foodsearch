
export default function Header() {
   

    return (
        <>
            
            <header className="header">
                <div className="logo">
                    <a href="/main" style={{ textDecoration: "none" }}><h1>Foodie</h1></a>
                </div>
                <nav className="navigation">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
