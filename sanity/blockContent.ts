import { FiTag } from 'react-icons/fi'
import { type SchemaTypeDefinition } from 'sanity';


const blockImage =  {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        // ...
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        decorators: [
          // ...
        ],
        annotations: [
          {
            title: 'Inline Icon',
            name: 'inlineicon',
            type: 'image',
            blockEditor: {
              icon: FiTag,
            }
          }
        ]
        
      }
    }
  ]
}


export const schema: { types: SchemaTypeDefinition[] } = {
    types: [ blockImage],
  }
  