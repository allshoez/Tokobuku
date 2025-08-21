// Import modul Firestore
const { initializeApp } = firebase;
const { getFirestore, collection, getDocs } = firebase.firestore;

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Ambil tabel body
const tbody = document.querySelector("#terlarisTable tbody");

async function loadTerlaris() {
  const snapshot = await getDocs(collection(db, "catatan"));
  const data = {};

  snapshot.forEach(doc => {
    const d = doc.data();
    const nama = d.namaBarang;
    const pcs = parseInt(d.jumlah || 0);
    const harga = parseInt(d.total || 0);
    const laba = parseInt(d.laba || 0);

    if (!data[nama]) {
      data[nama] = { pcs: 0, harga: 0, laba: 0 };
    }
    data[nama].pcs += pcs;
    data[nama].harga += harga;
    data[nama].laba += laba;
  });

  // Ubah ke array & sort by pcs desc
  const hasil = Object.entries(data).map(([nama, v]) => ({
    nama, ...v
  })).sort((a, b) => b.pcs - a.pcs);

  // Tampilkan ke tabel
  tbody.innerHTML = "";
  hasil.forEach((item, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${item.nama}</td>
      <td>${item.pcs}</td>
      <td>${item.harga.toLocaleString()}</td>
      <td>${item.laba.toLocaleString()}</td>
    `;
    tbody.appendChild(tr);
  });
}

loadTerlaris();