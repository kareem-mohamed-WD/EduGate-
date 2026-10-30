import { announcements, schedulesData } from "./Data";
import { useState } from "react";

const HomeHeroSection = ({ setPadgs }) => {
  const latestAnnouncement = [...announcements].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  )[0];
  const [getannouncements] = useState(() => {
    return JSON.parse(localStorage.getItem("newDadeComplaintsSection")) || [];
  });

  const [getnewDadeSuggestionsSection] = useState(() => {
    return JSON.parse(localStorage.getItem("newDadeSuggestionsSection")) || [];
  });

  const getNextLectureForGrade = (gradeKey) => {
    const firstGroup = schedulesData[gradeKey].groups[0];
    const lectures = schedulesData[gradeKey].schedules[firstGroup];
    if (lectures && lectures.length > 0) {
      return lectures[0]; // أول محاضرة في الجدول
    }
    return { subject: "لا توجد محاضرات", time: "-", hall: "-" };
  };
  return (
    <div className="home-container">
      <div className="home-wrapper">
        {/* الجزء العلوي: النص والكارت */}
        <div className="hero-section">
          {/* الكارت الأصفر الجانبي */}
          <div className="card-side">
            <div className="yellow-card">
              <div className="red-dot"></div>

              {/* آخر إعلان */}
              <div>
                <span className="card-label">
                  <i className="fa-solid fa-bullhorn"></i> آخر إعلان
                </span>
                <h3 className="card-title">{latestAnnouncement.title}</h3>
                <p className="card-text">{latestAnnouncement.description}</p>
              </div>

              <div className="divider"></div>

              {/* أقرب محاضرة */}
              {/* قسم أقرب المحاضرات لكل الفرق */}
              <div className="home-next-lectures">
                <h3 className="hero-lectures-title">
                  <i className="fa-solid fa-book-open"></i> أقرب المحاضرات للفرق
                  الدراسية
                </h3>

                <div className="hero-lectures-grid">
                  {["first", "second", "third", "fourth"].map(
                    (gradeKey, index) => {
                      const gradeNames = [
                        "الفرقة الأولى",
                        "الفرقة الثانية",
                        "الفرقة الثالثة",
                        "الفرقة الرابعة",
                      ];
                      const lecture = getNextLectureForGrade(gradeKey);

                      return (
                        <div key={gradeKey} className="hero-lecture-card">
                          <span className="hero-lecture-grade">
                            {gradeNames[index]}
                          </span>
                          <h4 className="hero-lecture-subject">
                            {lecture.subject}
                          </h4>
                          <p className="hero-lecture-time">
                            <i className="fa-regular fa-clock"></i>{" "}
                            {lecture.time} ({lecture.day})
                          </p>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* النص والزرائر */}
          <div className="text-side">
            <h1 className="main-heading">
              كل جداولك وإعلاناتك <br />
              في مكان واحد
            </h1>

            <p className="sub-paragraph">
              اعرف مواعيد محاضراتك، وتابع آخر الأخبار، وابعت شكواك أو اقتراحك
              للإدارة من غير ما تسأل حد.
            </p>

            <div className="buttons-container">
              <button
                className="btn-primary"
                onClick={() => setPadgs("الجداول")}
              >
                <i className="fa-solid fa-calendar-days"></i> شوف جدولك
              </button>
              <button
                className="btn-secondary"
                onClick={() => setPadgs("الشكاوى")}
              >
                <i className="fa-solid fa-comment-dots"></i> قدّم شكوى
              </button>
            </div>
          </div>
        </div>

        {/* كروت الإحصائيات */}
        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-number">{announcements.length}</span>
            <span className="stat-label">إعلان منشور</span>
          </div>

          <div className="stat-box">
            <span className="stat-number">{getannouncements.length}</span>
            <span className="stat-label">شكوى مسجلة</span>
          </div>

          <div className="stat-box">
            <span className="stat-number">
              {getnewDadeSuggestionsSection.length}
            </span>
            <span className="stat-label">اقتراح مسجل</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
