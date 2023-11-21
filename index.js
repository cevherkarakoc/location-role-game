const locationImg = document.querySelector("#location-img");
const locationText = document.querySelector("#location-text");
const roleText = document.querySelector("#role-text");
const rollButton = document.querySelector("#roll-button");

const locations = [
  {
    title: "Uçak",
    img: "airplane.jpg",
    roles: [
      "Pilot",
      "Hostes",
      "Ekonomi Sınıfı Yolcu",
      "Birinci Sınıf Yolcu",
      "Özel Uçuş Polisi",
    ],
  },
  {
    title: "Banka",
    img: "bank.jpg",
    roles: ["Müdür", "Gişe Memuru", "Müşteri", "Güvenlik", "Hırsız"],
  },
  {
    title: "Plaj",
    img: "beach.jpg",
    roles: ["Cankurtaran", "Tatilci", "Dondurmacı", "Sörfçü", "Fotoğrafçı"],
  },
  {
    title: "Sirk",
    img: "circus.jpg",
    roles: [
      "Akrobat",
      "Hayvan Terbiyecisi",
      "Sihirbaz",
      "Palyaço",
      "Jonglör",
      "Ziyaretçi",
    ],
  },
  {
    title: "Hastane",
    img: "hospital.jpg",
    roles: [
      "Doktor",
      "Hemşire",
      "Stajer",
      "Hasta Bakıcı",
      "Cerrah",
      "Hasta",
      "Refakatçi",
    ],
  },
  {
    title: "Otel",
    img: "hotel.jpg",
    roles: [
      "Müdür",
      "Aşçı",
      "Garson",
      "Resepsiyonist",
      "Komi",
      "Oda Temizlikçisi",
      "Konuk",
    ],
  },
  {
    title: "Kışla",
    img: "military.jpg",
    roles: [
      "Albay",
      "Uzun Dönem Er",
      "Bedelli Er",
      "Keskin Nişancı",
      "Tank Sürücüsü",
    ],
  },
  {
    title: "Tren",
    img: "train.jpg",
    roles: ["Makinist", "Kondüktör", "Yolcu", "Stroker"],
  },
  {
    title: "Korsan Gemisi",
    img: "pirate.jpg",
    roles: ["Kaptan", "Topçu", "Gözcü", "Aşçı", "Köle", "Tayfa", "Doktor"],
  },
  {
    title: "Polis Karakolu",
    img: "police.jpg",
    roles: [
      "Emniyet Amiri",
      "Başkomiser",
      "Polis Memuru",
      "Avukat",
      "Gazeteci",
      "Suçlu",
    ],
  },
  {
    title: "Restoran",
    img: "restaurant.jpg",
    roles: [
      "Müdür",
      "Aşçıbaşı",
      "Aşçı",
      "Şef Garson",
      "Garson",
      "Müşteri",
      "Gurme Eleştirmen",
    ],
  },
  {
    title: "Okul",
    img: "school.jpg",
    roles: [
      "Müdür",
      "Müdür Yardımcısı",
      "Öğretmen",
      "Matematik Öğretmeni",
      "Edebiyat Öğretmen",
      "Beden Öğretmeni",
      "Hademe",
      "Öğrenci",
      "Kantinci",
    ],
  },
  {
    title: "Denizaltı",
    img: "submarine.jpg",
    roles: ["Amiral", "Aşçı", "Teknisyen", "Muhabereci", "Dümenci", "Denizci"],
  },
  {
    title: "Market",
    img: "supermarket.jpg",
    roles: ["Müdür", "Kasiyer", "Kasap", "Temilikçi", "Müşteri"],
  },
  {
    title: "Tiyatro",
    img: "theater.jpg",
    roles: ["Biletçi", "Vestiyer", "Oyuncu", "Yönetmen", "Seyirci"],
  },
  {
    title: "Üniversite",
    img: "university.jpg",
    roles: [
      "Lisans Öğrencisi",
      "Doktora Öğrencisi",
      "Profesör",
      "Dekan",
      "Hademe",
    ],
  },
  {
    title: "Uzay İstasyonu",
    img: "space.jpg",
    roles: ["Mühendis", "Uzaylı", "Uzay Turisti", "Astronot", "Doktor"],
  },
  {
    title: "Hapishane",
    img: "prison.jpg",
    roles: ["Müdür", "Gardiyan", "Mahkum", "Ziyaretçi", "Avukat"],
  },
  {
    title: "Kütüphane",
    img: "library.jpg",
    roles: ["Yazar", "Öğrenci", "Kütüphaneci", "Kitap Kurdu", "Çokbilmiş"],
  },
  {
    title: "Düğün",
    img: "wedding.jpg",
    roles: [
      "Damat",
      "Gelin",
      "Gelinin Babası",
      "Sağdıç",
      "Akraba",
      "Gelinin Eski Sevgilisi",
    ],
  },
  {
    title: "Hayvanat Bahçesi",
    img: "zoo.jpg",
    roles: ["Müdür", "Hayvan Bakıcısı", "Ziyaretçi", "Çocuk", "Maymun"],
  },
  {
    title: "Kömür Madeni",
    img: "coal.jpg",
    roles: [
      "Yönetici",
      "Madenci",
      "Patlayıcı Mühendisi",
      "Denetmen",
      "Kamyon Sürücüsü",
    ],
  },
  {
    title: "Benzin İstasyonu",
    img: "gas.jpg",
    roles: ["Müşteri", "Kasiyer", "Müdür", "Pompa Görevlisi"],
  },
  {
    title: "Huzurevi",
    img: "nursing.jpg",
    roles: ["Akraba", "Hemşire", "Psikolog", "Yaşlı"],
  },
];

const limit = locations.length;
console.log(limit);

function roll() {
  const locationIndex = Math.floor(Math.random() * limit);
  const location = locations[locationIndex];

  const roleLimit = location.roles.length;
  const roleIndex = Math.floor(Math.random() * roleLimit);
  const role = location.roles[roleIndex];

  locationImg.src = `./images/${location.img}`;
  locationText.textContent = location.title;
  roleText.textContent = role;
}

roll();

rollButton.addEventListener("click", roll);
