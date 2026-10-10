import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const ThemeToggler = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === "dark" ? <CiLight /> : <MdDarkMode />}
      </button>
    </div>
  );
};

export default ThemeToggler;
