import React from 'react'
import { projects } from './ui/data'
import Card from "../components/Card"
import styles from "./scrollstack.css"
const ScrollStack = () => {
  return (
       <main className={styles.main}>

      {

        projects.map( (project, i) => {

          return <Card key={`p_${i}`} {...project} i={i}/>

        })

      }

    </main>
  )
}

export default ScrollStack