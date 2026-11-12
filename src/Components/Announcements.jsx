import { announcements } from "./Data";
const AnnouncementsSection = () => {
  // بيانات الإعلانات الظاهرة في الصورة

  return (
    <div className="announcements-container">
      <div className="announcements-wrapper">
        <h2 className="page-title">
          <i className="fa-solid fa-bullhorn"></i> الإعلانات
        </h2>

        <div className="announcements-list">
          {announcements.map((item, index) => (
            <div key={index} className="announcement-card">
              {/* تفاصيل الإعلان */}
              <div className="announcement-content">
                <div className="announcement-header">
                  <h3 className="announcement-title">{item.title}</h3>
                  <span
                    className="announcement-tag"
                    style={{
                      backgroundColor: item.tagBg,
                      color: item.tagColor,
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
                <p className="announcement-desc">{item.description}</p>
              </div>

              {/* تاريخ الإعلان */}
              <div className="announcement-date">
                <i className="fa-regular fa-calendar"></i> {item.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsSection;
