import { feedsCardsManager } from '@/components/feeds/api'
import { ComponentMetadata, ComponentOptions } from '@/components/types'
import { feedsFilterPlugin } from './plugin'

const entry = async () => {
  const { select } = await import('@/core/spin-query')
  let leftPanel: HTMLElement
  if (feedsCardsManager.managerType === 'v2') {
    const leftAside = await select('.bili-dyn-home--member aside.left')
    const section = document.createElement('section')
    section.classList.add('feeds-filter-section')
    leftAside.insertAdjacentElement('afterbegin', section)
    leftPanel = section
  } else {
    leftPanel = await select('.home-container .left-panel')
  }
  if (leftPanel === null) {
    return
  }
  const FeedsFilterCard = await import('./FeedsFilterCard.vue')
  const { mountVueComponent } = await import('@/core/utils')
  leftPanel.insertAdjacentElement('afterbegin', mountVueComponent(FeedsFilterCard).$el)
}
const options: ComponentOptions = {
  types: {
    defaultValue: [],
    displayName: '过滤动态类型',
    hidden: true,
  },
  patterns: {
    defaultValue: [],
    displayName: '过滤关键词',
    hidden: true,
  },
  sideCards: {
    defaultValue: [],
    displayName: '过滤侧边栏',
    hidden: true,
  },
  specialTypes: {
    defaultValue: [],
    displayName: '过滤特殊动态类型',
    hidden: true,
  },
}
export type FeedsFilterOptions = {
  types: number[]
  patterns: string[]
  /** FIXME: 虽然代码里按照`number[]`, 但其实存进去的是`string[]`? */
  sideCards: number[]
  specialTypes: number[]
}
export const component: ComponentMetadata = {
  name: 'feedsFilter',
  displayName: '动态过滤器',
  description: {
    'zh-CN': '按照类型或者关键词过滤动态首页的内容, 也可以移除动态页的一些侧边卡片.',
  },
  entry,
  tags: [
    componentsTags.feeds,
  ],
  options,
  reload: () => document.body.classList.remove('disable-feeds-filter'),
  unload: () => document.body.classList.add('disable-feeds-filter'),
  urlInclude: [
    // 仅动态首页
    /^https:\/\/t\.bilibili\.com\/$/,
  ],
  plugin: feedsFilterPlugin,
}
