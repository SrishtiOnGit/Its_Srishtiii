import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const ThemeToggler = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div>
      <button onClick={toggleTheme} className="text-2xl ">
        {theme === "dark" ? <CiLight /> : <MdDarkMode />}
      </button>
    </div>
  );
};

export default ThemeToggler;
