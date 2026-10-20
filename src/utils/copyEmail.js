// src/utils/copyEmail.js
// Copies text to the clipboard (with a fallback for when the Clipboard API is
// blocked) and reports the result through showToast.
export async function copyEmail(email, showToast) {
  try {
    await navigator.clipboard.writeText(email);
    showToast?.("Email copied");
  } catch {
    // fallback if clipboard API is blocked
    try {
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast?.("Email copied");
    } catch {
      showToast?.("Couldn’t copy email");
    }
  }
}
