interface IThemeColours {
  mainBackground: string;
  menuBackground: string;
  navBackground: string;
  cardBackground: string;
  footerBackground: string;
  navBorder: string;
  text: string;
  link: string;
}

function applyTheme(theme: IThemeColours): void {
  const root = document.documentElement;

  root.style.setProperty("--main-bg-colour", theme.mainBackground);
  root.style.setProperty("--menu-bg-colour", theme.menuBackground);
  root.style.setProperty("--nav-bg-colour", theme.navBackground);
  root.style.setProperty("--card-bg-colour", theme.cardBackground);
  root.style.setProperty("--footer-bg-colour", theme.footerBackground);
  root.style.setProperty("--nav-border-colour", theme.navBorder);
  root.style.setProperty("--text-colour", theme.text);
  root.style.setProperty("--link-colour", theme.link);
}

function applyDarkTheme(): void {
  const darkThemeColours: IThemeColours = {
    mainBackground: "#222222",
    menuBackground: "rgb(51, 51, 51, 0.5)",
    navBackground: "#111122",
    cardBackground: "#333344",
    footerBackground: "#222244",
    navBorder: "#adadde",
    text: "#ededfd",
    link: "#fdfdfd",
  };
  applyTheme(darkThemeColours);
}

export { applyDarkTheme };
