import { buildConfig } from 'payload/config';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { viteBundler } from '@payloadcms/bundler-vite';
import path from 'path';

export default buildConfig({
  admin: {
    user: 'users',
    bundler: viteBundler(),
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/sapphire-ceylon',
  }),
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
  collections: [
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    {
      slug: 'gems',
      admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'category', 'price', 'featured'],
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Gem Name',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Description',
        },
        {
          name: 'category',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Royal Blue Sapphires',
              value: 'royal-blue',
            },
            {
              label: 'Padparadscha Sapphires',
              value: 'padparadscha',
            },
            {
              label: 'Yellow Sapphires',
              value: 'yellow',
            },
            {
              label: 'Pink Sapphires',
              value: 'pink',
            },
            {
              label: 'White Sapphires',
              value: 'white',
            },
            {
              label: 'Star Sapphires',
              value: 'star',
            },
          ],
        },
        {
          name: 'price',
          type: 'text',
          required: true,
          label: 'Price (e.g., From $2,500)',
        },
        {
          name: 'weight',
          type: 'text',
          label: 'Carat Weight',
        },
        {
          name: 'origin',
          type: 'text',
          label: 'Origin',
          defaultValue: 'Ceylon, Sri Lanka',
        },
        {
          name: 'certification',
          type: 'text',
          label: 'Certification',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Main Image',
        },
        {
          name: 'gallery',
          type: 'array',
          label: 'Additional Images',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'alt',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'featured',
          type: 'checkbox',
          label: 'Featured Gem',
          defaultValue: false,
        },
        {
          name: 'inStock',
          type: 'checkbox',
          label: 'In Stock',
          defaultValue: true,
        },
        {
          name: 'specifications',
          type: 'group',
          label: 'Specifications',
          fields: [
            {
              name: 'cut',
              type: 'text',
              label: 'Cut',
            },
            {
              name: 'clarity',
              type: 'text',
              label: 'Clarity',
            },
            {
              name: 'color',
              type: 'text',
              label: 'Color Grade',
            },
            {
              name: 'treatment',
              type: 'text',
              label: 'Treatment',
            },
          ],
        },
        {
          name: 'slug',
          type: 'text',
          admin: {
            position: 'sidebar',
          },
          hooks: {
            beforeValidate: [
              ({ value, originalDoc, data }) => {
                if (data?.name && !value) {
                  return data.name
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '');
                }
                return value;
              },
            ],
          },
        },
      ],
    },
    {
      slug: 'media',
      upload: {
        staticURL: '/media',
        staticDir: 'media',
        imageSizes: [
          {
            name: 'thumbnail',
            width: 400,
            height: 300,
            position: 'centre',
          },
          {
            name: 'card',
            width: 768,
            height: 1024,
            position: 'centre',
          },
          {
            name: 'hero',
            width: 1920,
            height: 1080,
            position: 'centre',
          },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});