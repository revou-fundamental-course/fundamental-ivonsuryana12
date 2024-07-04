// Smooth scrolling for internal links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation and redirect to project-2 section
document.getElementById('messageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let birthDate = document.getElementById('Tanggal Lahir').value;
    let message = document.getElementById('message').value;

    if (name === '' || birthDate === '' || message === '') {
        alert('Semua bidang harus diisi!');
        return false;
    }

    // Regular expression for date format (yyyy-mm-dd)
    let dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(birthDate)) {
        alert('Format tanggal lahir harus yyyy-mm-dd!');
        return false;
    }

    // Show confirmation and scroll to project-2
    alert('Form berhasil dikirim! Anda akan diarahkan ke Proyek 2.');
    document.getElementById('project-2-details').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add some interaction on portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseover', function () {
        this.querySelector('.portfolio-overlay').style.display = 'block';
    });

    item.addEventListener('mouseout', function () {
        this.querySelector('.portfolio-overlay').style.display = 'none';
    });
});

// Fungsi untuk menambah baris baru ke tabel proyek
function tambahBarisKeTabel(nama, tanggalLahir, pesan) {
    const tabel = document.getElementById('project-table').getElementsByTagName('tbody')[0];

    // Buat baris baru
    const barisBaru = tabel.insertRow();

    // Tambahkan sel untuk masing-masing data
    const selNama = barisBaru.insertCell(0);
    const selTanggalLahir = barisBaru.insertCell(1);
    const selPesan = barisBaru.insertCell(2);

    // Isi sel dengan data dari formulir
    selNama.textContent = nama;
    selTanggalLahir.textContent = tanggalLahir;
    selPesan.textContent = pesan;
}

// Form validation and submit event
document.getElementById('messageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let nama = document.getElementById('name').value;
    let tanggalLahir = document.getElementById('Tanggal Lahir').value;
    let pesan = document.getElementById('message').value;

    if (nama === '' || tanggalLahir === '' || pesan === '') {
        alert('Semua bidang harus diisi!');
        return false;
    }

    // Regular expression for date format (yyyy-mm-dd)
    let dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(tanggalLahir)) {
        alert('Format tanggal lahir harus yyyy-mm-dd!');
        return false;
    }

    // Tambahkan data ke tabel proyek
    tambahBarisKeTabel(nama, tanggalLahir, pesan);

    // Tampilkan pesan konfirmasi dan scroll ke project-2
    alert('Form berhasil dikirim! Anda akan diarahkan ke Proyek 2.');
    document.getElementById('project-2-details').scrollIntoView({
        behavior: 'smooth'
    });

    // Reset formulir setelah data ditambahkan
    document.getElementById('messageForm').reset();
});
