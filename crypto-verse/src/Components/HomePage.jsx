import React from 'react'
import millify from 'millify';
import {Typography , Row , Col , Statistic } from 'antd';
import {Link} from 'react-router-dom'
import { useGetCryptosQuery } from '../Services/cryptoApi';
 const {Title} = Typography;


const HomePage = () => {

const {data , isFetching} = useGetCryptosQuery();
console.log(data);

  return (
   <>
   Homepage
   <Title level={2} className ="heading"> Global Crypto Stats </Title>
   <Row>
    
    <Col span={12}> <Statistic title ="Total Exchanges" value="5"/></Col>
    <Col span={12}> <Statistic title ="Total Maret Cap" value="5"/></Col>
    <Col span={12}> <Statistic title ="Total 24h Volume" value="5"/></Col>
    <Col span={12}> <Statistic title ="Total Markets" value="5"/></Col>
    <Col span={12}> <Statistic title ="Total Cryptocurrencies" value="5"/></Col>



   </Row>
  
   </>
  )
}

export default HomePage
