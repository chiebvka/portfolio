import { FiTag } from 'react-icons/fi';

import { type SchemaTypeDefinition } from 'sanity';
const pet = {
  name: 'pet',
  title: 'Technology Used',
  type: 'document',
  of: [{type: 'string'}],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    }
  ]
}


const categories = {
  name: 'categories',
  title: 'Categories',
  type: 'document',

  of: [{type: 'string'}],
  fields: [
    {
      name: "name",
      title: "Category",
      type: "string",
    },
  ]
}


// const technologies = {
//   name: 'technologies',
//   title: 'Technologies',
//   type: 'document',
  
//   of: [{type: 'string'}],
//   fields: [
//     {
//       name: "name",
//       title: "Technology",
//       type: "string"
//     },
//   ]
// }

const design = {
  name: 'design',
  title: 'Design',
  type: 'document',
  fields: [
    {
      name: "designer",
      title: "Designer",
      type: "string"
    },
    {
      name: "portfolio",
      title: "Portfolio",
      type: "url"
    },
  ]
}



const article = {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    },
    {    
      name: 'category',
      title: 'Category',
      type: 'array',
      // type: 'reference',
      of: [{ type: 'reference', to: [{ type: 'categories' }] }],
      // to: [{type: 'categories'}]
    },
    {
      name: "url",
      title: "URL",
      type: "url"
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        { type: "image",
          // name: "alt",
          // title: "Alternative text",
          // description: "Some of your visitors cannot see images, be they color-blind, low-sighted, alternative text is of great help for those people that can rely on it to have a good idea of what\s on your page "
       },
      ]
    }
  ]
}



const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {    
      name: 'category',
      title: 'Category',
      type: 'array',
      // type: 'reference',
      
      of: [{ type: 'reference', to: [{ type: 'categories' }] }],
      // to: [{type: 'categories'}]
    },
    {    
      name: 'technology',
      title: 'Project Scope',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pet' }] }],
      // to: [{type: 'pet'}]
    },
    {
      name: "design",
      title: "Design",
      type: 'reference',
      to: [{type: 'design'}]
    },
    // {
    //   name: "technology",
    //   title: "Technology",
    //   type: 'reference',
    //   of: [{type: 'technologies'}]
    // },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    },
    {
      title: 'Github',
      name: 'github',
      type: 'url'
    },
    {
      title: 'Live Link',
      name: 'livelink',
      type: 'url'
    },
    {
      name: "url",
      title: "URL",
      type: "url"
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { 
          type: "block",
        },
        { 
        type: "image"
        }
      ]
    }
  ]
}


// const blockContent = {
//   title: 'Block Content',
//   name: 'blockContent',
//   type: 'array',
//   of: [
//     {
//       title: 'Block',
//       type: 'block',
//       styles: [
//         // ...
//       ],
//       // Marks let you mark up inline text in the block editor.
//       marks: {
//         decorators: [
//           // ...
//         ],
//         annotations: [
//           // ...
//           {
//             title: 'Inline Icon',
//             name: 'inlineicon',
//             type: 'image',
//             blockEditor: {
//               icon: FiTag,
//             }
//           }
//         ]
        
//       }
//     }
//   ]
// }


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pet, project, categories, article, design ],
}
