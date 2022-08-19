import React from 'react'
import style from './PageHeader.module.css'

const PageHeader = ({title}) => {
  return (
    <h1 className={style.pageHeader}>{title}</h1>
  )
}

export default PageHeader