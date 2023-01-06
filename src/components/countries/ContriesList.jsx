import React from 'react';
import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
const ContriesList = () => {

    const [countries, setCountries] = useState([]);
    const [segment, setSegment] = useState("all");
    const searchInput = useRef("");
    const region = useRef("")
    const getCountries = async () => {
        try {
            const result = await axios.get(`https://restcountries.com/v3.1/${segment}`)
            if (result.status === 200) {
                setCountries(result.data)
            }
        } catch (error) {
            console.error(error)
        }
    };

    
    const searchCountries = async (e) => {
        e.preventDefault();
        let search = searchInput.current.value
        if (search === "") {
            alert('Please write something !')
            return
        }
        setSegment(`name/${ search }`);
        
    };
    const reset = () => {
        searchInput.current.value = "";
        region.current.value = '';
        setSegment('all')
    };
    const serchByRegion = () => {
        let selectRegion = region.current.value
        if (selectRegion === "") {
            return
        }
        setSegment(`region/${selectRegion}`)
    }
    useEffect(() => {
        getCountries()   
    }, [segment])
    
    return (
        <>
            <div className="row py-4">
                <div className="col-md-8">
                    <h1>List Of Countries</h1>
                </div>
                <div className="col-md-4">
                    <form className="d-flex" onSubmit={searchCountries}>
                        <select onChange={serchByRegion} ref={region} className='form-control mx-2'>
                            <option value="">Select Region</option>
                            <option value="africa">Africa</option>
                            <option value="americas">Americas</option>
                            <option value="europe">Europe</option>
                            <option value="asia">Asia</option>
                            <option value="oceania">Oceania</option>
                        </select>
                        <input ref={searchInput} className="form-control me-sm-2"  type="search" placeholder="Search" />
                        <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                        {searchInput.current.value && (
                            <button onClick={reset} className="btn btn-primary my-2 my-sm-0" type="button">Reset</button>
                        )}
                    </form> 
                </div>
            </div>
            <div className="row">
                {countries.map((country, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card">
                                <img accept='image/png' className="card-img-top" src={country.flags.png} alt="Title" />
                                <div className="card-body">
                                    <h4 className="card-title">{country.name.official}</h4>
                                    <p className="card-text">Capital: {country.capital}</p>
                                    <p className="card-text">Region: {country.region}</p>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        </>
    )
}

export default ContriesList