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
        role: string;
        problemSolved: string[];
        designProcess: string[];
        technicalChallenges: string[];
        solutionImplemented: string[];
        impact: string[];
        features: string[]; // fallback compatibility
        architecture?: string[];
        
        // UI/UX Case Study Specific Fields
        userResearch?: string[];
        userPainPoints?: string[];
        personas?: string[];
        userFlows?: string[];
        wireframes?: string[];
        accessibilityConsiderations?: string[];
    };
}

export const projectsData: Project[] = [
    {
        id: 'suams',
        title: 'SUAMS – Smart Attendance System',
        tagline: 'Premium University Check-in Portal — Live Session Tracking Ledger',
        description: 'A multi-tier PHP and MySQL web application built for academic course attendance logging. Features secure session activation controls for lecturers, dynamic attendance trackers for students, and structured course registration panels for administrators.',
        tech: ['PHP', 'MySQL', 'TiDB Cloud', 'Vanilla CSS3', 'Bootstrap 5'],
        image: '/suams_student_dashboard.png',
        github: 'https://github.com/Praveena32/smart-attendance.git',
        demo: '#',
        screenshots: [
            '/suams_student_dashboard.png',
            '/suams_lecturer_dashboard.png',
            '/suams_admin_dashboard.png'
        ],
        details: {
            features: [
                'Student Portal featuring a circular attendance progress dial reflecting current presence status and safety limits.',
                'Lecturer Dashboard enabling session creation (start/end times, date, period) and live status toggling.',
                'Admin Management Panel enabling user registration, course creation, and student enrollments.'
            ],
            problemSolved: [
                'Lecture roll calls took 15+ minutes per session, reducing active teaching time.',
                'Manual attendance sheets were highly vulnerable to proxy check-ins.',
                'Compiling physical attendance papers into Excel logs was tedious and error-prone.'
            ],
            role: 'Lead Fullstack Developer & Database Architect',
            designProcess: [
                'Mapped separate dashboards for Students, Lecturers, and Administrators.',
                'Designed a circular progress ring to give students instant feedback on their current attendance percentage.',
                'Wireframed Lecturer session toggles to launch and close tracking windows with a single click.'
            ],
            technicalChallenges: [
                'Preventing session spoofing and unauthorized manual updates by students.',
                'Securing public database endpoints from SQL injection attacks.',
                'Establishing secure SSL connection handshakes for remote TiDB Cloud database clusters.'
            ],
            solutionImplemented: [
                'Built a secure PHP backend with multi-role session controls and strict role validation.',
                'Implemented prepared SQL statements to block injection vulnerabilities.',
                'Wired database queries to a managed TiDB Cloud MySQL database with SSL configurations.'
            ],
            impact: [
                'Saved 15+ minutes per lecture session by automating check-ins.',
                'Achieved 100% accurate, tamper-proof attendance ledgers.',
                'Reduced administrative record compilation overhead to zero.'
            ],
            architecture: [
                'Frontend: HTML5, custom CSS3 variables, responsive Bootstrap 5 components.',
                'Backend: Secure PHP 8.x session management and database controllers.',
                'Database: TiDB Cloud (MySQL compatible server with SSL configuration).'
            ]
        }
    },
    {
        id: 'nivora',
        title: 'Nivora – Mental Health App',
        tagline: 'Heal without Fear — Secure, Anonymous Mental Well-being Workspace',
        description: 'A mobile application designed to provide a secure, anonymous space for mental well-being. Built with React Native and Expo, it features smooth shared-value animations, language selection, a mood tracker, and a personal diary log.',
        tech: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'Reanimated'],
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
            features: [
                'Welcome Screen with premium shared-value spring animations using React Native Reanimated.',
                'Multi-language selection flow (English, Sinhala, Tamil) to ensure native accessibility.',
                'Secure local authentication and signup system for private access.',
                'Visual mood tracker ledger allowing users to track their emotional state daily.',
                'Private encrypted notes diary supporting local storage journaling.'
            ],
            problemSolved: [
                'Mental health support services are often inaccessible due to social stigma or registration hurdles.',
                'Users needing immediate emotional logging require instant, zero-friction access.',
                'Cluttered user interfaces increase anxiety for vulnerable users.'
            ],
            role: 'Mobile UI/UX Designer & Mobile Engineer',
            designProcess: [
                'Adopted a comforting, high-contrast lavender visual palette with readable layout grids.',
                'Designed onboarding screens using standard mobile gesture flows (swipe, press).',
                'Localized the application into English, Sinhala, and Tamil languages for native accessibility.'
            ],
            technicalChallenges: [
                'Maintaining smooth 60FPS spring transition animations on low-end mobile hardware.',
                'Encrypting journal notes locally to ensure absolute user anonymity.'
            ],
            solutionImplemented: [
                'Developed a cross-platform React Native and Expo app using file-based routing (Expo Router).',
                'Integrated React Native Reanimated v3 for fluid, hardware-accelerated animations.',
                'Utilized secure LocalStorage mechanisms to store journal entries directly on the device.'
            ],
            impact: [
                'Provided 100% private, registration-free wellness logging.',
                'Enabled seamless multilingual support, expanding access to local communities.',
                'Achieved smooth visual responsiveness with spring physics on page flows.'
            ],
            architecture: [
                'Frontend: React Native, TypeScript, Expo SDK 52.',
                'Routing: Expo Router (file-based navigation scheme).',
                'Animations: React Native Reanimated v3.',
                'Styling: Tailwind CSS configurations optimized for mobile screens.'
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
            features: [
                'Realistic 3D Menu Book: Features double-page turns, hover curl effects, and dynamic viewport alignments.',
                'PayHere payment gateway wrapper calculating MD5 hash keys on the server to prevent tamper attempts.',
                'Branded PDF receipt generator automatically downloading invoice files locally using jsPDF.',
                'Shop Owner Admin Portal (`admin.html`) containing interactive virtual SMS phone logs and test email views.'
            ],
            problemSolved: [
                'Standard grid-based restaurant sites fail to capture the sensory experience of a physical dine-in.',
                'Online checkouts are often slow and vulnerable to parameter tampering.',
                'Fragmented notifications prevent admins from tracking orders in real-time.'
            ],
            role: 'Lead Frontend Developer & UI Designer',
            designProcess: [
                'Created a virtual 3D page-turning menu book simulating a physical restaurant menu.',
                'Designed dynamic spoon cursors and steam trails that follow mouse pointer coordinates.',
                'Engineered a responsive dark theme with warm gold highlights for an upscale aesthetic.'
            ],
            technicalChallenges: [
                'Calculating secure checkout MD5 hash keys to prevent price tampering.',
                'Converting web receipts into clean, downloadable print PDFs on the client side.'
            ],
            solutionImplemented: [
                'Developed a zero-dependency Node.js server to generate payment signatures securely.',
                'Integrated the PayHere API sandbox and wired custom Twilio SMS order logs.',
                'Implemented jsPDF coordinates matching to generate invoice receipts instantly.'
            ],
            impact: [
                'Delivered an immersive 3D menu book interface that increases visual engagement.',
                'Prevented transaction tampering through server-side hash verification.',
                'Enabled immediate digital invoice receipt delivery for diners.'
            ],
            architecture: [
                'Frontend: Semantic HTML5, Vanilla CSS3 (dynamic HSL vars, CSS 3D transforms), ES6 JavaScript.',
                'Backend: Zero-dependency Node.js native http server.',
                'APIs & Libraries: PayHere JS SDK, jsPDF, Nodemailer transport configuration, Twilio SMS API integrations.'
            ]
        }
    },
    {
        id: 'wannasolo',
        title: 'Wannasolo',
        tagline: 'Explore the World, Safely Connected — Solo Travel Community Platform (UI/UX Case Study)',
        description: 'An interactive mobile app prototype and UI/UX design case study for a solo travel community platform. Designed entirely in Figma to visualize secure networking, location maps, companion matching, and community-driven travel insights.',
        tech: ['Figma', 'UI/UX Design', 'Mobile Prototyping', 'User Research', 'Wireframing'],
        image: '/wannasolo_logo_new.png',
        figma: 'https://www.figma.com/proto/A98VO074qPFfiRUGboSVn9/Wannasolo?node-id=163-542&t=hHCqh4movHUYvmmT-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=75%3A532&show-proto-sidebar=1',
        demo: '#',
        details: {
            features: [
                'Interactive user onboarding flow tailored for travel interests, destination goals, and safety configuration.',
                'High-fidelity companion discovery profiles featuring quick interest tabs and swipe-to-match interactions.',
                'Visualized interactive safety dashboard showing localized emergency buttons, safe zones, and broadcast controls.'
            ],
            problemSolved: [
                'Solo travelers lack a trusted network to discover companions in real-time at new destinations.',
                'Safety concerns prevent users from engaging in spontaneous solo travel.',
                'Lack of structured regional safety insights increases travel anxiety.'
            ],
            role: 'Sole UI/UX Researcher & Product Designer',
            designProcess: [
                'Identified primary safety markers and location tracking requirements through target group interviews.',
                'Designed high-fidelity mockups using a primary cobalt blue and lavender palette for calm, trusted navigation.',
                'Organized navigation structures into a 3-tab layout: Discover, Map, and SafeHaven.'
            ],
            technicalChallenges: [
                'Designing complex navigation structures and multi-state search filters in Figma.',
                'Smart-animating transitions to simulate interactive map interfaces.'
            ],
            solutionImplemented: [
                'Designed a 20+ screen high-fidelity mobile prototype in Figma.',
                'Mapped complete flows for onboarding, location discovery, companion matching, and chat.',
                'Integrated a dedicated Emergency broadcast button and safety dashboard overlays.'
            ],
            impact: [
                'Created a highly intuitive interface mapping secure traveler coordination.',
                'Validated security flows reducing user friction during companion verification.'
            ],
            architecture: [
                'Design Tool: Figma (vector layouts, component libraries, dynamic prototyping).',
                'Design System: Calming aesthetic with a primary lavender and cobalt palette, clear visual hierarchy, and readable typography guides.',
                'Interactive Prototyping: Configured custom component states, overlay modals, and interactive transitions using smart-animate.'
            ],
            userResearch: [
                'Conducted qualitative interviews with 8 active solo travelers (aged 20-35) to identify safety apprehensions and companion discovery behaviors.',
                'Analyzed competitor travel forums to locate gaps in real-time location sharing security.'
            ],
            userPainPoints: [
                'Travel Anxiety: Lack of verified safety logs or emergency contacts in unfamiliar locations.',
                'Social Disconnection: Frustration when browsing static, outdated forums to find companions.'
            ],
            personas: [
                'Sarah (24, Backpacker): Wants to explore rural trails but fears getting lost or stranded alone.',
                'David (29, Digital Nomad): Seeks local dining companions but values privacy and identity verification.'
            ],
            userFlows: [
                'Onboarding -> Select Interests & Destination -> Verify Profile -> Interactive Map -> Match with Nearby Travel Companions -> Secure Chat.'
            ],
            wireframes: [
                'Lo-Fi paper wireframes established low-density dashboard cards prioritizing safety features.',
                'Mid-Fi digital wireframes structured tab navigation and location pin coordinates.'
            ],
            accessibilityConsiderations: [
                'Enforced AA standard color contrast ratios for emergency controls and text elements.',
                'Designed large hit targets (48x48px minimum) for fast interaction on the move.'
            ]
        }
    },
    {
        id: 'learnify',
        title: 'Learnify',
        tagline: 'Speak with Confidence — Interactive Mobile Language E-Learning App (UI/UX Case Study)',
        description: 'A comprehensive UI/UX case study and high-fidelity interactive prototype for a mobile language-learning platform. Designed in Figma, it features structured courses, voice speaking practices, and a personalized progress dashboard.',
        tech: ['Figma', 'UI/UX Design', 'Mobile Prototyping', 'User Research', 'Wireframing'],
        image: '/learnify_logo.png',
        figma: 'https://www.figma.com/proto/cqscB3R2ekoEpdHy6MHqOm/Untitled?node-id=1-1808&t=ANVoIOIS7gdTTxfy-1',
        demo: '#',
        details: {
            features: [
                'Structured language pathways covering Japanese, German, Tamil, and English courses.',
                'Interactive Speaking Tutor interface visualizing daily voice tasks, pronunciation checks, and progress states.',
                'Podcasts Hub aggregates language-learning episodes with modular playback overlays.'
            ],
            problemSolved: [
                'Language learning apps often focus on passive vocabulary drills rather than active speaking.',
                'Lack of structured dashboard analytics leaves students demotivated.',
                'Standard audio players lack interactive lesson progression hooks.'
            ],
            role: 'UI/UX Researcher & Interaction Designer',
            designProcess: [
                'Structured bite-sized pathways based on cognitive load models to prevent learner burnout.',
                'Adopted a visual language emphasizing soft lavender tones and clean rounded containers.',
                'Validated visual hierarchy through user tests showing high readability scores.'
            ],
            technicalChallenges: [
                'Designing interactive components that represent speech tutor states in a static prototype tool.',
                'Managing layout transitions between course grids and overlay audio players.'
            ],
            solutionImplemented: [
                'Produced a high-fidelity Figma prototype with interactive overlays and component variations.',
                'Mapped clear lesson routes for Japanese, German, Tamil, and English.',
                'Designed mock AI speaking tutor screens with real-time feedback mockups.'
            ],
            impact: [
                'Reduced cognitive friction during lesson navigation in interactive tests.',
                'Improved layout clarity for progress tracking cards.'
            ],
            architecture: [
                'Design Tool: Figma (vector layouts, component libraries, dynamic prototyping).',
                'Visual Theme: Modern minimalist aesthetic utilizing rich lavender and teal gradients with high-contrast text layers.',
                'Micro-interactions: Smart animate screen-to-screen slides, overlay panels for media playback, and state updates.'
            ],
            userResearch: [
                'Surveyed 15 language students to identify learning patterns; 80% reported speaking confidence as their largest obstacle.',
                'Conducted competitive reviews showing current apps prioritize written testing over speaking modules.'
            ],
            userPainPoints: [
                'Speaking Anxiety: Fear of incorrect pronunciation due to lack of immediate, private speech feedback.',
                'Cluttered Dashboards: Overwhelming analytics grids that distract from current lesson paths.'
            ],
            personas: [
                'Yuki (21, Student): Wants to study German for exchanges but lacks speaking partners.',
                'Ravi (34, Professional): Seeks quick, bite-sized lessons to learn basic conversational Japanese.'
            ],
            userFlows: [
                'Open App -> Dashboard -> Select Course -> Speech Module -> Speak into Mic -> Receive Pronunciation Log -> Completed State.'
            ],
            wireframes: [
                'Initial low-fi wireframes mapped simple center-aligned voice buttons to make speech interactions clear.',
                'High-fidelity grid mockups structured course paths and podcasts.'
            ],
            accessibilityConsiderations: [
                'Incorporated sound-wave graphics alongside speech feedback to support hearing-impaired users.',
                'Ensured contrast ratio validation (4.5:1 minimum) across all text overlays.'
            ]
        }
    },
    {
        id: 'zigzag',
        title: 'ZigZag',
        tagline: 'Elevate Your Workwear — Interactive E-Commerce Clothing Store App (UI/UX Case Study)',
        description: 'A comprehensive UI/UX case study and high-fidelity interactive prototype for a mobile fashion e-commerce application. Designed in Figma, it features curated search inputs, dynamic clothing category grids, interactive size selectors, and personalized user profiles.',
        tech: ['Figma', 'UI/UX Design', 'Mobile Prototyping', 'User Research', 'Wireframing'],
        image: '/zigzag_logo.png',
        figma: 'https://www.figma.com/proto/lUjquYpQN0A4f9Dj2WgU5y/Untitled?node-id=37-144&t=ANVoIOIS7gdTTxfy-1',
        demo: '#',
        details: {
            features: [
                'Interactive Product Detail Screen with size grid pickers, pricing grids in LKR, and instant add-to-bag feedback.',
                'Personalized User Profile dashboard managing order receipts, returns, payment options, and general settings.',
                'Advanced Search Hub containing pre-populated clothing query suggestions.'
            ],
            problemSolved: [
                'Modern corporate professionals face cluttered layouts and frustrating size selector interfaces when buying clothing online, causing high cart abandonment.',
                'Tedious, non-standard sizing inputs lead to sizing uncertainty and high returns.'
            ],
            role: 'UI/UX Researcher & Visual Designer',
            designProcess: [
                'Crafted a calming, minimalist peach-cream tone visual layout to alleviate shopping fatigue.',
                'Organized search filters to present standard sizes, categories, and brand tags dynamically.',
                'Created micro-interactions to animate add-to-bag feedback loops.'
            ],
            technicalChallenges: [
                'Creating sliding cart drawers and sizing selection states that transition smoothly.',
                'Modeling dynamic pricing indicators based on size availability.'
            ],
            solutionImplemented: [
                'Designed a high-fidelity mobile prototype with components variations in Figma.',
                'Constructed visual size grids (S, M, L, XL) with clear active states.'
            ],
            impact: [
                'Simplified e-commerce grid browsing layouts for rapid product selection.',
                'Created a friction-free checkout path in the visual prototype flow.'
            ],
            architecture: [
                'Design Tool: Figma (vector layouts, component libraries, dynamic prototyping).',
                'Visual Theme: Clean, warm peach-cream beige background (#F7EBE6), high-contrast charcoal typography, and vibrant crimson active icons.',
                'Interactive Connections: Advanced screen-to-screen smart animate transitions, sliding cart menus, and multi-state size cards.'
            ],
            userResearch: [
                'Evaluated shopping drop-off rates; identified sizing uncertainty and complex checkouts as top cart abandonment drivers.',
                'Interviewed 10 working professionals about e-commerce habits, revealing a preference for clean grids over visual clutter.'
            ],
            userPainPoints: [
                'Sizing Guesswork: Confusion regarding fit differences across retail brand grids.',
                'Overcrowded Layouts: Multi-banner promotions that distract from the main category catalog.'
            ],
            personas: [
                'Priya (27, Accountant): Busy professional looking to purchase high-quality workwear quickly without navigating complex forms.',
                'Amal (31, Executive): Seeks simple wardrobe additions but drops off due to sizing frustration.'
            ],
            userFlows: [
                'Browse Catalog -> Filter by Size -> View Workwear Item -> Interactive Size Select -> Add to Bag -> Sliding Cart Drawer -> One-Tap Purchase.'
            ],
            wireframes: [
                'Paper wireframes focused on keeping details above the fold and standardizing size buttons.',
                'Mid-fi digital layouts structured the cart drawer slide transition.'
            ],
            accessibilityConsiderations: [
                'Maintained high contrast contrast for size tags to assist users with varying vision quality.',
                'Designed touch targets of 48px to prevent accidental taps during checkout.'
            ]
        }
    },
    {
        id: 'avenra',
        title: 'Avenra',
        tagline: 'Your Safety is Our Priority — Interactive Mental Well-being & Security Platform (UI/UX Case Study)',
        description: 'A comprehensive UI/UX case study and high-fidelity interactive prototype for a mobile mental well-being and privacy platform. Designed in Figma, it features anonymous listener circles, secure PIN locks, mental health mood trackers, and custom CyberGuard settings panels.',
        tech: ['Figma', 'UI/UX Design', 'Mobile Prototyping', 'User Research', 'Wireframing'],
        image: '/avenra_logo.jpg',
        figma: 'https://www.figma.com/design/oQwDo45EZlclyEvQ4Tjla1/Avenra-UI-UX-Project?node-id=0-1&m=dev&t=XbROKF7WQyHH2cXc-1',
        demo: '#',
        details: {
            features: [
                'Secure local PIN Setup authentication flow ensuring absolute identity protection.',
                'SafeHaven & SpeakOut dashboard featuring monitored anonymous circles for safe expression.',
                'MindCare Hub visualizing mood progression statistics and custom breathing guide timers.'
            ],
            problemSolved: [
                'Online mental health spaces often lack adequate privacy controls and moderation safety, causing users anxiety about sharing private feelings.',
                'Lack of identity boundaries prevents users from sharing thoughts without exposure fear.'
            ],
            role: 'Brand Identity & UI/UX Designer',
            designProcess: [
                'Implemented calming deep blue and purple visual gradient schemes to evoke comfort.',
                'Designed secure PIN setup onboarding screens to separate identity layers.',
                'Structured anonymous chat bubble groupings for secure, moderated circles.'
            ],
            technicalChallenges: [
                'Structuring visual hierarchies to manage encryption keys and device settings layouts.'
            ],
            solutionImplemented: [
                'Produced a high-fidelity interactive Figma prototype highlighting CyberGuard panels.',
                'Mapped out the SpeakOut anonymous boards, MindCare metrics, and breathing guide screens.'
            ],
            impact: [
                'Designed a secure layout that removes privacy concerns for support-seeking users.',
                'Improved security accessibility via structured dashboard controls.'
            ],
            architecture: [
                'Design Tool: Figma (vector layouts, component libraries, dynamic prototyping).',
                'Visual Theme: Calming deep blue and purple gradient aesthetic prioritizing comfort, legibility, and dark mode breathability.',
                'Prototyping: Fully interactive screen links modeling onboarding paths, menu drawers, and overlay popups.'
            ],
            userResearch: [
                'Conducted focus groups (12 participants) regarding mental health app usage, finding that 90% prioritize absolute data privacy over social integrations.',
                'Reviewed medical privacy standards to ensure data handling representations build trust.'
            ],
            userPainPoints: [
                'Exposure Fear: Concern that personal mental health logs or community chats could be leaked or tracked.',
                'Disorganized Support: Difficulty accessing simple breathing or security options during emotional distress.'
            ],
            personas: [
                'Maya (22, University Student): Wants to express feelings anonymously without social exposure or tracking.',
                'Kaveen (28, Software Engineer): Needs a quick dashboard to track stress patterns and configure local PIN locks.'
            ],
            userFlows: [
                'Enter App -> PIN Verification -> Anonymous SafeCircle -> Join Group Chat -> Configure Stress Tracker -> Breathing Exercise.'
            ],
            wireframes: [
                'Low-fi sketches focused on simple, high-visibility breathing timers and secure locking settings.',
                'Mid-fi visual flow verified layout clarity of anonymous circles.'
            ],
            accessibilityConsiderations: [
                'Integrated visual breathing expanders accompanied by vibration pulses for visually impaired users.',
                'Validated high-contrast text tags for critical security settings.'
            ]
        }
    },
    {
        id: 'portfolio',
        title: 'Personal Portfolio Website',
        tagline: 'Creative Frontend Showcase — Interactive Developer Hub',
        description: 'A premium, responsive portfolio website showcasing my professional journey, software projects, and design expertise. Designed with a custom glassmorphic UI, dynamic HSL glow categories, responsive case study subpages, and interactive skills tiles.',
        tech: ['React', 'Vite', 'TypeScript', 'Framer Motion', 'Vanilla CSS3'],
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
        github: 'https://github.com/Praveena32/Portfolio',
        demo: 'https://praveenabuddhini.vercel.app/',
        details: {
            features: [
                'Lightweight Hash Router: Integrated window hashchange listeners for zero-dependency subpage navigation.',
                'Adaptive Mobile Bezel Simulator: Programmatically renders mobile apps within a portrait smartphone frame.',
                'Dynamic HSL Category Glows: Applied tailored glow properties changing hover shadows and borders.'
            ],
            problemSolved: [
                'Standard resumes and templated profiles fail to demonstrate actual coding ability.',
                'Excessive dependencies slow down rendering performance and increase bundle sizes.'
            ],
            role: 'Frontend Engineer & UX Designer',
            designProcess: [
                'Designed a premium glassmorphic system using CSS custom variables.',
                'Wired custom HSL glow coordinates that respond dynamically to card hover actions.',
                'Kept layout elements minimal, prioritizing code snippets and clean alignment.'
            ],
            technicalChallenges: [
                'Building single-page routing natively in React without external packages.',
                'Type-checking Framer Motion dynamic variables under strict TypeScript criteria.'
            ],
            solutionImplemented: [
                'Engineered a React and TypeScript web app compiling with Vite.',
                'Implemented custom hashchange listeners for lightweight routing.',
                'Optimized layout assets, scoring 100 on Google PageSpeed checkouts.'
            ],
            impact: [
                'Built a loading speed of under 1 second, reducing client-side footprint.',
                'Achieved seamless responsive structures on all tablet and phone viewports.'
            ],
            architecture: [
                'Client App: React 18, Vite, TypeScript for secure typing.',
                'Layouts & Spacing: Clean CSS variables with dynamic HSL coordinates and media query styling.',
                'Animations: Framer Motion layout transition engines.'
            ]
        }
    }
];
