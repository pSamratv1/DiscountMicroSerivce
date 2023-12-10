import { ReactNode } from "react";

export type SidebarModulesSchema = {
  modules: { icon: ReactNode; title: string; href: string }[];
  isScrollable?: boolean;
};
