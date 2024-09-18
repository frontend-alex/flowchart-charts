import { Home, IdCard, Notebook, Plus, Settings, Shield, User } from "lucide-react";
import { TDiffucltyCards, TNavbarDropdownLinks, TProfileDataCards } from "./Types";

export const difficutltyCardsData: TDiffucltyCards[] = [
    {
        name: 'Easy',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, aspernatur. Molestiae omnis blanditiis eligendi veniam exercitationem iure dolorem dolor quo.',
        lines: '_ - _ _',
        icons: '/images/icons/easy.png',
        color: '#00FF29',
        point: '15+'
    },
    {
        name: 'Medium',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, aspernatur. Molestiae omnis blanditiis eligendi veniam exercitationem iure dolorem dolor quo.',
        lines: '_ _  - _ _ _',
        icons: '/images/icons/medium.png',
        color: '#FAFF00',
        point: '25+'
    },
    {
        name: 'Hard',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, aspernatur. Molestiae omnis blanditiis eligendi veniam exercitationem iure dolorem dolor quo.',
        lines: '_ _ _  - _ _ _ _ _',
        icons: '/images/icons/hard.png',
        color: '#F97515',
        point: '50+'
    }
]

export const NavbarDropdownLinks = (
    size: number
  ): TNavbarDropdownLinks[] => [
    {
      name: "Home",
      path: "/",
      icon: <Home size={size} />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <User size={size} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={size} />,
    },
    {
      name: "Posts",
      path: "/posts",
      icon: <Notebook size={size} />,
    },
    {
      name: "Create Post",
      path: "/create-post",
      icon: <Plus size={size} />,
    },
  ];
  
  export const ProfileDataCards = <T,>(
    user:  { primaryEmailAddress: { emailAddress: string } | null, username: string | null } 
  ): TProfileDataCards<T> => [
    {
      heading: "Username",
      paragraph: user?.username as T,
      icon: <User />,
    },
    {
      heading: "Email",
      paragraph: user?.primaryEmailAddress?.emailAddress as T,
      icon: <IdCard />,
    },
    {
      heading: "Account Check",
      paragraph: "No breaches" as T,
      icon: <Shield />,
    },
    {
      heading: "Posts",
      paragraph: 0 as T,
      icon: <Notebook />,
    },
  ];
  