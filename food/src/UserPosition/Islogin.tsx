import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import MainPage from '../pages/MainPage';
import Details from '../pages/Details';

function App() {
    return (
        <BrowserRouter>
            <Header />

            <body style={{ backgroundColor: "#2C3E50" }}>

                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
            </body>
        </BrowserRouter>
    );
}

export default App;


