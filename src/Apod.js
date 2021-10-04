import React from 'react'
import { useState } from 'react'

const API_URL = 'https://api.nasa.gov/planetary/apod?api_key='
const API_KEY = '6BNcGajGGgPpMqjLRUMZGfQ2oOhVBLxnnme9Wkzu'

export default function Apod() {

    const [pic, setPic] = useState('')
    const [title, setTitle] = useState('')
    const [copyRight, setCopyright] = useState('')
    const [explanation, setExplanation] = useState('')
    


    function picAday() {
        try {
            fetch(API_URL + API_KEY)
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    setPic(json.hdurl)
                    setTitle(json.title)
                    setCopyright(json.copyright)
                    setExplanation(json.explanation)
                })
        } catch (error) {
            console.log(error)
        }
    }
    // Ei toimi..
    // async function picAday() {
    //     try {
    //         const address = API_URL + API_KEY
    //         const response = await fetch(address)

    //         if (response.ok) {
    //             setPic(response.hdurl)
    //             console.log(response.data)
    //         } else {
    //             alert('Error retrieving band info.')
    //             console.log(response)
    //         }
    //     } catch (err) {
    //         alert(err)
    //     }
    // }

    return (
        <div id="container">
            <button onClick={picAday}>Click here for awesome space picture!</button>

            <p>{explanation}</p>
            <p>{title}</p>
            <div className="kuva">
                <img className="pic" src={pic} alt="space"></img>
                <p id="c">{copyRight}</p>
            </div>
        </div >


    )
}
