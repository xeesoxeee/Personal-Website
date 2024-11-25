function sendmail() {
  let parms = {
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  }
  emailjs.send("service_009r5qt","template_nm0bggo", parms).then(alert("Email Sent!!"))
}