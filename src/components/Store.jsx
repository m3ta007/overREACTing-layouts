import React, { useState } from 'react'
import data from '../data/products.json'
import IconSwitch from './IconSwitch'
import CardsView from './CardsView'
import ListView from './ListView'
import { nanoid } from 'nanoid'

export default function Store() {
  // fetch JSON data and assign IDs with size of 5
  const products = data.map((product) => ({
    ...product,
    id: nanoid(5),
  }))

  // Create a hook
  const [icon, setIcon] = useState('view_module')
  // handle click
  const onSwitch = () =>
    setIcon((prevIcon) => {
      if (prevIcon === 'view_module') {
        return 'view_list'
      } else if (prevIcon === 'view_list') {
        return 'view_module'
      }
    })

  return (
    <>
      <IconSwitch icon={icon} onSwitch={onSwitch} />
      {icon === 'view_list' && <CardsView cards={products} />}
      {icon === 'view_module' && <ListView items={products} />}
    </>
  )
}
