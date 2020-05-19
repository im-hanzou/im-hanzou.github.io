"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let jam = document.getElementById("jam"),
    menit = document.getElementById("menit"),
    detik = document.getElementById("detik"),
    canvas = document.getElementById("bg"),
    loveemoji = [
      "💞",
      "💕",
      "💓",
      "💗",
      "💖",
      "💘",
      "💝",
      "🧡",
      "💛",
      "💚",
      "💙",
      "💜",
      "🤎",
      "🖤"
    ];

  let waktu = new Date();

  jam.innerHTML = waktu.getHours();
  menit.innerHTML = waktu.getMinutes();
  detik.innerHTML = waktu.getSeconds();

  setInterval(() => {
    let waktu = new Date();

    jam.innerHTML = waktu.getHours();
    menit.innerHTML = waktu.getMinutes();
    detik.innerHTML = waktu.getSeconds();
  }, 1000);

  canvas.height = innerHeight;
  canvas.width = innerWidth;
  let ctx = canvas.getContext("2d");

  class Love {
    constructor() {
      this.reset();
    }
    reset() {
      this.size = Math.floor(Math.random() * 150 + 75);
      this.x = Math.floor(
        Math.random() * (canvas.width - this.size) + this.size
      );
      this.y = canvas.height + this.size;
      this.speed = Math.floor(Math.random() * 5 + 2);
      this.emoji = loveemoji[Math.floor(Math.random() * loveemoji.length)];
    }
    draw() {
      ctx.globalAlpha = 0.8;
      ctx.font = this.size + "px serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.emoji, this.x, this.y);
    }
    update() {
      if (this.y < -this.size) {
        this.reset();
      } else {
        this.y = this.y - this.speed;
      }
      this.draw();
    }
  }

  let arrLove = [];

  for (let i = 0; i < 100; i++) {
    arrLove.push(new Love());
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerWidth);

    arrLove.forEach((love) => {
      love.update();
    });
  }
  animate();
});
