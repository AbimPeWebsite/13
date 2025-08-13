// Data karya website
const karyaList = [
    {
        judul: "Aplikasi Pesona Bolaang Mongondow",
        deskripsi: "Aplikasi untuk mengenal Bolaang Mongondow Raya, Seperti Sejarah BMR, Tokoh-tokoh, Raja-raja, dll.",
        gambar: "gambar/logo.jpg",
        link: "gambar/PesonaBolaangMongondow.apk"
    },
    {
        judul: "Website Kalkulator Bulking",
        deskripsi: "Website ini cocok untuk kamu yang ingin menambah berat badan atau bulking.",
        gambar: "gambar/Screenshot (23).png",
        link: "gambar/LatihanVSCode/bulking/index.html"
    },
    {
        judul: "Website Portfolio Lama",
        deskripsi: "Ini adalah web portofolio saya yang versi pertama.",
        gambar: "gambar/Screenshot (22).png",
        link: "https://abimpewebsite.github.io/0/"
    }
];

// Menampilkan karya ke halaman
const gallery = document.getElementById("gallery");
karyaList.forEach((karya, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Tentukan teks dan atribut tombol
    let tombolHTML;
    if (index === 0) {
        // Karya pertama → tombol Unduh
        tombolHTML = `<a href="${karya.link}" download style="color: var(--accent)">Unduh</a>`;
    } else {
        // Karya lainnya → tombol Lihat
        tombolHTML = `<a href="${karya.link}" target="_blank" style="color: var(--accent)">Lihat</a>`;
    }

    card.innerHTML = `
        <img src="${karya.gambar}" alt="${karya.judul}">
        <div class="card-content">
            <h3>${karya.judul}</h3>
            <p>${karya.deskripsi}</p>
            ${tombolHTML}
        </div>
    `;
    gallery.appendChild(card);
})

// Sistem komentar
const commentForm = document.getElementById("commentForm");
const commentList = document.getElementById("commentList");

commentForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const nama = document.getElementById("nama").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    if (nama && pesan) {
        const commentItem = document.createElement("div");
        commentItem.classList.add("comment-item");
        commentItem.innerHTML = `<strong>${nama}</strong><p>${pesan}</p>`;
        commentList.prepend(commentItem); // komentar baru di atas

        commentForm.reset();
    }
});

;
