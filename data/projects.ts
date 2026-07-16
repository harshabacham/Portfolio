
import { GraphicProject, WebProject, AppProject, Skill } from '../types';

const getDriveUrl = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
const getScreenshotUrl = (url: string) => `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1280`;

export const GRAPHIC_DESIGN_WORKS: GraphicProject[] = [
  { id: 'gd-1', title: 'Poster 01', description: '', image: getDriveUrl('1-s5aNCveZDcUOzHkfBykJMcTEZcZGGX6'), tools: [], medium: 'Visual Design' },
  { id: 'gd-2', title: 'Poster 02', description: '', image: getDriveUrl('1-zPS9VS80DzIbI7UO1wv9pswbFzBRsa1'), tools: [], medium: 'Graphic Art' },
  { id: 'gd-3', title: 'Poster 03', description: '', image: getDriveUrl('10N1R1AqSD50chuxP9TDRIfRP7JvihgYV'), tools: [], medium: 'Digital Composition' },
  { id: 'gd-4', title: 'Poster 04', description: '', image: getDriveUrl('11ewhCqf7-9hQC7jIaoIiGVINnP3NpAVr'), tools: [], medium: 'Branding' },
  { id: 'gd-5', title: 'Poster 05', description: '', image: getDriveUrl('14tV6pLiGiGawHvEbcOhs4kO0OI72rt6R'), tools: [], medium: 'Visual Identity' },
  { id: 'gd-6', title: 'Poster 06', description: '', image: getDriveUrl('15XeDQ0e4uhidsPJFlQNX7vZvpQe38qaY'), tools: [], medium: 'Graphic Design' },
  { id: 'gd-7', title: 'Poster 07', description: '', image: getDriveUrl('16U310yH40QIDVolsYCa0Oq2yKvtF7S7b'), tools: [], medium: 'Layout Design' },
  { id: 'gd-8', title: 'Poster 08', description: '', image: getDriveUrl('17q1hCn25mkuNJbXcgcS_orXkrfQA5QaK'), tools: [], medium: 'Identity' },
  { id: 'gd-9', title: 'Poster 09', description: '', image: getDriveUrl('1Bwx1_ZqvO_tdV3E8rwTavaSvRhBeMjGp'), tools: [], medium: 'Branding' },
  { id: 'gd-10', title: 'Poster 10', description: '', image: getDriveUrl('1DIcJcdO_zJE9bsfOJj5FEHDHs2zf8pTW'), tools: [], medium: 'Visual Design' },
  { id: 'gd-11', title: 'Poster 11', description: '', image: getDriveUrl('1DyDIl0prs1islpRRnwSaEaSlqp1KbuQn'), tools: [], medium: 'Graphic Art' },
  { id: 'gd-12', title: 'Poster 12', description: '', image: getDriveUrl('1Ew7_R6JhYscv4VeHNb857PQ-t82I-9M2'), tools: [], medium: 'Digital Art' },
  { id: 'gd-13', title: 'Poster 13', description: '', image: getDriveUrl('1FFShBKPoDr7H6uPdXtG_DRuOyvLQTjqM'), tools: [], medium: 'Layout' },
  { id: 'gd-14', title: 'Poster 14', description: '', image: getDriveUrl('1Gj1eDNC7x3UuBMljEDlJnx6SNmi3oANE'), tools: [], medium: 'Branding' },
  { id: 'gd-15', title: 'Poster 15', description: '', image: getDriveUrl('1HLSQLhG4_poo7uqLjhMlLDgJWud3DCRd'), tools: [], medium: 'Visual Identity' },
  { id: 'gd-16', title: 'Poster 16', description: '', image: getDriveUrl('1HPcCi8rWm-uUfNcBv08DmgxVDkF3agqJ'), tools: [], medium: 'Illustration' },
  { id: 'gd-17', title: 'Poster 17', description: '', image: getDriveUrl('1HgaiqyW8hMoz7rgUE2Z2i0ch1CW0BRwg'), tools: [], medium: 'Digital Art' },
  { id: 'gd-18', title: 'Poster 18', description: '', image: getDriveUrl('1HqFbWAK9KIx0Y-sX1K5KxOpte1GEQebU'), tools: [], medium: 'Visual Design' },
  { id: 'gd-19', title: 'Poster 19', description: '', image: getDriveUrl('1I4dOazVs7d7TecPKS9O8VJAWU2LDMYwu'), tools: [], medium: 'Editorial' },
  { id: 'gd-20', title: 'Poster 20', description: '', image: getDriveUrl('1JK5gRhm_yvUTRxdIMJMjnmnavtjE4-e2'), tools: [], medium: 'Graphic Art' },
  { id: 'gd-21', title: 'Poster 21', description: '', image: getDriveUrl('1Jf_BcI-Fpc912mYZb1LOkJQBnmBQ0Na8'), tools: [], medium: 'Typography' },
  { id: 'gd-22', title: 'Poster 22', description: '', image: getDriveUrl('1KKo7qjG-gGATPZND0DkN8MGLGbknrRMd'), tools: [], medium: 'Identity' },
  { id: 'gd-23', title: 'Poster 23', description: '', image: getDriveUrl('1KOt5SJh4CMBo3ZumrOXgLBPQTc9ovO5q'), tools: [], medium: 'Branding' },
  { id: 'gd-24', title: 'Poster 24', description: '', image: getDriveUrl('1MY7AxxshBO-wERawiiqKsCdfJmYi_75s'), tools: [], medium: 'Visual Design' },
  { id: 'gd-25', title: 'Poster 25', description: '', image: getDriveUrl('1OqVKnc_-XiSJfFe371IzFNeMqAWpe7CT'), tools: [], medium: 'Layout' },
  { id: 'gd-26', title: 'Poster 26', description: '', image: getDriveUrl('1PUvnYKyB8bANKxtWfolrglSmAuII_af5'), tools: [], medium: 'Digital Composition' },
  { id: 'gd-27', title: 'Poster 27', description: '', image: getDriveUrl('1QE2b1bQtMsQ6wbsD5PWpv4T78XNkorEp'), tools: [], medium: 'Typography' },
  { id: 'gd-28', title: 'Poster 28', description: '', image: getDriveUrl('1QTlsEtDQhhH_oFBxc061Y1gGq32-EQfU'), tools: [], medium: 'Visual Identity' },
  { id: 'gd-29', title: 'Poster 29', description: '', image: getDriveUrl('1RO69BYma9iFpvQyucNw06SjAtHc6F5i3'), tools: [], medium: 'Layout Design' },
  { id: 'gd-30', title: 'Poster 30', description: '', image: getDriveUrl('1RtjjsNWUbXxi9-4mZjlj0QSh-jQ1lO9s'), tools: [], medium: 'Poster Art' },
  { id: 'gd-31', title: 'Poster 31', description: '', image: getDriveUrl('1SIglnUB0-ShuPqbXSvgxC0RF3tYKK0W9'), tools: [], medium: 'Illustration' },
  { id: 'gd-32', title: 'Poster 32', description: '', image: getDriveUrl('1UrQc8hlZEY5oGrdGkFGZz_3KqTrG7f_Z'), tools: [], medium: 'Digital Art' },
  { id: 'gd-33', title: 'Poster 33', description: '', image: getDriveUrl('1Uto0UO9JWuTllogCvzFpmKaGV4ChpnuG'), tools: [], medium: 'Visual Design' },
  { id: 'gd-34', title: 'Poster 34', description: '', image: getDriveUrl('1W-pxqjKqRYDZogYRndOb1BX7L0TEc4yK'), tools: [], medium: 'Graphic Art' },
  { id: 'gd-35', title: 'Poster 35', description: '', image: getDriveUrl('1XYyroRRj_bh4NkMomDxAfKgcayFdzY-z'), tools: [], medium: 'Branding' },
  { id: 'gd-36', title: 'Poster 36', description: '', image: getDriveUrl('1XnHOQZJY_7gFVbJmq2dxrZH2K_S6DQyS'), tools: [], medium: 'Identity' },
  { id: 'gd-37', title: 'Poster 37', description: '', image: getDriveUrl('1YgDQFknfXaUmbcHO48IokwWeyT9hbriS'), tools: [], medium: 'Visual Identity' },
  { id: 'gd-38', title: 'Poster 38', description: '', image: getDriveUrl('1_I5WP18Ru87tUhbDSD9x4TC49H0zQj0m'), tools: [], medium: 'Poster Art' },
  { id: 'gd-39', title: 'Poster 39', description: '', image: getDriveUrl('1aJo2HB2T0dpBWDNNqHkozFkmC6pV0n0Z'), tools: [], medium: 'Layout' },
  { id: 'gd-40', title: 'Poster 40', description: '', image: getDriveUrl('1cjkt1qIYFKdtRtdijGgaFzAbKrbDzyAg'), tools: [], medium: 'Digital Composition' },
  { id: 'gd-41', title: 'Poster 41', description: '', image: getDriveUrl('1gkfTdxczUlBD0FmNRFFQs_Ny2RFvvfrG'), tools: [], medium: 'Visual Design' },
  { id: 'gd-42', title: 'Poster 42', description: '', image: getDriveUrl('1iz28K4lTPG9MjOVH2ULTshCd8QteOO11'), tools: [], medium: 'Graphic Design' },
  { id: 'gd-43', title: 'Poster 43', description: '', image: getDriveUrl('1izTO_-P4LAcFZOJYdWF5aFuAU0HQTvtI'), tools: [], medium: 'Digital Art' },
  { id: 'gd-44', title: 'Poster 44', description: '', image: getDriveUrl('1jI2MXQRHRNzKUeBJiS4-9Q023kgzg2QF'), tools: [], medium: 'Typography' },
  { id: 'gd-45', title: 'Poster 45', description: '', image: getDriveUrl('1jQXc-dalpA_UmGqRpK29gFqms-5gqtby'), tools: [], medium: 'Editorial' },
  { id: 'gd-46', title: 'Poster 46', description: '', image: getDriveUrl('1jXDOblMKWJKptzSCJ795WqfowZ1Pb-Zi'), tools: [], medium: 'Visual Art' },
  { id: 'gd-47', title: 'Poster 47', description: '', image: getDriveUrl('1l1l9T_GXSDImWZqnoA8mLJ7Z8PpNquqo'), tools: [], medium: 'Digital Design' },
  { id: 'gd-48', title: 'Poster 48', description: '', image: getDriveUrl('1mbpcW3fkYyC4uVbB8koW7uPCeM4yULmV'), tools: [], medium: 'Branding' },
  { id: 'gd-49', title: 'Poster 49', description: '', image: getDriveUrl('1nonVxiGLBNRQ1G_EwFnH_dcEwATABvoY'), tools: [], medium: 'Layout Design' },
  { id: 'gd-50', title: 'Poster 50', description: '', image: getDriveUrl('1qURqzmc4xxtxHUaYHjuXuUgJKd1gRUYQ'), tools: [], medium: 'Graphic Composition' },
  { id: 'gd-51', title: 'Poster 51', description: '', image: getDriveUrl('1sjDo54ZpZTV7oQQY09gFj575vH1qd79D'), tools: [], medium: 'Digital Art' },
  { id: 'gd-52', title: 'Poster 52', description: '', image: getDriveUrl('1t-7SRbXTc9hRIJsfL6LqsxyDobyRpIbA'), tools: [], medium: 'Typography' },
  { id: 'gd-53', title: 'Poster 53', description: '', image: getDriveUrl('1uA2enZjp21t_C1wQxWeHG5rJiApCkPPc'), tools: [], medium: 'Visual Identity' },
  { id: 'gd-54', title: 'Poster 54', description: '', image: getDriveUrl('1vnC5Q6BsIMcK7z6kc4PrHveA7uKJfrs7'), tools: [], medium: 'Poster Art' },
  { id: 'gd-55', title: 'Poster 55', description: '', image: getDriveUrl('1ywmAJ010oWjkOjl7KI3xUXGkgqUmo0QW'), tools: [], medium: 'Graphic Design' },
  { id: 'gd-56', title: 'Poster 56', description: '', image: getDriveUrl('1O556UXC13iPuWKqEumtF__ED1EUNhjTt'), tools: [], medium: 'Poster Design' },
  { id: 'gd-57', title: 'Poster 57', description: '', image: getDriveUrl('1U_1qSKiGxVmBCO--rN-n9r39ZKhi20Vb'), tools: [], medium: 'Visual Arts' },
  { id: 'gd-58', title: 'Poster 58', description: '', image: getDriveUrl('1a6yATybNnqIBkq7rzs958yG_B6oWmH6a'), tools: [], medium: 'Graphic Composition' },
  { id: 'gd-59', title: 'Poster 59', description: '', image: getDriveUrl('1e_6CWMQFNqIoILEKNOKEVHM_z0scrYr-'), tools: [], medium: 'Editorial Design' },
  { id: 'gd-60', title: 'Poster 60', description: '', image: getDriveUrl('1kW6BLtnPqEbJITwZrY2x2a5g19tFkzFa'), tools: [], medium: 'Brand Identity' },
  { id: 'gd-61', title: 'Poster 61', description: '', image: getDriveUrl('1m4ZCkwgIfWgPWuzxATfsqaonnk3y3iMC'), tools: [], medium: 'Modern Poster' },
  { id: 'gd-62', title: 'Poster 62', description: '', image: getDriveUrl('1pQY4upA4FpYbj5SBrqu_tt4LvkNAxsgi'), tools: [], medium: 'Visual Identity' }
];

