import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'Hello JS From chenchen',
  description: '这里是陈陈的JS',
  base: '/JS/',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    sidebar: [
      {
        text: 'JS Basic',
        link: '/JSBasic',
        children: [
          { link: '/JSBasic/basics.md', text: 'JS 基础知识' },
          { link: '/JSBasic/function.md', text: 'function' },
          { link: '/JSBasic/object.md', text: 'object' },
          { link: '/JSBasic/dataTypes.md', text: '数据类型' },
        ],
      },
      {
        text: 'Q & A',
        link: '/QA',
        children: [{ link: '/QA/dataTypes.md', text: '数据类型基础' }],
      },
    ],
  },
});
