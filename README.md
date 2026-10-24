judul proyek:
Sistem Manajemen Inventaris Barang (CLI)

Format Data:
Data inventaris disimpan dalam bentuk Array of Objects dengan struktur berikut:
- `id` (Number): ID unik barang
- `name` (String): Nama barang
- `category` (String): Kategori barang
- `stock` (Number): Jumlah stok barang

Penjelasan Function CRUD
1. **Create (`addItem`)**: Menambahkan data barang baru ke dalam array menggunakan method `.push()`.
2. **Read (`getAllItems`)**: Menampilkan seluruh daftar inventaris barang yang tersimpan menggunakan perulangan `.forEach()`.
3. **Update (`updateStock`)**: Mencari data barang berdasarkan ID menggunakan `.find()`, lalu memperbarui nilai stoknya.
4. **Delete (`deleteItem`)**: Mencari posisi indeks barang berdasarkan ID menggunakan `.findIndex()`, kemudian menghapus entri data menggunakan `.splice()`.
   
Gambaran Umum (Deskripsi)
Aplikasi CLI sederhana untuk mengelola data inventaris barang (stok gudang) menggunakan Node.js. Program ini mengimplementasikan operasi CRUD (Create, Read, Update, Delete) dengan penyimpanan data berbasis Array of Objects serta menerapkan prinsip modularisasi ES6 Modules.

Cara Menjalankan Program (How to Run)
1. Buka terminal pada direktori proyek.
2. Jalankan perintah berikut:
   ```bash
   node main.js
  
