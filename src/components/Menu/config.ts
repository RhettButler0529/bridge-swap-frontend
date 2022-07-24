import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: 'https://dex.bridgeswap.app/#/swap',
      },
      {
        label: t('Liquidity'),
        href: 'https://dex.bridgeswap.app/#/pool',
      },
      
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: "Defi 2.0 Zap",
    icon: "DefiIcon",
    href: "/defi",
  },
  // {
  //   label: t('Prediction (BETA)'),
  //   icon: 'PredictionsIcon',
  //   href: '/prediction',
  // },
  {
    label: t('Lottery'),
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: t('Referral Program'),
    icon: 'GroupsIcon',
    href: '/referral',
  },
  // {
  //   label: t('Collectibles'),
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: t('Team Battle'),
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  // },
  // {
  //   label: t('Teams & Profile'),
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: t('Leaderboard'),
  //       href: '/teams',
  //     },
  //     {
  //       label: t('Task Center'),
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: t('Your Profile'),
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: t('Info'),
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: t('Overview'),
  //       href: 'https://bridgeswap.info',
  //     },
  //     {
  //       label: t('Tokens'),
  //       href: 'https://bridgeswap.info/tokens',
  //     },
  //     {
  //       label: t('Pairs'),
  //       href: 'https://bridgeswap.info/pairs',
  //     },
  //     {
  //       label: t('Accounts'),
  //       href: 'https://bridgeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: t('IFO'),
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Team'),
        href: 'https://bridgeswap-exchange-1.gitbook.io/bridgeswap/our-team',
      },
      // {
      //   label: t('Voting'),
      //   href: 'https://voting.bridgeswap.app',
      // },
      // {
      //   label: t('Github'),
      //   href: 'https://github.com/Bridgeswap-Dex',
      // },
      // {
      //   label: t('Docs'),
      //   href: 'https://docs.bridgeswap.app',
      // },
      // {
      //   label: t('Blog'),
      //   href: 'https://bridgeswap.medium.com/',
      // },
      // {
      //   label: t('Merch'),
      //   href: 'https://bridgeswap.creator-spring.com/',
      // },
    ],
  },
]

export default config
