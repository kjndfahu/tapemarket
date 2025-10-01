import type {FaqItem, FooterItem, InfoItem, InfoProcessItem, NavItem, ProcessItem, StreamerItem} from "types/types";

export const HEADER_HEIGHT= '82'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Каталог', to: '/' },
  { label: 'Поддержка', to: '/support' },
  { label: 'FAQ', to: '/faq' },
];

export const FAQ_ITEMS: FaqItem[] = [
  {title: 'Укажите ваш вопрос тут?', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'},
  {title: 'Укажите ваш вопрос тут?', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'},
  {title: 'Укажите ваш вопрос тут?', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'},
  {title: 'Укажите ваш вопрос тут?', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'},
  {title: 'Укажите ваш вопрос тут?', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'},
  {title: 'Укажите ваш вопрос тут?', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'},
]

export const INFO_ITEMS: InfoItem[] = [
  {title: '124 000 ', text: 'Столько предметов было взято в аренду благодаря нашему сервису', img: '/img/firts-banner.png'},
  {title: '1 324 000', text: 'Столько игроков уже активно пользуется нашим сервисом', img: '/img/second-banner.png'},
  {title: '17 000', text: 'Отзывов о нашем проекте', img: '/img/third-banner.png'}
]

export const BIG_STREAMERS: StreamerItem[] = [
  { name: 'm3wsu', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'm4ga', logo: 'youtube', video: '/img/video.mp4' },
  { name: 'tried',  logo: 'twitch', video: '/img/video.mp4' },
  { name: 'sdaim',  logo: 'youtube', video: '/img/video.mp4' },
];

export const SMALL_STREAMERS: StreamerItem[] = [
  { name: 'm3wsu', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'm4ga', logo: 'youtube', video: '/img/video.mp4' },
  { name: 'tried', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'sdaim', logo: 'youtube', video: '/img/video.mp4' },
  { name: 'm3wsu', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'm4ga',  logo: 'youtube', video: '/img/video.mp4' },
  { name: 'm3wsu', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'm4ga', logo: 'youtube', video: '/img/video.mp4' },
  { name: 'tried', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'sdaim', logo: 'youtube', video: '/img/video.mp4' },
  { name: 'm3wsu', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'm4ga',  logo: 'youtube', video: '/img/video.mp4' },
  { name: 'm3wsu', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'm4ga', logo: 'youtube', video: '/img/video.mp4' },
  { name: 'tried', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'sdaim', logo: 'youtube', video: '/img/video.mp4' },
  { name: 'm3wsu', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'm4ga',  logo: 'youtube', video: '/img/video.mp4' },
  { name: 'm3wsu', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'm4ga', logo: 'youtube', video: '/img/video.mp4' },
  { name: 'tried', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'sdaim', logo: 'youtube', video: '/img/video.mp4' },
  { name: 'm3wsu', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'm4ga',  logo: 'youtube', video: '/img/video.mp4' },
  { name: 'm3wsu', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'm4ga', logo: 'youtube', video: '/img/video.mp4' },
  { name: 'tried', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'sdaim', logo: 'youtube', video: '/img/video.mp4' },
  { name: 'm3wsu', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'm4ga',  logo: 'youtube', video: '/img/video.mp4' },
  { name: 'm3wsu', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'm4ga', logo: 'youtube', video: '/img/video.mp4' },
  { name: 'tried', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'sdaim', logo: 'youtube', video: '/img/video.mp4' },
  { name: 'm3wsu', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'm4ga',  logo: 'youtube', video: '/img/video.mp4' },
  { name: 'sdaim', logo: 'youtube', video: '/img/video.mp4' },
  { name: 'm3wsu', logo: 'twitch', video: '/img/video.mp4' },
  { name: 'm4ga',  logo: 'youtube', video: '/img/video.mp4' },
];

export const INFO_PROCESS: InfoProcessItem[] = [
  {title: 'Все абсолютно прозрачно', text: 'Никаких скрытых комиссий и скидки постоянным арендаторам'},
  {title: 'Почему это выгодно арендаторам', text: 'Вы не тратите кучу денег на то, чтобы поиграть с вашими любимыми скинами'},
  {title: 'Доступность каждому', text: 'Взять скин в аренду может каждый, никаких ограничений'},
]

export const FOOTER_LINKS: FooterItem[] = [
  {title: 'Главная', link: '/'},
  {title: 'Процесс', link: '/process'},
  {title: 'Личный кабинет', link: '/personal-cabinet'},

  {title: 'Договор оферты', link: '/dogovor'},
  {title: 'FAQ', link: '/faq'},
  {title: 'Политика Конфиденциальности', link: '/privacy-policy'},

  {title: '8 800 123-45-67', link: '/'},
  {title: 'support@sup.com', link: '/'},
  {title: '@tapemarket', link: '/'},

  {title: 'Telegram', link: '/tg'},
  {title: 'Twitch', link: '/twitch'},
  {title: 'VK', link: '/vk'},
]