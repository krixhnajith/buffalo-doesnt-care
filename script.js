function showTextbox() {
  document.getElementById("input-area").style.display = "block";
}

function makeBuffaloMoo() {
  const userText = document.getElementById("userText").value;
  if (userText.trim() !== "") {
    const buffalo = document.getElementById("buffalo");
    buffalo.classList.add("clicked");

    const moo = document.getElementById("mooSound");
    moo.play();

    setTimeout(() => {
      buffalo.classList.remove("clicked");
      document.getElementById("userText").value = "";
    }, 1000);
  }
}
