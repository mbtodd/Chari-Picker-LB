import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import SectionLoginDB from "../views/Components/Sections/SectionLoginDB.jsx";
import SectionDetails from "../views/Components/Sections/SectionDetails.jsx"

var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/", name: "Components", component: Components },
  // { path: "/charidbs/:id", name: "SectionDetails", component: SectionDetails},
  { path: "/charidbs/:id", name: "SectionDetails", component: SectionDetails}
];

export default indexRoutes;
