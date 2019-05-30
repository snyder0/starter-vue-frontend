import { Fields } from '@/lib/types/field.ts'
import { Layout } from '@/lib/types/layout.ts'

const registerFormFields = [
    {
      key: 'firstname',
      label: 'First Name',
      placeholder: 'First name',
      type: Fields.TEXT,
      layout: Layout.L6,
      prependIcon: 'person'
    },
    {
      key: 'lastname',
      label: 'Last Name',
      placeholder: 'Last name',
      type: Fields.TEXT,
      layout: Layout.L6,
      prependIcon: 'person'
    },
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

export default registerFormFields