export const WEB_DEVELOPMENT_WORKS: WebProject[] = [
  
  {
    id: 'web-2',
    title: 'Grotesque Studio',
    description: 'An experimental aesthetic-driven digital space pushing the boundaries of modern layout and branding.',
    image: getScreenshotUrl('https://grotesque-tan-kpj8mtaeyl.edgeone.app/'),
    tools: ['Vite', 'Three.js', 'EdgeOne'],
    techStack: ['TypeScript', 'WebGL', 'Edge Computing'],
    role: 'Frontend',
    link: 'https://grotesque-tan-kpj8mtaeyl.edgeone.app/',
    github: '#'
  },
  {
    id: 'web-3',
    title: 'Nalanda Foundation',
    description: 'A comprehensive educational platform dedicated to preserving knowledge and fostering digital learning communities.',
    image: getScreenshotUrl('https://nalandafoundation-1617.vercel.app'),
    tools: ['React', 'Firebase', 'Vercel'],
    techStack: ['React Router', 'Node.js', 'Tailwind CSS'],
    role: 'Full Stack',
    link: 'https://nalandafoundation-1617.vercel.app',
    github: '#'
  },
  {
    id: 'web-4',
    title: 'IPC Debugger',
    description: 'A robust utility tool for developers to debug and monitor inter-process communications in real-time.',
    image: getScreenshotUrl('https://ipcdebugger.netlify.app'),
    tools: ['Netlify', 'React', 'Monaco Editor'],
    techStack: ['Web Workers', 'Performance API', 'Redux'],
    role: 'Frontend',
    link: 'https://ipcdebugger.netlify.app',
    github: '#'
  },
  {
    id: 'web-5',
    title: 'Bacham Email Bot',
    description: 'An intelligent email automation bot designed to streamline outreach and communication workflows with high-efficiency templates.',
    image: getScreenshotUrl('https://bachamemailbot.vercel.app/'),
    tools: ['React', 'Node.js', 'Vercel'],
    techStack: ['Tailwind CSS', 'Gemini API', 'Nodemailer'],
    role: 'Full Stack',
    link: 'https://bachamemailbot.vercel.app/',
    github: '#'
  },
  {
    id: 'web-6',
    title: 'Chess Online',
    description: 'An interactive and engaging web-based chess game supporting real-time player vs. player matches with responsive boards.',
    image: getScreenshotUrl('https://chessonlinegame.vercel.app/'),
    tools: ['React', 'Socket.io', 'Vercel'],
    techStack: ['Chess.js', 'Tailwind CSS', 'Framer Motion'],
    role: 'Full Stack',
    link: 'https://chessonlinegame.vercel.app/',
    github: '#'
  },
  {
    id: 'web-7',
    title: 'LPU ALFA',
    description: 'A comprehensive digital ecosystem and hub designed for the academic community at LPU to stay connected.',
    image: getScreenshotUrl('https://lpualfa.vercel.app/'),
    tools: ['React', 'Tailwind CSS', 'Vercel'],
    techStack: ['Next.js', 'TypeScript', 'Framer Motion'],
    role: 'Frontend',
    link: 'https://lpualfa.vercel.app/',
    github: '#'
  },
  {
    id: 'web-8',
    title: 'Ratan Tata Innovation Hub',
    description: 'A visual and informative portal dedicated to showcasing pioneering initiatives, tech hub updates, and innovative startup ecosystems.',
    image: getScreenshotUrl('https://ratan-tata-innovation-hub-seven.vercel.app/'),
    tools: ['React', 'Framer Motion', 'Vercel'],
    techStack: ['Tailwind CSS', 'TypeScript', 'Lucide Icons'],
    role: 'Frontend',
    link: 'https://ratan-tata-innovation-hub-seven.vercel.app/',
    github: '#'
  },
  {
    id: 'web-9',
    title: 'Nawaf Edits',
    description: 'A high-end creative portfolio designed to showcase premium video editing, custom motion graphics, and post-production masterpieces.',
    image: getScreenshotUrl('https://nawafedits.vercel.app/'),
    tools: ['Vite', 'Tailwind CSS', 'Vercel'],
    techStack: ['React', 'Framer Motion', 'Lucide Icons'],
    role: 'Frontend',
    link: 'https://nawafedits.vercel.app/',
    github: '#'
  },
  {
    id: 'web-10',
    title: 'Auraa PDF',
    description: 'A streamlined, user-friendly utility platform for viewing, managing, merging, and optimizing PDF documents directly in the browser.',
    image: getScreenshotUrl('https://auraapdf.vercel.app/'),
    tools: ['React', 'PDF.js', 'Vercel'],
    techStack: ['Tailwind CSS', 'TypeScript', 'Web APIs'],
    role: 'Frontend',
    link: 'https://auraapdf.vercel.app/',
    github: '#'
  }
];

