import React from 'react'
import ProductCard from '../components/ProductCard'
import { productList } from '../data/productList'

export default function Dashboard() {
  return (
    <div className='d-flex flex-wrap justify-content-center p-3'>
        {productList.map((product) => <ProductCard {...product} />)}
    </div>
  )
}