// Ambil parameter index dari URL
const urlParams = new URLSearchParams(window.location.search);
const index = parseInt(urlParams.get('id'));

// Ambil semua data dari localStorage
let dataList = JSON.parse(localStorage.getItem('dataList')) || [];

// Pastikan data tersedia
if (!dataList[index]) {
    alert("Data tidak ditemukan.");
    window.location.href = "index.html";
}

// Isi input dengan data lama
const nameInput = document.getElementById('edit-name');
const ageInput = document.getElementById('edit-age');
const originInput = document.getElementById('edit-origin');
const birthdateInput = document.getElementById('edit-birthdate');

const oldData = dataList[index];
nameInput.value = oldData.name;
ageInput.value = oldData.age;
originInput.value = oldData.origin;
birthdateInput.value = oldData.birthdate;

// Tombol Simpan ditekan
document.getElementById('save-btn').addEventListener('click', () => {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const origin = originInput.value.trim();
    const birthdate = birthdateInput.value;

    if (name && age && origin && birthdate) {
        dataList[index] = { name, age, origin, birthdate };
        localStorage.setItem("dataList", JSON.stringify(dataList));
        alert("Data berhasil disimpan.");
        window.location.href = "tugas.html";
    } else {
        alert("Semua field wajib diisi.");
    }
});