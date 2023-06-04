
let text = "";

for (let i = 0; i < 700; i++) {
    text += `<div class="circle-container">
  <div class="circle"></div>
</div>`;
}

document.getElementById("footer-bottom").innerHTML = text;
