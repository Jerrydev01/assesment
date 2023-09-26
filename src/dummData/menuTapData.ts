import Account from "../screens/Account";
import Cart from "../screens/Cart";
import HomeScreen from "../screens/HomeScreen";
import Menu from "../screens/Menu";

interface MenuProps {
  name: string;
  Link: string;
  component: any;
  icon: string;
  ActiveIcon: string;
  hidden: boolean;
}
[];

export const menuTabs: MenuProps[] = [
  {
    name: "Home",
    Link: "HomeIndex",
    component: HomeScreen,
    icon: "home-outline",
    ActiveIcon: "home",
    hidden: false,
  },
  {
    name: "Menu",
    Link: "MenuIndex",
    component: Menu,
    icon: "menu",
    ActiveIcon: "menu",
    hidden: false,
  },
  {
    name: "cart",
    Link: "CartIndex",
    component: Cart,
    icon: "shopping-outline",
    ActiveIcon: "shopping",
    hidden: false,
  },
  {
    name: "account",
    Link: "AccountIndex",
    component: Account,
    icon: "account-supervisor-circle-outline",
    ActiveIcon: "account-supervisor-circle-outline",
    hidden: false,
  },
];

// npx expo install --fix

// className?: string | undefined;
