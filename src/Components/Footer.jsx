const Footer = ({ setPadgs }) => {
  const quickLinks = [
    { label: "الرئيسية", icon: "fa-house" },
    { label: "الإعلانات", icon: "fa-bullhorn" },
    { label: "الجداول", icon: "fa-calendar-days" },
  ];

  return (
    <footer className="site-footer" dir="rtl">
      <div className="site-footer-container">
        {/* العمود الأول: عن البوابة */}
        <div className="site-footer-col site-footer-about">
          <div className="site-footer-brand">
            <img
              className="Website-icon"
              src="Website icon.png"
              alt="Website icon"
            />
            <span>EduGate | البوابة الطلابية</span>
          </div>
          <p className="site-footer-text">
            مكان واحد تعرف منه جدولك وآخر الإعلانات، وتقدر تبعت شكواك أو اقتراحك
            للإدارة بسهولة.
          </p>
        </div>

        {/* العمود التاني: روابط سريعة */}
        <div className="site-footer-col">
          <h4 className="site-footer-heading">روابط سريعة</h4>
          <ul className="site-footer-list">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <button
                  className="site-footer-link"
                  onClick={() => setPadgs(link.label)}
                >
                  <i className={`fa-solid ${link.icon}`}></i> {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* العمود التالت: شاركنا */}
        <div className="site-footer-col">
          <h4 className="site-footer-heading">شاركنا</h4>
          <ul className="site-footer-list">
            <li>
              <button
                className="site-footer-link"
                onClick={() => setPadgs("الشكاوى")}
              >
                <i className="fa-solid fa-comment-dots"></i> قدّم شكوى
              </button>
            </li>
            <li>
              <button
                className="site-footer-link"
                onClick={() => setPadgs("الاقتراحات")}
              >
                <i className="fa-solid fa-lightbulb"></i> ابعت اقتراح
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* الشريط السفلي */}
      <div className="site-footer-bottom">
        <span>
          <i className="fa-regular fa-copyright"></i> {new Date().getFullYear()}
          EduGate | البوابة الطلابية. جميع الحقوق محفوظة.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
