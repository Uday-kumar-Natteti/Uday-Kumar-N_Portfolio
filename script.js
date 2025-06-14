// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('sidemenu');
const menuIcon = mobileMenuBtn ? mobileMenuBtn.querySelector('i') : null;



// Mobile Menu Functions
function openmenu() {
  document.getElementById("sidemenu").classList.add("active");
}

function closemenu() {
  document.getElementById("sidemenu").classList.remove("active");
}

// Navbar Scroll Effect
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    closemenu();
  });
});

// Active Navigation Link
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#sidemenu a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Mobile Menu Functions
function openmenu() {
  document.getElementById("sidemenu").classList.add("active");
}

function closemenu() {
  document.getElementById("sidemenu").classList.remove("active");
}

// Navbar Scroll Effect
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    closemenu();
  });
});

// Active Navigation Link
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#sidemenu a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});



function openmenu() {
  navMenu.classList.add('active');
  if (menuIcon) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  }
}

function closemenu() {
  navMenu.classList.remove('active');
  if (menuIcon) {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
}

// Close menu when clicking on a link
document.querySelectorAll('#sidemenu a').forEach(link => {
  link.addEventListener('click', () => {
    closemenu();
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.padding = '15px 0';
    navbar.style.background = 'rgba(10, 10, 10, 0.95)';
  } else {
    navbar.style.padding = '20px 0';
    navbar.style.background = 'rgba(10, 10, 10, 0.9)';
  }
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');

  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (elementPosition < screenPosition) {
      element.style.animationPlayState = 'running';
    }
  });
};

// Initialize animations
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
  animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);

// Button hover effects
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'translateY(-3px)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translateY(0)';
  });
});

// Social link hover effects
document.querySelectorAll('.social-links a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'translateY(-5px) scale(1.1)';
  });

  link.addEventListener('mouseleave', () => {
    link.style.transform = 'translateY(0) scale(1)';
  });
});


// Tab Functionality
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove active class from all tabs
    tabLinks.forEach(l => l.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    // Add active class to clicked tab
    link.classList.add('active');
    const tabId = link.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});

// Initialize first tab as active
document.querySelector('.tab-link').click();

// Animation for timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
const educationItems = document.querySelectorAll('.education-item');

const animateItems = () => {
  const triggerBottom = window.innerHeight / 5 * 4;

  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    }
  });

  educationItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }
  });
};

// Initialize animations
window.addEventListener('load', () => {
  timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'all 0.5s ease';
  });

  educationItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.5s ease';
  });

  animateItems();
});

window.addEventListener('scroll', animateItems);


// Skills Filter Functionality
// const filterButtons = document.querySelectorAll('.filter-btn');
// const skillCards = document.querySelectorAll('.skill-card');

// filterButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     // Remove active class from all buttons
//     filterButtons.forEach(btn => btn.classList.remove('active'));
//     // Add active class to clicked button
//     button.classList.add('active');

//     const filterValue = button.getAttribute('data-filter');

//     // Filter skills
//     skillCards.forEach(card => {
//       if (filterValue === '' || card.getAttribute('data-category') === filterValue) {
//         card.style.display = 'block';
//         card.style.animation = 'fadeIn 0.5s ease forwards';
//       } else {
//         card.style.display = 'none';
//       }
//     });
//   });
// });

// Skills Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

// Set first non-"all" button as active by default
let defaultButton = null;
filterButtons.forEach(button => {
  if (button.getAttribute('data-filter') !== 'all' && !defaultButton) {
    defaultButton = button;
  }
});

if (defaultButton) {
  defaultButton.classList.add('active');
  const defaultFilter = defaultButton.getAttribute('data-filter');
  
  // Show only cards matching the default filter
  skillCards.forEach(card => {
    if (card.getAttribute('data-category') === defaultFilter) {
      card.style.display = 'block';
      card.style.animation = 'fadeIn 0.5s ease forwards';
    } else {
      card.style.display = 'none';
    }
  });
}

