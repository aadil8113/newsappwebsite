import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';

export default function App() {
    var [language, setlanguage] = useState("hi")
    var [search, setsearch] = useState("")
    const changeLanguage = (data) => {
        this.setState({ language: data })
        setlanguage(data)
    }
    const changeSearch = (data) => {
        setsearch(data)
    }
    return (
        <>
            <BrowserRouter>
                <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch} />
                <Routes>
                    <Route path='' element={<Home search={search} language={language} q="All" />} />
                    <Route path='/All' element={<Home search={search} language={language} q="All" />} />
                    <Route path='/Politics' element={<Home search={search} language={language} q="Politics" />} />
                    <Route path='/Crime' element={<Home search={search} language={language} q="Crime" />} />
                    <Route path='/Education' element={<Home search={search} language={language} q="Education" />} />
                    <Route path='/Science' element={<Home search={search} language={language} q="Science" />} />
                    <Route path='/Technology' element={<Home search={search} language={language} q="Technology" />} />
                    <Route path='/Games' element={<Home search={search} language={language} q="Games" />} />
                    <Route path='/Circket' element={<Home search={search} language={language} q="Circket" />} />
                    <Route path='/Fifa' element={<Home search={search} language={language} q="Fifa" />} />
                    <Route path='/World' element={<Home search={search} language={language} q="World" />} />
                    <Route path='/India' element={<Home search={search} language={language} q="India" />} />
                    <Route path='/Jokes' element={<Home search={search} language={language} q="Jokes" />} />
                    <Route path='/Covid' element={<Home search={search} language={language} q="Covid" />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}
