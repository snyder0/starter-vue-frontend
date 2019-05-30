import { Fields } from '@/lib/types/field.ts'
import { Layout } from '@/lib/types/layout.ts'

const loginFormFields = [
    {
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
      type: Fields.TEXT,
      layout: Layout.L12,
      prependIcon: 'lock'
    },
    // {
    //   key: 'date',
    //   type: Fields.DATE,
    //   layout: Layout.L6,
    //   color: 'primary',
    //   eventColor: 'warning'
    // },
    // {
    //   key: 'time',
    //   type: Fields.TIME,
    //   layout: Layout.L6,
    //   color: 'accent',
    // },
    // {
    //   key: 'swtich',
    //   label: 'switch',
    //   type: Fields.SWITCH,
    //   layout: Layout.L6,
    //   prependIcon: 'lock',
    //   color: 'primary'
    // },
    // {
    //   type: Fields.RADIO,
    //   items: [
    //     {
    //       label: 'radio1',
    //       value: '10',
    //       layout: Layout.L12,
    //       color: 'success',
    //     },
    //     {
    //       label: 'radio2',
    //       value: '9',
    //       layout: Layout.L12,
    //       color: 'success',
    //     },
    //     {
    //       label: 'radio3',
    //       value: '5',
    //       layout: Layout.L12,
    //       color: 'success',
    //     }
        
    //   ]
    // }
  ]

export default loginFormFields