import React from 'react'
import "./SearchPage.css"
import { useStateValue } from './StateProvider'
import useGooglrSearch from './useGooglrSearch'
import Response from "./Response"
import { Link } from "react-router-dom"
import Search from './search'
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {

    const [{ term = "tesla" }, dispatch] = useStateValue()

    const { data } = useGooglrSearch(term)  //(This line is live api code)

    //const data = Response;  //(This is for responce.js file  api code)
    console.log(data)

    return (
        <div className="searchPage">

            <div className="searchPage_header">
                <Link>
                    <img
                        className="searchPage_logo"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVflXRVuSt4BCSavISor6zCUc9tL0rO1QcyA&usqp=CAU"
                        alt="" />
                </Link>
                <div className="searchPage_headerBody">
                    <Search hideButtons />

                    <div className="searchPage_options">

                        <div className="searchPage_optionsLeft">
                            <SearchIcon />
                            <Link to="/all">All</Link>
                        </div>
                        <div className="searchPage_optionsLeft">
                            <ImageIcon />
                            <Link to="/all">Imag</Link>
                        </div>
                        <div className="searchPage_optionsLeft">
                            <DescriptionIcon />
                            <Link to="/all">News</Link>
                        </div>
                        <div className="searchPage_optionsLeft">
                            <LocalOfferIcon />
                            <Link to="/all">Shooping</Link>
                        </div>
                        <div className="searchPage_optionsLeft">
                            <RoomIcon />
                            <Link to="/all">Map</Link>
                        </div>
                        <div className="searchPage_optionsLeft">
                            <MoreVertIcon />
                            <Link to="/all">More</Link>
                        </div>

                        {/* //////////////////////////////////////////////////////// */}
                        <div className="searchPage_optionsRight">
                            <div className="searchPage_optionsLeft">
                                <Link to="/all">Setting</Link>
                            </div>
                            <div className="searchPage_optionsLeft">

                                <Link to="/all">Tools</Link>
                            </div>
                        </div>
                    </div>

                    {term && (
                        <div className="searchPage_results">
                            <p > About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.searchTime}) seconds for {term}</p>
                            {data?.items.map(item => (
                                <div className="searchPage_result">
                                    <a className="searchPage_resultLink" href={item.link}>

                                        {item.pagemap?.cse_image?.
                                            length > 0 && item.pagemap?.
                                                cse_image[0]?.src && (
                                                <img className="searchPage_resultImage"
                                                    src={
                                                        item.pagemap?.
                                                            cse_image[0]?.src
                                                    }
                                                    alt=""
                                                />
                                            )
                                        }

                                    </a>
                                    <a className="searchPage_result" href={item.link}> {item.displayLink}</a>
                                    <a className="searchPage_resultTitle" Title href={item.link}>
                                        <h2>{item.title}</h2>
                                    </a>
                                    <p clasaName="searchPage_result Snippet"
                                        href={item.link}>
                                        {item.snippet}
                                    </p>
                                </div>

                            ))}
                        </div>
                    )}

                </div>


            </div>
        </div>
    )
}

export default SearchPage
