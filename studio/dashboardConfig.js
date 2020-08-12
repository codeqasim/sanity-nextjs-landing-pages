export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f342506351ffbdd0f7e7128',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nvptspad',
                  apiId: 'a5f218f2-5310-4e93-86f9-aa9395256035'
                },
                {
                  buildHookId: '5f34250625bb6468649e4831',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8qoo1dvi',
                  apiId: '1b05ceca-afd4-4065-b448-1ad40800d1f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/qaxim/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8qoo1dvi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
