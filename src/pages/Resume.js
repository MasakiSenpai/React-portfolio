import React from 'react';
import reactImg from '../images/react.svg'

export default function Resume() {
    return (
        <div className='h-100 bg-indigo-100'>
            <div className=''>
                <img src={reactImg} alt='react'/>
            </div>
            <div className='border border-4 border-tropical bg-indigo-100 p-12 text-right'>
                <h2 className='text-3xl mb-3 '> Front End </h2>
                <p className=''> React, TailWindCss, Bootstrap, HTML, CSS </p>
            </div>
            <div className='border border-4 border-tropical bg-indigo-100 p-12 text-right'>
                <h2 className='text-3xl mb-3'> Back End </h2>
                <p className=''> Sql, Mongoose, NodeJs, Express  </p>
            </div>
        </div>
    )
}