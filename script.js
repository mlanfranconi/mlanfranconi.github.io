document.addEventListener("DOMContentLoaded", function() {

    // --- 1. LÓGICA DE TRADUCCIÓN (i18n) ---
    const translations = {
        es: {
            nav_about: "SOBRE MÍ", nav_what_i_do: "QUÉ HAGO", nav_how_i_work: "CÓMO TRABAJO", nav_contact: "HABLEMOS",
            intro_heading: "HOLA,<br>SOY MARTINA",
            intro_p: "Soy Creadora de Contenido y Community Manager. Nací en una era 100% digital y siempre me mantuve actualizada sobre las últimas tendencias. Me encanta crear contenido para marcas y verlas crecer.<br>Soy de Tandil, Bs As, Argentina.",
            what_i_do_heading: "QUÉ HAGO",
            what_i_do_p: "Cuando una marca, producto o servicio se alinea con las necesidades de la audiencia, se crea una comunidad. Mi trabajo es tender un puente entre la marca y su público, para que conecten.<br><br>Me encargo de la comunicación de marcas en el mundo digital, las represento en redes sociales, creando contenido de valor para atraer a su público objetivo y convertirlos en potenciales clientes. La clave está en crear contenido de calidad, estético y que genere interacción. Por eso, mi trabajo consiste en investigar, planificar y crear contenido para cada cliente en particular, adaptándome a sus necesidades y objetivos.",
            how_i_work_heading: "CÓMO TRABAJO",
            step1_heading: "CONSULTORÍA INICIAL", step1_p: "Te haré algunas preguntas para conocer más sobre tu marca, tus objetivos y tu público. Analizaremos juntos el punto de partida.",
            step2_heading: "ACCIÓN", step2_p: "Con la info que recopilamos, crearé el contenido y las estrategias de comunicación para redes sociales.",
            step3_heading: "PRESENTACIÓN DE MÉTRICAS", step3_p: "Elaboraré un informe para que puedas ver el crecimiento y la repercusión de las acciones. ¡Veremos los resultados juntos!",
            contact_heading: "¡HABLEMOS! :)",
        },
        en: {
            nav_about: "ABOUT ME", nav_what_i_do: "WHAT I DO", nav_how_i_work: "HOW I WORK", nav_contact: "LET'S TALK",
            intro_heading: "HI,<br>I'M MARTINA",
            intro_p: "I'm a Content Creator and Community Manager. I was born in a 100% digital era and I have always kept up to date with the latest trends. I love creating content for brands and watching them grow.<br>I'm from Tandil, Bs As, Argentina.",
            what_i_do_heading: "WHAT I DO",
            what_i_do_p: "When a brand, product, or service aligns with the audience's needs, a community is created. My job is to build a bridge between the brand and its audience, so they can connect.<br><br>I manage brand communication in the digital world, representing them on social media by creating valuable content to attract their target audience and turn them into potential customers. The key is to create quality, aesthetic, and engaging content. Therefore, my work consists of researching, planning, and creating content for each client in particular, adapting to their needs and objectives.",
            how_i_work_heading: "HOW I WORK",
            step1_heading: "INITIAL CONSULTATION", step1_p: "I will ask you some questions to learn more about your brand, your goals, and your audience. We will analyze the starting point together.",
            step2_heading: "ACTION", step2_p: "With the information we gather, I will create the content and communication strategies for social media.",
            step3_heading: "METRICS PRESENTATION", step3_p: "I will prepare a report so you can see the growth and impact of the actions. We will see the results together!",
            contact_heading: "LET'S TALK! :)",
        }
    };
    const langSwitcherButton = document.getElementById('lang-switcher-button');
    const langOptions = document.getElementById('lang-options');
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            el.innerHTML = translations[lang][key];
        });
        langSwitcherButton.textContent = lang.toUpperCase();
        localStorage.setItem('language', lang);
    };
    langSwitcherButton.addEventListener('click', (event) => { event.stopPropagation(); langOptions.classList.toggle('show'); });
    langOptions.addEventListener('click', (event) => {
        if (event.target.classList.contains('lang-option')) {
            event.preventDefault();
            const selectedLang = event.target.getAttribute('data-lang');
            setLanguage(selectedLang);
            langOptions.classList.remove('show');
        }
    });
    window.addEventListener('click', () => { if (langOptions.classList.contains('show')) { langOptions.classList.remove('show'); } });
    const userLang = localStorage.getItem('language') || (navigator.language.startsWith('es') ? 'es' : 'en');
    setLanguage(userLang);

    // --- 2. Lógica para animaciones de scroll ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (animatedElements.length > 0) {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    animationObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(element => { animationObserver.observe(element); });
    }

    // --- 3. Lógica del Carrusel Interactivo ---
    const carouselContainer = document.querySelector('.carousel-container');
    const slide = document.querySelector('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    if (slide) {
        let currentIndex = 0;
        const numImages = document.querySelectorAll('.carousel-slide img').length / 2;
        const getImageWidth = () => document.querySelector('.carousel-slide img').clientWidth;
        let autoSlideInterval;
        function goToSlide(index) {
            slide.style.transition = 'transform 0.5s ease-in-out';
            slide.style.transform = 'translateX(' + (-index * getImageWidth()) + 'px)';
        }
        function nextSlide() {
            currentIndex++;
            if (currentIndex >= numImages) {
                goToSlide(currentIndex);
                setTimeout(() => { slide.style.transition = 'none'; currentIndex = 0; goToSlide(currentIndex); }, 500);
            } else { goToSlide(currentIndex); }
        }
        function prevSlide() {
            if (currentIndex <= 0) { slide.style.transition = 'none'; currentIndex = numImages; goToSlide(currentIndex); }
            setTimeout(() => { currentIndex--; goToSlide(currentIndex); }, 10);
        }
        function startAutoSlide() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(prevSlide, 3000);
        }
        nextBtn.addEventListener('click', () => { clearInterval(autoSlideInterval); nextSlide(); startAutoSlide(); });
        prevBtn.addEventListener('click', () => { clearInterval(autoSlideInterval); prevSlide(); startAutoSlide(); });
        carouselContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        carouselContainer.addEventListener('mouseleave', () => startAutoSlide());
        startAutoSlide();
    }
    
    // --- 4. LÓGICA DE NAVEGACIÓN ACTIVA (CORREGIDA) ---
    const sections = document.querySelectorAll('main section[id], main footer[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function updateActiveLink() {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; // Aumentamos el margen para mejor detección
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // --- CORRECCIÓN PARA EL FINAL DE PÁGINA ---
        // Si el usuario llega al final de la página, forzamos que la última sección sea la activa.
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
            currentSectionId = sections[sections.length - 1].id;
        }

        navLinks.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href') === '#' + currentSectionId) {
                link.classList.add('active-link');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('load', updateActiveLink);

});