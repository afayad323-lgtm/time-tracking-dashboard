# Time Tracking Dashboard

A simple and interactive time-tracking dashboard that allows users to switch between **daily**, **weekly**, and **monthly** reports.
Data is loaded dynamically from a JSON file, and the UI updates instantly based on the selected timeframe.

---

## 🚀 Features
- Dynamic rendering of cards based on JSON data  
- Timeframe switching (Daily – Weekly – Monthly)  
- Clean and responsive layout  
- Simple JavaScript DOM manipulation  

---

## 📁 Project Structure
```
/assets        → images, icons  
/data.json     → time tracking data  
/script.js     → main JavaScript logic  
/style.css     → styling  
index.html     → structure  
```

---

## 🧠 How It Works
- The app fetches `data.json` using `fetch()`.
- When a user clicks a timeframe button, all cards update.
- A ternary operator is used to choose labels like:
  - Yesterday  
  - Last Week  
  - Last Month  

---

## 🛠️ Technologies Used
- HTML  
- CSS  
- JavaScript (DOM + fetch)

---

## 📌 Installation
1. Download the project  
2. Open `index.html` in the browser  
3. Make sure `data.json` is in the correct path  

---

## 📜 License
Free to use for learning and portfolio projects.