filterButtons.forEach(button => {
  // Skip the "all" button
  if (button.getAttribute('data-filter') === 'all') {
    button.style.display = 'none'; // Hide the "all" button
    return;
  }

  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    // Filter skills
    skillCards.forEach(card => {
      if (card.getAttribute('data-category') === filterValue) {
        card.style.display = 'block';
        card.style.animation = 'fadeIn 0.5s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Animate skill bars when scrolled into view
const skillProgressBars = document.querySelectorAll('.skill-progress-bar');

function animateSkillBars() {
  skillProgressBars.forEach(bar => {
    const barPosition = bar.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (barPosition < screenPosition) {
      const width = bar.getAttribute('data-width');
      bar.style.width = width;
      bar.style.transition = 'width 1.5s ease-out';
    }
  });
}

// Initialize skill bars
window.addEventListener('load', () => {
  skillProgressBars.forEach(bar => {
    bar.style.width = '0';
  });
  animateSkillBars();
});

window.addEventListener('scroll', animateSkillBars);

// Add hover effect to skill cards
skillCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.02)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});



// Projects Filter Functionality
const projectFilterButtons = document.querySelectorAll('.projects-filter .filter-btn');
const projectCards = document.querySelectorAll('.project-card');

projectFilterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    projectFilterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    // Filter projects
    projectCards.forEach(card => {
      if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
        card.style.display = 'block';
        card.style.animation = 'fadeIn 0.5s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Project Modal Functionality
const projectModal = document.getElementById('project-modal');
const projectDetailBtns = document.querySelectorAll('.project-details-btn');
const closeModalBtn = document.querySelector('.close-modal');

// Modal Elements
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalTech = document.getElementById('modal-tech');
const modalFeatures = document.getElementById('modal-features');
const modalLiveLink = document.getElementById('modal-live-link');
const modalCodeLink = document.getElementById('modal-code-link');

// Project Data
const projectsData = [
  {
    title: "Personal Portfolio Website",
    description: "A responsive and elegant personal portfolio site...",
    image: "images/Portfolio.png",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive layout for all screen sizes",
      "Smooth navigation with animations",
      "Fully mobile-responsive",
      "Section-wise content: About, Skills, Projects, Certificates, Contact"
    ],
    liveLink: "https://uday-kumar-natteti.github.io/Uday-Kumar-N_Portfolio/",
    codeLink: "https://github.com/Uday-kumar-Natteti/Uday-Kumar-N_Portfolio"
  },
  {
    title: "Network Anomaly Detection",
    description: "Real-time network anomaly detection tool using ML...",
    image: "images/Anomaly.png",
    tech: ["Python", "Flask", "Machine Learning", "React", "JavaScript"],
    features: [
      "Real-time traffic monitoring & anomaly alerts",
      "Flask API backend for ML predictions",
      "React dashboard with visualizations",
      "CSV/JSON log exports & screenshots"
    ],
    liveLink: "https://network-anomaly-skzt.vercel.app/",
    codeLink: "https://github.com/Uday-kumar-Natteti/Network_Anomaly"
  },
  {
    title: "Smart Tourism App",
    description: "Travel companion app offering users nearby attractions...",
    image: "images/Smart_Tourism.png",
    tech: ["React", "Tailwind CSS", "Vite"],
    features: [
      "Real-time suggestions based on user location",
      "Dynamic filters and search",
      "Fast load times with Vite",
      "Mobile-friendly UI"
    ],
    liveLink: "https://smart-tourism-one.vercel.app/",
    codeLink: "https://github.com/Uday-kumar-Natteti/Smart_Tourism"
  },
  {
    title: "Authentication Website",
    description: "A full-stack user authentication system...",
    image: "images/Authorization.png",
    tech: ["Flask", "HTML", "CSS", "JavaScript"],
    features: [
      "Secure login & registration system",
      "Session-based user management",
      "Custom UI with styled forms",
      "Backend logic using Flask"
    ],
    liveLink: "https://your-auth-site-link.com",
    codeLink: "https://github.com/yourusername/auth-website"
  },
  {
    title: "NoteLock",
    description: "A secure note-taking app built with vanilla JavaScript...",
    image: "images/NoteLock.png",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [],
    liveLink: "https://uday-kumar-natteti.github.io/NoteLock/",
    codeLink: "https://github.com/Uday-kumar-Natteti/NoteLock"
  }
];

// Open modal with project details
projectDetailBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const project = projectsData[index];

    // Set modal content
    modalImg.src = project.image;
    modalImg.alt = project.title;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;

    // Set tech tags
    modalTech.innerHTML = '';
    project.tech.forEach(tech => {
      const span = document.createElement('span');
      span.className = 'tech-tag';
      span.textContent = tech;
      modalTech.appendChild(span);
    });

    // Set features
    modalFeatures.innerHTML = '';
    if (project.features.length > 0) {
      project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        modalFeatures.appendChild(li);
      });
    } else {
      modalFeatures.innerHTML = '<li>No listed features.</li>';
    }

    // Set links (hide if empty)
    if (project.liveLink) {
      modalLiveLink.href = project.liveLink;
      modalLiveLink.style.display = 'inline-block';
    } else {
      modalLiveLink.style.display = 'none';
    }

    if (project.codeLink) {
      modalCodeLink.href = project.codeLink;
      modalCodeLink.style.display = 'inline-block';
    } else {
      modalCodeLink.style.display = 'none';
    }

    // Show modal
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// Close modal
function closeModal() {
  projectModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

closeModalBtn.addEventListener('click', closeModal);

// Close on outside click
projectModal.addEventListener('click', (e) => {
  if (e.target === projectModal) {
    closeModal();
  }
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projectModal.classList.contains('active')) {
    closeModal();
  }
});





// // Open modal with project details
// projectDetailBtns.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     const project = projectsData[index];

//     // Set modal content
//     document.getElementById('modal-img').src = project.image;
//     document.getElementById('modal-img').alt = project.title;
//     document.getElementById('modal-title').textContent = project.title;
//     document.getElementById('modal-description').textContent = project.description;

//     // Set tech tags
//     const modalTech = document.getElementById('modal-tech');
//     modalTech.innerHTML = '';
//     project.tech.forEach(tech => {
//       const tag = document.createElement('span');
//       tag.className = 'tech-tag';
//       tag.textContent = tech;
//       modalTech.appendChild(tag);
//     });

//     // Set features
//     const modalFeatures = document.getElementById('modal-features');
//     modalFeatures.innerHTML = '';
//     project.features.forEach(feature => {
//       const li = document.createElement('li');
//       li.textContent = feature;
//       modalFeatures.appendChild(li);
//     });

//     // Set links
//     document.getElementById('modal-live-link').href = project.liveLink;
//     document.getElementById('modal-code-link').href = project.codeLink;

//     // Show modal
//     projectModal.classList.add('active');
//     document.body.style.overflow = 'hidden';
//   });
// });

// // Close modal
// function closeModal() {
//   projectModal.classList.remove('active');
//   document.body.style.overflow = 'auto';
// }

// closeModalBtn.addEventListener('click', closeModal);

// // Close modal when clicking outside content
// projectModal.addEventListener('click', (e) => {
//   if (e.target === projectModal) {
//     closeModal();
//   }
// });

// // Close modal with Escape key
// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape' && projectModal.classList.contains('active')) {
//     closeModal();
//   }
// });


modalLiveLink.addEventListener('click', (e) => {
  const url = modalLiveLink.getAttribute('href');
  if (url && url !== '#') {
    window.open(url, '_blank');
  } else {
    e.preventDefault();
  }
});

modalCodeLink.addEventListener('click', (e) => {
  const url = modalCodeLink.getAttribute('href');
  if (url && url !== '#') {
    window.open(url, '_blank');
  } else {
    e.preventDefault();
  }
});


// Initialize project cards animation
const animateProjectCards = () => {
  const cards = document.querySelectorAll('.project-card');
  const triggerBottom = window.innerHeight / 5 * 4;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('load', () => {
  document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
  });

  animateProjectCards();
});

