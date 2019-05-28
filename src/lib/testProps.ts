import { Fields } from '@/lib/types/field.ts'
import { Layout } from '@/lib/types/layout.ts'

const testFields = [
  {
    key: 'text-field',
    label: 'First Name',
    placeholder: 'First Name',
    type: Fields.TEXT,
    layout: Layout.L12,
  },
  {
    key: 'text-field2',
    label: 'Text Field2',
    placeholder: 'Last Name',
    type: Fields.TEXT,
    layout: Layout.L6
  },
  {
    key: 'text-field3',
    label: 'Text field3',
    placeholder: 'Email Address',
    type: Fields.TEXT,
    layout: Layout.L6
  },
  {
    key: 'text-area',
    label: 'Text Area',
    type: Fields.TEXTAREA,
    layout: Layout.L6
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