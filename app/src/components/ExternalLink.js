import React from 'react'

const ExternalLink = ({link, className}) => {
  return (
    <a href={link} className={className} target="_blank" rel="noreferrer"></a>
  )
}

export default ExternalLink