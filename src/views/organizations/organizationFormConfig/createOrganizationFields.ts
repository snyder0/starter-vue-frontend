import { Fields } from '@/lib/types/field.ts'
import { Layout } from '@/lib/types/layout.ts'

const createOrganizationFields = [
  {
    key: 'name',
    label: 'Name',
    placeholder: 'Organization Name',
    type: Fields.TEXT,
    layout: Layout.L6,
  },
  {
    key: 'abbriviation',
    label: 'Abbriviation',
    placeholder: 'Organization Abbriviation',
    type: Fields.TEXT,
    layout: Layout.L6
  },
  {
    key: 'url',
    label: 'Url',
    placeholder: 'Organization Url',
    type: Fields.TEXT,
    layout: Layout.L12,
  },
]

export default createOrganizationFields