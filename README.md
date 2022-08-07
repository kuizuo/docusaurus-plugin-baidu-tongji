#  Baidu tongji plugin for Docusaurus.

npm install --save docusaurus-plugin-baidu-tongji

## Configuration

docusaurus.config.js
```
module.exports = {
  plugins: [
    'docusaurus-plugin-matomo',
    {
      src: 'https://hm.baidu.com/hm.js?xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      verification: 'xxxxxx',
    }
  ],
};
```
