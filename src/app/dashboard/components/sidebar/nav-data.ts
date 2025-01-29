import { SidenavItem } from "../../interfaces/dashboard.interfaces";

export const navbarData: SidenavItem[] = [
  {
    routeLink: 'home',
    icon: 'home',
    label: 'Home'
  },
  {
    routeLink: 'recipes',
    icon: 'receipt_long',
    label: 'Mis recetas',
    items: [
      {
        routeLink: 'graphs/orders',
        label: 'Nueva receta',
        icon: 'add'
      },
      {
        routeLink: 'graphs/quantities',
        label: 'Administrar recetas',
      }
    ]
  },
  // {
  //   routeLink: 'graphs',
  //   icon: 'bar_chart',
  //   label: 'Gráficos',
  //   items: [
  //     {
  //       routeLink: 'graphs/orders',
  //       label: 'Pedidos',
  //     },
  //     {
  //       routeLink: 'graphs/quantities',
  //       label: 'Cantidades',
  //     },
  //     {
  //       routeLink: 'graphs/processed',
  //       label: 'Procesados',
  //     }
  //   ]
  // },
  {
    routeLink: 'orders',
    icon: 'account_circle',
    label: 'Mi cuenta'
  },
]
