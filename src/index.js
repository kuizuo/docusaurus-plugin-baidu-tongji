module.exports = function (context, options) {
  const {src, verification} = options;

  if (!src) {
    throw new Error('Please specify the `src` field in the `options` object to use docusaurus-plugin-baidu-tongji');
  }

  return {
    name: 'docusaurus-plugin-baidu-tongji',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            innerHTML: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "${src}";
              hm.defer = true;
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
            })();
          `,
          },
          {
            tagName: 'meta',
            attributes: {
              name: 'baidu-site-verification',
              content: verification ?? '',
            },
          },
        ],
      };
    },
  };
};
