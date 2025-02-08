# 🚍 No-Show Bus Cork  
Created by [Oleksandr Mitichkin](https://omiti.net).  
<a href="https://www.buymeacoffee.com/omiti" target="_blank" rel="noopener noreferrer">
<img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=omiti&button_colour=BD5FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" alt="Buy me a coffee" />
</a>
# 📋 Project Overview  
No-Show Bus Cork is an open-source project designed to help commuters in Cork report and track missing buses. Inspired by [NoShowBus.ie](https://noshowbus.ie), this project aims to improve public transportation accountability by crowd-sourcing real-time reports of no-show buses.  

This is a first step to improve the bus service in Cork. By gathering information, we can analyze problems and create proper reports backed by collected data. There is a lot space for improvement so I would appreciate your ideas and help in development, this is my first open-search project so feel free to suggest your ideas and contribute.
First improvements could be related to how the data stored and represented, and how we can analyse it.

As this project was inspired by [NoShowBus.ie](https://noshowbus.ie/), I do not claim any authorship over this idea. I believe that the [Dublin Inquirer](https://dublininquirer.com/about-us/) is one of the first, if not the first, to provide the community with a platform to contribute and share their complaints.  

## 🚀 Key Features  
- 🚩 Report missing buses with date, time, location, and reason (Cancelled or Ghost Bus)  
- 📍 Simple UI for easy reporting  
- 🔓 Open-source, privacy-friendly, and cost-efficient  

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
This is not ready yet... As I'm only a student I'm not sure what is the best way to share .env, as it contains APIs.
## 5️⃣ Run the Development Server
```bash
npm run dev
```
# or
```bash
yarn dev
```
# or
```bash
pnpm dev
```
Open http://localhost:3000 to view it in your browser.

🚀 Deployment on Vercel
The easiest way to deploy is with Vercel:

Push your code to GitHub.
Go to Vercel, import the project, and follow the setup instructions.
Add the .env variables in Vercel’s dashboard.
Learn more in the Next.js Deployment Documentation.

# 🤝 Contribution Guidelines
Contributions are welcome! 🚀 (although I didn't provide ready dev pipelines nor secrets to test it locally. I would suggest to use your own firebase setup for local testing and when you're ready push changes. I'll have a look on how to set up one if project will get attention from other devs) 

How to Contribute:

1. Fork this repository.
2. Create a branch 
```bash
git checkout -b feature/your-feature
```
3. Commit your changes
```bash
git commit -m "Add new feature"
```
4. Push to the branch
```bash
git push origin feature/your-feature
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
