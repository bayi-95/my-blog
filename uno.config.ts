import { defineConfig } from 'unocss/vite';

export default defineConfig({
  content: {
    pipeline: {
      exclude: ['node_modules', 'dist', '.git', '.husky', '.vscode', 'public', 'build', 'mock', './stats.html']
    }
  },
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
    'flex-col-center': 'flex-center flex-col',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'i-flex-center': 'inline-flex justify-center items-center',
    'i-flex-x-center': 'inline-flex justify-center',
    'i-flex-y-center': 'inline-flex items-center',
    'flex-col': 'flex flex-col',
    'flex-col-stretch': 'flex-col items-stretch',
    'i-flex-col': 'inline-flex flex-col',
    'i-flex-col-stretch': 'i-flex-col items-stretch',
    'flex-1-hidden': 'flex-1 overflow-hidden',
    'absolute-lt': 'absolute left-0 top-0',
    'absolute-lb': 'absolute left-0 bottom-0',
    'absolute-rt': 'absolute right-0 top-0',
    'absolute-rb': 'absolute right-0 bottom-0',
    'absolute-tl': 'absolute-lt',
    'absolute-tr': 'absolute-rt',
    'absolute-bl': 'absolute-lb',
    'absolute-br': 'absolute-rb',
    'absolute-center': 'absolute-lt flex-center wh-full',
    'fixed-lt': 'fixed left-0 top-0',
    'fixed-lb': 'fixed left-0 bottom-0',
    'fixed-rt': 'fixed right-0 top-0',
    'fixed-rb': 'fixed right-0 bottom-0',
    'fixed-tl': 'fixed-lt',
    'fixed-tr': 'fixed-rt',
    'fixed-bl': 'fixed-lb',
    'fixed-br': 'fixed-rb',
    'fixed-center': 'fixed-lt flex-center wh-full',
    'nowrap-hidden': 'whitespace-nowrap overflow-hidden',
    'ellipsis-text': 'nowrap-hidden text-ellipsis',
    'transition-base': 'transition-all duration-300 ease-in-out'
  },
  theme: {
    colors: {
      // logo 色
      color_logo: 'var(--aps-color-logo)',
      // 基础
      white: 'var(--el-color-white)',
      primary: 'var(--el-color-primary)',
      primary_dark: 'var(--el-color-primary-dark-2)',
      primary_light: 'var(--el-color-primary-light-3)',
      primary_lighter: 'var(--el-color-primary-light-9)',
      info: 'var(--el-color-info)',
      success: 'var(--el-color-success)',
      success_light: 'var(--el-color-success-light-5)',
      warning: 'var(--el-color-warning)',
      error: 'var(--el-color-error)',
      danger: 'var(--el-color-danger)',
      danger_light: 'var(--el-color-danger-light-5)',
      danger_darker: 'var(--el-color-danger-dark-2)',
      placeholder: 'var(--el-text-color-placeholder)',
      // 背景
      background: 'var(--el-bg-color)',
      background_light_9: 'var(--el-color-info-light-9)',
      background_page: 'var(--el-bg-color-page)',
      background_fill_lighter: 'var(--el-fill-color-lighter)',
      // 边框
      border_primary: 'var(--el-border-color)',
      border_light: 'var(--el-border-color-light)',
      border_lighter: 'var(--el-border-color-lighter)',
      border_dark: 'var(--el-border-color-dark)',
      border_darker: 'var(--el-border-color-darker)',
      // 字体
      text_primary: 'var(--el-text-color-primary)',
      text_regular: 'var(--el-text-color-regular)',
      text_secondary: 'var(--el-text-color-secondary)',
      text_placeholder: 'var(--el-text-color-placeholder)',
      text_disabled: 'var(--el-text-color-disabled)',
      // 暗黑
      dark: '#18181c'
    },
    breakpoints: {
      '2xl': '1440px'
    }
  }
});
