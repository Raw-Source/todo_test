import React from 'react';

import style from './Image.module.scss';

const Image = () => {
  return (
    <>
      <img className={style.image} src='./bg-desktop-dark.jpg' alt="image" />
      <h3 className={style.header}>TODO</h3>
    </>
  )
}

export default Image;