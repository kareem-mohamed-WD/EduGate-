import {
  Navbar,
  Hero,
  Announcements,
  ComplaintsSection,
  SuggestionsSection,
  SchedulesSection,
  Footer,
  SplashScreen,
} from "./Components";

import { useState, useEffect } from "react";

function App() {
  const [padgs, setPadgs] = useState("الرئيسية");
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar setPadgs={setPadgs} padgs={padgs} />

          {padgs === "الرئيسية" && <Hero setPadgs={setPadgs} />}
          {padgs === "الإعلانات" && <Announcements />}
          {padgs === "الشكاوى" && <ComplaintsSection />}
          {padgs === "الاقتراحات" && <SuggestionsSection />}
          {padgs === "الجداول" && <SchedulesSection />}

          <Footer setPadgs={setPadgs} />
        </>
      )}
    </>
  );
}

export default App;
