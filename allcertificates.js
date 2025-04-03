function allCertificatesData() {
  const allCertificates = [
    {
      name: "HTML",
      technologies: "HTML Certificat",
      imgUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-a536875f-061a-4cfa-bfb9-3dc4c249fd14.jpg",
      demoUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-a536875f-061a-4cfa-bfb9-3dc4c249fd14.jpg",
    },
    {
      name: "HTML5 & CSS3",
      technologies: "HTML5 & CSS3 Certificat",
      imgUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-13282ea5-0a91-4dd3-9691-a0020bff9a45.jpg",
      demoUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-13282ea5-0a91-4dd3-9691-a0020bff9a45.jpg",
    },
    {
      name: "Js & JS ES6",
      technologies: "Js & JS ES6 Certificat",
      imgUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-9fc2b6bb-2cc9-4ee0-9595-f7fa30986050.jpg",
      demoUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-9fc2b6bb-2cc9-4ee0-9595-f7fa30986050.jpg",
    },
    {
      name: "React Js",
      technologies: "React Js Certificat",
      imgUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-9fc2b6bb-2cc9-4ee0-9595-f7fa30986050.jpg",
      demoUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-9fc2b6bb-2cc9-4ee0-9595-f7fa30986050.jpg",
    },
    {
      name: "JavaScript JQuery",
      technologies: "JavaScript JQuery Certificat",
      imgUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-4962d5a1-a52c-40c7-9de1-5139c96dc484.jpg",
      demoUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-4962d5a1-a52c-40c7-9de1-5139c96dc484.jpg",
    },
    {
      name: "Python & Django",
      technologies: "Python & Django Certificat",
      imgUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-c5ff3738-9874-497f-824d-8ddc40aff5f4.jpg",
      demoUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-c5ff3738-9874-497f-824d-8ddc40aff5f4.jpg",
    },
    {
      name: "Python & Flask",
      technologies: "Python & Flask Certificat",
      imgUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-99d1f229-90a7-427c-88bb-ac1b219844ce.jpg",
      demoUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-99d1f229-90a7-427c-88bb-ac1b219844ce.jpg",
    },
    {
      name: "FRONT-END",
      technologies: "HTML, CSS, JS depth knowledge Certificat",
      imgUrl:
        "images/frontend-certificates.jpg",
      demoUrl:
        "images/frontend-certificates.jpg",
    },
    {
      name: "Android Apps",
      technologies: "Android Apps Certificat",
      imgUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-f35e9462-a8cc-4706-969f-b63a407b5268.jpg",
      demoUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-f35e9462-a8cc-4706-969f-b63a407b5268.jpg",
    },
    // Add other allCertificates similarly
  ];

  // Get the allCertificates container element
  const allCertificatesContainer = document.getElementById(
    "all-certificates-container"
  );

  // Loop through the allCertificates and create HTML for each
  allCertificates.forEach((certificate) => {
    const certificateElement = document.createElement("div");
    certificateElement.classList.add("project");

    certificateElement.innerHTML = `
  
        <div class="project-text">
            <h2 class="project-name">${certificate.name}</h2>
            <h4 class="project-technologies">${certificate.technologies}</h4>
        </div>
        <img src="${certificate.imgUrl}" alt="img" />
        <a href="${certificate.demoUrl}" class="certificates-link" target="_blank">View Demo</a>
    
    `;

    allCertificatesContainer.appendChild(certificateElement);
  });
}

allCertificatesData();
