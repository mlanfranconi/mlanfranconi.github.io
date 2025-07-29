document.addEventListener("DOMContentLoaded", function() {

    // --- LÓGICA DEL HEADER AL HACER SCROLL ---
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }


    // --- 1. LÓGICA DE TRADUCCIÓN (i18n) --- 
    const translations = {
        es: {
            nav_why: "POR QUÉ HYPE",
            nav_how_it_works: "CÓMO FUNCIONA",
            nav_organizer: "QUIÉN ESTÁ DETRÁS",
            nav_contact: "¡HABLEMOS!",
            hero_headline: "ENCUENTROS QUE<br>TRANSFORMAN EQUIPOS", 
            hero_subheadline: "PLANIFICACIÓN DE COMPANY RETREATS CON <strong>PROPÓSITO, IMPACTO Y CONEXIÓN HUMANA</strong>,<br>EN LOS MEJORES DESTINOS DE LATINOAMÉRICA.",
            why_title: "POR QUÉ HYPE",
            feature1_title: "Ahorra tiempo (¡y estrés!)",
            feature1_text: "Planificar un company retreat no tiene por qué ser una carga. Me ocupo de todo –de punta a punta: desde la logística hasta la agenda y la implementación. Todo está pensado para que el equipo solo tenga que llegar, relajarse y disfrutar.",
            feature2_title: "Experiencia comprobada",
            feature2_text: "Con encuentros organizados para 10 a 60 personas, de líderes y de equipos completos, en distintos formatos y destinos, aprendí qué funciona (y qué no), y cómo hacer que todo fluya.",
            feature3_title: "100% personalizado",
            feature3_text: "Cada encuentro se arma a medida, según el momento de la organización, su cultura y sus desafíos. Con un enfoque estratégico y creativo, diseño una agenda que combina espacios de trabajo, con momentos de conexión y disfrute, sin fórmulas prefabricadas.",
            feature4_title: "Rentable",
            feature4_text: "Negocio cada parte del presupuesto para ofrecer el mayor valor por el menor costo. Todo está claro, detallado y sin sorpresas.",
            feature5_title: "Destinos que inspiran",
            feature5_text: "Cada lugar se elige con mucho cuidado y criterio: entornos rodeados de naturaleza, buena conectividad, alojamiento de calidad, espacios funcionales y experiencias únicas.",
            feature6_title: "Acompañamiento real",
            feature6_text: "Antes, durante y después. Estoy ahí, paso a paso, cuidando cada detalle para que todo salga perfecto.",
            how_it_works_title: "¿Cómo funciona?",
            step1_heading: "1. CONSULTORÍA ESTRATÉGICA",
            step1_p: "Nos sentamos a entender qué necesita tu equipo hoy. Hago un diagnóstico de la cultura y los desafíos actuales, y a partir de ahí definimos juntos los objetivos del encuentro y el concepto que nos va a guiar todo el camino.",
            step2_heading: "2. DISEÑO DE LA EXPERIENCIA",
            step2_p: "Me encargo de todo, de punta a punta. Encuentro el destino ideal, diseño la agenda y propongo actividades alineadas con los objetivos. Coordino la logística y los proveedores, para que no tengas que preocuparte por nada.",
            step3_heading: "3. IMPLEMENTACIÓN PRESENCIAL",
            step3_p: "Acompaño al equipo durante el encuentro. Llevo los tiempos, facilito las dinámicas y cuido cada detalle para que la experiencia fluya de principio a fin. Soy una más, dedicada a que todo salga increíble.",
            organizer_title: "¿Quién está detrás?",
            organizer_subtitle: "¡Yo, Martina!",
            organizer_p1: "Hace 10 años que trabajo en IT, construyendo culturas, acompañando equipos y diseñando experiencias que hacen del trabajo algo más <strong>humano y disfrutable</strong>. Siempre me movió lo mismo: conectar con las personas y crear espacios donde se sientan escuchadas, acompañadas, valoradas y libres de ser ellas mismas.",
            organizer_p2: "Desde hace 5 años, lo hago con la computadora en la mochila mientras recorro el mundo.",
            organizer_p3: "<strong>Hoy combino todo lo que aprendí en mi recorrido por People Experience con mi pasión por viajar, para darle vida a Hype.</strong> Lo hago con una mirada estratégica, que me permite entender qué necesita un equipo para funcionar mejor, y con la experiencia de haber liderado equipos y organizado viajes alrededor del mundo. Y también lo hago desde lo que soy, en esencia: sociable, enérgica, creativa, curiosa y aventurera.",
            contact_title: "¡Hablemos!",
            contact_intro: "<strong>¿Querés planear un company retreat épico?</strong> Completá el formulario y me pongo en contacto con vos para agendar una llamada de 15 minutos. Así podés contarme qué tenés en mente, y te ayudo a hacerlo realidad.",
            form_name: "Nombre completo",
            form_email: "Email",
            form_company: "Nombre de la empresa",
            form_participants: "Cantidad estimada de participantes",
            form_budget: "Presupuesto estimado del viaje",
            form_dates: "Fechas tentativas del viaje",
            form_message: "¿Querés sumar algo más?",
            form_message_desc: "¡Cuantos más detalles, mejor! Si ya organizaste un retreat antes, podés contarme qué te gustó (o qué no). También podés mencionar tu destino ideal.",
            form_submit: "Enviar",
        },
        en: {
            nav_why: "WHY HYPE",
            nav_how_it_works: "HOW IT WORKS",
            nav_organizer: "WHO IS BEHIND",
            nav_contact: "LET'S TALK!",
            hero_headline: "GATHERINGS THAT<br>TRANSFORM TEAMS",
            hero_subheadline: "PLANNING COMPANY RETREATS WITH <strong>PURPOSE, IMPACT AND HUMAN CONNECTION</strong>,<br>IN THE BEST DESTINATIONS IN LATIN AMERICA.",
            why_title: "WHY HYPE",
            feature1_title: "Save time (and stress!)",
            feature1_text: "Planning a company retreat doesn't have to be a burden. I take care of everything from end to end: from logistics to the agenda and implementation. Everything is designed so that the team just has to arrive, relax, and enjoy.",
            feature2_title: "Proven experience",
            feature2_text: "With retreats organized for 10 to 60 people, for leaders and entire teams, in different formats and destinations, I have learned what works (and what doesn't), and how to make everything flow.",
            feature3_title: "100% personalized",
            feature3_text: "Each retreat is custom-made, according to the organization's moment, its culture, and its challenges. With a strategic and creative approach, I design an agenda that combines work spaces with moments of connection and enjoyment, without prefabricated formulas.",
            feature4_title: "Cost-effective",
            feature4_text: "I negotiate every part of the budget to offer the greatest value for the lowest cost. Everything is clear, detailed, and without surprises.",
            feature5_title: "Inspiring destinations",
            feature5_text: "Each place is chosen with great care and criteria: environments surrounded by nature, good connectivity, quality accommodation, functional spaces, and unique experiences.",
            feature6_title: "Real support",
            feature6_text: "Before, during, and after. I am there, step by step, taking care of every detail to ensure everything turns out perfectly.",
            how_it_works_title: "How does it work?",
            step1_heading: "1. STRATEGIC CONSULTING",
            step1_p: "We sit down to understand what your team needs today. I make a diagnosis of the current culture and challenges, and from there we define together the objectives of the retreat and the concept that will guide us all the way.",
            step2_heading: "2. EXPERIENCE DESIGN",
            step2_p: "I take care of everything, from end to end. I find the ideal destination, design the agenda, and propose activities aligned with the objectives. I coordinate logistics and suppliers, so you don't have to worry about anything.",
            step3_heading: "3. ON-SITE IMPLEMENTATION",
            step3_p: "I accompany the team during the retreat. I manage the schedule, facilitate the dynamics, and take care of every detail so that the experience flows from beginning to end. I am one more person, dedicated to making everything incredible.",
            organizer_title: "Who is behind?",
            organizer_subtitle: "Me, Martina!",
            organizer_p1: "I have been working in IT for 10 years, building cultures, accompanying teams, and designing experiences that make work more <strong>human and enjoyable</strong>. I have always been moved by the same thing: connecting with people and creating spaces where they feel heard, accompanied, valued, and free to be themselves.",
            organizer_p2: "For the last 5 years, I've been doing it with my laptop in my backpack while traveling the world.",
            organizer_p3: "<strong>Today I combine everything I learned in my journey through People Experience with my passion for traveling, to give life to Hype.</strong> I do it with a strategic vision, which allows me to understand what a team needs to function better, and with the experience of having led teams and organized trips around the world. And I also do it from what I am, in essence: sociable, energetic, creative, curious, and adventurous.",
            contact_title: "Let's talk!",
            contact_intro: "<strong>Want to plan an epic company retreat?</strong> Complete the form and I will contact you to schedule a 15-minute call, so you can tell me what you have in mind, and I will help you make it happen.",
            form_name: "Full name",
            form_email: "Email",
            form_company: "Company name",
            form_participants: "Estimated number of participants",
            form_budget: "Estimated travel budget",
            form_dates: "Tentative travel dates",
            form_message: "Anything else you want to add?",
            form_message_desc: "The more details, the better! If you have organized a retreat before, you can tell me what you liked (or what you didn't). You can also mention your ideal destination.",
            form_submit: "Submit",
        }
    };
    const langSwitcherButton = document.getElementById('lang-switcher-button');
    const langOptions = document.getElementById('lang-options');
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
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

    // --- Lógica para animaciones de scroll ---
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

    // --- LÓGICA CARRUSEL DE IMPACTO ---
    const impactCarousel = document.getElementById('impact-carousel');
    const impactImages = [
        'images/header/grupal.jpg', 'images/header/rafting.jpg', 'images/header/rafting1.jpg',
        'images/header/brindis.jpg', 'images/header/charla.jpg', 'images/header/cena.jpg'
    ];
    let currentImpactIndex = 0;
    function showNextImpactImage() {
        const nextImage = new Image();
        nextImage.src = impactImages[(currentImpactIndex + 1) % impactImages.length];
        const currentImageSrc = impactImages[currentImpactIndex];
        impactCarousel.style.backgroundImage = `url('${currentImageSrc}')`;
        impactCarousel.classList.remove('brindis-pos', 'cena-pos');
        if (currentImageSrc.includes('brindis.jpg')) {
            impactCarousel.classList.add('brindis-pos');
        } else if (currentImageSrc.includes('cena.jpg')) {
            impactCarousel.classList.add('cena-pos');
        }
        impactCarousel.style.animation = 'none';
        void impactCarousel.offsetWidth;
        impactCarousel.style.animation = `zoomAndFade 4s ease-in-out forwards`;
        currentImpactIndex = (currentImpactIndex + 1) % impactImages.length;
    }
    if (impactCarousel) {
        setInterval(showNextImpactImage, 4000);
        showNextImpactImage();
    }


    // --- LÓGICA CARRUSEL GALERÍA ---
    const galleryCarousel = document.querySelector('#portfolio .carousel-slide');
    const galleryImages = [
        'images/web/puente.jpg', 'images/web/manos.png', 'images/web/escalada.jpg', 'images/web/sombra.jpg',
        'images/web/fiesta.jpg', 'images/web/risas.jpg', 'images/web/olimpiadas.png', 'images/web/presentacion.jpg',
        'images/web/masrisas.jpg', 'images/web/ronda.png', 'images/web/laptop.jpg'
    ];
    if (galleryCarousel) {
        const allGalleryImages = [...galleryImages, ...galleryImages];
        galleryCarousel.innerHTML = allGalleryImages.map(src => `<img src="${src}" alt="Portfolio image">`).join('');
        
        const slide = galleryCarousel;
        const prevBtn = document.querySelector('#portfolio .prev-btn');
        const nextBtn = document.querySelector('#portfolio .next-btn');
        let currentIndex = 0;
        const numImages = galleryImages.length;
        const getImageWidth = () => slide.querySelector('img').clientWidth + 20;

        function goToSlide(index, transition = true) {
            if (transition) {
                slide.style.transition = 'transform 0.5s ease-in-out';
            } else {
                slide.style.transition = 'none';
            }
            slide.style.transform = `translateX(${-index * getImageWidth()}px)`;
        }

        function nextSlide() {
            currentIndex++;
            goToSlide(currentIndex);
            
            if (currentIndex >= numImages) {
                setTimeout(() => {
                    currentIndex = 0;
                    goToSlide(currentIndex, false);
                }, 500);
            }
        }

        function prevSlide() {
            if (currentIndex <= 0) {
                currentIndex = numImages;
                goToSlide(currentIndex, false);
            }
            setTimeout(() => {
                currentIndex--;
                goToSlide(currentIndex);
            }, 10);
        }

        nextBtn.addEventListener('click', () => {
            slide.style.animation = 'none';
            nextSlide();
        });
        prevBtn.addEventListener('click', () => {
            slide.style.animation = 'none';
            prevSlide();
        });
    }

    // --- LÓGICA DE NAVEGACIÓN ACTIVA ---
    const sections = document.querySelectorAll('main .container > section, footer#hablemos');
    const navLinks = document.querySelectorAll('.nav-links a');
    const headerHeight = document.querySelector('.main-header').offsetHeight;

    function updateActiveLink() {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50; 
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
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

    // --- LÓGICA DE ENVÍO DEL FORMULARIO ---
    const form = document.getElementById('contact-form');
    const contactContent = document.getElementById('contact-content');

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Si el envío fue exitoso, muestra el mensaje de gracias
                contactContent.innerHTML = `
                    <div class="thank-you-message">
                        <h2>¡Gracias!</h2>
                        <p>En breve, me pongo en contacto con vos :)</p>
                    </div>
                `;
            } else {
                // Si hubo un error, puedes manejarlo aquí
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert('Oops! Hubo un problema al enviar tu formulario.');
                    }
                })
            }
        }).catch(error => {
            alert('Oops! Hubo un problema al enviar tu formulario.');
        });
    }
    form.addEventListener("submit", handleSubmit);

});