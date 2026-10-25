import { getAllItems, addItem, updateStock, deleteItem } from './itemService.js';
import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

async function showMenu() {
  console.clear();
  let isRunning = true;
  
  while (isRunning) {
    console.log("\n=== MENU INVENTARIS ===");
    console.log("1. Lihat Data Barang");
    console.log("2. Tambah Barang Baru");
    console.log("3. Update Stok Barang");
    console.log("4. Hapus Barang");
    console.log("0. Keluar");
    
    const choice = await rl.question("\nPilih menu (0-4): ");
    
    switch (choice) {
      case '1':
        getAllItems();
        break;
      case '2':
        const name = await rl.question("Nama barang: ");
        const category = await rl.question("Kategori: ");
        const stock = await rl.question("Jumlah stok: ");
        addItem(name, category, parseInt(stock));
        break;
      case '3':
        const idUpdate = await rl.question("ID barang: ");
        const newStock = await rl.question("Stok baru: ");
        updateStock(parseInt(idUpdate), parseInt(newStock));
        break;
      case '4':
        const idDelete = await rl.question("ID barang yang dihapus: ");
        deleteItem(parseInt(idDelete));
        break;
      case '0':
        console.log("Program selesai.");
        isRunning = false;
        break;
      default:
        console.log("Pilihan tidak valid.");
    }
  }
  rl.close();
}

showMenu();