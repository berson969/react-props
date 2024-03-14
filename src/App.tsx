import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';

import { MovieCards } from "./components/RatingFilms/MovieCards.tsx";
import { HomePage } from "./HomePage.tsx";
import { Listing } from "./components/Listing/Listing.tsx";
import { Chat } from "./components/Chat/Chat.tsx";



function App() {

  return (
    <div>
        {/*<MovieCards />*/}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MovieCards />} />
                <Route path="/listing" element={<Listing />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
