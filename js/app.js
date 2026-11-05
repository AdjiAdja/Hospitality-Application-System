(function () {
      // ==========================================
      // 1. REALISTIC SEED DATA (5 PROPERTIES, ROOM UNITS, REVIEWS)
      // ==========================================
      const IMG_HERO = "assets/img/hero.jpg";
      const IMG_SUITE = "assets/img/suite.jpg";
      const IMG_VILLA = "assets/img/villa.jpg";
      const IMG_HERITAGE = "assets/img/heritage.jpg";

      const state = {
        brandName: "NusaLodge",
        businessMode: "marketplace", // marketplace | chain | single
        theme: "emerald",
        lang: "id",
        activeTab: "explore",
        selectedLocation: "all",
        checkInDate: "2026-11-12",
        nights: 2,
        sortBy: "recommended",
        activeFilters: new Set(),
        selectedPropertyId: "prop-1",
        selectedRoomUnitId: "unit-204",
        reviewProfileFilter: "all",
        reviewSort: "newest",
        idVaultPurged: false,
        idRetentionPolicy: "24 Jam setelah Check-Out",
        hotelConsents: [
          { id: "prop-1", name: "Merapi Heritage Sanctuary Yogyakarta", allowed: true, updatedAt: "05 Nov 2026, 19:30 WIB" },
          { id: "prop-2", name: "Ubud Canopy Wellness Resort Bali", allowed: true, updatedAt: "01 Nov 2026, 14:15 WIB" },
          { id: "prop-3", name: "Braga Art & WFA Boutique Hotel Bandung", allowed: false, updatedAt: "Dicabut 28 Okt 2026" }
        ],
        reservations: [
          {
            code: "NL-YGY-8842",
            propertyId: "prop-1",
            propertyName: "Merapi Heritage Sanctuary Yogyakarta",
            location: "Sleman, Yogyakarta",
            roomNumber: "#204 (Deluxe Garden Suite)",
            roomSpec: "Lantai 2 · 6m dari Lift · 30 dB Tenang · WiFi 148 Mbps",
            checkIn: "2026-11-12",
            nights: 2,
            totalAllIn: 1700000,
            baseRateTotal: 1404958,
            serviceFeeTotal: 140496,
            taxTotal: 154546,
            paymentMethod: "QRIS Instan",
            pmsStatus: "CONFIRMED", // CONFIRMED | NOT_FOUND_RELOCATED
            pmsAdapterName: "CloudPMS Adapter v2.4 (Sinkron Real-Time)",
            status: "ACTIVE", // ACTIVE | CANCELLED
            refundStage: 0, // 0: none, 1: Diajukan, 2: Diproses Gateway, 3: Dikembalikan
            relocationInfo: null,
            timelineLog: [
              "05 Nov 2026 18:10 — Pembayaran QRIS Rp1.700.000 diterima (Harga All-In terkunci).",
              "05 Nov 2026 18:10 — Kode verifikasi resepsionis #NL-YGY-8842 dikonfirmasi oleh PMS Hotel."
            ]
          },
          {
            code: "NL-BLI-5190",
            propertyId: "prop-2",
            propertyName: "Ubud Canopy Wellness Resort Bali",
            location: "Ubud, Bali",
            roomNumber: "#102 (Accessible Pool Villa)",
            roomSpec: "Lantai Dasar Tanpa Tangga · Pintu 95cm · 28 dB · WiFi 165 Mbps",
            checkIn: "2026-12-01",
            nights: 2,
            totalAllIn: 2400000,
            baseRateTotal: 1983471,
            serviceFeeTotal: 198347,
            taxTotal: 218182,
            paymentMethod: "Virtual Account BCA",
            pmsStatus: "CONFIRMED",
            pmsAdapterName: "OperaPMS Sandbox Adapter",
            status: "CANCELLED",
            refundStage: 3,
            relocationInfo: null,
            timelineLog: [
              "01 Nov 2026 09:15 — Reservasi dibuat (Rp2.400.000 All-In).",
              "03 Nov 2026 14:00 — Pembatalan 1-Ketukan diajukan tamu (Masih dalam periode Refund 100%).",
              "03 Nov 2026 14:02 — Gateway memproses pengembalian dana penuh Rp2.400.000.",
              "03 Nov 2026 14:08 — Dana Rp2.400.000 telah masuk kembali ke rekening BCA tamu."
            ]
          }
        ]
      };

      const properties = [
        {
          id: "prop-1",
          name: "Merapi Heritage Sanctuary Yogyakarta",
          city: "Yogyakarta",
          typeLabel: "Boutique Resort & Heritage",
          image: IMG_HERITAGE,
          allInPricePerNight: 850000,
          basePrice: 702479,
          serviceFee: 70248,
          taxFee: 77273,
          priceHistory30d: [860000, 850000, 850000, 875000, 850000, 850000, 850000],
          verifiedScore: 4.9,
          completedStaysCount: 342,
          airportTime: "35 menit dari Bandara YIA (via Kereta Bandara) / 18 menit dari Stasiun Tugu",
          surroundings: "RS Panti Rapih (8 mnt) · Masjid Kampus UGM (6 mnt) · Kuliner Gudeg & Kopi Lokal (jalan kaki 3 mnt)",
          badges: ["wheelchair", "halal", "musala", "kidFriendly", "fastWifi"],
          accessibilityDetails: "Jalur landai tanpa tangga (ramp 1:12), lebar pintu kamar 92 cm, kamar mandi dengan grab bar & kursi mandi lipat.",
          halalDetails: "Restoran bersertifikat Halal MUI, dapur terpisah, arah kiblat terkalibrasi, sajadah & Al-Qur'an di tiap kamar.",
          rooms: [
            {
              id: "unit-204",
              number: "#204",
              type: "Deluxe Garden Work Suite",
              image: IMG_SUITE,
              floor: "Lantai 2 (Akses Lift Besar)",
              distanceToLift: "6 meter dari lift",
              view: "Taman Tropis & Kolam Koi",
              noiseDb: 30,
              noiseLabel: "30 dB (Sangat Tenang)",
              wifiDown: 148,
              wifiUp: 95,
              wifiTestedAt: "Hari ini, 08:30 WIB",
              bed: "1 King Bed + Meja Kerja Ergonomis",
              allInNight: 850000
            },
            {
              id: "unit-101",
              number: "#101",
              type: "Accessible Ground Courtyard Suite",
              image: IMG_HERITAGE,
              floor: "Lantai 1 (Tanpa Tangga / Step-Free)",
              distanceToLift: "Lantai Dasar (0m dari jalur kursi roda)",
              view: "Teras Pendopo & Taman",
              noiseDb: 32,
              noiseLabel: "32 dB (Tenang)",
              wifiDown: 135,
              wifiUp: 88,
              wifiTestedAt: "Hari ini, 08:35 WIB",
              bed: "2 Queen Bed + Kamar Mandi Kursi Roda (Pintu 94cm)",
              allInNight: 850000
            },
            {
              id: "unit-308",
              number: "#308",
              type: "Panoramic Merapi Corner Suite",
              image: IMG_SUITE,
              floor: "Lantai 3 (Sudut Privasi Tinggi)",
              distanceToLift: "18 meter dari lift",
              view: "Pemandangan Gunung Merapi",
              noiseDb: 27,
              noiseLabel: "27 dB (Kedap Suara Ekstra)",
              wifiDown: 162,
              wifiUp: 110,
              wifiTestedAt: "Hari ini, 08:40 WIB",
              bed: "1 King Bed + Balkon Pengaman Anak",
              allInNight: 950000
            }
          ],
          reviews: [
            {
              id: "rev-1",
              guestName: "Rina Kusuma",
              profile: "Keluarga dengan Anak",
              stayDate: "28 Okt 2026",
              resCode: "NL-YGY-7102",
              rating: 5.0,
              comment: "Harga di halaman depan Rp850.000/malam dan saat bayar QRIS tetap persis Rp850.000 tanpa biaya siluman. Kamar #101 ramah stroller dan anak-anak senang kolam ikan koi."
            },
            {
              id: "rev-2",
              guestName: "Dimas Prakoso",
              profile: "Pekerja Jarak Jauh (WFA)",
              stayDate: "21 Okt 2026",
              resCode: "NL-YGY-6890",
              rating: 4.8,
              comment: "Pilih Kamar #204 karena ada info tes WiFi 148 Mbps dan meja kerja ergonomis. Dipakai zoom call seharian stabil tanpa putus, suara sekitar benar-benar sunyi (sekitar 30 dB)."
            },
            {
              id: "rev-3",
              guestName: "H. Ahmad Fauzi",
              profile: "Wisatawan Lansia",
              stayDate: "15 Okt 2026",
              resCode: "NL-YGY-6411",
              rating: 4.7,
              comment: "Jarak kamar #204 ke lift benar-benar hanya 6 meter sesuai deskripsi, sangat membantu lutut saya. Musala bersih dan makanan sarapan halal semua. Hanya air hangat butuh 15 detik untuk stabil."
            },
            {
              id: "rev-4",
              guestName: "Sinta Maharani",
              profile: "Kebutuhan Aksesibilitas / Difabel",
              stayDate: "04 Okt 2026",
              resCode: "NL-YGY-5920",
              rating: 5.0,
              comment: "Informasi lebar pintu 94 cm dan grab bar kamar mandi di Kamar #101 akurat 100%. Kursi roda saya masuk leluasa tanpa hambatan tangga sedikit pun."
            }
          ]
        },
        {
          id: "prop-2",
          name: "Ubud Canopy Wellness Resort Bali",
          city: "Bali",
          typeLabel: "Eco-Luxury Villa & Resort",
          image: IMG_VILLA,
          allInPricePerNight: 1200000,
          basePrice: 991736,
          serviceFee: 99174,
          taxFee: 109090,
          priceHistory30d: [1250000, 1200000, 1200000, 1200000, 1200000, 1200000, 1200000],
          verifiedScore: 4.9,
          completedStaysCount: 289,
          airportTime: "65 menit dari Bandara I Gusti Ngurah Rai · 10 menit ke Pusat Ubud",
          surroundings: "Klinik Ubud Care (7 mnt) · Sawah Kajeng & Jalur Jalan Pagi (2 mnt) · Restoran Halal & Vegan (4 mnt)",
          badges: ["wheelchair", "halal", "musala", "kidFriendly", "petFriendly", "fastWifi"],
          accessibilityDetails: "Dek kayu rata tanpa undakan (step-free deck), lebar pintu geser 105 cm, kolam renang dengan pegangan tangga landai.",
          halalDetails: "Tersedia dapur halal terverifikasi, peralatan makan khusus, dan perlengkapan ibadah lengkap di vila.",
          rooms: [
            {
              id: "unit-102",
              number: "#102",
              type: "Step-Free Private Pool Villa",
              image: IMG_VILLA,
              floor: "Lantai Dasar (Akses Dek Rata)",
              distanceToLift: "Akses langsung buggy & kursi roda",
              view: "Lembah Tropis & Private Plunge Pool",
              noiseDb: 28,
              noiseLabel: "28 dB (Hening Alam)",
              wifiDown: 165,
              wifiUp: 120,
              wifiTestedAt: "Hari ini, 09:00 WIB",
              bed: "1 Super King Bed + Pagar Pengaman Kolam Anak",
              allInNight: 1200000
            },
            {
              id: "unit-105",
              number: "#105",
              type: "Pet-Friendly Garden Sanctuary Suite",
              image: IMG_HERO,
              floor: "Lantai Dasar (Halaman Pribadi Berpagar)",
              distanceToLift: "4 meter dari lobi",
              view: "Taman Pribadi Ramah Hewan",
              noiseDb: 31,
              noiseLabel: "31 dB (Tenang)",
              wifiDown: 140,
              wifiUp: 90,
              wifiTestedAt: "Hari ini, 09:10 WIB",
              bed: "1 King Bed + Tempat Tidur & Makan Hewan Peliharaan",
              allInNight: 1200000
            }
          ],
          reviews: [
            {
              id: "rev-201",
              guestName: "Kevin Wijaya",
              profile: "Keluarga dengan Anak",
              stayDate: "30 Okt 2026",
              resCode: "NL-BLI-4910",
              rating: 5.0,
              comment: "Vila #102 menyediakan pagar pengaman kolam renang gratis untuk balita kami dan area dek rata tanpa tangga. Tidak ada resort fee tersembunyi saat check-out."
            }
          ]
        },
        {
          id: "prop-3",
          name: "Braga Art & WFA Boutique Hotel Bandung",
          city: "Bandung",
          typeLabel: "Urban Boutique & Co-Living Hotel",
          image: IMG_SUITE,
          allInPricePerNight: 650000,
          basePrice: 537190,
          serviceFee: 53719,
          taxFee: 59091,
          priceHistory30d: [650000, 650000, 680000, 650000, 650000, 650000, 650000],
          verifiedScore: 4.8,
          completedStaysCount: 418,
          airportTime: "8 menit dari Stasiun Bandung · 20 menit dari Stasiun Kereta Cepat Padalarang/Tegalluar",
          surroundings: "RS Borromeus (10 mnt) · Masjid Raya Bandung (7 mnt) · Kawasan Kuliner Jalan Braga (jalan kaki 2 mnt)",
          badges: ["halal", "musala", "fastWifi", "wheelchair"],
          accessibilityDetails: "Lift berkapasitas kursi roda dengan tombol Braille, pintu kamar 90 cm, dan kamar mandi ramah lansia.",
          halalDetails: "Sarapan 100% Halal bersertifikat, musala luas di lantai 1 dengan tempat wudu ramah lansia.",
          rooms: [
            {
              id: "unit-410",
              number: "#410",
              type: "Executive WFA Studio (Dual Monitor Ready)",
              image: IMG_SUITE,
              floor: "Lantai 4",
              distanceToLift: "5 meter dari lift",
              view: "Taman Dalam & Kota Bandung",
              noiseDb: 29,
              noiseLabel: "29 dB (Kaca Double-Glazed Kedap Suara)",
              wifiDown: 210,
              wifiUp: 150,
              wifiTestedAt: "Hari ini, 07:55 WIB",
              bed: "1 Queen Bed + Kursi Kerja Ergonomis + Monitor Eksternal",
              allInNight: 650000
            }
          ],
          reviews: [
            {
              id: "rev-301",
              guestName: "Nadia Putri",
              profile: "Pekerja Jarak Jauh (WFA)",
              stayDate: "01 Nov 2026",
              resCode: "NL-BDG-3312",
              rating: 4.9,
              comment: "Kamar #410 benar-benar surga remote worker. Kecepatan WiFi tembus 210 Mbps dan kaca kedap suara membuat suara jalanan tidak terdengar sama sekali."
            }
          ]
        },
        {
          id: "prop-4",
          name: "Prawirotaman Green Syariah Guesthouse",
          city: "Yogyakarta",
          typeLabel: "Penginapan Ramah Muslim & Keluarga",
          image: IMG_HERITAGE,
          allInPricePerNight: 480000,
          basePrice: 396694,
          serviceFee: 39669,
          taxFee: 43637,
          priceHistory30d: [480000, 480000, 480000, 480000, 480000, 480000, 480000],
          verifiedScore: 4.8,
          completedStaysCount: 195,
          airportTime: "12 menit dari Stasiun Lempuyangan · 15 menit dari Keraton Yogyakarta",
          surroundings: "Masjid Jogokariyan (5 mnt) · RS Pratama (4 mnt) · Pasar Prawirotaman & Apotek 24 Jam (jalan kaki 2 mnt)",
          badges: ["halal", "musala", "kidFriendly", "fastWifi"],
          accessibilityDetails: "Tersedia 4 kamar lantai dasar dekat taman tanpa tangga.",
          halalDetails: "Dapur & katering 100% Halal, musala taman dengan kajian akhir pekan, keran wudu ergonomis untuk lansia.",
          rooms: [
            {
              id: "unit-104",
              number: "#104",
              type: "Family Courtyard Room",
              image: IMG_HERITAGE,
              floor: "Lantai 1 (Depan Taman)",
              distanceToLift: "Lantai Dasar (Tanpa Lift/Tangga)",
              view: "Kolam & Pendopo Kayu",
              noiseDb: 31,
              noiseLabel: "31 dB (Tenang)",
              wifiDown: 115,
              wifiUp: 75,
              wifiTestedAt: "Hari ini, 08:15 WIB",
              bed: "1 King Bed + 1 Single Bed + Sajadah & Al-Qur'an",
              allInNight: 480000
            }
          ],
          reviews: [
            {
              id: "rev-401",
              guestName: "Keluarga Hendra",
              profile: "Wisatawan Muslim",
              stayDate: "25 Okt 2026",
              resCode: "NL-YGY-4418",
              rating: 4.9,
              comment: "Penginapan sangat bersih, jujur, dan check-in lewat link WhatsApp langsung dapat PIN kamar tanpa harus antre lama."
            }
          ]
        },
        {
          id: "prop-5",
          name: "Nusa Dua Senior & Family Beachfront Resort",
          city: "Bali",
          typeLabel: "Resort Pantai Aksesibel Penuh",
          image: IMG_HERO,
          allInPricePerNight: 1450000,
          basePrice: 1198347,
          serviceFee: 119835,
          taxFee: 131818,
          priceHistory30d: [1450000, 1450000, 1450000, 1450000, 1450000, 1450000, 1450000],
          verifiedScore: 4.9,
          completedStaysCount: 512,
          airportTime: "20 menit dari Bandara Ngurah Rai lewat Tol Bali Mandara",
          surroundings: "RS BIMC Nusa Dua (4 mnt) · Jalur Trotoar Pantai Rata Kursi Roda (1 mnt) · Pusat Kuliner Halal Bali Collection (5 mnt)",
          badges: ["wheelchair", "halal", "musala", "kidFriendly", "petFriendly", "fastWifi"],
          accessibilityDetails: "Akses kursi roda sampai ke tepi pantai, lift besar di semua gedung, tombol panggil darurat medis di kamar mandi.",
          halalDetails: "Sertifikasi Halal penuh pada restoran utama dan layanan kamar 24 jam.",
          rooms: [
            {
              id: "unit-112",
              number: "#112",
              type: "Premier Senior-Friendly Ocean Suite",
              image: IMG_HERO,
              floor: "Lantai 1 (Akses Taman & Pantai Tanpa Tangga)",
              distanceToLift: "3 meter dari lobi utama",
              view: "Pantai Nusa Dua & Kolam Utama",
              noiseDb: 29,
              noiseLabel: "29 dB (Sangat Tenang)",
              wifiDown: 180,
              wifiUp: 130,
              wifiTestedAt: "Hari ini, 08:05 WIB",
              bed: "2 Queen Bed Rendah Ramah Lansia + Grab Bar Lengkap",
              allInNight: 1450000
            }
          ],
          reviews: [
            {
              id: "rev-501",
              guestName: "dr. Lestari Gunawan",
              profile: "Wisatawan Lansia",
              stayDate: "29 Okt 2026",
              resCode: "NL-BLI-8801",
              rating: 5.0,
              comment: "Mengajak orang tua usia 78 tahun menginap di Kamar #112 sangat nyaman. Tempat tidur tidak terlalu tinggi, lantai kamar mandi anti-slip, dan akses ke pantai tanpa anak tangga."
            }
          ]
        }
      ];

      // ==========================================
      // 2. HELPER UTILITIES
      // ==========================================
      function formatRupiah(num) {
        return "Rp" + Number(num).toLocaleString("id-ID");
      }

      function showToast(msg) {
        const toast = document.getElementById("toast-container");
        const text = document.getElementById("toast-message");
        if (!toast || !text) return;
        text.textContent = msg;
        toast.classList.remove("hidden");
        if (window._toastTimer) clearTimeout(window._toastTimer);
        window._toastTimer = setTimeout(() => {
          toast.classList.add("hidden");
        }, 3800);
      }

      function switchTab(tabId) {
        state.activeTab = tabId;
        const tabs = ["explore", "bookings", "stay", "preferences", "checklist", "dashboard"];
        tabs.forEach((t) => {
          const section = document.getElementById("view-" + t);
          if (section) {
            section.classList.toggle("hidden", t !== tabId);
          }
        });
        document.querySelectorAll(".nav-tab-btn").forEach((btn) => {
          const isCurrent = btn.getAttribute("data-tab") === tabId;
          btn.className = isCurrent
            ? "nav-tab-btn px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-brand-dynamic text-white transition whitespace-nowrap flex items-center gap-1.5"
            : "nav-tab-btn px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 transition whitespace-nowrap flex items-center gap-1.5";
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      // ==========================================
      // 3. RENDER PROPERTIES & FILTERS (FEATURES #1, #4, #5, #6, #12)
      // ==========================================
      function getFilteredProperties() {
        let list = properties.slice();
        if (state.businessMode === "single") {
          list = [properties[0]];
        }
        if (state.selectedLocation !== "all") {
          list = list.filter((p) => p.city === state.selectedLocation);
        }
        state.activeFilters.forEach((flt) => {
          if (flt === "fastWifi") {
            list = list.filter((p) => p.rooms.some((r) => r.wifiDown >= 100));
          } else {
            list = list.filter((p) => p.badges.includes(flt));
          }
        });
        if (state.sortBy === "price-asc") {
          list.sort((a, b) => a.allInPricePerNight - b.allInPricePerNight);
        } else if (state.sortBy === "wifi-desc") {
          list.sort((a, b) => b.rooms[0].wifiDown - a.rooms[0].wifiDown);
        } else if (state.sortBy === "quiet-asc") {
          list.sort((a, b) => a.rooms[0].noiseDb - b.rooms[0].noiseDb);
        } else {
          list.sort((a, b) => b.verifiedScore - a.verifiedScore);
        }
        return list;
      }

      function renderProperties() {
        const grid = document.getElementById("properties-grid");
        const summary = document.getElementById("active-filter-summary");
        if (!grid) return;

        const filtered = getFilteredProperties();
        if (summary) {
          summary.textContent = `Menampilkan ${filtered.length} dari ${state.businessMode === "single" ? 1 : properties.length} properti (${state.nights} malam)`;
        }

        if (filtered.length === 0) {
          grid.innerHTML = `
            <div class="col-span-full bg-white rounded-xl p-8 text-center border border-slate-200 space-y-3">
              <p class="text-base font-bold text-slate-800">Tidak ada properti yang cocok dengan kombinasi filter saat ini.</p>
              <p class="text-xs text-slate-600">Coba kurangi salah satu filter kebutuhan khusus atau pilih semua lokasi.</p>
            </div>
          `;
          return;
        }

        const badgeLabels = {
          wheelchair: "♿ Akses Kursi Roda",
          halal: "🍽️ Halal Resmi",
          musala: "🕌 Musala & Kiblat",
          kidFriendly: "👶 Ramah Anak",
          petFriendly: "🐾 Pet-Friendly",
          fastWifi: "💻 WiFi ≥100 Mbps"
        };

        grid.innerHTML = filtered.map((prop) => {
          const totalStay = prop.allInPricePerNight * state.nights;
          const isSelected = prop.id === state.selectedPropertyId;
          const topRoom = prop.rooms[0];

          return `
            <article class="bg-white rounded-2xl border-2 ${isSelected ? 'border-emerald-600 shadow-md' : 'border-slate-200 shadow-xs'} overflow-hidden flex flex-col justify-between transition">
              <div>
                <div class="relative">
                  <img src="${prop.image}" alt="${prop.name}" class="w-full h-52 object-cover max-w-full" />
                  <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-900/90 text-white">
                      ${prop.city} · ${prop.typeLabel}
                    </span>
                    <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-700 text-white">
                      ★ ${prop.verifiedScore} (${prop.completedStaysCount} Menginap Selesai)
                    </span>
                  </div>
                </div>

                <div class="p-5 space-y-3">
                  <div class="flex items-start justify-between gap-2">
                    <h3 class="text-lg font-extrabold text-slate-900 leading-snug">${prop.name}</h3>
                  </div>

                  <!-- Local Context (Feature 12) -->
                  <div class="text-xs text-slate-600 space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <p><strong>✈️ Akses Transportasi:</strong> ${prop.airportTime}</p>
                    <p><strong>🏥 Lingkungan Sekitar:</strong> ${prop.surroundings}</p>
                  </div>

                  <!-- Room-level quick highlight (Feature 4) -->
                  <div class="flex flex-wrap gap-2 text-xs">
                    <span class="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-900 border border-sky-200 font-semibold">
                      📶 WiFi Kamar Teruji: ${topRoom.wifiDown} Mbps
                    </span>
                    <span class="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-900 border border-purple-200 font-semibold">
                      🔇 Kebisingan: ${topRoom.noiseDb} dB
                    </span>
                    <span class="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 font-semibold">
                      🛗 ${topRoom.distanceToLift}
                    </span>
                  </div>

                  <!-- Special needs badges (Feature 6) -->
                  <div class="flex flex-wrap gap-1.5 pt-1">
                    ${prop.badges.map((b) => `
                      <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300">
                        ${badgeLabels[b] || b}
                      </span>
                    `).join("")}
                  </div>
                </div>
              </div>

              <!-- All-In Pricing Footer (Feature 1) -->
              <div class="p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span class="inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    Harga All-In Terkunci (Pajak & Layanan Termasuk)
                  </span>
                  <div class="mt-1 flex items-baseline gap-2">
                    <span class="text-xl font-extrabold text-slate-900">${formatRupiah(prop.allInPricePerNight)}</span>
                    <span class="text-xs text-slate-600">/ malam</span>
                  </div>
                  <p class="text-xs text-slate-600 font-medium">
                    Total ${state.nights} malam: <strong class="text-slate-900">${formatRupiah(totalStay)}</strong> (Dasar ${formatRupiah(prop.basePrice * state.nights)} + Pajak/Layanan ${formatRupiah((prop.serviceFee + prop.taxFee) * state.nights)})
                  </p>
                </div>

                <button type="button" data-inspect-prop="${prop.id}"
                  class="btn-inspect-property px-4 py-2.5 rounded-xl bg-brand-dynamic text-white text-xs font-extrabold shadow-sm transition">
                  Inspeksi Nomor Kamar & Pesan →
                </button>
              </div>
            </article>
          `;
        }).join("");

        document.querySelectorAll(".btn-inspect-property").forEach((btn) => {
          btn.addEventListener("click", () => {
            const propId = btn.getAttribute("data-inspect-prop");
            state.selectedPropertyId = propId;
            const found = properties.find((p) => p.id === propId);
            if (found && found.rooms.length > 0) {
              state.selectedRoomUnitId = found.rooms[0].id;
            }
            renderProperties();
            renderPropertyDetail();
            const detailEl = document.getElementById("property-detail-panel");
            if (detailEl) detailEl.scrollIntoView({ behavior: "smooth", block: "start" });
          });
        });
      }

      // ==========================================
      // 4. RENDER SELECTED PROPERTY ROOM-LEVEL METRICS & UNBIASED REVIEWS
      // ==========================================
      function renderPropertyDetail() {
        const panel = document.getElementById("property-detail-panel");
        if (!panel) return;
        const prop = properties.find((p) => p.id === state.selectedPropertyId) || properties[0];

        // Filter and sort verified reviews
        let revs = prop.reviews.slice();
        if (state.reviewProfileFilter !== "all") {
          revs = revs.filter((r) => r.profile === state.reviewProfileFilter);
        }
        if (state.reviewSort === "highest") {
          revs.sort((a, b) => b.rating - a.rating);
        } else if (state.reviewSort === "lowest") {
          revs.sort((a, b) => a.rating - b.rating);
        }

        // Build SVG price history bars
        const historyBars = prop.priceHistory30d.map((val, idx) => {
          const daysAgo = (7 - idx) * 4;
          return `
            <div class="flex-1 flex flex-col items-center gap-1">
              <span class="text-[10px] font-bold text-slate-700">${formatRupiah(val)}</span>
              <div class="w-full bg-emerald-600/80 rounded-t-md" style="height: ${Math.round((val / (prop.allInPricePerNight * 1.15)) * 56)}px"></div>
              <span class="text-[10px] text-slate-500">H-${daysAgo}</span>
            </div>
          `;
        }).join("");

        panel.innerHTML = `
          <div class="p-6 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Inspeksi Detail Properti & Pilih Unit Kamar Spesifik (Fitur #1, #4, #5)
              </span>
              <h2 class="text-xl sm:text-2xl font-extrabold mt-0.5">${prop.name}</h2>
              <p class="text-xs text-slate-300 mt-1">
                ♿ ${prop.accessibilityDetails} | 🕌 ${prop.halalDetails}
              </p>
            </div>
            <div class="text-right">
              <span class="text-xs text-slate-300">Riwayat Harga 30 Hari Stabil (Tanpa Diskon Palsu)</span>
              <div class="text-lg font-extrabold text-emerald-400">${formatRupiah(prop.allInPricePerNight)} / malam All-In</div>
            </div>
          </div>

          <div class="p-6 space-y-8">
            <!-- Feature 1: All-In Breakdown & 30-Day Price History -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div class="space-y-2 text-xs">
                <h3 class="font-bold text-sm text-slate-900">1. Rincian Transparan Harga All-In (${state.nights} Malam)</h3>
                <div class="space-y-1 text-slate-700">
                  <div class="flex justify-between">
                    <span>Tarif Dasar Kamar (${state.nights} malam):</span>
                    <span class="font-semibold">${formatRupiah(prop.basePrice * state.nights)}</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Biaya Layanan Hotel (10% — Sudah Termasuk):</span>
                    <span class="font-semibold">${formatRupiah(prop.serviceFee * state.nights)}</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Pajak Daerah PB1 (11% — Sudah Termasuk):</span>
                    <span class="font-semibold">${formatRupiah(prop.taxFee * state.nights)}</span>
                  </div>
                  <div class="flex justify-between text-emerald-800 font-bold">
                    <span>Resort Fee / Biaya Tersembunyi:</span>
                    <span>Rp0 (Dijamin)</span>
                  </div>
                  <div class="flex justify-between pt-2 border-t border-slate-300 text-sm font-extrabold text-slate-900">
                    <span>Harga Akhir Checkout (Terkunci):</span>
                    <span>${formatRupiah(prop.allInPricePerNight * state.nights)}</span>
                  </div>
                </div>
              </div>

              <div class="space-y-2">
                <h3 class="font-bold text-sm text-slate-900">2. Riwayat Harga All-In 30 Hari Terakhir (Jujur & Tanpa Markup Semu)</h3>
                <div class="flex items-end gap-2 h-24 pt-4 px-2 bg-white rounded-lg border border-slate-200">
                  ${historyBars}
                </div>
              </div>
            </div>

            <!-- Feature 4: Room-Level Selection -->
            <div class="space-y-4">
              <div>
                <h3 class="text-base sm:text-lg font-extrabold text-slate-900">
                  Pilih Nomor Kamar Spesifik (Lengkap Foto, Lantai, Jarak Lift, Kebisingan & Tes WiFi)
                </h3>
                <p class="text-xs text-slate-600">
                  Anda memesan nomor kamar fisik yang tertera di bawah ini—bukan sekadar "tipe kamar acak" saat tiba di resepsionis.
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                ${prop.rooms.map((rm) => {
                  const totalRm = rm.allInNight * state.nights;
                  return `
                    <div class="rounded-xl border-2 border-slate-200 hover:border-emerald-600 p-4 flex flex-col justify-between gap-4 bg-white shadow-2xs transition">
                      <div class="space-y-3">
                        <div class="relative rounded-lg overflow-hidden">
                          <img src="${rm.image}" alt="Kamar ${rm.number}" class="w-full h-36 object-cover max-w-full" />
                          <span class="absolute top-2 left-2 px-2.5 py-0.5 rounded bg-slate-900 text-white text-xs font-extrabold">
                            Kamar ${rm.number}
                          </span>
                        </div>
                        <div>
                          <h4 class="font-bold text-sm text-slate-900">${rm.type}</h4>
                          <p class="text-xs text-slate-600 mt-0.5">${rm.bed}</p>
                        </div>
                        <ul class="text-xs space-y-1 text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                          <li><strong>📍 Lantai:</strong> ${rm.floor}</li>
                          <li><strong>🛗 Jarak ke Lift:</strong> ${rm.distanceToLift}</li>
                          <li><strong>🌿 Pemandangan:</strong> ${rm.view}</li>
                          <li><strong>🔇 Kebisingan:</strong> <span class="text-emerald-800 font-semibold">${rm.noiseLabel}</span></li>
                          <li><strong>📶 WiFi Kamar:</strong> <span class="text-sky-800 font-semibold">${rm.wifiDown} Mbps Down / ${rm.wifiUp} Mbps Up</span> (${rm.wifiTestedAt})</li>
                        </ul>
                      </div>

                      <div class="pt-3 border-t border-slate-200 space-y-2">
                        <div class="flex items-baseline justify-between">
                          <span class="text-xs text-slate-600">Total ${state.nights} Malam All-In:</span>
                          <span class="text-base font-extrabold text-slate-900">${formatRupiah(totalRm)}</span>
                        </div>
                        <button type="button" data-book-prop="${prop.id}" data-book-room="${rm.id}"
                          class="btn-open-checkout-room w-full py-2.5 px-3 rounded-xl bg-brand-dynamic text-white text-xs font-extrabold shadow-xs transition">
                          Pesan Kamar ${rm.number} Sekarang (${formatRupiah(totalRm)})
                        </button>
                      </div>
                    </div>
                  `;
                }).join("")}
              </div>
            </div>

            <!-- Feature 5: Verified Reviews by Guest Profile -->
            <div class="space-y-4 pt-4 border-t border-slate-200">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 class="text-base font-extrabold text-slate-900">
                    Ulasan Terverifikasi Per Profil Tamu (Fitur #5 — Bebas Manipulasi Rating)
                  </h3>
                  <p class="text-xs text-slate-600">
                    Hanya tamu dengan reservasi berstatus <code>COMPLETED</code> di PMS yang dapat menulis ulasan. Diurutkan secara jujur tanpa menyembunyikan ulasan kritis.
                  </p>
                </div>

                <div class="flex flex-wrap items-center gap-2 text-xs">
                  <label for="rev-profile-select" class="sr-only">Filter Profil Tamu</label>
                  <select id="rev-profile-select" class="rounded-lg border border-slate-300 px-2.5 py-1.5 bg-slate-50 font-semibold">
                    <option value="all" ${state.reviewProfileFilter === "all" ? "selected" : ""}>Semua Profil Tamu</option>
                    <option value="Keluarga dengan Anak" ${state.reviewProfileFilter === "Keluarga dengan Anak" ? "selected" : ""}>👶 Keluarga dengan Anak</option>
                    <option value="Wisatawan Lansia" ${state.reviewProfileFilter === "Wisatawan Lansia" ? "selected" : ""}>🧓 Wisatawan Lansia</option>
                    <option value="Pekerja Jarak Jauh (WFA)" ${state.reviewProfileFilter === "Pekerja Jarak Jauh (WFA)" ? "selected" : ""}>💻 Pekerja Jarak Jauh (WFA)</option>
                    <option value="Kebutuhan Aksesibilitas / Difabel" ${state.reviewProfileFilter === "Kebutuhan Aksesibilitas / Difabel" ? "selected" : ""}>♿ Kebutuhan Aksesibilitas / Difabel</option>
                    <option value="Wisatawan Muslim" ${state.reviewProfileFilter === "Wisatawan Muslim" ? "selected" : ""}>🕌 Wisatawan Muslim</option>
                  </select>

                  <label for="rev-sort-select" class="sr-only">Urutan Ulasan</label>
                  <select id="rev-sort-select" class="rounded-lg border border-slate-300 px-2.5 py-1.5 bg-slate-50 font-semibold">
                    <option value="newest" ${state.reviewSort === "newest" ? "selected" : ""}>Terbaru Menginap (Default Tanpa Bias)</option>
                    <option value="lowest" ${state.reviewSort === "lowest" ? "selected" : ""}>Skor Terendah Dulu (Transparan)</option>
                    <option value="highest" ${state.reviewSort === "highest" ? "selected" : ""}>Skor Tertinggi Dulu</option>
                  </select>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${revs.length === 0 ? `
                  <div class="col-span-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                    Belum ada ulasan untuk filter profil tamu ini pada properti terpilih. Pilih "Semua Profil Tamu" untuk melihat ulasan lainnya.
                  </div>
                ` : revs.map((rv) => `
                  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                    <div class="flex items-center justify-between gap-2">
                      <div>
                        <span class="font-bold text-slate-900">${rv.guestName}</span>
                        <span class="ml-1.5 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-[11px]">
                          ${rv.profile}
                        </span>
                      </div>
                      <span class="font-extrabold text-slate-900 bg-amber-100 px-2 py-0.5 rounded">★ ${rv.rating.toFixed(1)}</span>
                    </div>
                    <p class="text-slate-700 leading-relaxed">"${rv.comment}"</p>
                    <div class="text-[11px] text-slate-500 flex items-center justify-between pt-1 border-t border-slate-200/80">
                      <span>✓ Reservasi Selesai: <strong>#${rv.resCode}</strong></span>
                      <span>Menginap: ${rv.stayDate}</span>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        `;

        // Attach room checkout handlers
        document.querySelectorAll(".btn-open-checkout-room").forEach((btn) => {
          btn.addEventListener("click", () => {
            const pId = btn.getAttribute("data-book-prop");
            const rId = btn.getAttribute("data-book-room");
            openCheckoutModal(pId, rId);
          });
        });

        const revProfSel = document.getElementById("rev-profile-select");
        if (revProfSel) {
          revProfSel.addEventListener("change", (e) => {
            state.reviewProfileFilter = e.target.value;
            renderPropertyDetail();
          });
        }
        const revSortSel = document.getElementById("rev-sort-select");
        if (revSortSel) {
          revSortSel.addEventListener("change", (e) => {
            state.reviewSort = e.target.value;
            renderPropertyDetail();
          });
        }
      }

      // ==========================================
      // 5. CHECKOUT MODAL LOGIC (FEATURES #1, #2, #3, #12)
      // ==========================================
      function openCheckoutModal(propId, roomId) {
        state.selectedPropertyId = propId;
        state.selectedRoomUnitId = roomId;
        const prop = properties.find((p) => p.id === propId) || properties[0];
        const room = prop.rooms.find((r) => r.id === roomId) || prop.rooms[0];
        const totalAllIn = room.allInNight * state.nights;

        const banner = document.getElementById("checkout-total-banner");
        if (banner) banner.textContent = formatRupiah(totalAllIn) + " (All-In)";

        const box = document.getElementById("checkout-summary-box");
        if (box) {
          box.innerHTML = `
            <div class="flex flex-wrap justify-between gap-2">
              <div>
                <p class="font-extrabold text-sm text-slate-900">${prop.name}</p>
                <p class="text-slate-700">Unit Spesifik: <strong>Kamar ${room.number} (${room.type})</strong></p>
                <p class="text-slate-600">${room.floor} · ${room.distanceToLift} · ${room.noiseLabel} · WiFi ${room.wifiDown} Mbps</p>
              </div>
              <div class="text-right">
                <p class="text-slate-600">Check-In: <strong>${state.checkInDate}</strong> (${state.nights} malam)</p>
                <p class="text-sm font-extrabold text-emerald-800 mt-1">Total Harga Akhir: ${formatRupiah(totalAllIn)}</p>
              </div>
            </div>
            <div class="mt-2 pt-2 border-t border-slate-200 text-[11px] text-slate-600">
              <strong>Garis Waktu Kebijakan Pembatalan:</strong> Pembatalan hingga H-1 sebelum pukul 14:00 WIB mendapatkan <strong>Refund 100% Penuh (${formatRupiah(totalAllIn)})</strong> dalam 1 ketukan tanpa potongan admin.
            </div>
          `;
        }

        const modal = document.getElementById("checkout-modal");
        if (modal) modal.classList.remove("hidden");
      }

      // ==========================================
      // 6. RENDER RESERVATIONS, 1-TAP REFUND & AUTO-RELOCATION (FEATURES #2 & #3)
      // ==========================================
      function renderReservations() {
        const container = document.getElementById("reservations-list");
        const badge = document.getElementById("booking-count-badge");
        if (badge) badge.textContent = String(state.reservations.length);
        if (!container) return;

        container.innerHTML = state.reservations.map((res, idx) => {
          const isCancelled = res.status === "CANCELLED";
          const isRelocated = res.pmsStatus === "NOT_FOUND_RELOCATED";

          return `
            <article class="bg-white rounded-2xl border-2 ${isCancelled ? 'border-slate-200' : 'border-emerald-600/40'} p-6 shadow-sm space-y-5">
              <div class="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="px-2.5 py-1 rounded-md bg-slate-900 text-white font-mono text-xs font-extrabold">
                      Kode Resepsionis: #${res.code}
                    </span>
                    <span class="px-2.5 py-1 rounded-full text-xs font-bold ${isCancelled ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'}">
                      ${isCancelled ? 'DIBATALKAN & REFUND' : 'AKTIF & TERJAMIN'}
                    </span>
                    <span class="px-2.5 py-1 rounded-full text-xs font-bold ${isRelocated ? 'bg-amber-100 text-amber-900' : 'bg-sky-100 text-sky-900'}">
                      ${isRelocated ? '⚡ DIREKONSILIASI: RELOKASI HOTEL SETARA AKTIF' : '✓ TERKONFIRMASI PMS HOTEL (' + res.pmsAdapterName + ')'}
                    </span>
                  </div>
                  <h3 class="text-lg font-extrabold text-slate-900 mt-2">${res.propertyName}</h3>
                  <p class="text-xs text-slate-600">
                    Unit Kamar: <strong>${res.roomNumber}</strong> (${res.roomSpec}) · Check-In: <strong>${res.checkIn}</strong> (${res.nights} Malam)
                  </p>
                </div>

                <div class="text-right">
                  <span class="text-xs text-slate-500">Total Harga All-In Terkunci (${res.paymentMethod})</span>
                  <div class="text-xl font-extrabold text-slate-900">${formatRupiah(res.totalAllIn)}</div>
                </div>
              </div>

              <!-- Auto-Relocation Alert Box if simulated (Feature 2) -->
              ${res.relocationInfo ? `
                <div class="p-4 rounded-xl bg-amber-50 border-2 border-amber-300 text-amber-950 space-y-1.5 text-xs">
                  <p class="font-extrabold text-sm">🛡️ Garansi Relokasi Otomatis Aktif (Tanpa Campur Tangan Tamu)</p>
                  <p>${res.relocationInfo.reason}</p>
                  <p><strong>Hotel Pengganti Setara/Upgrade:</strong> ${res.relocationInfo.newHotel} — <strong>${res.relocationInfo.newRoom}</strong></p>
                  <p><strong>Kompensasi Otomatis:</strong> Selisih harga Rp250.000 ditanggung penuh oleh platform + Voucher Taksi Instan Rp150.000 telah dikirim ke WhatsApp Anda.</p>
                </div>
              ` : ""}

              <!-- Visual Cancellation Policy Timeline & 1-Tap Refund Tracker (Feature 3) -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                  <h4 class="font-bold text-slate-900">Garis Waktu Kebijakan Pembatalan Visual:</h4>
                  <div class="grid grid-cols-3 gap-2 text-center">
                    <div class="p-2.5 rounded-lg bg-emerald-100/80 border border-emerald-300 text-emerald-950">
                      <p class="font-bold">Sekarang s/d H-1</p>
                      <p class="text-[11px] mt-0.5">Refund 100% Penuh</p>
                      <p class="font-extrabold mt-1">${formatRupiah(res.totalAllIn)}</p>
                    </div>
                    <div class="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900">
                      <p class="font-bold">Hari-H (&lt;14:00)</p>
                      <p class="text-[11px] mt-0.5">Refund 50%</p>
                      <p class="font-extrabold mt-1">${formatRupiah(res.totalAllIn * 0.5)}</p>
                    </div>
                    <div class="p-2.5 rounded-lg bg-slate-100 border border-slate-300 text-slate-600">
                      <p class="font-bold">No-Show</p>
                      <p class="text-[11px] mt-0.5">Refund 0%</p>
                      <p class="font-extrabold mt-1">Rp0</p>
                    </div>
                  </div>

                  <!-- Action Buttons for Testing Acceptance Criteria -->
                  <div class="flex flex-wrap gap-2 pt-2">
                    ${!isCancelled ? `
                      <button type="button" data-cancel-idx="${idx}"
                        class="btn-one-tap-cancel px-3.5 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-2xs transition">
                        ⚡ Batalkan 1-Ketukan (Refund Penuh ${formatRupiah(res.totalAllIn)})
                      </button>
                      <button type="button" data-relocate-idx="${idx}"
                        class="btn-sim-relocate px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition">
                        🛡️ Simulasikan "Reservasi Tidak Ditemukan di PMS"
                      </button>
                    ` : `
                      <button type="button" data-advance-refund="${idx}"
                        class="btn-advance-refund px-3.5 py-2 rounded-lg bg-brand-dynamic text-white font-bold text-xs transition">
                        🔄 Majukan Tahap Status Refund Real-Time
                      </button>
                    `}
                  </div>
                </div>

                <!-- Real-Time Refund Status Stepper & Audit Log -->
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                  <div class="flex items-center justify-between">
                    <h4 class="font-bold text-slate-900">Pelacak Status Refund & Log Sistem:</h4>
                    <span class="font-bold ${res.refundStage === 3 ? 'text-emerald-700' : 'text-slate-600'}">
                      ${res.refundStage === 0 ? 'Reservasi Aktif' : res.refundStage === 1 ? '1/3 Diajukan' : res.refundStage === 2 ? '2/3 Diproses Gateway' : '3/3 Dana Dikembalikan'}
                    </span>
                  </div>

                  <!-- 3-Step Refund Progress Bar -->
                  <div class="grid grid-cols-3 gap-2 text-center text-[11px] font-bold">
                    <div class="py-1.5 px-2 rounded ${res.refundStage >= 1 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'}">
                      1. Diajukan
                    </div>
                    <div class="py-1.5 px-2 rounded ${res.refundStage >= 2 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'}">
                      2. Diproses
                    </div>
                    <div class="py-1.5 px-2 rounded ${res.refundStage >= 3 ? 'bg-emerald-700 text-white' : 'bg-slate-200 text-slate-500'}">
                      3. Dikembalikan
                    </div>
                  </div>

                  <ul class="space-y-1 text-[11px] text-slate-700 max-h-28 overflow-y-auto">
                    ${res.timelineLog.map((item) => `<li class="flex items-start gap-1.5"><span>•</span><span>${item}</span></li>`).join("")}
                  </ul>
                </div>
              </div>
            </article>
          `;
        }).join("");

        // Bind 1-Tap Cancel
        document.querySelectorAll(".btn-one-tap-cancel").forEach((btn) => {
          btn.addEventListener("click", () => {
            const idx = Number(btn.getAttribute("data-cancel-idx"));
            const r = state.reservations[idx];
            if (!r) return;
            r.status = "CANCELLED";
            r.refundStage = 2;
            r.timelineLog.unshift(
              `05 Nov 2026 20:58 — Pembatalan 1-Ketukan berhasil. Refund penuh ${formatRupiah(r.totalAllIn)} sedang diproses otomatis ke ${r.paymentMethod}.`
            );
            renderReservations();
            showToast(`Reservasi #${r.code} dibatalkan dalam 1 ketukan. Refund ${formatRupiah(r.totalAllIn)} diproses!`);
          });
        });

        // Bind Advance Refund Stage
        document.querySelectorAll(".btn-advance-refund").forEach((btn) => {
          btn.addEventListener("click", () => {
            const idx = Number(btn.getAttribute("data-advance-refund"));
            const r = state.reservations[idx];
            if (!r) return;
            if (r.refundStage < 3) {
              r.refundStage += 1;
              if (r.refundStage === 3) {
                r.timelineLog.unshift(
                  `05 Nov 2026 20:59 — DANA DIKEMBALIKAN: ${formatRupiah(r.totalAllIn)} telah masuk ke akun ${r.paymentMethod} tamu.`
                );
              }
            } else {
              r.timelineLog.unshift(`05 Nov 2026 20:59 — Bukti transfer pengembalian dana ${formatRupiah(r.totalAllIn)} telah terverifikasi lunas.`);
            }
            renderReservations();
            showToast(`Status refund #${r.code} diperbarui ke tahap ${r.refundStage}/3!`);
          });
        });

        // Bind Simulate PMS Not Found -> Auto Relocation
        document.querySelectorAll(".btn-sim-relocate").forEach((btn) => {
          btn.addEventListener("click", () => {
            const idx = Number(btn.getAttribute("data-relocate-idx"));
            const r = state.reservations[idx];
            if (!r) return;
            r.pmsStatus = "NOT_FOUND_RELOCATED";
            r.relocationInfo = {
              reason: "Adapter PMS mendeteksi kegagalan sinkronisasi kuota kamar di properti asal. Protokol Garansi Relokasi Otomatis langsung mengeksekusi pemindahan tanpa membebani tamu.",
              newHotel: "The Phoenix Heritage Luxury Hotel Yogyakarta (Bintang 5 Setara/Upgrade · 1,2 km)",
              newRoom: "Kamar #302 Executive Heritage Suite (Lantai 3 · Dekat Lift · WiFi 175 Mbps)"
            };
            r.timelineLog.unshift(
              "05 Nov 2026 20:59 — GARANSI PMS AKTIF: Reservasi gagal ditemukan di PMS lokal; sistem otomatis menerbitkan kamar pengganti di The Phoenix Heritage Luxury Hotel + Voucher Transport Rp150.000."
            );
            renderReservations();
            showToast("Simulasi Garansi PMS berhasil: Relokasi otomatis ke hotel setara telah aktif!");
          });
        });
      }

      // ==========================================
      // 7. RENDER PORTABLE PREFERENCES & HOTEL CONSENT (FEATURE #7)
      // ==========================================
      function renderHotelConsents() {
        const list = document.getElementById("hotel-consent-list");
        if (!list) return;
        list.innerHTML = state.hotelConsents.map((item, idx) => `
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div>
              <p class="font-bold text-slate-900">${item.name}</p>
              <p class="text-[11px] ${item.allowed ? 'text-emerald-700 font-semibold' : 'text-rose-700 font-semibold'}">
                ${item.allowed ? '✓ Diizinkan membaca preferensi bantal, suhu & alergi (' + item.updatedAt + ')' : '✕ Akses preferensi dicabut (' + item.updatedAt + ')'}
              </p>
            </div>
            <button type="button" data-consent-idx="${idx}"
              class="btn-toggle-consent px-3 py-1.5 rounded-lg font-bold text-xs transition ${item.allowed ? 'bg-rose-100 text-rose-800 hover:bg-rose-200' : 'bg-emerald-600 text-white hover:bg-emerald-700'}">
              ${item.allowed ? 'Cabut Izin Akses' : 'Beri Izin Akses'}
            </button>
          </div>
        `).join("");

        document.querySelectorAll(".btn-toggle-consent").forEach((btn) => {
          btn.addEventListener("click", () => {
            const idx = Number(btn.getAttribute("data-consent-idx"));
            const c = state.hotelConsents[idx];
            if (!c) return;
            c.allowed = !c.allowed;
            c.updatedAt = c.allowed ? "Diizinkan baru saja" : "Dicabut baru saja";
            renderHotelConsents();
            showToast(c.allowed ? `Izin preferensi diberikan ke ${c.name}` : `Izin preferensi untuk ${c.name} telah dicabut!`);
          });
        });
      }

      // ==========================================
      // 8. RENDER 15 ACCEPTANCE CRITERIA CHECKLIST (VIEW 5)
      // ==========================================
      function renderAcceptanceChecklist() {
        const grid = document.getElementById("acceptance-checklist-grid");
        if (!grid) return;
        const criteria = [
          { title: "1. Harga Identik & All-In Sejak Awal", desc: "Harga di pencarian, detail kamar, dan checkout 100% sama dengan rincian pajak 11% + layanan 10%.", targetTab: "explore" },
          { title: "2. Kode Verifikasi & Status PMS", desc: "Setiap booking menampilkan kode resepsionis (#NL-YGY-8842) dan status sinkronisasi adapter PMS.", targetTab: "bookings" },
          { title: "3. Simulasi Relokasi Otomatis", desc: "Tombol simulasi 'Reservasi Tidak Ditemukan' langsung memicu relokasi ke hotel setara + kompensasi.", targetTab: "bookings" },
          { title: "4. Pembatalan 1-Ketukan & Pelacak Refund", desc: "Batal dalam 1 klik dengan garis waktu kebijakan visual dan status refund 3 tahap real-time.", targetTab: "bookings" },
          { title: "5. Info Tingkat Kamar Fisik", desc: "Menampilkan nomor kamar spesifik (#204, #101), lantai, jarak ke lift, desibel (dB), dan Mbps WiFi.", targetTab: "explore" },
          { title: "6. Ulasan Terverifikasi Per Profil Tamu", desc: "Hanya dari reservasi selesai, bisa difilter per profil (keluarga, lansia, WFA, difabel) tanpa bias.", targetTab: "explore" },
          { title: "7. Filter Kebutuhan Khusus Rinci", desc: "Filter akses kursi roda (pintu ≥90cm), makanan halal, musala/kiblat, ramah anak & hewan bekerja langsung.", targetTab: "explore" },
          { title: "8. Kontrol Izin Preferensi Portabel", desc: "Tamu menyimpan preferensi suhu/bantal/alergi dan dapat mencabut izin akses per hotel kapan saja.", targetTab: "preferences" },
          { title: "9. Check-In Web Tanpa Unduh Aplikasi", desc: "Berjalan langsung lewat tautan web/WhatsApp lengkap status kesiapan kamar & kunci digital BLE.", targetTab: "stay" },
          { title: "10. Asisten AI Hibrida & Eskalasi Manusia", desc: "AI dapat menggeser jadwal & membatalkan booking disertai alasan, plus eskalasi WA 1 langkah.", targetTab: "explore" },
          { title: "11. Penghapusan Otomatis Data KTP", desc: "Enkripsi AES-256 dengan opsi retensi otomatis dan tombol hapus data KTP instan.", targetTab: "preferences" },
          { title: "12. Pembayaran Lokal Sandbox", desc: "Mendukung QRIS Instan, Virtual Account (BCA/Mandiri/BRI), dan E-Wallet tanpa biaya tambahan.", targetTab: "explore" },
          { title: "13. Bebas Dark Pattern 100%", desc: "Tanpa hitung mundur palsu, tanpa klaim stok bohong, dan tanpa biaya yang baru muncul di akhir.", targetTab: "explore" },
          { title: "14. Aksesibilitas WCAG 2.2 AA & Performa", desc: "Kontras rasio tinggi, navigasi keyboard fokus jelas, responsif di layar HP hingga desktop.", targetTab: "explore" },
          { title: "15. Siap Kustomisasi White-Label Klien", desc: "Bilah presentasi B2B di atas memungkinkan ganti nama hotel & tema warna secara instan.", targetTab: "explore" }
        ];

        grid.innerHTML = criteria.map((c) => `
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-3">
            <div class="space-y-1">
              <p class="font-bold text-slate-900 flex items-center gap-1.5">
                <span class="text-emerald-600 font-extrabold">☑</span>
                <span>${c.title}</span>
              </p>
              <p class="text-slate-600 text-[11px]">${c.desc}</p>
            </div>
            <button type="button" data-jump-tab="${c.targetTab}"
              class="btn-jump-tab px-2.5 py-1 rounded bg-white border border-slate-300 hover:bg-slate-100 text-[11px] font-bold text-slate-800 shrink-0">
              Uji Fitur →
            </button>
          </div>
        `).join("");

        document.querySelectorAll(".btn-jump-tab").forEach((btn) => {
          btn.addEventListener("click", () => {
            const tab = btn.getAttribute("data-jump-tab");
            switchTab(tab);
          });
        });
      }

      // ==========================================
      // 9. EVENT LISTENERS & INTERACTIVE CONTROLS
      // ==========================================
      function initEvents() {
        // Navigation tabs
        document.querySelectorAll(".nav-tab-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            switchTab(btn.getAttribute("data-tab"));
          });
        });

        const logoBtn = document.getElementById("nav-logo-btn");
        if (logoBtn) {
          logoBtn.addEventListener("click", () => switchTab("explore"));
        }

        // White-label B2B Brand Name live update
        const brandInput = document.getElementById("wl-brand-input");
        if (brandInput) {
          brandInput.addEventListener("input", (e) => {
            const val = e.target.value.trim() || "NusaLodge";
            state.brandName = val;
            document.getElementById("brand-name-display").textContent = val;
            document.getElementById("footer-brand-name").textContent = val;
            document.getElementById("invoice-brand-title").textContent = val + " Official Tax Invoice";
            const initials = val.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase() || "NL";
            document.getElementById("brand-initial").textContent = initials;
          });
        }

        // White-label Business Mode selector
        const modeSelect = document.getElementById("wl-mode-select");
        if (modeSelect) {
          modeSelect.addEventListener("change", (e) => {
            state.businessMode = e.target.value;
            const labels = {
              marketplace: "Marketplace Multi-Hotel",
              chain: "Jaringan Hotel Resmi",
              single: "Official Direct Booking Hotel"
            };
            document.getElementById("business-mode-badge").textContent = labels[state.businessMode] || "Marketplace";
            renderProperties();
            showToast("Mode bisnis diubah ke: " + (labels[state.businessMode] || state.businessMode));
          });
        }

        // White-label Theme selector
        const themeSelect = document.getElementById("wl-theme-select");
        if (themeSelect) {
          themeSelect.addEventListener("change", (e) => {
            state.theme = e.target.value;
            if (state.theme === "emerald") {
              document.documentElement.removeAttribute("data-theme");
            } else {
              document.documentElement.setAttribute("data-theme", state.theme);
            }
            showToast("Tema warna brand diperbarui!");
          });
        }

        // Language Toggle (ID / EN)
        const langBtn = document.getElementById("lang-toggle-btn");
        if (langBtn) {
          langBtn.addEventListener("click", () => {
            state.lang = state.lang === "id" ? "en" : "id";
            const heroH1 = document.getElementById("hero-heading");
            const tagline = document.querySelector('[data-i18n="tagline"]');
            if (state.lang === "en") {
              if (heroH1) heroH1.textContent = "Initial Price = Final Price. Pick Your Exact Room Unit, Not Just a Room Type.";
              if (tagline) tagline.textContent = "100% All-In Pricing · Zero Dark Patterns · 1-Tap Refund";
              showToast("Language switched to English (EN)");
            } else {
              if (heroH1) heroH1.textContent = "Harga Awal = Harga Akhir. Pilih Nomor Kamar Asli, Bukan Sekadar Tipe.";
              if (tagline) tagline.textContent = "100% Harga All-In · Tanpa Dark Pattern · Refund 1-Ketukan";
              showToast("Bahasa diubah ke Bahasa Indonesia (ID)");
            }
          });
        }

        // Search & Sort Inputs
        const locSel = document.getElementById("search-location");
        if (locSel) {
          locSel.addEventListener("change", (e) => {
            state.selectedLocation = e.target.value;
            renderProperties();
          });
        }
        const checkinInp = document.getElementById("search-checkin");
        if (checkinInp) {
          checkinInp.addEventListener("change", (e) => {
            state.checkInDate = e.target.value;
            renderPropertyDetail();
          });
        }
        const nightsSel = document.getElementById("search-nights");
        if (nightsSel) {
          nightsSel.addEventListener("change", (e) => {
            state.nights = Number(e.target.value) || 2;
            renderProperties();
            renderPropertyDetail();
          });
        }
        const sortSel = document.getElementById("search-sort");
        if (sortSel) {
          sortSel.addEventListener("change", (e) => {
            state.sortBy = e.target.value;
            renderProperties();
          });
        }
        const resetBtn = document.getElementById("btn-reset-filters");
        if (resetBtn) {
          resetBtn.addEventListener("click", () => {
            state.activeFilters.clear();
            state.selectedLocation = "all";
            if (locSel) locSel.value = "all";
            document.querySelectorAll(".special-filter-chip").forEach((c) => {
              c.className = "special-filter-chip px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 transition flex items-center gap-1.5";
            });
            renderProperties();
            showToast("Filter pencarian telah disegarkan.");
          });
        }

        // Special Needs Filter Chips
        document.querySelectorAll(".special-filter-chip").forEach((chip) => {
          chip.addEventListener("click", () => {
            const flt = chip.getAttribute("data-filter");
            if (state.activeFilters.has(flt)) {
              state.activeFilters.delete(flt);
              chip.className = "special-filter-chip px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 transition flex items-center gap-1.5";
            } else {
              state.activeFilters.add(flt);
              chip.className = "special-filter-chip px-3 py-1.5 rounded-full text-xs font-bold border border-emerald-700 bg-emerald-700 text-white transition flex items-center gap-1.5";
            }
            renderProperties();
          });
        });

        // Checkout Modal Close & Confirm
        const closeCo = document.getElementById("btn-close-checkout");
        const cancelCo = document.getElementById("btn-cancel-checkout-modal");
        [closeCo, cancelCo].forEach((b) => {
          if (b) b.addEventListener("click", () => {
            document.getElementById("checkout-modal").classList.add("hidden");
          });
        });

        const confirmBookingBtn = document.getElementById("btn-confirm-booking");
        if (confirmBookingBtn) {
          confirmBookingBtn.addEventListener("click", () => {
            const prop = properties.find((p) => p.id === state.selectedPropertyId) || properties[0];
            const room = prop.rooms.find((r) => r.id === state.selectedRoomUnitId) || prop.rooms[0];
            const totalAllIn = room.allInNight * state.nights;
            const paymentRadio = document.querySelector('input[name="co-payment"]:checked');
            const paymentMethod = paymentRadio ? paymentRadio.value : "QRIS Instan";
            const newCode = "NL-" + prop.city.slice(0, 3).toUpperCase() + "-" + Math.floor(1000 + Math.random() * 8999);

            state.reservations.unshift({
              code: newCode,
              propertyId: prop.id,
              propertyName: prop.name,
              location: prop.city,
              roomNumber: `${room.number} (${room.type})`,
              roomSpec: `${room.floor} · ${room.distanceToLift} · ${room.noiseLabel} · WiFi ${room.wifiDown} Mbps`,
              checkIn: state.checkInDate,
              nights: state.nights,
              totalAllIn: totalAllIn,
              baseRateTotal: Math.round(totalAllIn / 1.21),
              serviceFeeTotal: Math.round(totalAllIn * 0.082),
              taxTotal: Math.round(totalAllIn * 0.091),
              paymentMethod: paymentMethod,
              pmsStatus: "CONFIRMED",
              pmsAdapterName: "CloudPMS Adapter v2.4 (Sinkron Real-Time)",
              status: "ACTIVE",
              refundStage: 0,
              relocationInfo: null,
              timelineLog: [
                `05 Nov 2026 20:59 — Pembayaran ${paymentMethod} sebesar ${formatRupiah(totalAllIn)} berhasil (Harga All-In identik dari halaman pencarian).`,
                `05 Nov 2026 20:59 — Sistem PMS Hotel mengonfirmasi Kamar ${room.number} dengan kode resepsionis #${newCode}.`
              ]
            });

            document.getElementById("checkout-modal").classList.add("hidden");
            renderReservations();
            switchTab("bookings");
            showToast(`Reservasi #${newCode} berhasil! Harga All-In ${formatRupiah(totalAllIn)} terkunci.`);
          });
        }

        // Stay View Controls (Early Check-in, BLE Key, Mobile Check-out, Lost & Found)
        const saveAddonsBtn = document.getElementById("btn-save-stay-addons");
        if (saveAddonsBtn) {
          saveAddonsBtn.addEventListener("click", () => {
            const early = document.getElementById("chk-early-checkin").checked;
            const late = document.getElementById("chk-late-checkout").checked;
            const extra = (early ? 120000 : 0) + (late ? 150000 : 0);
            const fb = document.getElementById("stay-addon-feedback");
            if (fb) {
              fb.classList.remove("hidden");
              fb.textContent = extra > 0
                ? `✓ Opsi waktu tambahan tersimpan (+${formatRupiah(extra)} All-In). Resepsionis telah diberitahu.`
                : "✓ Jadwal check-in/out standar (14:00 / 12:00 WIB) dipertahankan.";
            }
            showToast("Preferensi waktu check-in/check-out berhasil diperbarui!");
          });
        }

        const bleBtn = document.getElementById("btn-trigger-ble-key");
        if (bleBtn) {
          let unlocked = false;
          bleBtn.addEventListener("click", () => {
            unlocked = !unlocked;
            const box = document.getElementById("ble-key-visual");
            const icon = document.getElementById("ble-lock-icon");
            const label = document.getElementById("ble-status-label");
            if (unlocked) {
              box.className = "p-6 rounded-2xl bg-emerald-950 text-white text-center space-y-3 border-2 border-emerald-400 transition-all";
              icon.textContent = "🔓";
              label.textContent = "Pintu Kamar #204 Terbuka (BLE Connected)";
              bleBtn.textContent = "🔒 Kunci Kembali Pintu Kamar #204";
              showToast("Kunci Digital BLE terhubung: Pintu Kamar #204 terbuka!");
            } else {
              box.className = "p-6 rounded-2xl bg-slate-900 text-white text-center space-y-3 border-2 border-slate-700 transition-all";
              icon.textContent = "🔒";
              label.textContent = "Pintu Terkunci Aman";
              bleBtn.textContent = "🔓 Sentuh untuk Buka Kunci Kamar (Simulasi BLE)";
              showToast("Pintu Kamar #204 telah dikunci kembali.");
            }
          });
        }

        const mobileCoBtn = document.getElementById("btn-mobile-checkout");
        if (mobileCoBtn) {
          mobileCoBtn.addEventListener("click", () => {
            document.getElementById("checkin-status-text").textContent = "Check-Out Selesai (1-Ketukan)";
            document.getElementById("deposit-status-badge").textContent = "✓ Rp300.000 Telah Dikembalikan ke QRIS";
            showToast("Check-Out Mobile selesai! Deposit Rp300.000 otomatis dikembalikan.");
          });
        }

        const addLostBtn = document.getElementById("btn-add-lost-item");
        if (addLostBtn) {
          addLostBtn.addEventListener("click", () => {
            const inp = document.getElementById("lost-item-input");
            const val = inp ? inp.value.trim() : "";
            if (!val) {
              showToast("Ketik nama barang yang ingin dilaporkan terlebih dahulu.");
              return;
            }
            const list = document.getElementById("lost-found-list");
            const div = document.createElement("div");
            div.className = "p-2 bg-sky-50 border border-sky-200 rounded-lg text-sky-950";
            div.innerHTML = `<strong>Laporan Baru:</strong> ${val} — <span class="font-bold">Sedang diperiksa tim Housekeeping Kamar #204</span>`;
            list.prepend(div);
            inp.value = "";
            showToast("Laporan barang tertinggal dikirim ke Housekeeping!");
          });
        }

        // Invoice Modal
        const openInvBtn = document.getElementById("btn-open-invoice-modal");
        const closeInvBtn = document.getElementById("btn-close-invoice");
        if (openInvBtn) {
          openInvBtn.addEventListener("click", () => {
            document.getElementById("invoice-modal").classList.remove("hidden");
          });
        }
        if (closeInvBtn) {
          closeInvBtn.addEventListener("click", () => {
            document.getElementById("invoice-modal").classList.add("hidden");
          });
        }
        const compInput = document.getElementById("inv-company-name");
        if (compInput) {
          compInput.addEventListener("input", (e) => {
            document.getElementById("inv-company-display").textContent = e.target.value;
          });
        }
        const printInvBtn = document.getElementById("btn-print-invoice");
        if (printInvBtn) {
          printInvBtn.addEventListener("click", () => {
            window.print();
          });
        }

        // Preferences & Identity Vault
        const savePrefBtn = document.getElementById("btn-save-preferences");
        if (savePrefBtn) {
          savePrefBtn.addEventListener("click", () => {
            const fb = document.getElementById("pref-save-feedback");
            if (fb) {
              fb.classList.remove("hidden");
              fb.textContent = "✓ Profil preferensi portabel diperbarui dan disinkronkan ke hotel yang Anda beri izin.";
            }
            showToast("Profil preferensi menginap berhasil disimpan!");
          });
        }

        const retSelect = document.getElementById("retention-select");
        if (retSelect) {
          retSelect.addEventListener("change", (e) => {
            state.idRetentionPolicy = e.target.value;
            const disp = document.getElementById("id-retention-display");
            if (disp) disp.textContent = state.idRetentionPolicy;
            showToast("Kebijakan retensi KTP diubah ke: " + state.idRetentionPolicy);
          });
        }

        const purgeBtn = document.getElementById("btn-purge-id-now");
        const restoreIdBtn = document.getElementById("btn-restore-id-mock");
        if (purgeBtn) {
          purgeBtn.addEventListener("click", () => {
            state.idVaultPurged = true;
            document.getElementById("id-vault-status-badge").textContent = "DIHAPUS PERMANEN (0 BYTE TERSISA)";
            document.getElementById("id-vault-status-badge").className = "text-xs font-bold px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30";
            document.getElementById("id-vault-details").innerHTML = `
              <p class="text-emerald-300 font-bold">✓ Data e-KTP/Paspor telah dihapus permanen dari penyimpanan terenkripsi.</p>
              <p>Hanya log audit anonim yang dipertahankan bahwa verifikasi resepsionis telah selesai.</p>
            `;
            showToast("Data identitas KTP/Paspor telah dihapus permanen!");
          });
        }
        if (restoreIdBtn) {
          restoreIdBtn.addEventListener("click", () => {
            state.idVaultPurged = false;
            document.getElementById("id-vault-status-badge").textContent = "TERENKRIPSI AES-256-GCM";
            document.getElementById("id-vault-status-badge").className = "text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30";
            document.getElementById("id-vault-details").innerHTML = `
              <p><strong>Dokumen Tersimpan:</strong> e-KTP (NIK: 3404••••••••0002 — Disamarkan)</p>
              <p><strong>Tujuan Penggunaan:</strong> Verifikasi Check-In Mandiri Reservasi #NL-YGY-8842</p>
              <p><strong>Jadwal Penghapusan Otomatis:</strong> <span id="id-retention-display" class="text-amber-300 font-bold">${state.idRetentionPolicy}</span></p>
            `;
            showToast("Simulasi dokumen KTP terenkripsi diunggah kembali.");
          });
        }

        // Pitch Guide Modal
        const openPitchBtns = [
          document.getElementById("btn-open-pitch-modal"),
          document.getElementById("btn-Open-Pitch-Guide-2"),
          document.getElementById("footer-pitch-btn")
        ];
        openPitchBtns.forEach((b) => {
          if (b) b.addEventListener("click", () => {
            document.getElementById("pitch-modal").classList.remove("hidden");
          });
        });
        [document.getElementById("btn-close-pitch-modal"), document.getElementById("btn-close-pitch-modal-bottom")].forEach((b) => {
          if (b) b.addEventListener("click", () => {
            document.getElementById("pitch-modal").classList.add("hidden");
          });
        });

        const footerPrivBtn = document.getElementById("footer-privacy-btn");
        if (footerPrivBtn) {
          footerPrivBtn.addEventListener("click", () => switchTab("preferences"));
        }

        // Hybrid AI Support Drawer
        const openAiBtn = document.getElementById("open-ai-drawer-btn");
        const closeAiBtn = document.getElementById("btn-close-ai-drawer");
        const drawer = document.getElementById("ai-support-drawer");
        if (openAiBtn && drawer) {
          openAiBtn.addEventListener("click", () => {
            drawer.classList.remove("translate-x-full");
          });
        }
        if (closeAiBtn && drawer) {
          closeAiBtn.addEventListener("click", () => {
            drawer.classList.add("translate-x-full");
          });
        }

        function appendAiMessage(sender, htmlText, isUser) {
          const log = document.getElementById("ai-chat-log");
          if (!log) return;
          const div = document.createElement("div");
          div.className = isUser
            ? "p-3 rounded-xl bg-brand-dynamic text-white ml-8 space-y-1 shadow-2xs"
            : "p-3 rounded-xl bg-white border border-slate-200 text-slate-800 mr-4 space-y-1 shadow-2xs";
          div.innerHTML = `<p class="font-bold text-[11px] opacity-80">${sender}</p><div>${htmlText}</div>`;
          log.appendChild(div);
          log.scrollTop = log.scrollHeight;
        }

        document.querySelectorAll(".ai-quick-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const action = btn.getAttribute("data-ai-action");
            const activeRes = state.reservations[0];
            if (action === "reschedule") {
              appendAiMessage("Anda", "Tolong geser jadwal menginap reservasi saya mundur 1 hari.", true);
              if (activeRes) {
                activeRes.checkIn = "2026-11-13";
                activeRes.timelineLog.unshift("05 Nov 2026 21:00 — AI Assistant Function Call: Tanggal check-in diubah ke 2026-11-13 (Rp0 biaya perubahan karena masih >24 jam).");
                renderReservations();
              }
              appendAiMessage(
                "Asisten AI (Eksekusi Otomatis)",
                `<p><strong>✓ Berhasil dieksekusi (` + "`updateReservationDates`" + `):</strong> Jadwal reservasi <strong>#${activeRes ? activeRes.code : 'NL-YGY-8842'}</strong> telah digeser ke <strong>2026-11-13</strong>.</p>
                 <p class="mt-1 text-[11px] text-emerald-800 bg-emerald-50 p-2 rounded border border-emerald-200"><strong>Alasan Kebijakan:</strong> Perubahan dilakukan lebih dari 24 jam sebelum waktu check-in dan tarif kamar pada tanggal baru identik, sehingga biaya perubahan Rp0.</p>`,
                false
              );
            } else if (action === "cancel-refund") {
              appendAiMessage("Anda", "Batalkan reservasi aktif saya dan proses refund sekarang.", true);
              if (activeRes) {
                activeRes.status = "CANCELLED";
                activeRes.refundStage = 2;
                activeRes.timelineLog.unshift("05 Nov 2026 21:00 — AI Assistant Function Call: Reservasi dibatalkan & refund 100% diajukan ke gateway.");
                renderReservations();
              }
              appendAiMessage(
                "Asisten AI (Eksekusi Otomatis)",
                `<p><strong>✓ Berhasil dieksekusi (` + "`cancelAndRefundReservation`" + `):</strong> Reservasi <strong>#${activeRes ? activeRes.code : 'NL-YGY-8842'}</strong> telah dibatalkan dan pengembalian dana penuh <strong>${activeRes ? formatRupiah(activeRes.totalAllIn) : 'Rp1.700.000'}</strong> sedang diproses ke metode pembayaran Anda.</p>
                 <p class="mt-1 text-[11px] text-emerald-800 bg-emerald-50 p-2 rounded border border-emerald-200"><strong>Alasan Kebijakan:</strong> Pembatalan dilakukan sebelum batas H-1 pukul 14:00 WIB, sehingga Anda berhak atas Refund 100% tanpa potongan.</p>`,
                false
              );
            } else if (action === "explain-price") {
              appendAiMessage("Anda", "Jelaskan rincian harga all-in reservasi saya.", true);
              appendAiMessage(
                "Asisten AI",
                `<p>Harga <strong>Rp1.700.000 (2 malam)</strong> terdiri dari Tarif Dasar Rp1.404.958 + Biaya Layanan 10% (Rp140.496) + Pajak PB1 11% (Rp154.546). Tidak ada biaya tambahan apa pun saat check-in maupun check-out.</p>`,
                false
              );
            }
          });
        });

        const escalateBtn = document.getElementById("btn-escalate-human");
        if (escalateBtn) {
          escalateBtn.addEventListener("click", () => {
            appendAiMessage(
              "Sistem Eskalasi Cepat (WhatsApp & Live Agent)",
              `<p class="font-bold text-emerald-800">👨‍💼 Anda telah terhubung dengan Staf Resepsionis Senior: Kak Laras (Shift Malam 24/7).</p>
               <p class="mt-1">Seluruh ringkasan percakapan dan kode booking <strong>#NL-YGY-8842</strong> sudah diteruskan otomatis sehingga Anda tidak perlu mengulang penjelasan. Klik tautan WhatsApp langsung: <span class="underline font-bold">wa.me/628112884200</span></p>`,
              false
            );
            showToast("Eskalasi 1-Langkah: Terhubung ke Staf Manusia 24/7!");
          });
        }

        const chatForm = document.getElementById("ai-chat-form");
        if (chatForm) {
          chatForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const inp = document.getElementById("ai-chat-input");
            const text = inp ? inp.value.trim() : "";
            if (!text) return;
            appendAiMessage("Anda", text, true);
            inp.value = "";
            appendAiMessage(
              "Asisten AI NusaLodge",
              `<p>Permintaan Anda (<em>"${text}"</em>) telah dicatat ke tiket dukungan <strong>#SUP-904</strong> dan dikirimkan ke tim operasional Kamar #204. Bila Anda ingin bantuan manusia langsung, klik tombol hijau <strong>Hubungkan Staf WA (1-Langkah)</strong> di atas.</p>`,
              false
            );
          });
        }
      }

      // INITIALIZE APP
      renderProperties();
      renderPropertyDetail();
      renderReservations();
      renderHotelConsents();
      renderAcceptanceChecklist();
      initEvents();
    })();
  