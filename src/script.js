//            public key:
emailjs.init("i4FlmGegfIPn7DqMy");

document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const choice = btn.textContent.trim();
      const message =
        choice === "Start New Journey!"
          ? "New jouney has been started!"
          : "She choose to End the Journey. Don't be discouraged...";
                  //service id:        template id:
      emailjs.send("service_me8jg0r", "template_r1m1ig4", {
        from_name: "webBalikan",
        message: message,
      })
      .then((response) => {
        console.log("✅ Email terkirim!", response.status, response.text);
        showToast("Pesan terkirim!");
      })
      .catch((error) => {
        console.error("❌ Gagal kirim email:", error);
        showToast("Gagal kirim pesan!");
      });
    });
  });

  // alert notif:
  function showToast(text) {
    const notif = document.createElement("div");
    notif.textContent = text;
    notif.style.position = "fixed";
    notif.style.bottom = "20px";
    notif.style.right = "20px";
    notif.style.background = "rgba(0,0,0,0.7)";
    notif.style.color = "#fff";
    notif.style.padding = "10px 20px";
    notif.style.borderRadius = "10px";
    notif.style.fontSize = "14px";
    notif.style.zIndex = "9999";
    notif.style.transition = "opacity 0.5s ease";
    document.body.appendChild(notif);

    setTimeout(() => {
      notif.style.opacity = "0";
      setTimeout(() => notif.remove(), 500);
    }, 2500);
  }
});
