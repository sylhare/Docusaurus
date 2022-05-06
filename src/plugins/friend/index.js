function friendsPlugin(context, options) {
  return {
    name: 'docusaurus-friend-plugin',

    async loadContent() {
      // The loadContent hook is executed after siteConfig and env has been loaded.
      // You can return a JavaScript object that will be passed to contentLoaded hook.
      return { postBodyTags: `<p>Hello Content</p>`, friends: ['Yangshun', 'Sebastien'] };
    },

    async contentLoaded({content, actions}) {
      const {createData, addRoute} = actions;
      console.log('content loaded')
      console.log(content)
      console.log('actions loaded')
      console.log(actions)
      // Create friends.json
      const friendsJsonPath = await createData(
        'friends.json',
        JSON.stringify(content.friends),
      );

      // Add the '/friends' routes, and ensure it receives the friends props
      addRoute({
        path: '/Docusaurus/friends',
        component: '@site/src/components/Friend',
        modules: {
          // propName -> JSON file path
          friends: friendsJsonPath,
        },
        exact: true,
      });
    },


    async postBuild(props) {
      console.log('post build')
      console.log(props)
      return [];
      // After docusaurus <build> finish.
    },

    injectHtmlTags({content}) {
      console.log('inject content')
      console.log(content)
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: 'https://www.github.com',
            },
          },
        ],
        preBodyTags: [
          {
            tagName: 'script',
            attributes: {
              charset: 'utf-8',
              src: '/noflash.js',
            },
          },
        ],
        postBodyTags: [`<div> This is post body </div>`, content.postBodyTags],
      };
    },
  };
}

module.exports = friendsPlugin
