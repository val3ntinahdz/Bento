# spaceline-client-hub

# Spaceline Client Hub 🚀

**Spaceline Client Hub** is a lightweight internal SaaS platform designed for creative and development agencies to manage their project pipelines, client data, and proposal tracking. Built with modern frontend architecture and designed for scalability, this project serves as a streamlined client portal demo.

---

## Purpose & scope

This application simulates a minimal version of a CRM-like system tailored to client agencies. It focuses on:
- Project creation and management
- Client database handling
- Dynamic interactions through Vanilla JavaScript
- Scalability via modular code organization

---

## Tech stack

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Build tool**: [Vite](https://vitejs.dev/)
- **Fake backend**: JSON Server

---

## Features

Client Creation -> Add, view, edit, and delete client entries 
Project Management -> Link projects to clients, update status 
Dashboard Overview -> View key metrics and filter by status 
Responsive Layout -> Mobile-first design 
JSON Server Integration -> Simulated backend with CRUD operations 

---

## Getting started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/spaceline-client-hub.git
cd spaceline-client-hub
```
2. Install Dependencies
```bash
npm install
```
4. Start JSON Server
```bash
npx json-server --watch db.json --port 3000
```
5. Run Vite Dev Server
```bash
npm run dev
```

btw, the app will be running at http://localhost:5173

Project structure
📁 src/
├── 📁 components/
│   ├── ClientCard.js
│   ├── ProjectCard.js
│   └── Modal.js
├── 📁 pages/
│   ├── Dashboard.js
│   └── ClientList.js
├── 📁 services/
│   └── api.js
├── index.html
└── main.js

Learning goals!
1. Deepen JS fundamentals (event handling, DOM manipulation, async/await)
2. Practice project scalability and modularity
3. Simulate real-world API interactions
4. Build logic-heavy UI flows (client/project relationships)

What makes this stand out?
✅ Built as a mini SaaS platform
✅ Professional code structure and naming conventions
✅ Uses a realistic client–project model
✅ Ideal for job interviews to discuss component logic, state management, and clean JS

Future enhancements (optional)
- Add filtering, sorting, and search features
- Connect to a real backend 
- Include authentication logic
- Export project reports as PDF

📸 Demo
Coming soon...

Created by
Valentina - valentinaleonh8@gmail.com
Full-Stack Dev | Aspiring SWE 
https://www.linkedin.com/in/valentina-le%C3%B3n-hern%C3%A1ndez-9759702a2/
