import Home from "./containers/home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Cart from "./containers/Cart";

const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/signup",
        component: Signup
    },
    {
        path: "/cart",
        component: Cart
    },
];

export default routes;
