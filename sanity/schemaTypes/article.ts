import {HighlightDecorator, HighlightIcon} from '../components/highlight-decorator'
import RatingInput from '../components/rating-input'

// Split this into multiple schema files

export default {
  name: 'article',
  type: 'document',
  title: 'Blog Article',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Article Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Link',
      options: {
        source: 'title',
      },
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'categoryName',
              type: 'string',
              title: 'Category Name',
            },
            {
              name: 'relevance',
              title: 'Relevance',
              type: 'number',
              validation: (rule) => rule.min(1).max(5),
              components: {input: RatingInput},
            },
            {
              name: 'format',
              title: 'Format Text',
              type: 'string',
              initialValue: 'camelCase',
              options: {
                list: [
                  {title: 'Capitalize', value: 'capitalize'},
                  {title: 'Camel Case', value: 'camelCase'},
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'overview',
      type: 'string',
      title: 'Overview',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
              {
                title: 'Highlight',
                value: 'highlight',
                icon: HighlightIcon,
                component: HighlightDecorator,
              },
            ],
          },
        },
        {
          type: 'image',
        },
        {
          title: 'Video',
          name: 'video',
          type: 'document',
          fields: [
            {title: 'Title', name: 'title', type: 'string'},
            {
              title: 'Video file',
              name: 'video',
              type: 'mux.video',
            },
          ],
        },
        {
          type: 'document',
          title: 'Code Block',
          fields: [
            {
              name: 'fileName',
              type: 'string',
              title: 'File Name',
              initialValue: 'Code Block',
            },
            {
              name: 'fileType',
              type: 'string',
              title: 'File Type',
              initialValue: 'js',
            },
            {
              type: 'code',
              name: 'Code',
              options: {
                languageAlternatives: [
                  {title: 'Typescript', value: 'typescript'},
                  {title: 'React', value: 'react'},
                  {title: 'react-like', value: 'react-like', mode: 'react'},
                ],
              },
            },
          ],
          preview: {
            select: {fileName: 'fileName', fileType: 'fileType'},
            prepare: ({fileName, fileType}: {fileName: string; fileType: string}) => {
              return {
                title: `${fileName}.${fileType}`,
              }
            },
          },
        },
      ],
    },
  ],
}
