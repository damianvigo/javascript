import React, { useState, useEffect } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'
/* import { categories as mockCategories } from '../../../api/db.json' */

/* Custom Hooks */
function useCategoriesData () {
  /* console.log(categories) */
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  /* Cada vez que se renderice el componente */
  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-amnbmwgcd.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, []) /* solo se ejecuta cuando se monte el componente */

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll) /* limpiando el efecto cada vez que se renderice */
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading ? <Item key='loading'><Category /></Item>
          : categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
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
