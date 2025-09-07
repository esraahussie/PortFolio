// script.js

// ====================== بيانات المشاريع ======================
const projects = [
  {
    name: 'Recipes App with AI integration',
    cover: 'assets/images/project1.jpg',
    blurb: 'A food recipes management app with AI integration for smart suggestions.',
    details: [
      {
        title: 'Architecture & State Management',
        points: [
          'Clean Architecture & MVVM Pattern',
          'BLoC state management, Agile Scrum Framework'
        ]
      },
      {
        title: 'Onboarding & Splash Screens',
        points: ['Splash & onboarding for new users']
      },
      {
        title: 'Authentication & Profile',
        points: ['User login/registration and profile management']
      },
      {
        title: 'Home & Recipe Suggestions',
        points: [
          'Search, top recipes, AI personalized suggestions, filtering by type/difficulty/ingredients'
        ]
      },
      {
        title: 'Recipe Details & Favorites',
        points: ['Summary, ingredients, directions, favorites management']
      },
      {
        title: 'Add & Notifications',
        points: ['Add new recipes and notifications for new content']
      }
    ],
    github: 'https://github.com/esraahussie/Final-Project-Flutter-Intern'
  },
  {
    name: 'Recipes Website with Django',
    cover: 'assets/images/project2.jpg',
    blurb: 'Full-stack website built with Django (custom APIs) + HTML/CSS/JS frontend.',
    details: [
      {
        title: 'Core Features',
        points: [
          'Browse trending meals',
          'Advanced search by name/ingredients',
          'Favorites system'
        ]
      },
      {
        title: 'Auth & Roles',
        points: [
          'User/Admin registration',
          'Role-based login',
          'Admin dashboard (add/edit/delete recipes)'
        ]
      },
      {
        title: 'Tech Stack',
        points: [
          'Django with custom APIs',
          'Frontend: HTML, CSS, JavaScript',
          'Responsive interactive UI'
        ]
      },
      {
        title: 'Why It Stands Out',
        points: [
          'Complete full-stack',
          'Real API integration',
          'Clean & user-friendly design'
        ]
      }
    ],
    github: 'https://github.com/aminamohy/Recipe-_Finder_IN_DJANGO'
  },
  {
    name: 'Uber-Like Website',
    cover: 'assets/images/project3.jpg',
    blurb: 'ASP.NET graduation project with real-time rides, payments, and admin dashboard.',
    details: [
      {
        title: 'Main Features',
        points: [
          'Real-time ride handling with SignalR',
          'Interactive maps (Leaflet.js)',
          'Dynamic content with AJAX',
          'Secure payments via Stripe',
          'Roles: Admins, Drivers, Passengers',
          'EF Core database integration',
          'Full Admin dashboard (management & analytics)'
        ]
      }
    ],
    github: 'https://github.com/esraahussie/Final-Project-ITI/tree/master'
  },
  {
    name: 'Weather App with API',
    cover: 'assets/images/project4.jpg',
    blurb: 'Flutter app showing real-time weather by city/governorate + 5-day forecast.',
    details: [
      {
        title: 'API Integration',
        points: [
          'Real-time weather by city/governorate',
          'Accurate 5-day forecasts'
        ]
      },
      {
        title: 'User Interface',
        points: ['Clean & modern UI', 'Easy navigation and UX']
      },
      {
        title: 'Features',
        points: [
          'Current temp/humidity/conditions',
          'Upcoming days forecast',
          'Error handling (offline/invalid)'
        ]
      }
    ],
    github: 'https://github.com/esraahussie/Flutter_Intern'
  }
];

// ====================== بيانات الشهادات ======================
const certifications = [
  {
    title: 'ECPC 2024',
    imagePath: 'assets/images/ecpc.jpg',
    details:
      'Participated in the 2024 ECPC Qualifications Collegiate Programming Contest.\n\nRepresented Cairo University – Faculty of Computers and Artificial Intelligence.'
  },
  {
    title: 'Flutter Internship – Cellula Technologies',
    imagePath: 'assets/images/Cellula.jpg',
    details:
      'Successfully completed a Flutter Internship.\n\nDeveloped real-world projects, including weather prediction and meal recommendation apps.\n\nApplied Flutter with AI integration and followed agile methodologies.'
  },
  {
    title: 'SprintUp – Mobile Development by Flutter',
    imagePath: 'assets/images/sprints.jpg',
    details:
      'Completed a Mobile Development training program powered by Sprints.\n\nHands-on experience in building mobile applications using Flutter.'
  },
  {
    title: 'SBS – Programming Delegate',
    imagePath: 'assets/images/sbs.jpg',
    details:
      'Attended SBS sessions focusing on Flutter development.\n\nSuccessfully completed a project as a Flutter Delegate.\n\nGained teamwork and problem-solving experience.'
  }
];

// ====================== التهيئة عند تحميل الصفحة ======================
document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();        // القائمة الجانبية للجوال
  initSmoothScrolling();   // التنقل السلس
  initScrollAnimations();  // تأثيرات الظهور
  loadProjects();          // تحميل المشاريع
  loadCertifications();    // تحميل الشهادات
  initContactForm();       // نموذج التواصل
  initHoverEffects();      // تأثيرات الأزرار
  initHeroButtons();       // أزرار البطل
  initCardHoverEffects();  // تأثيرات البطاقات
});

// ====================== القائمة الجانبية للجوال ======================
function initMobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('mobile-menu-hidden');
      mobileMenu.classList.toggle('mobile-menu-visible');
    });

    // إغلاق القائمة عند النقر على رابط
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('mobile-menu-hidden');
        mobileMenu.classList.remove('mobile-menu-visible');
      });
    });
  }
}

