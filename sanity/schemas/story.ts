import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'story',
  title: 'Success Stories',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Story Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Sophie\'s Dream Day"',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'childName',
      title: 'Child\'s Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'age',
      title: 'Age',
      type: 'number',
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: 'condition',
      title: 'Condition',
      type: 'string',
      description: 'Brief description of the child\'s condition',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., "Brighton, Sussex"',
    }),
    defineField({
      name: 'date',
      title: 'Date of Dream',
      type: 'date',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hasVideo',
      title: 'Has Video',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube or Vimeo URL',
      hidden: ({ document }) => !document?.hasVideo,
    }),
    defineField({
      name: 'dream',
      title: 'The Dream',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
      description: 'Brief description of what the child wanted',
    }),
    defineField({
      name: 'childQuote',
      title: 'Child\'s Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'impact',
      title: 'Impact Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
      description: 'How this dream changed their life',
    }),
    defineField({
      name: 'parentName',
      title: 'Parent/Guardian Name',
      type: 'string',
      description: 'e.g., "Emma, Sophie\'s Mum"',
    }),
    defineField({
      name: 'parentQuote',
      title: 'Parent/Guardian Quote',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'parentImage',
      title: 'Parent/Guardian Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'volunteersInvolved',
      title: 'Volunteers Involved',
      type: 'number',
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: 'hoursPlanning',
      title: 'Hours of Planning',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.max(5),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Story',
      type: 'boolean',
      initialValue: false,
      description: 'Show this story prominently on the homepage',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      childName: 'childName',
      media: 'coverImage',
      date: 'date',
    },
    prepare({ title, childName, media, date }) {
      return {
        title: title || childName,
        subtitle: date ? new Date(date).toLocaleDateString('en-GB') : 'No date set',
        media,
      };
    },
  },
});
