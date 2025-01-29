export type SidenavItem = {
  routeLink?:string;
  icon?:string;
  label?: string;
  expanded?: boolean;
  items?: SidenavItem[]
}

