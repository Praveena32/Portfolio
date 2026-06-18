export interface Project {
    id: string;
    title: string;
    description: string;
    tagline: string;
    tech: string[];
    image: string;
    github?: string;
    figma?: string;
    demo?: string;
    video?: string;
    screenshots?: string[];
    details: {
        problem: string;
        solution: string;
        features: string[];
        architecture?: string[];
        learningOutcomes?: string[];
    };
}

export const projectsData: Project[] = [
    {
        id: 'nivora',
        title: 'Nivora – Mental Health App',
        tagline: 'Heal without Fear — Secure, Anonymous Mental Well-being Workspace',
        description: 'A mobile application designed to provide a secure, anonymous space for mental well-being. Built with React Native and Expo, it features smooth shared-value animations, language selection, a mood tracker, and a personal diary log.',
        tech: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'Reanimated', 'Lucide React'],
        image: '/nivora_logo_new.png',
        github: 'https://github.com/Praveena32/Nivora-mobile-application.git',
        demo: '#',
        screenshots: [
            '/nivora_screenshot1.jpg',
            '/nivora_screenshot2.jpg',
            '/nivora_screenshot3.jpg',
            '/nivora_screenshot4.png',
            '/nivora_screenshot5.png'
        ],
        details: {
            problem: 'Mental health support is often gatekept by stigma, lack of anonymity, or complex interfaces. People needing immediate emotional venting or mood logging require an easy, secure tool where they can share their feelings without fear of exposure.',
            solution: 'Nivora provides a lightweight mobile app that respects anonymity out-of-the-box. It doesn\'t force complex profiling and offers immediate access to a personal diary, mood statistics, and helper guides in multiple native languages.',
            features: [
                'Welcome Screen with premium shared-value spring animations using React Native Reanimated.',
                'Multi-language selection flow (English, Sinhala, Tamil) to ensure native accessibility.',
                'Secure local authentication and signup system for private access.',
                'Visual mood tracker ledger allowing users to track their emotional state daily.',
                'Private encrypted notes diary supporting local storage journaling.',
                'Clean, minimalist dark interface with soothing lavender accents reducing cognitive strain.'
            ],
            architecture: [
                'Frontend: React Native, TypeScript, Expo SDK 52.',
                'Routing: Expo Router (file-based navigation scheme).',
                'Animations: React Native Reanimated v3.',
                'Styling: Tailwind CSS configurations optimized for mobile screens.'
            ],
            learningOutcomes: [
                'Mastered shared-value animations and interpolation styles using React Native Reanimated.',
                'Implemented clean file-based routing architecture with Expo Router tabs and stacks.',
                'Designed responsive custom UI layouts with Tailwind CSS, bypassing platform-specific stylesheet complexities.'
            ]
        }
    },
    {
        id: 'dishvana',
        title: 'Dishvana Colombo',
        tagline: 'Premium Artisanal Pizza & Sri Lankan Fusion Dining Web Platform',
        description: 'A high-end, responsive web application designed for a luxury culinary experience. It features an interactive 3D menu book, PayHere integration, automated PDF invoice receipt generation, and a real-time Shop Owner Dashboard.',
        tech: ['HTML5', 'Vanilla CSS3', 'JavaScript', 'Node.js', 'jsPDF', 'PayHere API'],
        image: '/dishvana_logo_new.png',
        github: 'https://github.com/Praveena32/Web-Project-Dishvana.git',
        demo: 'https://web-project-dishvana.vercel.app/',
        video: '/Web Project Dishvana.mp4',
        screenshots: [
            '/dishvana_screenshot1.png',
            '/dishvana_screenshot2.png',
            '/dishvana_screenshot3.png',
            '/dishvana_screenshot4.png',
            '/dishvana_screenshot5.png'
        ],
        details: {
            problem: 'Traditional restaurant landing pages are generic grids that fail to capture the sensory experience of a high-end dine-in environment. Furthermore, customer checkouts and admin workflows (e.g. notifications) are often fragmented.',
            solution: 'Dishvana Colombo bridges this by introducing an immersive 3D page-turning booklet menu that mimics actual dining. It packages this with a checkout wizard calling PayHere sandbox, and outputs custom PDFs, while updating a live admin ledger.',
            features: [
                'Realistic 3D Menu Book: Features double-page turns, hover curl effects, and dynamic viewport alignments.',
                'PayHere payment gateway wrapper calculating MD5 hash keys on the server to prevent tamper attempts.',
                'Branded PDF receipt generator automatically downloading invoice files locally using jsPDF.',
                'Shop Owner Admin Portal (`admin.html`) containing interactive virtual SMS phone logs and test email views.',
                'Bespoke UX assets: Custom spoon cursor tracking, floating steam trails spawning on mouse movements, and Ken Burns carousel.'
            ],
            architecture: [
                'Frontend: Semantic HTML5, Vanilla CSS3 (dynamic HSL vars, CSS 3D transforms), ES6 JavaScript.',
                'Backend: Zero-dependency Node.js native http server.',
                'APIs & Libraries: PayHere JS SDK, jsPDF, Nodemailer transport configuration, Twilio SMS API integrations.'
            ],
            learningOutcomes: [
                'Deeply mastered CSS 3D perspectives, rotation axes, and layout matrices.',
                'Built a robust, lightweight custom backend handling environment configurations and secure hash calculations without heavy web frameworks.',
                'Structured formatted PDF structures programmatically using coordinates in jsPDF.'
            ]
        }
    },
    {
        id: 'wannasolo',
        title: 'Wannasolo',
        tagline: 'Explore the World, Safely Connected — Solo Travel Community Platform (UI/UX Case Study)',
        description: 'An interactive mobile app prototype and UI/UX design case study for a solo travel community platform. Designed entirely in Figma to visualize secure networking, location maps, companion matching, and community-driven travel insights.',
        tech: ['Figma', 'UI/UX Design', 'Mobile Prototyping', 'User Research', 'Wireframing', 'Information Architecture'],
        image: '/wannasolo_logo_new.png',
        figma: 'https://www.figma.com/proto/A98VO074qPFfiRUGboSVn9/Wannasolo?node-id=163-542&t=hHCqh4movHUYvmmT-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=75%3A532&show-proto-sidebar=1',
        demo: '#',
        details: {
            problem: 'Solo travelers struggle to connect with trusted companions in real-time at new locations, putting their travel safety and networking opportunities at risk.',
            solution: 'Wannasolo bridges this gap with an intuitive, high-fidelity interactive prototype. Using Figma, I designed a complete user experience flow covering user onboarding, interactive map exploration, companion matching cards, and emergency alert panels.',
            features: [
                'Interactive user onboarding flow tailored for travel interests, destination goals, and safety configuration.',
                'High-fidelity companion discovery profiles featuring quick interest tabs and swipe-to-match interactions.',
                'Visualized interactive safety dashboard showing localized emergency buttons, safe zones, and broadcast controls.',
                'Community bulletin boards showcasing reviews, travel tips, and real-time destination log mockups.',
                'Direct messaging chat interfaces modeled for solo travelers sharing dates and itineraries.'
            ],
            architecture: [
                'Design Tool: Figma (vector layouts, component libraries, dynamic prototyping).',
                'Design System: Calming aesthetic with a primary lavender and cobalt palette, clear visual hierarchy, and readable typography guides.',
                'Interactive Prototyping: Configured custom component states, overlay modals, and interactive transitions using smart-animate.'
            ],
            learningOutcomes: [
                'Mastered high-fidelity UI/UX design workflows and responsive grid layouts for modern mobile devices.',
                'Conducted extensive user persona mapping and journey design to address travel anxiety and trust concerns.',
                'Designed complex interactive prototype behaviors, mock data states, and navigation loops within Figma.'
            ]
        }
    },
    {
        id: 'learnify',
        title: 'Learnify',
        tagline: 'Speak with Confidence — Interactive Mobile Language E-Learning App (UI/UX Case Study)',
        description: 'A comprehensive UI/UX case study and high-fidelity interactive prototype for a mobile language-learning platform. Designed in Figma, it features structured courses, voice speaking practices, and a personalized progress dashboard.',
        tech: ['Figma', 'UI/UX Design', 'Mobile Prototyping', 'User Research', 'Wireframing', 'Information Architecture'],
        image: '/learnify_logo.png',
        figma: 'https://www.figma.com/proto/cqscB3R2ekoEpdHy6MHqOm/Untitled?node-id=1-1808&t=ANVoIOIS7gdTTxfy-1',
        demo: '#',
        details: {
            problem: 'Language learners often struggle to transition from vocabulary drills to confident, spoken conversation. Traditional apps lack voice feedback systems and direct access to interactive listening and tracking dashboards.',
            solution: 'Learnify is a high-fidelity interactive prototype designed in Figma. It integrates course grids, a dedicated podcasts hub, a mock AI-driven tutor assistant for active voice tests, and customizable user dashboards to keep students motivated and focused on pronunciation.',
            features: [
                'Structured language pathways covering Japanese, German, Tamil, and English courses.',
                'Interactive Speaking Tutor interface visualizing daily voice tasks, pronunciation checks, and progress states.',
                'Podcasts Hub aggregates language-learning episodes (e.g. Easy English, British Council, French Day) with modular playback overlays.',
                'Personalized User Dashboard tracking daily tasks, learning tips, weekly study hours charts, and lesson counts.',
                'Responsive onboarding paths, interactive quiz components, and direct support message forms.'
            ],
            architecture: [
                'Design Tool: Figma (vector layouts, component libraries, dynamic prototyping).',
                'Visual Theme: Modern minimalist aesthetic utilizing rich lavender and teal gradients with high-contrast text layers.',
                'Micro-interactions: Smart animate screen-to-screen slides, overlay panels for media playback, and state updates.'
            ],
            learningOutcomes: [
                'Structured complex information systems spanning courses, media players, and stats dashboards into a single intuitive app.',
                'Applied advanced accessibility standards (color contrast and interactive sizing targets) for mobile learners.',
                'Designed comprehensive interactive prototyping loops to model AI chatbot states and dashboard updates.'
            ]
        }
    },
    {
        id: 'tabler',
        title: 'Tabler',
        tagline: 'Book Your Table with Ease — Interactive Restaurant Table Reservation App (UI/UX Case Study)',
        description: 'A comprehensive UI/UX case study and high-fidelity interactive prototype for a mobile table reservation application. Designed in Figma, it features restaurant discoveries, visual calendar schedulers, active reservation boards, and cancellation flows.',
        tech: ['Figma', 'UI/UX Design', 'Mobile Prototyping', 'User Research', 'Wireframing', 'Information Architecture'],
        image: '/tabler_logo.png',
        figma: 'https://www.figma.com/proto/lUjquYpQN0A4f9Dj2WgU5y/Untitled?node-id=0-1&t=ANVoIOIS7gdTTxfy-1',
        demo: '#',
        details: {
            problem: 'Dining out at popular restaurants is often gatekept by long waiting queues, unconfirmed phone call bookings, and lack of real-time table availability indicators.',
            solution: 'Tabler resolves this by presenting an elegant, dark-themed mobile reservation interface designed in Figma. It simplifies user flows through responsive exploration grids, quick date/time selectors, visual confirmation cues, and direct booking management cards.',
            features: [
                'Onboarding screens illustrating value propositions and quick entrance pathways.',
                'Explore Dashboard featuring category filters, search input boxes, and nearby restaurant lists with distance tracking.',
                'Detailed restaurant profiles showing hours of operations, menu tags, address details, and booking CTAs.',
                'Visual Reservation Scheduler with dynamic calendar date pickers, time slots, and guest selectors.',
                'Confirmed reservation cards and a robust bookings list page allowing direct contact or cancellations.'
            ],
            architecture: [
                'Design Tool: Figma (vector layouts, component libraries, dynamic prototyping).',
                'Visual Theme: Elegant dark theme built with a charcoal grey background, white high-contrast headers, and a warm neon gold/orange accent color scheme.',
                'Prototyping: Configured custom component states, time slots selection, and overlay modals.'
            ],
            learningOutcomes: [
                'Designed clean user reservation paths that reduce interaction friction and booking anxiety.',
                'Maintained cohesive design tokens (gradients, text hierarchy, container paddings) throughout the workflow.',
                'Engineered fully interactive prototype states in Figma to validate user navigation patterns and success criteria.'
            ]
        }
    },
    {
        id: 'zigzag',
        title: 'ZigZag',
        tagline: 'Elevate Your Workwear — Interactive E-Commerce Clothing Store App (UI/UX Case Study)',
        description: 'A comprehensive UI/UX case study and high-fidelity interactive prototype for a mobile fashion e-commerce application. Designed in Figma, it features curated search inputs, dynamic clothing category grids, interactive size selectors, and personalized user profiles.',
        tech: ['Figma', 'UI/UX Design', 'Mobile Prototyping', 'User Research', 'Wireframing', 'Information Architecture'],
        image: '/zigzag_logo.png',
        figma: 'https://www.figma.com/proto/lUjquYpQN0A4f9Dj2WgU5y/Untitled?node-id=37-144&t=ANVoIOIS7gdTTxfy-1',
        demo: '#',
        details: {
            problem: 'Corporate professionals struggle to find a streamlined, mobile-first shopping experience dedicated to elegant and effortless workwear, often dealing with complex size selectors and cluttered layouts.',
            solution: 'ZigZag simplifies e-commerce shopping by introducing a high-fidelity mobile prototype designed in Figma. It prioritizes layout breathability with a soft peach-cream palette, structured category tags, integrated brand filters, and interactive sizing cards.',
            features: [
                'Personalized greeting panel onboarding screen showing quick category selectors (New Arrivals, Dresses, Tops).',
                'Advanced Search Hub containing pre-populated clothing query suggestions and instant visual category filters.',
                'Brand Showcase Spotlight highlighting featured local and luxury workwear fashion tags (GFLOCK, Mimosa, Lurreli).',
                'Interactive Product Detail Screen with size grid pickers (S, M, L, XL), pricing grids in LKR, and instant add-to-bag feedback.',
                'Personalized User Profile dashboard managing order receipts, returns, payment options, and general settings.'
            ],
            architecture: [
                'Design Tool: Figma (vector layouts, component libraries, dynamic prototyping).',
                'Visual Theme: Clean, warm peach-cream beige background (#F7EBE6), high-contrast charcoal typography, and vibrant crimson active icons.',
                'Interactive Connections: Advanced screen-to-screen smart animate transitions, sliding cart menus, and multi-state size cards.'
            ],
            learningOutcomes: [
                'Engineered structured e-commerce product grids that streamline conversion funnels and user checkouts.',
                'Aligned visual design scales and styling sheets with retail fashion demographic trends.',
                'Designed comprehensive interactive prototypes to simulate clothing size choices and order histories.'
            ]
        }
    },
    {
        id: 'avenra',
        title: 'Avenra',
        tagline: 'Your Safety is Our Priority — Interactive Mental Well-being & Security Platform (UI/UX Case Study)',
        description: 'A comprehensive UI/UX case study and high-fidelity interactive prototype for a mobile mental well-being and privacy platform. Designed in Figma, it features anonymous listener circles, secure PIN locks, mental health mood trackers, and custom CyberGuard settings panels.',
        tech: ['Figma', 'UI/UX Design', 'Mobile Prototyping', 'User Research', 'Wireframing', 'Information Architecture'],
        image: '/avenra_logo.jpg',
        figma: 'https://www.figma.com/design/oQwDo45EZlclyEvQ4Tjla1/Avenra-UI-UX-Project?node-id=0-1&m=dev&t=XbROKF7WQyHH2cXc-1',
        demo: '#',
        details: {
            problem: 'Users seeking immediate emotional support or mental health logging often face privacy concerns, identity leaks, or unmonitored online spaces that compromise emotional safety.',
            solution: 'Avenra bridges this by providing a secure, monitored anonymous space designed entirely in Figma. It integrates secure local authentication, SafeHaven dashboards, anonymous SpeakOut circles, AI-driven Avra Chat companions, and specialized CyberGuard settings.',
            features: [
                'Secure local PIN Setup authentication flow ensuring absolute identity protection.',
                'SafeHaven & SpeakOut dashboard featuring monitored anonymous circles for safe expression.',
                'MindCare Hub visualizing mood progression statistics and custom breathing guide timers.',
                'Avra Chat companion simulating helpful AI-driven response interactions.',
                'CyberGuard Safety configurations defining encrypted tags, permissions, and network blocks.'
            ],
            architecture: [
                'Design Tool: Figma (vector layouts, component libraries, dynamic prototyping).',
                'Visual Theme: Calming deep blue and purple gradient aesthetic prioritizing comfort, legibility, and dark mode breathability.',
                'Prototyping: Fully interactive screen links modeling onboarding paths, menu drawers, and overlay popups.'
            ],
            learningOutcomes: [
                'Designed complex multi-module layout configurations tailored for high-sensitivity healthcare contexts.',
                'Mastered information architecture hierarchies handling anonymous identities vs secure credentials.',
                'Engineered detailed interactive prototype flows representing chat simulators and calendar tracking slots.'
            ]
        }
    },
    {
        id: 'portfolio',
        title: 'Personal Portfolio Website',
        tagline: 'Creative Frontend Showcase — Interactive Developer Hub',
        description: 'A premium, responsive portfolio website showcasing my professional journey, software projects, and design expertise. Designed with a custom glassmorphic UI, dynamic HSL glow categories, responsive case study subpages, and interactive skills tiles.',
        tech: ['React', 'Vite', 'TypeScript', 'Framer Motion', 'Vanilla CSS3', 'HTML5'],
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
        github: 'https://github.com/Praveena32/Portfolio',
        demo: '#',
        details: {
            problem: 'A standard resume or template-based portfolio fails to showcase advanced frontend capabilities, custom animations, or dynamic routing systems in a single cohesive product.',
            solution: 'Designed and engineered a custom glassmorphic developer hub containing structured hash-based routing for case studies, an interactive device bezel simulator for mobile screenshot previews, and a vector logo lightbox catalog.',
            features: [
                'Lightweight Hash Router: Integrated window hashchange listeners for zero-dependency subpage navigation and smooth browser history support.',
                'Adaptive Mobile Bezel Simulator: Programmatically renders mobile apps within a portrait smartphone frame with touch-indicative navigation.',
                'Dynamic HSL Category Glows: Applied tailored glow properties changing hover shadows and borders based on skill categories.',
                'Brand Logo Grid: Centered visual brand grids using CDN vectors that automatically invert colors in dark mode.'
            ],
            architecture: [
                'Client App: React 18, Vite, TypeScript for secure typing.',
                'Layouts & Spacing: Clean CSS variables with dynamic HSL coordinates and media query styling.',
                'Animations: Framer Motion layout transition engines.'
            ],
            learningOutcomes: [
                'Engineered lightweight single-page routing structures natively in React.',
                'Optimized vector scaling and layout responsiveness across varying viewport densities.',
                'Designed dynamic theme contexts controlling system-wide assets like dark/light mode logos.'
            ]
        }
    },
    {
        id: 'logo-design',
        title: 'Logo, Brand Design & Social Media Graphics',
        tagline: 'Visual Brand Storytelling — Collection of Vector Logos, App Icons & Promotional Banners',
        description: 'A curated showcase of professional vector logos, custom promotional social media banners, and brand graphics representing businesses in digital wellness, fashion, dining, and tech events.',
        tech: ['Illustrator', 'Branding', 'Social Media Graphics', 'Typography', 'Logo Design', 'Vector Art'],
        image: '/praveena_fashions_logo_new.png',
        demo: '#',
        details: {
            problem: 'Establishing a cohesive brand presence starts with strong visual assets. Businesses require logo concepts and marketing banner templates that communicate their values, adapt across web/mobile formats, and leave an impact on social media channels.',
            solution: 'Designed and illustrated premium vector identities and custom promotional banner assets. Each design was built after user target audience research, balancing typography, color coordinates, and iconic brand motifs.',
            features: [
                'Dishvana Colombo - Modern fusion dining plate and cutlery concept.',
                'ICT Expo 3.0 - Shielded circuit CPU emblem representing technological academic studies.',
                'Nivora Wellness - Soothing 3D lavender wellness avatar and brain logo.',
                'YumYum Go - Playful, colorful pizza slice character mascot and fast food delivery branding.',
                'Gayansa Dress Point - Minimal coat hanger silhouette accented with elegant nature vines.',
                'Praveena Fashions - Premium circular gold foil line-art emblem representing royal aesthetics.',
                'Social Media Cover Banners - Elegantly composed advertising banners designed for Facebook, Instagram, and LinkedIn marketing campaigns.'
            ],
            architecture: [
                'Design Tools: Adobe Illustrator, Photoshop, Figma vector paths.',
                'Export Schemas: Vector SVG scales, transparent alphachannels, high-res web PNG assets.',
                'Color Coordinates: Tailored HSL systems matching specific digital interfaces.'
            ],
            learningOutcomes: [
                'Mastered typography layouts, letter kerning, and visual brand hierarchies.',
                'Aligned color design theory with target demographic marketing goals.',
                'Optimized web assets for maximum pixel density across standard screens.'
            ]
        }
    }
];
