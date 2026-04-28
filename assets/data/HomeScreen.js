import {Briefcase, Globe, LayoutDashboard, Moon, Puzzle, Shield, Smartphone, Zap} from 'lucide-react-native';

export const HomeScreenData = {
  aboutMe: {
    intro: 'I am a Front-End Website & Mobile Developer delivering production-ready apps using React & React Native (Expo/CLI).\nYou\'ll get many of the industry standard features such as : ',
    features: [
      {icon: LayoutDashboard, label: 'Responsive UIs', color: 'text-primary-500'},
      {icon: Zap,             label: 'Great Animations & Smooth Performance', color: 'text-warning-500'},
      {icon: Smartphone,      label: 'Great UI/UX', color: 'text-tertiary-500'},
      {icon: Shield,          label: 'Authentication & Authorization', color: 'text-success-500'},
      {icon: Globe,           label: 'API Integrations', color: 'text-info-500'},
      {icon: Briefcase,       label: 'Best Practices', color: 'text-secondary-600'},
      {icon: Moon,            label: 'Dark Mode & Multiple Language Support', color: 'text-typography-500'},
      {icon: Puzzle,          label: 'Application State Management', color: 'text-error-500'},
    ],
    outro : 'This Website is an Expo + React-Native Project with single codebase for both Web and Mobile App.\n You can download the Application from here: ',
    link: 'https://yeahwhatever.com',
  },
};
