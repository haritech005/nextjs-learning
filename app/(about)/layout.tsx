import React, { ReactNode } from 'react'

const layout = ({children} : {children : ReactNode}) => {
  return (
    <div>
        <h1 className="text-3xl">About Header</h1>
        {children}
        <h1 className="text-3xl">about Footer</h1>
    </div>
  )
}

export default layout