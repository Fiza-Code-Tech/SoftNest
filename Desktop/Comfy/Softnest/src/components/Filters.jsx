import { Form, useLoaderData, Link } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox'

const Filters = () => {
  const { meta, params } = useLoaderData()
  console.log(meta)
  const { search, company, category, shipping, order, price } = params
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="search product"
        name="search"
        defaultValue={search}
        size="input-sm"
      />
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        defaultValue={category}
        size="select-sm"
      />
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        defaultValue={category}
        size="select-sm"
      />
      <FormSelect
        label="sort by"
        name="order"
        list={['a-z', 'z-a', 'high', 'low']}
        defaultValue={company}
        size="select-sm"
      />

      <FormRange
        label="select-price"
        name="price"
        size="range-sm"
        defaultValue={price}
      />
      <FormCheckbox
        label="free shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  )
}

export default Filters
