import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'Hello JS From chenchen',
  description: '这里是陈陈的JS',
  base: '/JS',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    sidebar: [
      {
        text: 'JS',
        link: '/JS',
        children: [
          { link: '/JS/basics.md', text: 'JS 基础知识' },
          { link: '/JS/function.md', text: 'function' },
          { link: '/JS/object.md', text: 'object' },
        ],
      },
    ],
  },
});
