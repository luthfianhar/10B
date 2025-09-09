





/* ==== Aksi Tombol Edit & Hapus ==== */





// Ambil elemen DOM
const addBtn = document.getElementById("add-btn");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const originInput = document.getElementById("origin");
const birthdateInput = document.getElementById("birthdate");
const dataTable = document.getElementById("data-table");

// Ambil data dari localStorage, atau buat array kosong
let dataList = JSON.parse(localStorage.getItem("dataList")) || [];

// Fungsi render
function renderTable() {
    dataTable.innerHTML = '';

    dataList.forEach((data, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${data.name}</td>
            <td>${data.age}</td>
            <td>${data.origin}</td>
            <td>${data.birthdate}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editData(${index})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteData(${index})">Hapus</button>
            </td>
        `;

        dataTable.appendChild(row);
    });
}

// Simpan ke localStorage
function saveToLocalStorage() {
    localStorage.setItem("dataList", JSON.stringify(dataList));
}

// Tombol Tambah ditekan
addBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const origin = originInput.value.trim();
    const birthdate = birthdateInput.value;

    if (name && age && origin && birthdate) {
        dataList.push({ name, age, origin, birthdate });
        saveToLocalStorage();
        clearForm();
        renderTable();
    } else {
        alert("Mohon isi semua field!");
    }
});

// Bersihkan form input
function clearForm() {
    nameInput.value = '';
    ageInput.value = '';
    originInput.value = '';
    birthdateInput.value = '';
}

// Fungsi Hapus
function deleteData(index) {
    if (confirm("Yakin ingin menghapus data ini?")) {
        dataList.splice(index, 1);
        saveToLocalStorage();
        renderTable();
    }
}

// Fungsi Edit
function editData(index) {
    const item = dataList[index];
    const newName = prompt("Edit Nama:", item.name);
    const newAge = prompt("Edit Umur:", item.age);
    const newOrigin = prompt("Edit Asal:", item.origin);
    const newBirthdate = prompt("Edit Tanggal Lahir:", item.birthdate);

    if (newName && newAge && newOrigin && newBirthdate) {
        dataList[index] = {
            name: newName,
            age: newAge,
            origin: newOrigin,
            birthdate: newBirthdate
        };
        saveToLocalStorage();
        renderTable();
    }
}

// Saat pertama kali halaman dibuka
renderTable();


function editData(index) {
    // Arahkan ke halaman edit.html dengan parameter index di URL
    window.location.href = `edit.html?id=${index}`;
}






