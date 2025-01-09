export default {
  name: 'software',
  type: 'document',
  title: 'Software Card',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Software Name',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
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
