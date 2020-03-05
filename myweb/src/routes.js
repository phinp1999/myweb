import Home from "./containers/Home/TrangChu/index";
import GioiThieu from "./containers/Home/GioiThieu";
import DieuKhoan from "./containers/Home/DieuKhoan";
import API from "./containers/Home/API";
import BoSung from "./containers/Home/BoSung";
import LienHe from "./containers/Home/LienHe";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/gioi-thieu",
    exact: true,
    component: GioiThieu
  },
  {
    path: "/dieu-khoan",
    exact: true,
    component: DieuKhoan
  },
  {
    path: "/API",
    exact: true,
    component: API
  },
  {
    path: "/bo-sung",
    exact: true,
    component: BoSung
  },
  {
    path: "/lien-he",
    exact: true,
    component: LienHe
  }
];

export { routesHome };
