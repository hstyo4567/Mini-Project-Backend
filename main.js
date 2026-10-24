import { getAllItems, addItem, updateStock, deleteItem } from './itemService.js';

getAllItems();
addItem("Keyboard Mechanical", "Aksesori", 8);
getAllItems();
updateStock(1, 3);
deleteItem(2);
getAllItems();
