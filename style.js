// Animasi latar belakang dengan gradasi warna yang berubah-ubah
function animateBackground() {
    document.body.style.background = "linear-gradient(-45deg, #ff416c, #ff4b2b, #ff5733, #ff914d)";
    document.body.style.backgroundSize = "400% 400%";
    document.body.style.animation = "gradientAnimation 10s ease infinite";
}

// Menambahkan animasi CSS secara dinamis
function addDynamicStyles() {
    let style = document.createElement("style");
    style.innerHTML = `
        @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .container {
            padding: 20px;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 15px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
            max-width: 80%;
            color: white;
            text-align: center;
            font-family: Arial, sans-serif;
        }

        /* Efek loading */
        .loading {
            font-size: 18px;
            font-weight: bold;
            margin-top: 10px;
        }

        .dots {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            width: 0;
            animation: dotsAnimation 1.5s steps(4, end) infinite;
        }

        @keyframes dotsAnimation {
            0% { width: 0; }
            100% { width: 20px; }
        }
    `;
    document.head.appendChild(style);
}

// Menjalankan fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    animateBackground();
    addDynamicStyles();
});