export const APP_DEVELOPMENT_WORKS: AppProject[] = [
  {
    id: 'app-alfa-admin',
    title: 'ALFA Admin App',
    description: 'A specialized administrative dashboard for the ALFA ecosystem, providing high-level management and real-time oversight.',
    image: 'https://i.postimg.cc/nLj5Tr4R/2ba07e26-4ddc-409e-9ab9-a97608167c28.jpg',
    tools: ['Flutter', 'Firebase', 'Analytics'],
    platform: 'Android',
    features: ['System Control', 'User Management', 'Performance Tracking', 'Global Settings'],
    link: '#'
  },
  {
    id: 'app-peoples-voice',
    title: 'Peoples Voice App',
    description: 'A platform dedicated to democratic empowerment, allowing citizens to voice concerns and engage directly with community initiatives.',
    image: 'https://i.postimg.cc/FsrB8Db6/56f58ed4-fca6-481b-9b9e-a4b4e3321bc2.jpg',
    tools: ['React Native', 'Node.js', 'Auth0'],
    platform: 'Cross-Platform',
    features: ['Community Forums', 'Direct Feedback', 'Voting System', 'Verified Profiles'],
    link: '#'
  },
  {
    id: 'app-alfa',
    title: 'ALFA',
    description: 'A premium corporate-style mobile application designed for high-end storytelling and professional branding.',
    image: 'https://i.postimg.cc/GtRrDGy8/App-Launch-Your-Story-in-Black-Bright-Green-Cool-Corporate-Style.jpg',
    tools: ['Flutter', 'Dart', 'Firebase'],
    platform: 'Android',
    features: ['Custom Corporate Branding', 'Interactive Storytelling', 'Push Notifications', 'Real-time Analytics'],
    link: 'https://alfalpu1.apk.com/'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Fullstack Development', icon: 'Globe', level: 'Expert' },
  { name: 'Flutter Development', icon: 'Smartphone', level: 'Expert' },
  { name: 'Graphic Design', icon: 'Palette', level: 'Expert' },
  { name: 'UI/UX Engineering', icon: 'Layout', level: 'Expert' },
  { name: 'React Ecosystem', icon: 'Code', level: 'Expert' },
  { name: 'Brand Strategy', icon: 'Sparkles', level: 'Advanced' }
];
