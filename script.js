document.addEventListener("click", function(e) {
  for (let i = 0; i < 10; i++) {
    let flower = document.createElement("div");
    flower.classList.add("flower");

    // posisi klik
    flower.style.left = e.clientX + "px";
    flower.style.top = e.clientY + "px";

    // warna random pink & ungu
    let colors = ["#ff69b4", "#da70d6", "#ba55d3", "#ff1493"];
    flower.style.background = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(flower);

    // hapus setelah animasi
    setTimeout(() => {
      flower.remove();
    }, 2000);
  }
});
