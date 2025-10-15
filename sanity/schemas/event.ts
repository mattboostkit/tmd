import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Fundraiser', value: 'fundraiser' },
          { title: 'Community', value: 'community' },
          { title: 'Sports', value: 'sports' },
          { title: 'Gala', value: 'gala' },
          { title: 'Workshop', value: 'workshop' },
          { title: 'Volunteer', value: 'volunteer' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventEndDate',
      title: 'Event End Date (Optional)',
      type: 'datetime',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'venue',
          title: 'Venue Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'address',
          title: 'Address',
          type: 'text',
          rows: 3,
        },
        {
          name: 'postcode',
          title: 'Postcode',
          type: 'string',
        },
        {
          name: 'coordinates',
          title: 'Coordinates',
          type: 'geopoint',
        },
      ],
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
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'capacity',
      title: 'Maximum Capacity',
      type: 'number',
      description: 'Leave empty for unlimited capacity',
    }),
    defineField({
      name: 'registrationRequired',
      title: 'Registration Required',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Registration URL',
      type: 'url',
      hidden: ({ document }) => !document?.registrationRequired,
    }),
    defineField({
      name: 'ticketPrice',
      title: 'Ticket Price (£)',
      type: 'number',
      description: 'Leave empty for free events',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Event',
      type: 'boolean',
      initialValue: false,
      description: 'Show this event prominently',
    }),
    defineField({
      name: 'status',
      title: 'Event Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Registration Open', value: 'open' },
          { title: 'Sold Out', value: 'sold-out' },
          { title: 'Cancelled', value: 'cancelled' },
          { title: 'Completed', value: 'completed' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'upcoming',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'eventDate',
      media: 'coverImage',
      status: 'status',
    },
    prepare({ title, date, media, status }) {
      return {
        title,
        subtitle: `${new Date(date).toLocaleDateString('en-GB')} - ${status}`,
        media,
      };
    },
  },
});
