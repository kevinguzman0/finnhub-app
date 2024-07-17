import LoginScreen from "../../screens/Login/login.screen";
import RegisterScreen from "../../screens/Register/register.screen";
import { LOGIN_SCREEN, REGISTER_SCREEN } from "../routesName";

export const authRoutes = [
  {
    name: LOGIN_SCREEN,
    component: LoginScreen,
    options: { headerShown: false },
  },
  {
    name: REGISTER_SCREEN,
    component: RegisterScreen,
    options: { headerShown: false },
  },
];
