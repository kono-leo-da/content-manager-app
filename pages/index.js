// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import React, { useState, useEffect } from 'react'



import Layout from '../components/Layout'
import ResourceHighlight from '../components/ResourceHighlight'
import Newsletter from '../components/Newsletter'
import ResourceList from '../components/ResourceList'
import Footer from '../components/Footer'
import {useEffect} from 'react'
// import data from './api/resources'

//CORS


function Home({resources}) {

  // useEffect(()=>{
  //   fetch('http://localhost:3001/api/resources')
  // },[])


  return (
      <Layout>
      <ResourceHighlight
       resources={resources.slice(0,2)}
      />
      <Newsletter/>
      <ResourceList
      resources={resources.slice(2)}
      />
      
      <Footer/>
      </Layout>
  )
}


// is called at the build time, and it's called only once

// export async function getStaticProps(){

  // const resData = await fetch("http://localhost:3000/api/resources");
  // const data = await resData.json();

//   console.log('calling getStaticProps')

//   return {
//     props:{
//       resources: data
//     }
//   }
// }


// is called everytime you visit the page
// function is executed on the server
// always get fresh data
export async function getServerSideProps(){

  const resData = await fetch(`${process.env.API_URL}/resources`);
  const data = await resData.json();

  console.log('calling getServerSideProps')

  return {
    props:{
      resources: data
    }
  }
}


export default Home;
