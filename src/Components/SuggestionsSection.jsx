import { useState } from "react";

export default function SuggestionsSection() {
  const [suggestion, setSuggestion] = useState("");
  const [name, setName] = useState("");
  const [suggestionsList, setSuggestionsList] = useState(() => {
    return JSON.parse(localStorage.getItem("newDadeSuggestionsSection")) || [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!suggestion.trim()) return;

    const newSuggestion = {
      id: `C-${1001 + suggestionsList.length}`,
      suggestion: suggestion,
      name: name,
    };
    const updatedSuggestionsList = [...suggestionsList, newSuggestion];
    setSuggestionsList(updatedSuggestionsList);

    localStorage.setItem(
      "newDadeSuggestionsSection",
      JSON.stringify(updatedSuggestionsList),
    );
    setSuggestion("");
    setName("");
  };

  return (
    <section className="suggestions-container" dir="rtl">
      <h2 className="suggestions-title">
        <i className="fa-solid fa-lightbulb"></i> الاقتراحات
      </h2>
      <p className="suggestions-subtitle">
        شاركنا برأيك واقتراحك لصنع بيئة تعليمية أفضل بداخل الكليه
      </p>
      {/* كارت نموذج الاقتراح */}
      <div className="suggestion-card">
        <form onSubmit={handleSubmit}>
          <label htmlFor="suggestion-input" className="form-label">
            اقتراحك لتحسين الخدمات
          </label>
          <textarea
            id="suggestion-input"
            className="suggestion-textarea"
            placeholder="مثلاً: إضافة تنبيه قبل المحاضرة بساعة"
            required
            rows="5"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
          ></textarea>
          <input
            type="text"
            className="suggestion-name-input"
            placeholder="اسمك"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className="btn-wrapper">
            <button type="submit" className="submit-btn">
              <i className="fa-solid fa-paper-plane"></i> إرسال الاقتراح
            </button>
          </div>
        </form>
      </div>

      {/* منطقة عرض الاقتراحات أو الرسالة الفارغة */}
      <div className="suggestions-list">
        {suggestionsList.length === 0 ? (
          <p className="empty-state">
            <i className="fa-regular fa-comment"></i> لسه مفيش اقتراحات. كن أول
            واحد يقترح.
          </p>
        ) : (
          suggestionsList.map((item, index) => (
            <div key={index} className="suggestion-card">
              <p className="suggestion-text">{item.suggestion}</p>
              <p className="suggestion-id">
                <i className="fa-solid fa-hashtag"></i> {item.id}
              </p>
              <p className="suggestion-name">
                <i className="fa-regular fa-user"></i> {item.name}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
