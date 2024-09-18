export type TChildren = React.ReactNode;

export type TDiffucltyCards = {
  name: string;
  text: string;
  lines: string;
  color: string;
  icons: string;
  point: string;
  id?: number;
};

export type TProfileLayout = {
  children: TChildren;
  path?: string;
};

export type TProfileSidebarLinks = {
  name: string;
  path: string;
  icon: TChildren;
};

export type TNavbarDropdownLinks = {
  path: string;
  name: string;
  icon: TChildren;
};

export type TProfileDataCards<T> = TProfileDataCard<T>[];

export type TProfileDataCard<T> = {
  heading: string;
  paragraph: T;
  icon: TChildren;
};
