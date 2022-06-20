import React from 'react'
import Section from '../section'
import Navbar from '../../../Navbar';
// import Home from '../Home';
import { homeObjOne, homeObjTwo, } from './Data';


export default function Features() {
  return (
    <>
    <Navbar/>
    <Section {...homeObjOne} />
    <Section {...homeObjTwo} />
  </>
  )
}
