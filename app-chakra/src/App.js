import { ChakraProvider , Flex } from '@chakra-ui/react'
import { useState } from 'react';
import Card from './Components/Card'

function App() {
  const [products, setProducts] = useState([
    {
      brand: 'nike',
      name: 'air jordan 1 retro high - dior',
      priceDiscount: 350,
      priceNormal: 500,
      img: 'https://static.cloud-boxloja.com/lojas/ym522/produtos/d84209d6-d737-452f-a44a-9aa251900f88.jpg'
    },
    {
      brand: 'adidas',
      name: 'yeezy boost 700 mnvn laceless',
      priceDiscount: 700,
      priceNormal: 1000,
      img: 'https://maze.cdn.plataformaneo.com.br/produto/20221004142900_6964993036_H.png'
    },
    {
      brand: 'vans',
      name: 'old skool',
      priceDiscount: 120,
      priceNormal: 250,
      img: 'https://artwalk.vteximg.com.br/arquivos/ids/221069-1000-1000/Tenis-Vans-Old-Skool-Preto-3.jpg?v=637178826057430000'
    },
    {
      brand:'nike',
      name: 'nike sb - nyjah free II',
      priceDiscount: 200,
      priceNormal: 350,
      img: 'https://maze.cdn.plataformaneo.com.br/produto/multifotos/hd/20201008152335_1965998035_DZ.jpg'
    },
    {
      brand: 'öus',
      name:'öus bets imperial',
      priceDiscount: 275,
      priceNormal: 330,
      img: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(95)/dreamssk/catalog/tenis/vol-2-2022/350033-5-4-04.jpg'
    },
    {
      brand: 'new balance',
      name: 'new balance 574 - grey basic',
      priceDiscount: 300,
      priceNormal: 450,
      img:"data:image/jpeg;base64,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"
    }
  ])
  return (
    <ChakraProvider resetCSS>
      <Flex gap={'16px'} wrap={'wrap'} px={'16px'}>
        {products && products.map((product) => {
          return <Card product={product} key={product.id}/>
        })}
      </Flex>
    </ChakraProvider>
  );
}

export default App;
