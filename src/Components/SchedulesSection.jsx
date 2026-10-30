import { useState } from "react";
import { schedulesData } from "./Data";

export default function SchedulesSection() {
  const [activeGrade, setActiveGrade] = useState("first");
  const [activeGroup, setActiveGroup] = useState(schedulesData.first.groups[0]);
  const handleGradeChange = (gradeKey) => {
    setActiveGrade(gradeKey);
    setActiveGroup(schedulesData[gradeKey].groups[0]);
  };
  const currentGroups = schedulesData[activeGrade].groups;
  const currentTableData =
    schedulesData[activeGrade].schedules[activeGroup] || [];

  return (
    <section className="schedules-container" dir="rtl">
      <div className="schedules-header">
        <h2 className="schedules-title">
          <i className="fa-solid fa-calendar-days"></i> جداول المحاضرات الدراسية
        </h2>
        <p className="schedules-subtitle">
          اختر الفرقة والمجموعة لعرض الجدول الزمني المخصص لك
        </p>
      </div>

      {/* 1. أزرار التبديل بين الفرَق */}
      <div className="grades-tabs">
        <button
          className={`tab-btn ${activeGrade === "first" ? "active" : ""}`}
          onClick={() => handleGradeChange("first")}
        >
          <i className="fa-solid fa-graduation-cap"></i> الفرقة الأولى
        </button>
        <button
          className={`tab-btn ${activeGrade === "second" ? "active" : ""}`}
          onClick={() => handleGradeChange("second")}
        >
          <i className="fa-solid fa-graduation-cap"></i> الفرقة الثانية
        </button>
        <button
          className={`tab-btn ${activeGrade === "third" ? "active" : ""}`}
          onClick={() => handleGradeChange("third")}
        >
          <i className="fa-solid fa-graduation-cap"></i> الفرقة الثالثة
        </button>
        <button
          className={`tab-btn ${activeGrade === "fourth" ? "active" : ""}`}
          onClick={() => handleGradeChange("fourth")}
        >
          <i className="fa-solid fa-graduation-cap"></i> الفرقة الرابعة
        </button>
      </div>
      {/* 2. أزرار / شرائط اختيار المجموعات الخاصة بالفرقة */}
      <div className="groups-tabs-container">
        <span className="groups-label">
          <i className="fa-solid fa-users"></i> اختر المجموعة:
        </span>
        <div className="groups-tabs">
          {currentGroups.map((group, index) => (
            <button
              key={index}
              className={`group-btn ${activeGroup === group ? "active-group" : ""}`}
              onClick={() => setActiveGroup(group)}
            >
              {group}
            </button>
          ))}
        </div>
      </div>

      {/* 3. عرض الجدول بناءً على الفرقة والمجموعة المختارة */}
      <div className="schedule-table-wrapper">
        <div className="table-info-banner">
          <span>
            <i className="fa-solid fa-table"></i> عرض جدول:
            <strong>{activeGroup}</strong>
          </span>
        </div>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>
                <i className="fa-regular fa-calendar"></i> اليوم
              </th>
              <th>
                <i className="fa-solid fa-book"></i> المادة الدراسية
              </th>
              <th>
                <i className="fa-regular fa-clock"></i> الموعد
              </th>
              <th>
                <i className="fa-solid fa-location-dot"></i> القاعة / المعمل
              </th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.length === 0 ? (
              <tr>
                <td colSpan="5" className="empty-schedule">
                  <i className="fa-regular fa-calendar-xmark"></i> عذراً، لا
                  توجد محاضرات مسجلة لهذه المجموعة حالياً.
                </td>
              </tr>
            ) : (
              currentTableData.map((item) => (
                <tr key={item.id}>
                  <td className="day-cell">{item.day}</td>
                  <td className="subject-cell">{item.subject}</td>
                  <td>{item.time}</td>
                  <td>
                    <span className="hall-badge">{item.hall}</span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
