export interface TechIconDetail {
    iconUrl: string;
    isInvert?: boolean;
}

export const techIconMap: Record<string, TechIconDetail> = {
    // Frontend core & styling
    'HTML5': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    'Vanilla CSS3': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    'CSS3': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    'JavaScript': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    'TypeScript': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    'React': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    'React Native': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    'Next.js': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', isInvert: true },
    'Tailwind CSS': { iconUrl: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    'Vite': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
    'Framer Motion': { iconUrl: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg' },
    'Lucide React': { iconUrl: 'https://www.vectorlogo.zone/logos/lucide/lucide-icon.svg' },
    
    // Mobile & APIs
    'Flutter': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    'Dart': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
    'Expo': { iconUrl: 'https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg', isInvert: true },
    'Expo Router': { iconUrl: 'https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg', isInvert: true },
    'Reanimated': { iconUrl: 'https://raw.githubusercontent.com/software-mansion/react-native-reanimated/main/apps/website/static/img/logo-light.svg' },
    'Google Maps API': { iconUrl: 'https://www.vectorlogo.zone/logos/google_maps/google_maps-icon.svg' },
    'PayHere API': { iconUrl: 'https://www.vectorlogo.zone/logos/vectorlogo/vectorlogo-icon.svg' },
    'jsPDF': { iconUrl: 'https://www.vectorlogo.zone/logos/adobe_pdf/adobe_pdf-icon.svg' },

    // Backend & DB
    'Node.js': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    'Firebase': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg' },
    
    // Designing & Design tools
    'Illustrator': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
    'Photoshop': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
    'Figma': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    'Branding': { iconUrl: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
    'Vector Art': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
    'Logo Design': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
    'Social Media Graphics': { iconUrl: 'https://www.vectorlogo.zone/logos/photoshop/photoshop-icon.svg' },
    'Typography': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-icon.svg' }
};
