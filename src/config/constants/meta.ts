import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BridgeSwap',
  description:
    'The AMM you can trust on the BSC network. Bringing you the true meaning of DeFi. Trade and farm tokens, passively, on our platform.',
  image: 'https://bridgeswap.app/images/hero.svg',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('BridgeSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('BridgeSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('BridgeSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('BridgeSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('BridgeSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('BridgeSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('BridgeSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('BridgeSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('BridgeSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('BridgeSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('BridgeSwap')}`,
      }
    default:
      return null
  }
}
