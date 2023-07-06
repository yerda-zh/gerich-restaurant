import React from 'react'
import { images } from '../../constants';
import './sub-heading.styles.css';

const SubHeading = ({title}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className="p__cormorant subheading-text">{title}</p>
      <img src={images.spoon} alt="spoon_image" className="spoon__img" />
    </div>
  )
}
export default SubHeading;