import { Routes, Route } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetup';

function App() {
    return ( <div className = "App" >
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>

      </div>
    );
}

export default App;