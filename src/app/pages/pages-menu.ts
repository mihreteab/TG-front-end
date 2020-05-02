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
  },
  {
    title: 'Report',
    icon: 'archive-outline',
    children: [
      {
        title: 'HTML',
        link: '/pages/report/html',
      },
      {
        title: 'CSV',
        link: '/pages/report/csv',
      },
      {
        title: 'PDF',
        link: '/pages/report/pdf',
      },


    ]
  }
];
