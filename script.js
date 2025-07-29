function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("captchaDisplay").textContent = captcha;
  return captcha;
}

let currentCaptcha = "";

document.addEventListener("DOMContentLoaded", () => {
  currentCaptcha = generateCaptcha();
});


document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const captchaInput = document.getElementById("captchaInput").value.trim().toUpperCase();
  const captchaExpected = document.getElementById("captchaDisplay").textContent.trim();

  if (captchaInput !== captchaExpected) {
    document.getElementById("error-message").textContent = "Captcha is incorrect!";
    generateCaptcha();
    return;
  }

  if (username === "joan" && password === "joan123") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error-message").textContent = "Invalid credentials!";
  }
});


