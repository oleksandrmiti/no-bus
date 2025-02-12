# 🚍 No-Show Bus Cork  
Created by [Oleksandr Mitichkin](https://omiti.net).  
<a href="https://www.buymeacoffee.com/omiti" target="_blank" rel="noopener noreferrer">
<img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=omiti&button_colour=BD5FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" alt="Buy me a coffee" />
</a>
# 📋 Project Overview  
# [nobus.omiti.net](https://nobus.omiti.net/)
No-Show Bus Cork is an open-source project designed to help commuters in Cork report and track missing buses. Inspired by [NoShowBus.ie](https://noshowbus.ie), this project aims to improve public transportation accountability by crowd-sourcing real-time reports of no-show buses.  

This is a first step to improve the bus service in Cork. By gathering information, we can analyze problems and create proper reports backed by collected data. There is a lot space for improvement so I would appreciate your ideas and help in development, this is my first open-search project so feel free to suggest your ideas and contribute.
First improvements could be related to how the data stored and represented, and how we can analyse it.

As this project was inspired by [NoShowBus.ie](https://noshowbus.ie/), I do not claim any authorship over this idea. I believe that the [Dublin Inquirer](https://dublininquirer.com/about-us/) is one of the first, if not the first, to provide the community with a platform to contribute and share their complaints.  

## 🚀 Key Features  
- 🚩 Report missing buses with date, time, location, and reason (Cancelled or Ghost Bus)  
- 📍 Simple UI for easy reporting  
- 🔓 Open-source, privacy-friendly, and cost-efficient
- JSON data available on GET method to /api/public (fields: "busNumber", "date", "time", "location", "reason")

## API
You can get JSON file from api/public that contains all collected data.
Fields are:
- "busNumber": String (Could be changed soon to integer)
- "date": "YYYY:MM:DD"
- "time": "HH:MM"
- "location: String 
- "reason": "Canceled bus" || "Ghost Bus"

# 🚀 Technologies Used  
- **Next.js** - Framework for React applications with SSR support  
- **React** - Front-end library for building UI components  
- **Firebase** - For real-time database and backend functionalities  
- **CSS Modules** - Scoped styling for component-specific CSS  

# 📂 Project Structure  

<br>no-bus/<br>
├── components/          # Reusable UI components (e.g., Navbar)<br>
├── pages/               # Application routes (e.g., index.tsx, about.tsx, api/)<br>
│   ├── api/             # Backend API routes (e.g., report submission)<br>
│   └── _app.tsx         # Custom App component<br>
├── public/              # Static assets (images, icons, etc.)<br>
├── styles/              # CSS modules for styling components<br>
├── utils/               # Utility functions (e.g., Firebase configuration)<br>
├── .env.local           # Environment variables (Firebase credentials, etc.)<br>
├── package.json         # Project metadata and dependencies<br>
└── README.md            # Project documentation (this file)<br>

# ⚡ Getting Started
## 1️⃣ Prerequisites
- Node.js (>=14.x)
- npm, Yarn, or pnpm
## 2️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/no-bus.git
cd no-bus
```
## 3️⃣ Install Dependencies
```bash
npm install
```
# or
```bash
yarn install
```
# or
```bash
pnpm install
```
## 4️⃣ Configure Environment Variables
You can use env.example to see needed variables for local testing. 
I use Firestore db and HCaptcha (mind you captcha won't work on localhost, so you might comment it out while testing).
## 5️⃣ Run the Development Server
```bash
npm run dev
```

Open http://localhost:3000 to view it in your browser.

🚀 Deployment on Vercel
The easiest way to deploy is with Vercel:

Push your code to GitHub.
Go to Vercel, import the project, and follow the setup instructions.
Add the .env variables in Vercel’s dashboard.
Learn more in the Next.js Deployment Documentation.

# 🤝 Contribution Guidelines
Contributions are welcome! 🚀 (I would suggest to use your own firebase setup for local testing and when you're ready push changes.) 
Main branch is connected to Production pipeline and all other branches are set for Development and Preview pipelines. They run automatically after every push.

How to Contribute:

1. Fork this repository.
2. Create a branch 
```bash
git checkout -b feat/your-feature
```
3. Commit your changes
```bash
git commit -m "Add new feature"
```
4. Push to the branch
```bash
git push origin feat/your-feature
```
5. Open a Pull Request.
   
### Contribution Policy:
- [x] Follow the existing code style.
- [x] Keep PRs concise and well-documented.
- [x] Test your changes before submitting.
- [x] Be respectful and constructive in code reviews.
# 📫 Contact
For suggestions, issues, or feedback:
📧 infoformiti@gmail.com

Enjoy using No-Show Bus Cork! 🚍✨
