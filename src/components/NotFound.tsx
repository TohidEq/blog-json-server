import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

export default function NotFound({}: Props) {

  return (
    <>
    <div className="App ">
            <h1>404 - NotFound</h1>


            <form className='form'>
                <Link to="/">
                    <button >Bach to Home</button>
                </Link>
              
            </form>
          </div>
    </>
  )
}