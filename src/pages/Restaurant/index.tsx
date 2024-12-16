import React from 'react'

import { CardList } from '../../components/CardList'

import pizza from '../../assets/images/pizza.png'
import Products from '../../models/Products'

const products: Products[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A Pizza Marguerita leva a autêntica cozinha italiana até você! Desfrute de pizzas caseiras, pizzas',
    image: pizza
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      'A Pizza Marguerita leva a autêntica cozinha italiana até você! Desfrute de pizzas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pizza
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      'A Pizza Marguerita leva a autêntica cozinha italiana até você! Desfrute de pizzas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pizza
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      'A Pizza Marguerita leva a autêntica cozinha italiana até você! Desfrute de pizzas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pizza
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      'A Pizza Marguerita leva a autêntica cozinha italiana até você! Desfrute de pizzas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pizza
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      'A Pizza Marguerita leva a autêntica cozinha italiana até você! Desfrute de pizzas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pizza
  }
]

const Restaurant = () => {
  // const { id } = useParams();
  return <CardList columns="restaurant" products={products} />
}

export default Restaurant
