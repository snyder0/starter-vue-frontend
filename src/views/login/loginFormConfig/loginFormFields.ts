import { Fields } from '@/lib/types/field.ts'
import { Layout } from '@/lib/types/layout.ts'

const loginFormFields = [
  {
    autofocus: true,
    key: 'email',
    label: 'Email',
    placeholder: 'Enter email',
    type: Fields.TEXT,
    layout: Layout.L12,
    prependIcon: 'email'
  },
  {
    key: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    type: Fields.PASSWORD,
    layout: Layout.L12,
    prependIcon: 'lock'
  },
  {
      key: 'date',
      type: Fields.DATE,
      layout: Layout.L6,
      color: 'primary',
      eventColor: 'warning'
    },
    {
      key: 'time',
      type: Fields.TIME,
      layout: Layout.L6,
      color: 'accent',
    },
    {
      key: 'swtich',
      label: 'switch',
      type: Fields.TOGGLE,
      layout: Layout.L6,
      prependIcon: 'lock',
      color: 'primary'
    },
    {
      type: Fields.RADIO,
      items: [
        {
          label: 'radio1',
          value: '10',
          layout: Layout.L12,
          color: 'primary',
        },
        {
          label: 'radio2',
          value: '9',
          layout: Layout.L12,
          color: 'primary',
        },
        {
          label: 'radio3',
          value: '5',
          layout: Layout.L12,
          color: 'primary',
        }
      ]
    },
    {
      key: 'select-list',
      label: 'Select List',
      type: Fields.SELECTLIST,
      multiple: true,
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

export default loginFormFields