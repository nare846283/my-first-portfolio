function allProjectsData() {
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

allProjectsData();
