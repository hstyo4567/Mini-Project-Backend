import { getAllItems, addItem, updateStock, deleteItem } from './itemService.js';

console.clear();
console.log("==========================================");
console.log("   SISTEM INVENTARIS BARANG (CLI NODE.JS) ");
console.log("==========================================\n");

console.log("1. DAFTAR BARANG AWAL:");
getAllItems();
console.log("------------------------------------------");

console.log("\n2. MENAMBAHKAN BARANG BARU:");
addItem("Keyboard Mechanical", "Aksesori", 8);
getAllItems();
console.log("------------------------------------------");

console.log("\n3. UPDATE STOK BARANG (ID 1):");
updateStock(1, 15);
getAllItems();
console.log("------------------------------------------");

console.log("\n4. MENGHAPUS BARANG (ID 2):");
deleteItem(2);
getAllItems();
console.log("==========================================");