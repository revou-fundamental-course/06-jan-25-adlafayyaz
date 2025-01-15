// Fungsi input nama
function nameInput() {
    var userName = prompt("Please enter your name:");
    var nameSpan = document.getElementById("user-greeting");
    if (userName) {
        nameSpan.innerHTML = userName;
    } else {
        nameSpan.innerHTML = "User";
    }
}

window.onload = nameInput;

// Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const totalSlides = slides.length;

// Fungsi untuk memperbarui tampilan slide
function updateSlide() {
    const slideWidth = slides[0].offsetWidth;
    const newTransformValue = -currentSlide * slideWidth;
    document.querySelector('.slider').style.transform = `translateX(${newTransformValue}px)`;
}

// Fungsi untuk tombol previous
prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
});

// Fungsi untuk tombol next
nextButton.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlide();
    }
});

// Fungsi untuk slider otomatis
function autoSlide() {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides; // Beralih ke slide berikutnya
        updateSlide();
    }, 3000); // Interval 3 detik
}

// Menampilkan slider pertama
updateSlide();
autoSlide();

// Navigasi Menu
const navLinks = document.querySelectorAll('header nav ul li a');

// Menambahkan fungsi scroll untuk setiap link di menu
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah reload halaman saat klik

        const targetId = event.target.getAttribute('href').substring(1); // Ambil ID target
        const targetSection = document.getElementById(targetId);

        // Jika target ditemukan, scroll ke bagian tersebut
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Efek scroll halus
                block: 'start' // Posisi scroll di bagian atas section
            });
        }
    });
});

// Form Validation and Preview
const form = document.getElementById('userForm');
const previewName = document.getElementById('sender-full-name');
const previewBirthdate = document.getElementById('sender-birth-date');
const previewGender = document.getElementById('sender-gender');
const previewMessage = document.getElementById('sender-messages');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah form untuk disubmit secara default

    // Ambil data dari form
    const name = document.getElementById('sender-name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const message = document.getElementById('message-content').value;

    // Perbarui pratinjau
    previewName.textContent = name || 'Tidak ada nama yang dimasukkan';
    previewBirthdate.textContent = birthdate || 'Tidak ada tanggal lahir yang dimasukkan';
    previewGender.textContent = gender ? (gender === 'male' ? 'Male' : 'Female') : 'Tidak ada jenis kelamin yang dipilih';
    previewMessage.textContent = message || 'Tidak ada pesan yang dimasukkan';
});
