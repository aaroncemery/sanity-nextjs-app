import { defineField, defineType } from 'sanity';
import { ControlsIcon } from '@sanity/icons';

export const controlOptionType = defineType({
  name: 'controlOption',
  title: 'Control Option',
  type: 'document',
  icon: ControlsIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'features',
      type: 'array',
      of: [
        defineField({
          name: 'feature',
          type: 'string',
          title: 'Feature',
        }),
      ],
    }),
  ],
});
