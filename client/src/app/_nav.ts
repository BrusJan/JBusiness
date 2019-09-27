interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Report',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Projects',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'People',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Tasks',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'New task',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'My tasks',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Comsumers',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Customers',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'Management',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'CMS links',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star'
  },
  {
    name: 'User management',
    url: '/dashboard',
    icon: 'icon-ban',
    attributes: { disabled: true },
  },
  {
    name: 'Go to janbrus.cz',
    url: 'http://janbrus.cz',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success',
    attributes: { target: '_blank', rel: 'noopener' }
  },
  {
    name: 'Go to LinkedIn',
    url: 'https://www.linkedin.com/in/jan-brus-b158685a/',
    icon: 'icon-layers',
    variant: 'info',
    attributes: { target: '_blank', rel: 'noopener' }
  }
];
