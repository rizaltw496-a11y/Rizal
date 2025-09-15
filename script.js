document.addEventListener('DOMContentLoaded', () => {
    const heartContainer = document.querySelector('.heart-container');
    const messageContainer = document.querySelector('.message-container');
    const messageText = document.querySelector('.message-text');
    const additionalText = document.querySelector('.additional-text');
    const playButton = document.getElementById('playButton');
    const fireworksContainer = document.querySelector('.fireworks-container');
    const audio = document.getElementById('myAudio');

    const hearts = [];
    const points = 50;

    // Tampilkan tombol "Play" langsung saat halaman dimuat
    playButton.classList.add('show');

    // Tambahkan event listener untuk tombol
    playButton.addEventListener('click', () => {
        // Sembunyikan tombol setelah diklik
        playButton.classList.remove('show');
        
        // Putar musik
        playAudio();
        
        // Mulai animasi hati setelah tombol diklik
        startHeartAnimation();
    });

    function startHeartAnimation() {
        // Koordinat untuk membentuk hati besar
        for (let i = 0; i < points; i++) {
            const t = (i / points) * Math.PI * 2;
            const x = 16 * Math.sin(t) ** 3;
            const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `calc(50% + ${x * 10}px)`;
            heart.style.top = `calc(50% + ${-y * 10}px)`;
            hearts.push(heart);
            heartContainer.appendChild(heart);
        }
    
        // Fungsi untuk menampilkan hati satu per satu
        let heartIndex = 0;
        const interval = setInterval(() => {
            if (heartIndex < hearts.length) {
                hearts[heartIndex].classList.add('animate');
                heartIndex++;
            } else {
                clearInterval(interval);
                // Setelah animasi hati selesai, tampilkan pesan dan kembang api
                showEndMessages();
            }
        }, 100);
    }

    // Fungsi untuk menampilkan pesan akhir dan kembang api
    function showEndMessages() {
        setTimeout(() => {
            messageText.innerHTML = 'selamat ulang tahun claraa cantikk 🌹♥️';
            messageContainer.classList.add('show');
            
            setTimeout(() => {
                additionalText.innerHTML = 'haiii clara cantik❣️ selamat ulang tahun untuk tahun ini cantik🥳🎉,semoga clara gak sering banget ngambeknya, soalnya kalau ngambek lama banget❤️dan juga kurangin makan manis & pedas nya😁';
                additionalText.classList.add('show');
                fireworksContainer.classList.add('show');
                createFireworks();
            }, 1000);
        }, 1000);
    }
    
    // Fungsi untuk memutar lagu
    function playAudio() {
        audio.volume = 0.5;
        audio.play().catch(error => {
            console.error("Audio playback failed:", error);
        });
    }

    // Fungsi untuk membuat kembang api (sederhana)
    function createFireworks() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const firework = document.createElement('div');
                firework.classList.add('firework');
                firework.style.left = `${Math.random() * 100}%`;
                firework.style.top = `${Math.random() * 100}%`;
                fireworksContainer.appendChild(firework);
                setTimeout(() => firework.remove(), 1000);
            }, i * 200);
        }
    }
});
