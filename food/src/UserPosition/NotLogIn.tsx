import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Welcome from '../EnterPages/Welcome';




export default function NotLogIn() {

    return (
        <BrowserRouter>
            <Header />
            <body style={{ backgroundColor: "#2C3E50" }}>
                <Routes>
                    <Route path='/' element={<Welcome/>}/>
        
                </Routes>
            </body>

        </BrowserRouter>
    );
}

