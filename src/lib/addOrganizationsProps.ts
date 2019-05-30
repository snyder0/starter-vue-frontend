import { Fields } from '@/lib/types/field.ts'
import { Layout } from '@/lib/types/layout.ts'

const testFields = [
  {
    key: 'organization-name',
    label: 'Name',
    placeholder: 'Organization Name',
    type: Fields.TEXTAREA,
    layout: Layout.L6,
  },
  {
    key: 'organization-abbriviation',
    label: 'Abbriviation',
    placeholder: 'Organization Abbriviation',
    type: Fields.TEXT,
    layout: Layout.L6
  },
  {
    key: 'organization-url',
    label: 'Url',
    placeholder: 'Organization Url',
    type: Fields.TEXT,
    layout: Layout.L12,
  },
  {
    key: 'select-list',
    label: 'Select List',
    type: Fields.SELECTLIST,
    layout: Layout.L6,
    items: [
      {
        text: 'Option 1',
        value: 1
      },
      {
        text: 'Option 2',
        value: 2
      }
    ]
  }
]

export default testFields