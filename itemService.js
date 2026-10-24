import { items } from './data.js';

export const getAllItems = () => {
  console.log("\n=== DAFTAR INVENTARIS BARANG ===");
  items.forEach((item) => {
    const { id, name, category, stock } = item; 
    console.log(`[ID: ${id}] ${name} | Kategori: ${category} | Stok: ${stock}`); 
  });
};

export const addItem = (name, category, stock) => {
  const newObj = { name, category, stock };
  const newItem = {
    id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
    ...newObj 
  };
  items.push(newItem);
  console.log(`\n Barang "${name}" berhasil ditambahkan!`);
};

export const updateStock = (id, newStock) => {
  const item = items.find((i) => i.id === id); 
  if (item !== undefined) { 
    item.stock = newStock;
    console.log(`\n Stok barang ID ${id} diperbarui menjadi ${newStock}.`);
  }
};

export const deleteItem = (id) => {
  const isExist = items.some((i) => i.id === id); 
  if (!isExist) { 
    console.log(`\n Error: Barang ID ${id} tidak ditemukan.`);
    return;
  }
  const index = items.findIndex((i) => i.id === id);
  const deleted = items.splice(index, 1);
  console.log(`\n Barang "${deleted[0].name}" berhasil dihapus.`);
};