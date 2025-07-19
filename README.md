Markdown

# Saurav Kumar - Personal Portfolio

This is a dynamic and responsive personal portfolio website designed to showcase my skills, projects, and professional journey. Built with React.js, it offers a clean, modern design with interactive elements and a seamless user experience across various devices.

## ✨ Features

* **Dynamic Day/Night Theme:** A toggleable theme switcher provides a comfortable viewing experience. Light mode features a soft, animated beige background with inverted colors from the dark mode palette, while dark mode boasts a deep, tech-inspired gradient.
* **Responsive Design:** Optimized for all screen sizes, from mobile devices to large desktops, ensuring a consistent and accessible layout.
* **Intelligent Navbar:**
    * Stays fixed at the top on scroll for easy navigation.
    * Displays a consistent dark gradient background when at the top of the page.
    * Dynamically changes its background color (to match the main page background) when scrolled, adapting to the active theme (beige in light mode, dark in dark mode).
    * Hamburger menu for mobile navigation.
* **Animated Background:** A subtle, moving background effect in light mode adds a touch of dynamism without distraction.
* **Custom Branding:** Features a custom logo in the Navbar and a personalized favicon in the browser tab.
* **Project Showcase:**
    * Displays featured projects in a responsive grid (2x2 on large screens, 1x1 on smaller devices).
    * Project cards include images/videos (properly scaled to avoid distortion), clear titles, technologies used, and full descriptions.
* **Alternate Section Backgrounds:** Visually distinguishes the Resume and Contact sections with alternating background colors based on the active theme.
* **Interactive Skills Section:** Organizes technical skills into categorized tags.
* **Downloadable Resume:** Provides a direct link to download my professional resume (PDF format).
* **Contact Form:** A functional contact form powered by Formspree for easy communication.
* **Smooth Scrolling:** Navigating between sections is smooth and user-friendly.

## 🚀 Technologies Used

* **Frontend:**
    * **React.js:** A JavaScript library for building user interfaces.
    * **JavaScript (ES6+):** For all application logic.
    * **HTML5 & CSS3:** For structuring and styling the web content.
    * **CSS Variables (Custom Properties):** For efficient and manageable theming.
* **Icons:**
    * **Lucide React:** For various interface icons (e.g., GitHub, Mail, Download).
    * **React Icons:** For social media and theme toggle icons (FaMoon, FaSun, FaBars, FaTimes).
* **Backend (for Contact Form):**
    * **Formspree:** A simple service to handle form submissions without server-side code.

## 📦 Project Structure

The project follows a modular structure for better organization:

my-portfolio/
├── public/
│   ├── assets/                 # Custom Navbar logo
│   ├── saurav_favicon.png      # Your favicon
│   ├── incline.png             # Project images
│   ├── rover.jpeg
│   ├── ai-doctor.jpeg
│   ├── maze.png
│   ├── preview.png             # Resume preview image
│   └── Resume.pdf              # Your downloadable resume
├── src/
│   ├── App.js                  # Main application component, renders Navbar and all sections
│   ├── index.js                # React app entry point
│   ├── index.css               # Global styles, CSS variables for theming, base body styles
│   ├── Navbar.js               # Navbar component
│   ├── Navbar.css              # Navbar specific styles
│   ├── Portfolio.css           # Shared styles for all portfolio sections (Hero, About, etc.)
│   └── components/             # Folder for individual section components
│       ├── Hero.js
│       ├── About.js
│       ├── Skills.js
│       ├── Projects.js
│       ├── Resume.js
│       └── Contact.js
├── package.json                # Project dependencies and scripts
└── README.md


## 🛠️ Installation & Setup

Follow these steps to get a local copy of the project up and running on your machine.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)[Your-GitHub-Username]/[Your-Repository-Name].git
    cd [Your-Repository-Name]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Place your static assets:**
    * Ensure your **favicon (`saurav_favicon.png`)** and **resume PDF (`Resume.pdf`)** are placed directly in the `public/` folder.
    * Create a `public/assets/` folder and place your **Navbar logo (`saurav_logo.jpg`)** inside it.
    * Place your **project images (`incline.png`, `rover.jpeg`, `ai-doctor.jpeg`, `maze.png`)** directly in the `public/` folder (as per current code paths).
    * Place your **resume preview image (`preview.png`)** directly in the `public/` folder.
4.  **Configure Contact Form (Formspree):**
    * Go to [Formspree.io](https://formspree.io/) and create a new form.
    * Copy your form endpoint (e.g., `https://formspree.io/f/yourformid`).
    * Open `src/components/Contact.js` and replace `"https://formspree.io/f/mrblbqww"` with your new Formspree endpoint.
5.  **Update `public/index.html`:**
    * Open `public/index.html` and verify the `<link rel="icon">`, `<link rel="apple-touch-icon">`, and `<title>` tags are correctly pointing to your files and displaying your desired text.

## 🏃 Running the Project

To start the development server:

```bash
npm start
# or
yarn start
This will open the application in your browser at http://localhost:3000.

⚙️ Customization
Content: Edit the text content directly within src/components/Hero.js, src/components/About.js, src/components/Skills.js, src/components/Projects.js, and src/components/Resume.js. Update project details in projectsData array in src/components/Projects.js.

Colors & Theming: All primary colors are managed via CSS variables in src/index.css. Modify the --text-color-primary, --bg-color-primary, --highlight-color, etc., variables within both the :root and html.dark blocks to change the site's entire color scheme.

Images & Media: Update src paths for images in src/components/Projects.js and src/components/Resume.js to point to your own assets in the public/ folder.

Icons: Replace Lucide React icons in components or add/remove them as needed.

🌐 Deployment
This project can be easily deployed to static hosting services like Netlify, Vercel, or GitHub Pages.

Build the project for production:

Bash

npm run build
# or
yarn build
This creates a build folder with optimized static assets.

Deploy build folder: Upload the contents of the build folder to your preferred hosting service.

📞 Contact
Feel free to reach out for collaborations, questions, or just to say hello!

Email: sksingh95700@gmail.com

LinkedIn: https://www.linkedin.com/in/saurav-kumar-estside

GitHub: https://www.google.com/search?q=https://github.com/sauravkumarrr

© 2025 Saurav Kumar. All Rights Reserved.
