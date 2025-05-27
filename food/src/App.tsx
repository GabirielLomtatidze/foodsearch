import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignedIn, SignedOut, } from '@clerk/clerk-react';
import MainPage from './pages/MainPage';
import Header from './components/Header';
import Details from './pages/Details';
import Sign_in from './EnterPages/Sign_in';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <body style={{ backgroundColor: "#2C3E50" }}>
        <SignedOut>
          <Routes>
            <Route path='/sign-in' element={<Sign_in/>} />
          </Routes>
        </SignedOut>
        <SignedIn>
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </SignedIn>
      </body>

    </BrowserRouter>
  );
}

export default App;


