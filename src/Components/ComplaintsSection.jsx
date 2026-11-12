import { useState } from "react";

const ComplaintsSection = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [complaintType, setComplaintType] = useState("أكاديمية");
  const [complaintDetails, setComplaintDetails] = useState("");
  const [submittedTrackingNumber, setSubmittedTrackingNumber] = useState("");
  const [complaints, setComplaints] = useState(() => {
    return JSON.parse(localStorage.getItem("newDadeComplaintsSection")) || [];
  });
  const foundComplaint = complaints.find(
    (item) => item.trackingNumber === trackingNumber.trim(),
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (complaintDetails.trim().length < 10) {
      alert("اكتب تفاصيل الشكوى في 10 حروف على الأقل");
      return;
    }
    let newDadeComplaintsSection = {
      trackingNumber: `C-${1001 + complaints.length}`,
      status: "قيد المراجعة",

      complaintType: complaintType,
      complaintDetails: complaintDetails,
    };
    const updatedComplaints = [...complaints, newDadeComplaintsSection];

    setComplaints(updatedComplaints);

    localStorage.setItem(
      "newDadeComplaintsSection",
      JSON.stringify(updatedComplaints),
    );

    setSubmittedTrackingNumber(newDadeComplaintsSection.trackingNumber);
    setTimeout(() => {
      setSubmittedTrackingNumber("");
    }, 5000);
    setComplaintType("أكاديمية");
    setComplaintDetails("");
  };

  return (
    <div className="complaints-container">
      <div className="complaints-wrapper">
        <h2 className="page-title">
          <i className="fa-solid fa-comment-dots"></i> الشكاوى
        </h2>

        <div className="complaints-grid">
          {/* قسم تابع شكوتك (اليسار) */}
          <div className="complaint-card">
            <h3 className="card-title">
              <i className="fa-solid fa-magnifying-glass"></i> تابع شكوتك
            </h3>

            <div className="form-group">
              <label className="form-label">رقم المتابعة</label>
              <input
                type="text"
                className="form-input complaints-tracking-input"
                placeholder="مثال: C-1001"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              />
            </div>
            {trackingNumber.trim() !== "" &&
              (foundComplaint ? (
                <div className="tracking-result">
                  <p>رقم المتابعة:</p>
                  <strong>{foundComplaint.trackingNumber}</strong>
                  <p>نوع الشكوى:</p>
                  <strong>{foundComplaint.complaintType}</strong>
                  <p>تفاصيل الشكوى:</p>
                  <strong>{foundComplaint.complaintDetails}</strong>
                  <p>حالة الشكوى:</p>
                  <p>
                    <i className="fa-solid fa-hourglass-half"></i>{" "}
                    {foundComplaint.status}...
                  </p>
                </div>
              ) : (
                <div className="tracking-result">
                  <p>
                    <i className="fa-solid fa-circle-exclamation"></i> رقم
                    المتابعة غير صحيح
                  </p>
                  <strong>{trackingNumber}</strong>
                </div>
              ))}
          </div>

          {/* قسم قدّم شكوى (اليمين) */}
          <div className="complaint-card">
            <h3 className="card-title">
              <i className="fa-solid fa-pen-to-square"></i> قدّم شكوى
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">النوع</label>
                <select
                  className="form-select"
                  required
                  value={complaintType}
                  onChange={(e) => setComplaintType(e.target.value)}
                >
                  <option value="أكاديمية">أكاديمية</option>
                  <option value="إدارية">إدارية</option>
                  <option value="خدمات">خدمات الطلاب</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">تفاصيل الشكوى</label>
                <textarea
                  className="form-textarea"
                  placeholder="اكتب المشكلة بالتفصيل (10 حروف على الأقل)"
                  value={complaintDetails}
                  required
                  onChange={(e) => setComplaintDetails(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <i className="fa-solid fa-paper-plane"></i> إرسال الشكوى
              </button>
            </form>
            {submittedTrackingNumber && (
              <div className="tracking-result">
                <p>
                  <i className="fa-solid fa-circle-check"></i> تم إرسال الشكوى
                  بنجاح!
                </p>
                <p>رقم المتابعة:</p>
                <strong>{submittedTrackingNumber}</strong>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsSection;