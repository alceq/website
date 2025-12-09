import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refunds from './pages/Refunds';
import Cookies from './pages/Cookies';
import YanetCleaner from './pages/YanetCleaner';
import BlumeCosmetics from './pages/BlumeCosmetics';
import TrybeLabs from './pages/TrybeLabs';
import BlossomStudio from './pages/BlossomStudio';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Terms": Terms,
    "Privacy": Privacy,
    "Refunds": Refunds,
    "Cookies": Cookies,
    "YanetCleaner": YanetCleaner,
    "BlumeCosmetics": BlumeCosmetics,
    "TrybeLabs": TrybeLabs,
    "BlossomStudio": BlossomStudio,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};