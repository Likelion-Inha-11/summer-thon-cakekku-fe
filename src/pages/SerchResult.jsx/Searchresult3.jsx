import React from 'react';
import styled from 'styled-components';
import Head2 from '../../components/Heads/Head2';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import MarketBoxSearch3 from '../../components/Marketboxsearch/MaketBoxSearch3';
const Box = styled.div`
    width: 350px;
    height: 700px;
    background-color: rgba(255, 255, 255, 0.50);
    margin: 0 auto;
    position: relative;
    top:90px;
    Bottom:15px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    //flex-wrap: wrap;
    align-content: space-evenly;
    align-items: center;
   
` 
const Searchresult3 = () => {
    return (
       <>
       <Layout color="#FFF5E4">
       <Head2></Head2>
       <Box>
        <MarketBoxSearch3 index={0}></MarketBoxSearch3>
       </Box>
       <Footer></Footer>
       </Layout>
       </>
    );
};

export default Searchresult3;