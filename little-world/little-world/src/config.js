// ✏️ SEMUA ISI WEBSITE BISA DIEDIT DI FILE INI.
// Foto: taruh di public/assets/images/ lalu ubah "src" di bawah.
export const config = {
  girlfriend: { name: "Ezi Dhia Latifah", nickname: "Sayangkuuu" },
  me: "Muhammad Rakha",
  birthday: "1997-11-05",
  anniversary: "2025-08-23",
  from: "Tambun",
  to: "Dumai",
  music: "assets/music.mp3",
  openingPhoto: "assets/images/opening.jpg",
  finalPhoto: "assets/images/photo-02.jpg",

  // Game: answer = nomor opsi yang benar (mulai dari 0). answer: null = semua jawaban dianggap benar (manis).
  quiz: [
    { q: "When did our beautiful story officially begin?",
      options: ["23 Agustus 2025", "13 Agustus 2025", "23 Juli 2025", "3 September 2025"], answer: 0,
      right: "Yesss! 23 Agustus 2025 — the day we became us 💙", wrong: ["Hmm… that's not it, baby 🥺 Coba lagi ya!", "Ihh kok lupa sih? 😝 Try again!"] },
    { q: "Who fell in love first?",
      options: ["Me 🙋‍♂️", "You 🙋‍♀️", "Both at the same time", "Nobody, destiny did it"], answer: 0,
      right: "Correct! I fell first… and I'm still falling 💗", wrong: ["Hmm, ngaku dulu deh 😆 Coba lagi!", "Salah dong! Pikir lagi, sayang 🤭"] },
    { q: "What is our sweetest memory?",
      options: ["Our first chat", "Every late-night call", "The day we became official", "All of them, honestly"], answer: null,
      right: "Every one of them is the sweetest to me 💞" },
    { q: "What is my favorite thing about you?",
      options: ["Your smile", "Your kindness", "The way you laugh", "Everything about you"], answer: null,
      right: "Aww… the truth is, it's all of it 🥹" },
    { q: "Which moment do we wish we could repeat?",
      options: ["Our first conversation", "The day we became us", "Every happy call", "The day we finally meet"], answer: null,
      right: "And someday soon, we'll make new ones — together 🤍" },
  ],

  // Foto: 15 slot. Foto yang belum ada otomatis tampil sebagai placeholder.
  photos: [
    { src: "assets/images/opening.jpg", caption: "My favorite smile." },
    { src: "assets/images/photo-02.jpg", caption: "One of my happiest moments." },
    { src: "assets/images/photo-03.jpg", caption: "Me, always thinking of you." },
    { src: "assets/images/photo-04.jpg", caption: "I wish this moment could last forever." },
    { src: "assets/images/photo-05.jpg", caption: "Another beautiful memory with you." },
    { src: "assets/images/photo-06.jpg", caption: "My favorite person, always." },
    { src: "assets/images/photo-07.jpg", caption: "You make ordinary days magical." },
    { src: "assets/images/photo-08.jpg", caption: "That smile, again. I can't help it." },
    { src: "assets/images/photo-09.jpg", caption: "Small moments, big happiness." },
    { src: "assets/images/photo-10.jpg", caption: "Us, in my favorite memory." },
    { src: "assets/images/photo-11.jpg", caption: "Home is wherever you are." },
    { src: "assets/images/photo-12.jpg", caption: "Pretty, even from far away." },
    { src: "assets/images/photo-13.jpg", caption: "A day I'd replay forever." },
    { src: "assets/images/photo-14.jpg", caption: "You, the best part of my days." },
    { src: "assets/images/photo-15.jpg", caption: "Still choosing you. Always." },
  ],

  timeline: [
    { title: "The Day We First Met", date: "Tanggal pertama kali kenal", photo: "", text: "Ceritakan di sini bagaimana kita pertama bertemu. (Edit di config.js)" },
    { title: "Our First Conversation", date: "Tanggal obrolan pertama", photo: "", text: "Obrolan pertama yang diam-diam bikin aku senyum-senyum sendiri." },
    { title: "The Day We Became Us", date: "23 Agustus 2025", photo: "", text: "Hari ketika 'aku' dan 'kamu' resmi menjadi 'kita'." },
    { title: "Our Favorite Memories", date: "2025 – 2026", photo: "", text: "Tawa, cerita, dan momen kecil yang selalu aku simpan." },
    { title: "Our Long Distance Journey", date: "Tambun ↔ Dumai", photo: "", text: "Jauh di peta, tapi tidak pernah jauh di hati." },
    { title: "Your Special Birthday", date: "5 November", photo: "", text: "Hari spesial milik perempuan paling spesial dalam hidupku." },
  ],

  // ⚠️ Isi surat — JANGAN diubah. Setiap item = 1 paragraf.
  letter: [
    "Happy Birthday, sayangku! ❤️",
    "Selamat bertambah usia, perempuan paling spesial dalam hidup aku. Di hari istimewamu ini, aku berharap semoga setiap langkahmu selalu dipenuhi hal-hal baik, segala doa yang kamu panjatkan satu per satu bisa menjadi kenyataan, dan semoga kebahagiaan selalu menyertai setiap harimu.",
    "Maaf ya, sayang, karena sampai hari ini jarak masih menjadi bagian dari cerita kita. Aku belum bisa selalu ada di sampingmu, belum bisa memberikan pelukan secara langsung, atau melihat senyummu tepat di hari spesialmu. Ada banyak hal yang sebenarnya ingin aku lakukan untuk membuat hari ini lebih berkesan buat kamu, tetapi untuk sekarang aku hanya bisa mengirimkan sedikit kebahagiaan dari kejauhan.",
    "Walaupun kita dipisahkan oleh jarak, semoga kamu tidak pernah merasa sendirian. Ada seseorang di sini yang selalu mendoakanmu, menginginkan yang terbaik untukmu, dan berharap bisa terus melihatmu tumbuh menjadi perempuan yang semakin hebat.",
    "Terima kasih sudah bertahan sejauh ini, sudah menjadi bagian dari hari-hari aku, dan sudah memberikan banyak warna dalam hidupku. Semoga di usia yang baru ini kamu semakin bahagia, semakin kuat, semakin dewasa, dan selalu dikelilingi orang-orang yang menyayangimu.",
    "Aku punya satu harapan sederhana, semoga di ulang tahunmu berikutnya, aku tidak lagi hanya bisa mengucapkan selamat lewat layar, tetapi bisa berdiri tepat di hadapanmu, memberikan bunga ini secara langsung, memelukmu, dan merayakan hari spesialmu bersama.",
    "Enjoy your special day, my love. Jangan lupa bahagia, jangan terlalu keras sama diri sendiri, dan tetap jadi perempuan luar biasa yang aku kenal.",
    "I love you, more than distance could ever explain. ❤️",
    "With love,\nSomeone who always misses you.",
  ],
};
