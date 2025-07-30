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
            feature1_text: "Planificar un company retreat no tiene por qué ser una carga adicional para tu equipo. Me ocupo de todo, de punta a punta, para <em>no frenar el trabajo de quienes están haciendo crecer tu empresa.</em> Todo está pensado para que solo tengan que llegar, relajarse y disfrutar.",
            feature2_title: "Está probado",
            feature2_text: "Después de organizar varios encuentros —para 10 y para 60 personas, para líderes y para equipos completos, en distintos formatos y destinos— <em>sé qué funciona y cómo hacer que todo fluya.</em> Cada experiencia me ayudó a perfeccionar el proceso y mejorar los resultados.",
            feature3_title: "100% personalizado",
            feature3_text: "Armo cada encuentro a medida, <em>según el momento de la organización, su cultura y sus desafíos.</em> Con un enfoque estratégico y creativo, diseño una agenda que combina espacios de trabajo con momentos de conexión y disfrute, adaptada a las necesidades y deseos de cada cliente.",
            feature4_title: "Rentable",
            feature4_text: "Negocio cada parte del presupuesto para ofrecer el <em>mayor valor al menor costo, sin resignar calidad.</em> Trabajo con los mejores proveedores en cada lugar para crear experiencias únicas, accediendo a tarifas y condiciones preferenciales. Todo está detallado, claro y sin sorpresas: <em>comparto facturas, contratos y recibos,</em> porque creo en la transparencia como parte del servicio. ¡Tu CFO va a estar feliz!",
            feature5_title: "Lugares que inspiran",
            feature5_text: "Elijo cada destino con criterio y cuidado, priorizando <em>alojamientos de calidad, buena conectividad, entornos naturales y actividades al aire libre.</em> Busco que cada lugar ofrezca algo verdaderamente especial.",
            feature6_title: "Acompañamiento real",
            feature6_text: "Estoy ahí, paso a paso, desde la logística hasta la ejecución. Antes, durante y después, ofreciendo soporte y cuidando cada detalle para que todo salga perfecto.",
            how_it_works_title: "¿Cómo funciona?",
            step1_heading: "1. CONSULTORÍA ESTRATÉGICA",
            step1_p: "Completás un formulario y agendamos una llamada para entender qué necesita tu equipo hoy. Hago un diagnóstico de la cultura organizacional, basado en el feedback del equipo y de los líderes, para identificar los desafíos actuales. Con esta información, definimos juntos los objetivos del encuentro que van a guiar todo el proceso.",
            step2_heading: "2. DISEÑO DE LA EXPERIENCIA",
            step2_p: "Según tus objetivos, presupuesto y preferencias, armo una propuesta a medida. Elegimos juntos el destino, el lugar y las fechas, y desde ahí me ocupo de toda la logística: comidas, traslados, merchandising, agenda y actividades. No tenés que preocuparte por nada.",
            step3_heading: "3. IMPLEMENTACIÓN PRESENCIAL",
            step3_p: "Acompaño al equipo durante todo el encuentro, dando soporte, manejando los tiempos de la agenda, facilitando las dinámicas y cuidando cada detalle para que la experiencia fluya de principio a fin. Soy una más, dedicada a que todo salga increíble.",
            organizer_title: "¿Quién está detrás?",
            organizer_subtitle: "<strong>¡Yo, Martina!</strong>",
            organizer_p1: "Hace 10 años que trabajo en IT, construyendo culturas, acompañando equipos y diseñando experiencias que hacen del trabajo algo más humano y disfrutable. <strong>Siempre me movió lo mismo: conectar con las personas</strong> y crear espacios donde se sientan escuchadas, acompañadas, valoradas y libres de ser ellas mismas.",
            organizer_p2: "Desde hace 5 años, lo hago con la computadora en la mochila mientras recorro el mundo. Ya visité 40 países, sumando experiencias que nutren tanto mi vida como mi trabajo.",
            organizer_p3: "<strong>Hoy combino todo lo que aprendí en mi recorrido por People Experience con mi pasión por viajar, para darle vida a Hype.</strong> Lo hago con una mirada estratégica, que me permite entender qué necesita un equipo para funcionar mejor, y con la experiencia de haber liderado equipos y organizado viajes alrededor del mundo. Y también lo hago desde lo que soy, en esencia: sociable, enérgica, creativa, curiosa y aventurera.",
            contact_title: "¡Hablemos!",
            contact_intro: "<strong>¿Querés planear un company retreat épico?</strong> Completá el formulario y me pongo en contacto con vos para agendar una llamada de 15 minutos, así podés contarme qué tenés en mente, y yo te ayudo a hacerlo realidad.",
            contact_email_info: "Y si no también me podés escribir a <em>hyperetreats@gmail.com</em>.",
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
            nav_why: "WHY CHOOSING HYPE",
            nav_how_it_works: "HOW IT WORKS",
            nav_organizer: "WHO IS BEHIND",
            nav_contact: "LET'S TALK!",
            hero_headline: "GATHERINGS THAT<br>TRANSFORM TEAMS",
            hero_subheadline: "PLANNING COMPANY RETREATS WITH <strong>PURPOSE, IMPACT AND HUMAN CONNECTION</strong>,<br>IN THE BEST DESTINATIONS IN LATIN AMERICA.",
            why_title: "WHY CHOOSING HYPE",
            feature1_title: "Save time (and stress!)",
            feature1_text: "Planning a company retreat doesn't have to be an extra burden for your team. I handle everything, from start to finish, so as <em>not to stop the work of those who are growing your company.</em> Everything is designed so they just have to show up, relax, and enjoy.",
            feature2_title: "It's proven",
            feature2_text: "After organizing several retreats—for 10 and 60 people, for leaders and entire teams, in different formats and destinations—<em>I know what works and how to make everything flow.</em> Each experience has helped me refine the process and improve the results.",
            feature3_title: "100% personalized",
            feature3_text: "I design each retreat tailored to <em>the organization's current moment, its culture, and its challenges.</em> With a strategic and creative approach, I create an agenda that combines work spaces with moments of connection and enjoyment, adapted to the needs and desires of each client.",
            feature4_title: "Cost-effective",
            feature4_text: "I negotiate every part of the budget to offer the <em>greatest value at the lowest cost, without sacrificing quality.</em> I work with the best suppliers in each location to create unique experiences, accessing preferential rates and conditions. Everything is detailed, clear, and without surprises: <em>I share invoices, contracts, and receipts,</em> because I believe in transparency as part of the service. Your CFO will be happy!",
            feature5_title: "Inspiring places",
            feature5_text: "I choose each destination with care and criteria, prioritizing <em>quality accommodations, good connectivity, natural environments, and outdoor activities.</em> I look for each place to offer something truly special.",
            feature6_title: "Real support",
            feature6_text: "I'm there, step by step, from logistics to execution. Before, during, and after, offering support and taking care of every detail to ensure everything goes perfectly.",
            how_it_works_title: "How does it work?",
            step1_heading: "1. STRATEGIC CONSULTING",
            step1_p: "You fill out a form and we schedule a call to understand what your team needs today. I conduct an organizational culture diagnosis, based on feedback from the team and leaders, to identify current challenges. With this information, we jointly define the retreat's objectives that will guide the entire process.",
            step2_heading: "2. EXPERIENCE DESIGN",
            step2_p: "Based on your objectives, budget, and preferences, I create a customized proposal. We choose the destination, venue, and dates together, and from there I handle all the logistics: meals, transfers, merchandise, agenda, and activities. You don't have to worry about anything.",
            step3_heading: "3. ON-SITE IMPLEMENTATION",
            step3_p: "I accompany the team throughout the retreat, providing support, managing the schedule, facilitating activities, and taking care of every detail to ensure the experience flows smoothly from start to finish. I am one more member of the team, dedicated to making everything incredible.",
            organizer_title: "Who is behind?",
            organizer_subtitle: "<strong>Me, Martina!</strong>",
            organizer_p1: "I have been working in IT for 10 years, building cultures, supporting teams, and designing experiences that make work more human and enjoyable. <strong>I've always been driven by the same thing: connecting with people</strong> and creating spaces where they feel heard, supported, valued, and free to be themselves.",
            organizer_p2: "For the last 5 years, I've been doing it with my laptop in my backpack while traveling the world. I've visited 40 countries, gathering experiences that enrich both my life and my work.",
            organizer_p3: "<strong>Today, I combine everything I've learned in my People Experience journey with my passion for travel to bring Hype to life.</strong> I do it with a strategic perspective that allows me to understand what a team needs to function better, and with the experience of having led teams and organized trips around the world. And I also do it from who I am, in essence: sociable, energetic, creative, curious, and adventurous.",
            contact_title: "Let's talk!",
            contact_intro: "<strong>Want to plan an epic company retreat?</strong> Complete the form and I will contact you to schedule a 15-minute call, so you can tell me what you have in mind, and I will help you make it happen.",
            contact_email_info: "Alternatively, you can also write to me at <em>hyperetreats@gmail.com</em>.",
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
    const carouselA = document.getElementById('impact-carousel-a');
    const carouselB = document.getElementById('impact-carousel-b');
    const impactImages = [
        'images/header/grupal.jpg', 'images/header/rafting.jpg', 'images/header/rafting1.jpg',
        'images/header/brindis.jpg', 'images/header/charla.jpg', 'images/header/cena.jpg'
    ];
    let currentImpactIndex = 0;
    let activeLayer = carouselA;

    function showNextImpactImage() {
        const inactiveLayer = (activeLayer === carouselA) ? carouselB : carouselA;
        const oldLayer = activeLayer;
        
        currentImpactIndex = (currentImpactIndex + 1) % impactImages.length;
        const nextImageSrc = impactImages[currentImpactIndex];
        
        inactiveLayer.style.backgroundImage = `url('${nextImageSrc}')`;
        
        inactiveLayer.classList.remove('brindis-pos', 'cena-pos');
        if (nextImageSrc.includes('brindis.jpg')) {
            inactiveLayer.classList.add('brindis-pos');
        } else if (nextImageSrc.includes('cena.jpg')) {
            inactiveLayer.classList.add('cena-pos');
        }

        inactiveLayer.classList.remove('animate');
        void inactiveLayer.offsetWidth;
        
        inactiveLayer.classList.add('visible', 'animate');
        oldLayer.classList.remove('visible');
        
        setTimeout(() => {
            oldLayer.classList.remove('animate');
        }, 1500);
        
        activeLayer = inactiveLayer;
    }

    if (carouselA && carouselB) {
        carouselA.style.backgroundImage = `url('${impactImages[0]}')`;
        carouselA.classList.add('visible');
        carouselA.classList.add('animate');
        
        setInterval(showNextImpactImage, 6000);
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
                contactContent.innerHTML = `
                    <div class="thank-you-message">
                        <h2>¡Gracias!</h2>
                        <p>En breve, me pongo en contacto con vos :)</p>
                    </div>
                `;
            } else {
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
    if (form) {
        form.addEventListener("submit", handleSubmit);
    }

});