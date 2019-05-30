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
    }
  ]

export default loginFormFields