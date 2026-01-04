import React from 'react'
import { useState } from 'react'

const CharacterBox = () => {

    //keep track of word count and update 

    const [text, setText] = useState('')

    //function to keep track of words 
    function handleChange(e) {
        setText(e.target.value)
    }

    //character count 
    const charCount = text.split("").length

    // word count — split by spaces, filter out empty strings. returns the length
    const wordCounter = text.trim() === "" ? 0 : text.trim().split(/\s+/).length

    //Uppercase
    function Uppercase() {
        setText(prev => prev.toUpperCase())
    }
    //Lowercase
    function Lowercase() {
        setText(prev => prev.toLowerCase())
    }

  return (
    <div className='px-10'>
      <p className='text-2xl text-slate-600 font-medium w-full text-left py-4'>Enter Your Paragraph</p>

      <textarea 
      className='border border-slate-300 border-2 w-full p-4'
      rows={8}
      value={text}    //controlled by state 
      onChange={handleChange}
      ></textarea>

      <div className='flex justify-between pt-4'> 

        <button 
        className='bg-blue-400 border p-2 text-white rounded-md'
        onClick={Uppercase}
        >
            Convert to Uppercase
        </button>

        <button 
        className='bg-blue-400 border p-2 text-white rounded-md'
        onClick={Lowercase}
        >
            Convert to Lowercase
        </button>

      </div>
      
      <div className='flex justify-between pt-6 px-2'>
        <div>
        <p className='text-lg text-slate-600 font-semibold'>Total Words  are</p>
        <p>{wordCounter}</p>
      </div>
      <div>
        <p className='text-lg text-slate-600 font-semibold'>Total Characters are</p>
        <p>{charCount}</p>
      </div>
      </div>
      
    </div>
  )
}

export default CharacterBox
