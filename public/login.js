document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      alert(`Welcome, ${data.username}!`);
      window.location.href = "/quiz.html"; // מסך ראשי לאחר התחברות
    } else {
      errorMessage.textContent = data.message || "Login failed!";
    }
  } catch (err) {
    errorMessage.textContent = "An error occurred. Please try again.";
  }
});
