import React from 'react'
import { useState } from 'react'

const API_URL = 'https://www.theaudiodb.com/api/v1/json/'
const API_KEY = 'insert-api-key-here'
const SEARCH = '/search.php?s='

export default function BandInfo() {

    const [query, setQuery] = useState('')
    const [artist, setArtist] = useState('')
    const [formedYear, setFormedYear] = useState(0)
    const [members, setMembers] = useState(0)
    const [biography, setBiography] = useState('')
    const [country, setCountry] = useState('')
    const [genre, setGenre] = useState('')
    const [logo, setLogo] = useState('')
    const [picture, setPicture] = useState('')

    async function search(e) {
        e.preventDefault()
        try {
            const address = API_URL + API_KEY + SEARCH
            const response = await fetch(address + query)

            if (response.ok) {
                console.log(response.data)
                const json = await response.json()
                const artist = json.artists[0]
                setArtist(artist.strArtist)
                setFormedYear(artist.intFormedYear)
                setMembers(artist.intMembers)
                setBiography(artist.strBiographyEN)
                setCountry(artist.strCountry)
                setGenre(artist.strGenre)
                setLogo(artist.strArtistLogo)
                setPicture(artist.strArtistClearart)

            } else {
                alert('Error retrieving band info.')
                console.log(response)
            }
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div id="container">
            <form onSubmit={search}>
                <div className="mb-3">
                    <h3>Search for band to find out some trivia about it!</h3>
                    <label className="form-label">Band's name: </label>&nbsp;
                    <input type="string"
                        value={query} onChange={e => setQuery(e.target.value)} />
                </div>
                <div>
                    <button>Search</button>
                </div>
                <div className="hidden">
                    <p>Artist name: {artist}</p>
                    <p>Band formed in: {formedYear}</p>
                    <p>Number of members: {members}</p>
                    <p>{biography}</p>
                    <p>Country: {country}</p>
                    <p>Genre: {genre}</p>

                    {/* Käytin objectia tässä, että saan broken image kuvat pois näkyvistä oletuksena, kun sivun avaa */}

                    <object data={logo} className="logo" type="image/jpg">

                        {/* <img className="logo" src={logo} alt="Band logo" /> */}
                    </object>

                    <object data={picture} className="pic" type="image/jpg">

                    </object>
                        {/* <img className="pic" src={picture} alt="Band" /> */}

                </div>
            </form>
        </div>
    );
}


