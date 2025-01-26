import { NavLink } from 'react-router';
import { useTranslation } from 'react-i18next';

import './NavBar.scss';

function NavBar() {
  const { t } = useTranslation();
  return (
    <nav className="navbar">
      <NavLink to="/" end>
        {t('pages.home.title')}
      </NavLink>
      <NavLink to="/about" end>
        {t('pages.about.title')}
      </NavLink>
      <NavLink to="/projects" end>
        {t('pages.projects.title')}
      </NavLink>
      <NavLink to="/skills" end>
        {t('pages.skills.title')}
      </NavLink>
    </nav>
  );
}

export default NavBar;