window.addEventListener('scroll', animateProjectCards);


// Certificates Filter Functionality
const certificateFilterButtons = document.querySelectorAll('.certificates-filter .filter-btn');
const certificateCards = document.querySelectorAll('.certificate-card');

certificateFilterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    certificateFilterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    // Filter certificates
    certificateCards.forEach(card => {
      if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
        card.style.display = 'block';
        card.style.animation = 'fadeIn 0.5s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Certificate Modal Functionality
const certificateModal = document.getElementById('certificate-modal');
const viewCertificateBtns = document.querySelectorAll('.view-certificate-btn');
const closeCertificateModalBtn = document.querySelector('.certificate-modal .close-modal');

// Sample certificate data (replace with your actual certificate data)
const certificatesData = [
  {
    id: 1,
    title: "Python Essential Certification",
    issuer: "Linkedin-Learning",
    date: "July 2023",
    image: "images/Python_Essential.jpg",
    tags: ["Programming", "Python"],
    credentialLink: "#"
  },
  {
    id: 2,
    title: "AWS Cloud Practitioner",
    issuer: "DevSkillHub",
    date: "Apr 2024",
    image: "images/CLOUD COMPUTING.jpg",
    tags: ["Cloud Computing", "AWS"],
    credentialLink: "#"
  },
  {
    id: 3,
    title: "MERN Full Stack",
    issuer: "Edubot Technologies",
    date: "Apr 2025",
    image: "images/MERN-2 mon.jpg",
    tags: ["Full Stack", "MERN", "Vite"],
    credentialLink: "#"
  },
  {
    id: 4,
    title: "Privacy and Security",
    issuer: "NPTEL",
    date: "Apr 2024",
    image: "images/Privacy and Security.jpg",
    tags: ["Network", "Social-media", "Security"],
    credentialLink: "#"
  },
  {
    id: 5,
    title: "Full Stack Web Development",
    issuer: "Innovate Intern",
    date: "Apr 2025",
    image: "images/web_dev_internsip.jpg",
    tags: ["Full Stack", "Database", "Cloud"],
    credentialLink: "#"
  }
];


// Open modal with certificate details
viewCertificateBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const certificate = certificatesData[index];

    // Set modal content
    document.getElementById('modal-certificate-img').src = certificate.image;
    document.getElementById('modal-certificate-img').alt = certificate.title;
    document.getElementById('modal-certificate-title').textContent = certificate.title;
    document.getElementById('modal-certificate-issuer').textContent = certificate.issuer;
    document.getElementById('modal-certificate-date').textContent = certificate.date;
    document.getElementById('modal-certificate-link').href = certificate.credentialLink;

    // Set tags
    const modalTags = document.getElementById('modal-certificate-tags');
    modalTags.innerHTML = '';
    certificate.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'certificate-tag';
      span.textContent = tag;
      modalTags.appendChild(span);
    });

    // Set up download button
    document.getElementById('download-certificate').onclick = () => {
      const link = document.createElement('a');
      link.href = certificate.image;
      link.download = `${certificate.title.replace(/\s+/g, '_')}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    // Set up share button
    document.getElementById('share-certificate').onclick = () => {
      if (navigator.share) {
        navigator.share({
          title: certificate.title,
          text: `Check out my ${certificate.title} certification from ${certificate.issuer}`,
          url: certificate.credentialLink
        }).catch(err => {
          console.log('Error sharing:', err);
        });
      } else {
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out my ${certificate.title} certification from ${certificate.issuer}`)}&url=${encodeURIComponent(certificate.credentialLink)}`;
        window.open(shareUrl, '_blank');
      }
    };

    // Show modal
    certificateModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// Close modal
function closeCertificateModal() {
  certificateModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

closeCertificateModalBtn.addEventListener('click', closeCertificateModal);

// Close modal when clicking outside content
certificateModal.addEventListener('click', (e) => {
  if (e.target === certificateModal) {
    closeCertificateModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && certificateModal.classList.contains('active')) {
    closeCertificateModal();
  }
});

// Initialize certificate cards animation
const animateCertificateCards = () => {
  const cards = document.querySelectorAll('.certificate-card');
  const triggerBottom = window.innerHeight / 5 * 4;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('load', () => {
  document.querySelectorAll('.certificate-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
  });

  animateCertificateCards();
});

window.addEventListener('scroll', animateCertificateCards);



// Form submission to Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbwWMGfF__a-C9gCIkXw0VQ05JrkgEUUJIHPfj-qw9hg4Ph6ScpEQK52yqF7Hqfy3JywXA/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();

  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;

  // Change button text to loading state
  submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
  submitBtn.disabled = true;

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form),
  })
    .then(response => {
      msg.innerHTML = "Message sent successfully";
      msg.classList.add('success');
      msg.classList.remove('error');
      msg.style.display = 'block';

      // Reset form
      form.reset();

      // Reset button to original state
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;

      // Hide success message after 5 seconds
      setTimeout(() => {
        msg.style.display = 'none';
      }, 5000);
    })
    .catch(error => {
      console.error('Error!', error.message);
      msg.innerHTML = "An error occurred. Please try again later.";
      msg.classList.add('error');
      msg.classList.remove('success');
      msg.style.display = 'block';

      // Reset button to original state
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;

      // Hide error message after 5 seconds
      setTimeout(() => {
        msg.style.display = 'none';
      }, 5000);
    });
});

// Form input animations (keep this the same as before)
const formGroups = document.querySelectorAll('.form-group');

formGroups.forEach(group => {
  const input = group.querySelector('input, textarea');

  // Check if input has value on page load
  if (input.value.trim() !== '') {
    group.querySelector('label').style.top = '-20px';
    group.querySelector('label').style.fontSize = '0.8rem';
    group.querySelector('label').style.color = 'var(--primary-color)';
  }

  // Add focus/blur events
  input.addEventListener('focus', () => {
    group.querySelector('.underline').style.width = '100%';
  });

  input.addEventListener('blur', () => {
    if (input.value.trim() === '') {
      group.querySelector('.underline').style.width = '0';
    }
  });
});


// Update Copyright Year Automatically
document.getElementById('copyright-year').textContent = new Date().getFullYear();