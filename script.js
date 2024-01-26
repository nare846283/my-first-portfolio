const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [90, 80, 40, 30, 30, 60, 50, 30, 25, 25, 22, 20];

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      navbarLinks[i].classList.add("change");
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
};

mainFn();

window.addEventListener("resize", () => {
  window.location.reload();
});

function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var subject = "New Contact Form Submission";
  var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

  // Replace 'your_email@example.com' with the actual recipient email address
  var recipientEmail = "narendraahirwar37@gmail.com";

  var mailtoLink =
    "mailto:" +
    recipientEmail +
    "?subject=" +
    subject +
    "&body=" +
    encodeURIComponent(body);

  // Open default email client to send the email
  window.location.href = mailtoLink;
}

function projectsData() {
  const projects = [
    {
      name: "Sundown Web Page",
      technologies: "HTML / CSS / JS / SwipperJs",
      videoUrl: "images/sundown.mp4",
      demoUrl: "https://nare846283.github.io/sundown-web-home-page/",
    },
    {
      name: "Netflix Clone Web",
      technologies: "HTML / CSS / JS",
      videoUrl: "images/Netflix Web .mp4",
      demoUrl: "https://nare846283.github.io/netflix-clone-using-html-css-jss/",
    },
    {
      name: "Amazone Web Clone",
      technologies: "HTML / CSS / JS / SwipperJs",
      videoUrl: "images/amazone clone home page.mp4",
      demoUrl: "https://nare846283.github.io/amazone-clone-using-html-css-jaa/",
    },
    {
      name: "Start Globle Website",
      technologies: "HTML / CSS",
      videoUrl: "images/StartGlobal Web.mp4",
      demoUrl:
        "https://nare846283.github.io/startgloble-web-clone-complete-home-page-created-using-html-css/",
    },
    {
      name: "Vim & Vigour",
      technologies: "HTML / CSS / JS",
      videoUrl: "images/vim and vigour.mp4",
      demoUrl:
        "https://nare846283.github.io/Vim-Vigour-web-clone-complete-home-page-design-using-html-css/",
    },

    {
      name: "Another Web",
      technologies: "HTML / CSS",
      videoUrl: "images/another.mp4",
      demoUrl: "https://nare846283.github.io/sundown-web-home-page/",
    },
    // Add other projects similarly
  ];

  // Get the projects container element
  const projectsContainer = document.getElementById("projects-container");

  // Loop through the projects and create HTML for each
  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");

    projectElement.innerHTML = `
  
        <div class="project-text">
            <h2 class="project-name">${project.name}</h2>
            <h4 class="project-technologies">${project.technologies}</h4>
        </div>
        <video autoplay muted loop>
              <source src="${project.videoUrl}" type="video/mp4">
        </video>
        <a href="${project.demoUrl}" class="project-link" target="_blank">View Demo</a>
    
    `;

    projectsContainer.appendChild(projectElement);
  });
}

projectsData();
