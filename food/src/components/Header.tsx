import { useUser, useClerk } from '@clerk/clerk-react';


export default function Header() {

    const { isSignedIn } = useUser();
    const { signOut } = useClerk();


    return (
        <>

            <header className="header">
                <div className="logo">
                    <a href="/" style={{ textDecoration: "none" }}><h1>Foodie</h1></a>
                </div>
                <nav className="navigation">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/Categories">Categories</a></li>
                        <li><a href="/Contact">Contact</a></li>
                        {isSignedIn ?
                            <>
                                <a href="/items"><li>Items</li></a>
                                <a href="/profile"><li >Profile</li></a>
                                <button onClick={() => signOut()}>Log Out</button>
                            </>
                            :
                            <>
                            </>
                        }

                    </ul>
                </nav>
            </header>
        </>
    );
}
