import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', //開発ディレクトリ設定
  build: {
    outDir: '../dist', //出力場所の指定
    rollupOptions: {
      assetFileNames: (assetInfo) => {
        let extType = assetInfo.name.split('.')[1];
        if (extType === 'css') {
          return `assets/css/style.css`;
        }
      },
    },
  },
});
