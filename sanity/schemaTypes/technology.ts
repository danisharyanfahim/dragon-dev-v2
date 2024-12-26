export default {
  name: 'tech',
  type: 'document',
  title: 'Technology Card',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Technology Name',
    },
    {
      name: 'features',
      type: 'array',
      title: 'Key Features',
      of: [
        {
          name: 'feature',
          type: 'string',
          title: 'Feature',
        },
      ],
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Icon',
    },
    {
      name: 'url',
      type: 'slug',
      title: 'Site URL',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
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
