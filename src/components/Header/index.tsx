import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

import "./header.scss";

const Header = () => {
  const menu = [
    { id: 1, link: "", name: "Plant pots" },
    { id: 2, link: "", name: "Ceramics" },
    { id: 3, link: "", name: "Tables" },
    { id: 4, link: "", name: "Chairs" },
    { id: 5, link: "", name: "Crockery" },
    { id: 6, link: "", name: "Tableware" },
    { id: 7, link: "", name: "Cutlery" },
  ];

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-top__search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="header-top__logo">Avion</div>
        <div className="header-top__profile">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
      <ul className="main-menu">
        {menu.map((menuItem: any) => {
          return <li className="main-menu__item">{menuItem.name}</li>;
        })}
      </ul>
    </header>
  );
};

export default Header;
