# capstone_icecream

# 🌐 Frontend Deployment on Vercel

This repository contains the frontend code for our web application, deployed on **Vercel** and integrated with a backend running on a **Droplet** server. The goal of this setup is to make the frontend publicly accessible while ensuring seamless communication with the backend.

---

## 🚀 Deployment Summary

- ✅ Created a new GitHub repository for the frontend.
- ✅ Added all necessary contributors.
- ✅ Transferred frontend code with the correct project structure.
- ✅ Updated backend API link to use the Droplet’s IP address.
- ✅ Verified successful communication between frontend and backend.
- ✅ Deployed the frontend on Vercel and made it publicly accessible.
- ✅ Wrote comprehensive documentation.

---

## 🌐 Live Application

🔗 [https://capstone-icecream.vercel.app](https://capstone-icecream.vercel.app)


## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yashasvini2003/capstone_icecream.git
cd Frontend/my-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a .env file in the root directory with the following:
```bash
NEXT_PUBLIC_BACKEND_API=[http://209.38.150.78](https://icapi.yashasvini.dev/)
```

## 🔌 Backend API Integration
The frontend uses the NEXT_PUBLIC_BACKEND_API environment variable to communicate with the backend. All requests are routed through this variable for easy configurability. Verified using browser developer tools to ensure correct routing. Backend CORS settings must allow requests from the Vercel domain.

### ✅ Deployment on Vercel
Steps:

- Go to https://vercel.com and log in.

- Click "New Project" and select your frontend GitHub repository.

- Set up environment variables in the Vercel dashboard: NEXT_PUBLIC_BACKEND_API=http://209.38.150.78

- Click "Deploy".

After deployment, frontend will be live at a generated Vercel URL.

## 🧪 Testing Criteria

### ✅ Frontend Repository Setup:

- GitHub repo created.

- Contributors added.

- Frontend folder correctly pushed with expected structure.

### ✅ Backend API Integration:

- .env file configured with correct Droplet IP.

- API requests fetch data successfully.

- Verified using browser Network tab.

### ✅ Deployment on Vercel:

- GitHub repository linked to Vercel.

- Deployment completed without errors.

- Frontend publicly accessible.

- Full functionality with live backend confirmed.
