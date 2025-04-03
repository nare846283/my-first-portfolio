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
      videoUrl: "https://www.youtube.com/embed/7EgGcuql6z4?autoplay=1&controls=0&mute=1&loop=1&playlist=7EgGcuql6z4",
      demoUrl: "https://nare846283.github.io/sundown-web-home-page/",
      githubUrl: "https://github.com/nare846283/sundown-web-home-page",
    },
    {
      name: "Solvex Problems Solving",
      technologies: "HTML / CSS / JS / React Js",
      videoUrl: "https://www.youtube.com/embed/x8qrdIl0R5I?autoplay=1&controls=0&mute=1&loop=1&playlist=x8qrdIl0R5I",
      demoUrl: "https://solxe-x-only-content.vercel.app/",
      githubUrl: "https://github.com/nare846283/SolxeX_Only_Content",
    },
    {
      name: "ri trovi web",
      technologies: "HTML / CSS / JS / GSAP",
      videoUrl: "https://www.youtube.com/embed/GLn1_z83h1w?autoplay=1&controls=0&mute=1&loop=1&playlist=GLn1_z83h1w",
      demoUrl: "https://nare846283.github.io/ri-trovi-complete-home-page-create-using-GSAP-and-scrollTrigger/",
      githubUrl: "https://github.com/nare846283/ri-trovi-complete-home-page-create-using-GSAP-and-scrollTrigger",
    },
    {
      name: "fylla web",
      technologies: "HTML / CSS",
      videoUrl: "https://www.youtube.com/embed/9vf7hsYmkoA?autoplay=1&controls=0&mute=1&loop=1&playlist=9vf7hsYmkoA",
      demoUrl:
        "https://nare846283.github.io/fylla-web-clone-home-page-design-using-hmtl-and-css/",
      githubUrl: "https://github.com/nare846283/fylla-web-clone-home-page-design-using-hmtl-and-css",
    },
    {
      name: "Vim & Vigour",
      technologies: "HTML / CSS",
      videoUrl: "https://www.youtube.com/embed/WOOoQ5inU2A?autoplay=1&controls=0&mute=1&loop=1&playlist=WOOoQ5inU2A",
      demoUrl:
        "https://nare846283.github.io/Vim-Vigour-web-clone-complete-home-page-design-using-html-css/",
      githubUrl: "https://github.com/nare846283/Vim-Vigour-web-clone-complete-home-page-design-using-html-css",
    },
    {
      name: "Another Web",
      technologies: "HTML / CSS / Js",
      videoUrl: "https://www.youtube.com/embed/-t-DeHeHw2k?autoplay=1&controls=0&mute=1&loop=1&playlist=-t-DeHeHw2k",
      demoUrl: "https://nare846283.github.io/Another-Created-Studio-Web-Complete-Home-Page-using-html-css-and-js/",
      githubUrl: "https://github.com/nare846283/Another-Created-Studio-Web-Complete-Home-Page-using-html-css-and-js",
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
        <iframe 
          src="${project.videoUrl}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          class="project-video"
        ></iframe>
        <div class="project-link">
          <a href="${project.demoUrl}" target="_blank"><i class="ri-eye-fill"></i></a>
          <a href="${project.githubUrl}" target="_blank"><i class="ri-github-fill"></i></a>
        </div>
    
    `;

    projectsContainer.appendChild(projectElement);
  });
}

projectsData();

function toggleMenu() {
  const menuBar = document.querySelector('.menu-bar');
  const lineIcon = document.querySelector('.ri-menu-line');
  const closeIcon = document.querySelector('.ri-close-line');

  lineIcon.addEventListener('click', () => {
    menuBar.style.display = 'block';
    setTimeout(() => menuBar.classList.add('active'), 10);
    lineIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  });

  closeIcon.addEventListener('click', () => {
    menuBar.classList.remove('active');
    setTimeout(() => menuBar.style.display = 'none', 300);
    lineIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  });

  // Close menu on link click
  document.querySelectorAll('.menu-bar a').forEach(link => {
    link.addEventListener('click', () => {
      menuBar.classList.remove('active');
      setTimeout(() => menuBar.style.display = 'none', 300);
      lineIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    });
  });
}

toggleMenu();