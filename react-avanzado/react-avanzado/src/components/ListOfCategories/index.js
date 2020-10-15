import React, { useState, useEffect } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'
/* import { categories as mockCategories } from '../../../api/db.json' */

export const ListOfCategories = () => {
  /* console.log(categories) */
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  /* Cada vez que se renderice el componente */
  useEffect(function () {
    window.fetch('https://petgram-server-amnbmwgcd.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, []) /* solo se ejecuta cuando se monte el componente */

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll) /* limpiando el efecto cada vez que se renderice */
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
