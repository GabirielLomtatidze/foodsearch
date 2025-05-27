import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Sign_in from '../EnterPages/Sign_in';
import Sign_up from '../EnterPages/Sign_up';



export default function NotLogIn() {

    return (
        <BrowserRouter>
            <Header />
            <body style={{ backgroundColor: "#2C3E50" }}>
                <Routes>
                    <Route path='/' element={<Sign_in />} />
                    <Route path='/sign-up' element={<Sign_up />} />
                </Routes>
            </body>

        </BrowserRouter>
    );
}

