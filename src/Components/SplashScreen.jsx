const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="splash-logo">
          <img src="Website icon.png" alt="Website icon" />{" "}
        </div>
        <h1>EduGate</h1>
        <h2>بوابتك نحو التميز والنجاح</h2>
        <p>كل ما تحتاجه في رحلتك الدراسية، بين يديك.</p>
        <div className="splash-loader">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
