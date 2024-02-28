import { Checkbox } from '../ui/checkbox'

export const Filter = ({brewerys, getSelectetBrewery, value}) => {
  const check = value.includes(brewerys.slug)
  return (
    <label
      htmlFor={brewerys.id}
      className="font-medium text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-2 px-4 py-3 rounded-2xl bg-slate-200 hover:bg-slate-300 cursor-pointer"
    >
      <Checkbox
        onClick={e => { 
          getSelectetBrewery(brewerys.slug)
        }}
        checked={check}
        id={brewerys.id}
      />
      {brewerys.brewery_name}
    </label>
  )
}
