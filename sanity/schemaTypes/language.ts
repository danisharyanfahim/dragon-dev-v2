export default {
  name: 'programmingLanguage',
  type: 'document',
  title: 'Programming Language',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Language Name',
    },
    {
      name: 'usedFor',
      type: 'array',
      title: 'Mainly Used For',
      of: [
        {
          name: 'use',
          type: 'string',
          title: 'Purpose',
        },
      ],
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Icon',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'yearCreated',
      type: 'number',
      title: 'Year Created',
    },
    {
      name: 'understanding',
      type: 'string',
      title: 'Understanding of Technology',
      initialValue: 'solid',
      options: {
        list: [
          {title: 'Solid', value: 'solid'},
          {title: 'Familiar', value: 'familiar'},
        ],
      },
    },
  ],
}
