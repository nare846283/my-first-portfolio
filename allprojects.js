function allProjectsData() {
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
      demoUrl:
        "https://nare846283.github.io/Another-Created-Studio-Web-Complete-Home-Page-using-html-css-and-js/",
    },
    {
      name: "Fylla Web",
      technologies: "HTML / CSS",
      videoUrl: "images/fylla web clone.mp4",
      demoUrl:
        "https://nare846283.github.io/fylla-web-clone-home-page-design-using-hmtl-and-css/",
    },
    {
      name: "it.itria Web",
      technologies: "HTML / CSS / JS GSAP",
      videoUrl: "images/it.itria_Trim.mp4",
      demoUrl:
        "https://nare846283.github.io/ri-trovi-complete-home-page-create-using-GSAP-and-scrollTrigger/",
    },
    {
      name: "Custom Cursor Web",
      technologies: "HTML / CSS / JS",
      videoUrl: "images/custom_cursor.mp4",
      demoUrl: "https://nare846283.github.io/Custom-Curser/",
    },
    {
      name: "Oucher Web",
      technologies: "HTML / CSS",
      videoUrl: "images/Oucher Web video.mp4",
      demoUrl: "https://nare846283.github.io/oucher-web-using-html-css-js/",
    },
    {
      name: "Ring Animation Web",
      technologies: "HTML / CSS",
      videoUrl: "images/Ring Animation.mp4",
      demoUrl: "https://animation-ring-using-html-css-animation.vercel.app/",
    },
    // Add other projects similarly
  ];

  // Get the projects container element
  const projectsContainer = document.getElementById("all-projects-container");

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

allProjectsData();
