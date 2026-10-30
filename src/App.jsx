import {
  Navbar,
  Hero,
  Announcements,
  ComplaintsSection,
  SuggestionsSection,
  SchedulesSection,
  Footer,
} from "./Components";
import { useState } from "react";
function App() {
  const [padgs, setPadgs] = useState("الرئيسية");
  return (
    <>
      <Navbar setPadgs={setPadgs} padgs={padgs} />
      {padgs === "الرئيسية" && <Hero setPadgs={setPadgs} />}
      {padgs === "الإعلانات" && <Announcements />}
      {padgs === "الشكاوى" && <ComplaintsSection />}
      {padgs === "الاقترحات" && <SuggestionsSection />}
      {padgs === "الجداول" && <SchedulesSection />}
      {/* ملاحظة الفوتر */}
      <Footer setPadgs={setPadgs} />
    </>
  );
}

export default App;
