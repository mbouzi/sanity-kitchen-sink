export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fa99fae63a5f9012653b518',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wef31ahe',
                  apiId: '8e2d3e12-5d3e-4b09-8f09-c07042f2e011'
                },
                {
                  buildHookId: '5fa99fae054213008ab26192',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-c9qz2fvs',
                  apiId: '2a44d6c3-c9c5-4065-afd5-068980bea368'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mbouzi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-c9qz2fvs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
