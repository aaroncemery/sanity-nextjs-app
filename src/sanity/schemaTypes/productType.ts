import { defineField, defineType } from 'sanity';
import { BasketIcon } from '@sanity/icons';

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: BasketIcon,
  fields: [
    defineField({
      name: 'productName',
      type: 'string',
      title: 'Product Name',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Description of the product',
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }),
      ],
    }),
    defineField({
      name: 'featureImage',
      type: 'image',
      title: 'Feature Image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }),
      ],
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      of: [
        defineField({
          name: 'image',
          type: 'image',
        }),
      ],
    }),
    defineField({
      name: 'features',
      type: 'blockContent',
    }),
    defineField({
      name: 'controlOptions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'controlOption',
              type: 'reference',
              to: [{ type: 'controlOption' }],
            }),
            defineField({
              name: 'videos',
              type: 'array',
              title: 'Videos',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'video',
                      type: 'url',
                      title: 'Video URL',
                    }),
                    defineField({
                      name: 'videoThumbnail',
                      type: 'image',
                      title: 'Video Thumbnail',
                    }),
                  ],
                },
              ],
              validation: (Rule) => Rule.max(3),
            }),
          ],
          preview: {
            select: {
              title: 'controlOption.title',
            },
          },
        },
      ],
    }),
  ],
});
