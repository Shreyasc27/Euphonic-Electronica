import ReactGA from 'react-ga'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Entry = props => (
        <tr align="center" >
            <td><b>{props.entry.episodenumber}</b></td>
            <td><b>{props.entry.episodedate}</b></td>
            <td>
                <ReactGA.OutboundLink eventLabel="Accessed SoundCloud" to={props.entry.episodesoundcloud} target="_blank"><img src={process.env.PUBLIC_URL + "/images/SoundCloud.png"} /></ReactGA.OutboundLink>
            </td>
            <td>
                <ReactGA.OutboundLink eventLabel="Accessed 1001Tracklists" to={props.entry.episodetracklist} target="_blank"><img src={process.env.PUBLIC_URL + "/images/1001Tracklists.png"} /></ReactGA.OutboundLink>
            </td>
            <td><b>{props.entry.artistname}</b></td>
            <td>
                <ReactGA.OutboundLink eventLabel="Accessed Spotify" to={props.entry.artistspotify} target="_blank"><img src={process.env.PUBLIC_URL + "/images/Spotify.png"} /></ReactGA.OutboundLink>
            </td>
            <td>
                <ReactGA.OutboundLink eventLabel="Accessed Twitter" to={props.entry.artisttwitter} target="_blank"><img src={process.env.PUBLIC_URL + "/images/Twitter.png"} /></ReactGA.OutboundLink>
            </td>
            <td>
                <ReactGA.OutboundLink eventLabel="Accessed Facebook" to={props.entry.artistfacebook} target="_blank"><img src={process.env.PUBLIC_URL + "/images/Facebook.png"} /></ReactGA.OutboundLink>
            </td>
        </tr>
)

export default class EntryDetails extends Component {

    constructor(props){

        super(props);
        this.state = {entries: []};
    
    }

    componentDidMount(){

        axios.get('/api/entries')
        .then(response => {
            this.setState({ entries: response.data });
        })
        .catch((error) => {
            console.log(error)
        })

    }

    entryList(){

        return this.state.entries.map(currentEntry => {
            return <Entry entry={currentEntry}/>;
        })

    }

    render() {
        return (
            <div>
                <table className="table table-striped table-responsive">
                    <thead className="thead-dark">
                        <tr align="center">
                            <th>Episode</th>
                            <th>Date</th>
                            <th>SoundCloud</th>
                            <th>Tracklist</th>
                            <th>Artist</th>
                            <th>Spotify</th>
                            <th>Twitter</th>
                            <th>Facebook</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.entryList() }
                    </tbody>
                </table>
            </div>
        )
    }
}