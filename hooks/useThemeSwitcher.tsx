import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme : dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      let check = userPref === "dark" ? "dark" : "light";
      if (userPref) {
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check2 = mediaQuery.matches ? "dark" : "light";
        setMode(check2);
        window.localStorage.setItem("theme", check2);

        if (check2 === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode.length > 0) {
      if (mode === "dark") {
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, [mode]);
  return [mode, setMode];
};

export default useThemeSwitcher;
