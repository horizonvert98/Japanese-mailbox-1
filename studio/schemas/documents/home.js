import bcp47 from 'bcp47';

export default {
  name: 'home-page',
  type: 'document',
  title: 'Home Page',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      title: 'Header Section',
      name: 'headersection',
      description: 'This is the top header section that everyone sees when they first visit the website.',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'localeString'
        },
        {
          title: 'Subtitle',
          name: 'subtitle',
          type: 'localeText'
        },
        {
          title: 'Button Text',
          name: 'buttontext',
          type: 'localeString'
        },
        {
          title: 'Button URL Path',
          name: 'buttonpath',
          type: 'string'
        },

      ]
    },
    {
      title: 'About Section',
      name: 'aboutsection',
      description: 'This section describes what Ecotowari is about in a single paragraph.',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'localeString'
        },
        {
          title: 'Content',
          name: 'content',
          type: 'localeText'
        }
      ]
    },
    {
      title: 'Environmental Impact Section',
      name: 'environmentsection',
      description: 'This section explains the impact of unsolicitied flyers on the environment.',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'localeString'
        },
        {
          title: 'water',
          name: 'water',
          type: 'localeText'
        },
        {
          title: 'electricity',
          name: 'electricity',
          type: 'localeText'
        },
        {
          title: 'chemicals',
          name: 'chemicals',
          type: 'localeText'
        },
        {
          title: 'wood',
          name: 'wood',
          type: 'localeText'
        }
      ]
    },
    {
      title: 'Statistics Section',
      name: 'statisticsection',
      description: 'This section reveals the success ecotowari stickers are having as of this moment',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'localeString'
        },
        {
          title: 'Section Summary',
          name: 'content',
          type: 'localeText'
        },
        {
          title: 'water',
          name: 'water',
          type: 'localeString'
        },
        {
          title: 'electricity',
          name: 'electricity',
          type: 'localeString'
        },
        {
          title: 'co2',
          name: 'co2',
          type: 'localeString'
        },
        {
          title: 'flyers',
          name: 'flyers',
          type: 'localeString'
        },

      ]
    }
  ],
};
