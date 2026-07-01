import { useEffect, useState, useCallback } from "react";
import RightSide from "./components/RightSide.jsx";
import LeftSide from "./components/LeftSide.jsx";
import BottomNav from "./components/BottomNav.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

function App() {
  const [mobileSection, setMobileSection] = useState("about");

  const changeSection = useCallback((id) => {
    setMobileSection(id);
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      const x = e.clientX + window.scrollX;
      const y = e.clientY + window.scrollY;
      document.documentElement.style.setProperty("--gradient-position-x", `${x}px`);
      document.documentElement.style.setProperty("--gradient-position-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <CustomCursor />
      <main className="w-full md:px-10 lg:w-3/4 lg:px-0 max-w-5xl lg:m-auto">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className={`left-side lg:h-screen lg:sticky lg:top-0 min-w-0 ${mobileSection !== "about" ? "hidden lg:block" : ""}`}>
            <LeftSide />
          </div>
          <div>
            <RightSide mobileSection={mobileSection} onSectionChange={changeSection} />
          </div>
        </div>
      </main>
      <BottomNav active={mobileSection} onChange={changeSection} />
    </>
  );
}

export default App;
