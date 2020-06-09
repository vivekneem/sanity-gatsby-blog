export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5edf261f5bf38c3cb3f4dd18',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-um3arr7j',
                  apiId: '2c75e4c3-b341-4d9b-81f3-776b08d2ba9e'
                },
                {
                  buildHookId: '5edf261fd1325427f549c06c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-y3euuydo',
                  apiId: 'ad1b00c8-7744-498c-81ab-1ff6a3f3386e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vivekneem/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-y3euuydo.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
