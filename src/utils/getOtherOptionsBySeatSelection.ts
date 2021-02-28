import { interiorSeatColorTypes } from '../models/interiorOptions';

export const getOtherOptionsBySeatSelection = (
  seatColor: keyof typeof interiorSeatColorTypes
) => {
  const seatColorMapper = {
    NERO: {
      dashboard: [
        {
          id: 1,
          name: 'Nero',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/DSH/DSHG/94084269/menu_icon.jpg',
        },
        {
          id: 2,
          name: 'Nero / Cuoio',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/DSH/DSHG/94084272/menu_icon.jpg',
        },
      ],
      carpet: [
        {
          id: 1,
          name: 'Nero',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/CRPT/CRPT/94084217/menu_icon.jpg',
        },
      ],
      steeringWheel: [
        {
          id: 1,
          name: 'Nero',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/STEERINGWHEEL/STL1/94084213/menu_icon.jpg',
        },
      ],
      headlining: [
        {
          id: 1,
          name: 'Nero',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/RUF/ROO1/94084295/menu_icon.jpg',
        },
        {
          id: 2,
          name: 'Grigio',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/RUF/ROO1/94084297/menu_icon.jpg',
        },
      ],
      trim: [
        {
          id: 1,
          name: 'Radica',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/TRIM/Q4MN/menu_icon.jpg',
        },
        {
          id: 2,
          name: 'Ebano',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/TRIM/Q68V/menu_icon.jpg',
        },
        {
          id: 3,
          name: 'Black Piano',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/TRIM/Q7PK/menu_icon.jpg',
        },
        {
          id: 4,
          name: '고광택 카본 파이버 능직 직물',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/TRIM/Q04B/menu_icon.jpg',
        },
        {
          id: 5,
          name: '고광택 Rovere 베니어',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/TRIM/Q03Z/menu_icon.jpg',
        },
      ],
    },
    CUOIO: {
      dashboard: [
        {
          id: 1,
          name: 'Nero',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/DSH/DSHG/94084269/menu_icon.jpg',
        },
        {
          id: 2,
          name: 'Nero / Cuoio',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/DSH/DSHG/94084272/menu_icon.jpg',
        },
        {
          id: 3,
          name: 'Cuoio 색 스티칭이 있는 Nero',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/DSH/DSHG/94084271/menu_icon.jpg',
        },
      ],
      carpet: [
        {
          id: 1,
          name: 'Nero',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/CRPT/CRPT/94084217/menu_icon.jpg',
        },
      ],
      steeringWheel: [
        {
          id: 1,
          name: 'Nero',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/STEERINGWHEEL/STL1/94084213/menu_icon.jpg',
        },
      ],
      headlining: [
        {
          id: 1,
          name: 'Nero',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/RUF/ROO1/94084295/menu_icon.jpg',
        },
        {
          id: 2,
          name: 'Grigio',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/RUF/ROO1/94084297/menu_icon.jpg',
        },
      ],
      trim: [
        {
          id: 1,
          name: 'Radica',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/TRIM/Q4MN/menu_icon.jpg',
        },
        {
          id: 2,
          name: 'Ebano',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/TRIM/Q68V/menu_icon.jpg',
        },
        {
          id: 3,
          name: 'Black Piano',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/TRIM/Q7PK/menu_icon.jpg',
        },
        {
          id: 4,
          name: '고광택 카본 파이버 능직 직물',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/TRIM/Q04B/menu_icon.jpg',
        },
        {
          id: 5,
          name: '고광택 Rovere 베니어',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/TRIM/Q03Z/menu_icon.jpg',
        },
      ],
    },
    BLU: {
      dashboard: [
        {
          id: 1,
          name: 'Marrone / Blu',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/DSH/DSHG/94084278/menu_icon.jpg',
        },
      ],
      carpet: [
        {
          id: 1,
          name: 'Marrone',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/CRPT/CRPT/94084218/menu_icon.jpg',
        },
      ],
      steeringWheel: [
        {
          id: 1,
          name: 'Marrone',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/STEERINGWHEEL/STL1/94084214/menu_icon.jpg',
        },
      ],
      headlining: [
        {
          id: 1,
          name: 'Grigio',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/RUF/ROO1/94084297/menu_icon.jpg',
        },
      ],
      trim: [
        {
          id: 1,
          name: 'Radica',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/TRIM/Q4MN/menu_icon.jpg',
        },
        {
          id: 2,
          name: 'Ebano',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/TRIM/Q68V/menu_icon.jpg',
        },
        {
          id: 3,
          name: 'Black Piano',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/TRIM/Q7PK/menu_icon.jpg',
        },
        {
          id: 4,
          name: '고광택 카본 파이버 능직 직물',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/TRIM/Q04B/menu_icon.jpg',
        },
      ],
    },
    SABBIA: {
      dashboard: [
        {
          id: 1,
          name: 'Nero',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/RUF/ROO1/94084295/menu_icon.jpg',
        },
        {
          id: 2,
          name: 'Marrone',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/DSH/DSHG/94084301/menu_icon.jpg',
        },
        {
          id: 3,
          name: 'Sabbia 색 스티칭이 있는 Nero',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/DSH/DSHG/94084270/menu_icon.jpg',
        },
        {
          id: 4,
          name: 'Sabbia 색 스티칭이 있는 Marrone',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/DSH/DSHG/94084276/menu_icon.jpg',
        },
      ],
      carpet: [
        {
          id: 1,
          name: 'Sabbia',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/CRPT/CRPT/94084220/menu_icon.jpg',
        },
      ],
      steeringWheel: [
        {
          id: 1,
          name: 'Marrone',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/STEERINGWHEEL/STL1/94084214/menu_icon.jpg',
        },
        {
          id: 2,
          name: 'Sabbia',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/STEERINGWHEEL/STL1/94084221/menu_icon.jpg',
        },
      ],
      headlining: [
        {
          id: 1,
          name: 'Sabbia',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/RUF/ROO1/94084296/menu_icon.jpg',
        },
      ],
      trim: [
        {
          id: 1,
          name: 'Radica',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/TRIM/Q4MN/menu_icon.jpg',
        },
        {
          id: 2,
          name: 'Ebano',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/TRIM/Q68V/menu_icon.jpg',
        },
        {
          id: 3,
          name: 'Black Piano',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/TRIM/Q7PK/menu_icon.jpg',
        },
        {
          id: 4,
          name: '고광택 카본 파이버 능직 직물',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/TRIM/Q04B/menu_icon.jpg',
        },
        {
          id: 5,
          name: '고광택 Rovere 베니어',
          url:
            'https://www.configurator.maserati.com/cc/adm/repo/8578300/TRIM/Q03Z/menu_icon.jpg',
        },
      ],
    },
  };
  return seatColorMapper[seatColor];
};
