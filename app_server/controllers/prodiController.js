// Mengimpor axios untuk melakukan HTTP request
const axios = require("axios");

const index = async (req, res) => {
    try {
        // Mendapatkan data prodi dari API external
        const response = await axios.get("https://express-app-smoky.vercel.app/api/prodi");

        // Data prodi dari API
        const prodi = response.data;

        // Render halaman 'prodi' dengan data yang diperoleh dari API
        res.render("prodi", {
            title: "Halaman Program Studi",prodi,
            layout: "main",
        });
    } catch (error) {
        // Menangani kesalahan saat mengambil data dari API
        console.error(error.message);
        res.status(500).send("Gagal mendapatkan data program studi dari API");
    }
};

module.exports = { index };
