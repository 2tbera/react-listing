import logo from '../../assets/img/logo.png'
import { Logo } from './header.style';
import { Link } from "react-router-dom";
import { IMenuItem } from "./header.interface";
import { useLocation } from "react-use";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from "react";
import { RootContext } from "../../contexts/root.context";

const menuList: IMenuItem[] = [
  {
    title: 'home',
    path: '/'
  },
  {
    title: 'cart',
    path: '/cart'
  }
];

const Header = () => {
  const {pathname} = useLocation()

  const { state } = useContext(RootContext);


  return (
    <nav className="navbar px-5 navbar-expand-lg navbar-light bg-light">
      <Link to={'/'} className={'navbar-brand'}>
        <Logo className={'shadow-lg overflow-hidden rounded-circle'} src={logo} width={'60px'} height={"autp"}/>
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {menuList.map(({title, path}) => <li className={'nav-itemStyle ' + (pathname === path ? 'active' : '')} key={path}>
            <Link
              className="nav-link" to={path}> {title} </Link></li>)}
        </ul>
      </div>

      <div className="btn-group">
        <button type="button" className="btn btn-primary" >
          {state?.cart?.total || 0} - items
        </button>

      </div>
    </nav>
  );
}
export default Header;
