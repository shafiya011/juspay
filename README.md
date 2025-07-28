https://juspay-dashboard-proj.netlify.app/

# Juspay Dashboard – React Project

**Live Demo:** [https://juspay-dashboard-proj.netlify.app/]


## 🚀 Tech Stack

- **React.js**
- **Ant Design (antd)** – UI components.
- **Styled-components** – Scoped CSS styling.
- **Redux Toolkit** – State management.
- **Chart.js** – Data visualization.

## 🚀 Dependancy
- antd
- styled-components
- @reduxjs/toolkit
- react-redux
- chart.js

## ✅ Features

- **Responsive Layout** (Sidebar + Main Content)
- **Dynamic Order List Table**:
  - Search by **ID** or **User Name**
  - Row selection
  - Custom hover effects
- **Dark Mode Toggle**:
  - Managed using Redux
  - Theme-aware UI styling
- **Navigation Menu**:
  - Styled Ant Design menu
  - Icons (PNG fallback where exact match unavailable)
- **Charts Integration**:
  - Doughnut chart with custom labels
  - Mock data placeholders

🔍 Challenges Faced
**Doughnut Chart Curved Segment**

Could not fully replicate the inward curved segment ends using Chart.js v4.
Current implementation is a partial workaround.
Accuracy varies due to mock data.

**Icon Matching**
Some Figma icons were unavailable in Ant Design or Material Icons.
Used PNG icons as placeholders.

**Real-Time Data**
Charts rely on mock data (no API integration yet).
Ready for live data connection.

## ⚙️ How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/<your-repo>.git
cd juspay-dashboard

# 2. Install dependencies
npm install

# 3. Start the development server
npm start

# 4. Open in browser
http://localhost:portnumber






# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
