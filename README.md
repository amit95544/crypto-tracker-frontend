
# 📊 Crypto Tracker - MERN Stack Project

> Track live cryptocurrency prices with a beautiful React dashboard, backed by Node.js, MongoDB, and hourly sync via cron jobs.

---

## 🚀 Tech Stack Used

- **Frontend:** React.js (Vite), Axios, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **API:** CoinGecko Public API
- **Scheduler:** node-cron
- **Hosting:**
  - Frontend: Vercel
  - Backend: Render

---

## ⚙️ Setup Instructions

### 🔹 Frontend
```bash
git clone https://github.com/amit95544/crypto-tracker-frontend.git
cd crypto-tracker-frontend
npm install
npm run dev
```

### 🔹 Backend
```bash
git clone https://github.com/amit95544/crypto-tracker-backend.git
cd crypto-tracker-backend
npm install
node index.js
```

> 📝 Create a `.env` file in backend root:
```env
PORT=5000
MONGO_URL=your_mongo_db_uri
```

---

## ⏰ How the Cron Job Works

- `node-cron` is used to schedule an automatic task every hour.
- This task hits the CoinGecko API to fetch the top 10 cryptocurrency data.
- Data is then stored in `historydatas` collection in MongoDB for historical tracking.

---

## 🌐 Deployment Links

- **Live Frontend:** [https://crypto-tracker.vercel.app](https://crypto-tracker.vercel.app)
- **Live Backend API:** [https://crypto-api.onrender.com/api](https://crypto-api.onrender.com/api)

---

## 🧾 Screenshots

### 📸 MongoDB Sample Records:
![MongoDB Sample](./screenshots/mongodb-sample.png)

### 📸 Cron Job Terminal Log:
![Cron Job Running](./screenshots/cron-running.png)

---

## 🙌 Author

**Amit Bharti**  
GitHub: [@amit95544](https://github.com/amit95544)

---

## 📅 Deadline

> 📌 Assignment Submission Due: **16 July 2025 (End of Day)**

---

## ✅ Summary

This project demonstrates a real-time full-stack application with background job automation and cloud deployments. Built using industry standards, it's a professional-grade MERN project ready for production or showcase.

---

🧠 **Thank you for reviewing my project!**
