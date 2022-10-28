let form = document.getElementById("formId");

function sendMessage() {
  let name = document.getElementById("name").value;
  console.log(name);
  alert(
    `Thank you for contacting me ${name.toUpperCase()}! I will reply within 48 hours.`
  );
}
form.addEventListener("submit", sendMessage);
