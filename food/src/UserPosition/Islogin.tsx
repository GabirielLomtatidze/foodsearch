import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import MainPage from '../pages/MainPage';
import Details from '../pages/Details';
import Profile from '../pages/Profile';
import AddRecipe from '../components/AddRecipe';


function App() {
    return (
        <BrowserRouter>
            <Header />

            <body style={{ backgroundColor: "" }}>

                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/details/:id" element={<Details />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/AddRecipe' element={<AddRecipe/>}/>
                </Routes>
            </body>
        </BrowserRouter>
    );
}

export default App;