// ====================== التنقل السلس ======================
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-link, .menu-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ====================== تأثيرات الظهور ======================
function initScrollAnimations() {
  const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('.section, .hero-section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
  });

  const cards = document.querySelectorAll('.capability-card, .skill-category, .certification-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
    observer.observe(card);
  });
}

// ====================== تحميل المشاريع ======================
function loadProjects() {
  const projectsContainer = document.querySelector('.projects-container');
  if (!projectsContainer) return;

  projects.forEach((project, index) => {
    const reverse = index % 2 !== 0;
    const projectElement = createProjectElement(project, reverse);
    projectsContainer.appendChild(projectElement);
  });
}

// إنشاء عنصر مشروع
function createProjectElement(project, reverse) {
  const projectCard = document.createElement('div');
  projectCard.className = 'project-card';

  projectCard.innerHTML = `
    <div class="project-content ${reverse ? 'reverse-layout' : ''}">
      <div class="project-image">
        <img src="${project.cover}" alt="${project.name}">
      </div>
      <div class="project-details">
        <h3>${project.name}</h3>
        <p>${project.blurb}</p>
        <div class="project-buttons">
          <button class="project-btn primary-btn details-btn">Details</button>
          <button class="project-btn outline-btn github-btn">
            <span class="material-icons">open_in_new</span> GitHub
          </button>
        </div>
        <div class="project-features" style="display: none;">
          ${project.details.map(detail => `
            <div class="feature-group">
              <h4>${detail.title}</h4>
              ${detail.points.map(point => `
                <div class="feature-point">
                  <span class="material-icons">check_circle_outline</span>
                  <span>${point}</span>
                </div>
              `).join('')}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  const detailsBtn = projectCard.querySelector('.details-btn');
  const githubBtn = projectCard.querySelector('.github-btn');
  const featuresSection = projectCard.querySelector('.project-features');

  detailsBtn.addEventListener('click', function () {
    const isVisible = featuresSection.style.display === 'block';
    featuresSection.style.display = isVisible ? 'none' : 'block';
    detailsBtn.textContent = isVisible ? 'Details' : 'Hide Details';
  });

  githubBtn.addEventListener('click', function () {
    window.open(project.github, '_blank');
  });

  return projectCard;
}

// ====================== تحميل الشهادات ======================
function loadCertifications() {
  const certificationsContainer = document.querySelector('.certifications-grid');
  if (!certificationsContainer) return;

  certifications.forEach(certification => {
    const certElement = createCertificationElement(certification);
    certificationsContainer.appendChild(certElement);
  });
}

function createCertificationElement(certification) {
  const certCard = document.createElement('div');
  certCard.className = 'certification-card';

  certCard.innerHTML = `
    <div class="certification-image">
      <img src="${certification.imagePath}" alt="${certification.title}">
    </div>
    <h3>${certification.title}</h3>
    <p>${certification.details}</p>
  `;
  return certCard;
}

// ====================== نموذج التواصل ======================
const contactForm = document.getElementById('contact-form');
const popupOverlay = document.getElementById('popup-overlay');
const msgBox = document.getElementById('form-message');
const closePopup = document.getElementById('close-popup');

if (contactForm) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        msgBox.textContent = "✅ Your message has been sent successfully! I will get back to you soon ✨";
        popupOverlay.classList.add("show");
        contactForm.reset();
      } else {
        msgBox.textContent = "⚠️ Something went wrong, please try again 🙏";
        popupOverlay.classList.add("show");
      }
    } catch (error) {
      msgBox.textContent = "❌ Connection error, please try later 😢";
      popupOverlay.classList.add("show");
    }
  });
}

closePopup.addEventListener('click', () => {
  popupOverlay.classList.remove("show");
});

// ====================== تأثيرات التمرير للأزرار ======================
function initHoverEffects() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', function () {
      this.style.background = 'var(--gradient-primary)';
      this.style.color = 'var(--text-primary)';
      this.style.boxShadow = '0 0 20px rgba(0, 209, 255, 0.8)';
    });
    link.addEventListener('mouseleave', function () {
      this.style.background = '';
      this.style.color = 'var(--text-secondary)';
      this.style.boxShadow = '';
    });
  });

  const buttons = document.querySelectorAll('.project-btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.05)';
      this.style.boxShadow = '0 0 20px rgba(77, 163, 255, 0.5)';
    });
    button.addEventListener('mouseleave', function () {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
}

// ====================== تأثيرات البطاقات ======================
function initCardHoverEffects() {
  const cards = document.querySelectorAll('.capability-card, .skill-category, .certification-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-10px) scale(1.03)';
      this.style.boxShadow = '0 15px 30px rgba(77, 163, 255, 0.3)';
    });
    card.addEventListener('mouseleave', function () {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
}
// دالة للتنقل للسكتورز بالSmooth Scroll
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// ====================== أزرار البطل ======================
function initHeroButtons() {
  const discoverBtn = document.querySelector('.discover-btn');
  const contactBtn = document.querySelector('.contact-btn');
  const cvBtn = document.querySelector('.cv-btn');

  if (discoverBtn) {
    discoverBtn.addEventListener('click', () => scrollToSection('about'));
  }
  if (contactBtn) {
    contactBtn.addEventListener('click', () => scrollToSection('contact'));
  }
  if (cvBtn) {
    cvBtn.addEventListener('click', () => {
      window.open(
        'https://drive.google.com/file/d/1NoPp1F07ZPFVYHOUyNIXPNwpJ16sMrel/view?usp=drivesdk',
        '_blank'
      );
    });
  }
}

// تفعيل الأزرار بعد تحميل الصفحة
window.addEventListener('DOMContentLoaded', initHeroButtons);


// ====================== التمرير لقسم معين ======================
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: 'smooth'
    });
  }
}
