import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Sensors',
    icon: 'activity-outline',
    link: '/pages/sensors'
  },
  {
    title: 'Settings',
    icon: 'settings-outline',
    children: [
      {
        title: 'User Account',
        link: '/pages/setting/user-account',
      },
    ]
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google map',
        link: '/pages/maps/google-map',
      },
    ]
  },
  {
    title: 'Historical',
    icon: 'pie-chart-outline',
    link: '/pages/historical'
  }
];
