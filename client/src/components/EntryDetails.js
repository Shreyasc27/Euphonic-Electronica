import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Entry = props => (
        <tr align="center" >
            <td>{props.entry.episodenumber}</td>
            <td>{props.entry.episodedate}</td>
            <td>
                <a href={props.entry.episodesoundcloud} target="_blank"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACfUlEQVR4Aa3Vv4tcZRSH8c+5c1d318TVDYEERdYiQhQknaXIFhaKhaWNEjYpBNE+/4GVVSpBG0FsBDvtUqtBSBFQiBJYUbKCP6LZmbnve3SYubCz7jDNPPBy5rwwz3fuGeZM5FVv4ENsWC0PsDcJ+M2FZ7adOmWl3L/PD9/fa7FtY5NSrZSJk7Mt6NIyMmfVPNHXcCItKBXLpZkpkUkvDZMaLAiaPUFdKD4qrUl/ZyYONDE9fVDE8YBxPUFMSjXp5SVTnH9O89+Bsn9L/nrbIMKgYVKFuZAWclyOi3vpNODMjrr+mO7gJ1tvfSzWT+sZffeFw8+vydGQpn+aAIE2oaszMTWzF7P9lHb3HXX4j/WLLxn/+I3jPHTpNTQOP3mXZvokjoQ0UEdFHXXKcHKKMjitG3bi2Zc15y/KWoGapBNCXlUef9q4f//Ml0mbSY6qkikfOWPt8nXdnZvWzl0wuvOtNlH72aVFbO6+rRzcVW/f4O5NEUdGlKOOJ58XO5ekRpbKxhaln1tiVhfw8AuvA6+858H1y+qtrzRJk0mOq8HuFVmSSs6JkzrfL2PtxTflqEo0kKNCTUole2Hf6/tZtZT863e6ApoIYlxFTTENmL7OpPTiCmRaDt2NT8VoFsA0oPvgKgc/iyRqkgwyp31XKIVJXYw8/Nvws/fl11+KLjVBlCsy723NjTnbNdkMZC1MaimiXVO78eRu0oME/T6iQROmv+xJf/YPbQTGVYNEQBn+f9ENhwYWTOro4kMTqZndtVNhEYtXct8vvIsTah/Y9t/BUcJyMi1c0bFoXS8XL/8QS/5wVk+LfZv1CX+GlfJown6LPTv1I5yzWn7B3r9mj39+4bJijQAAAABJRU5ErkJggg==" /></a>
            </td>
            <td>
                <a href={props.entry.episodetracklist} target="_blank"><img src="https://www.1001tracklists.com/images/static/1001logo_xs.png?v3"/></a>
            </td>
            <td>{props.entry.artistname}</td>
            <td>
                <a href={props.entry.artistspotify} target="_blank">Spotify</a>
            </td>
            <td>
                <a href={props.entry.artisttwitter} target="_blank">Twitter</a>
            </td>
            <td>
                <a href={props.entry.artistfacebook} target="_blank">Facebook</a>
            </td>
        </tr>
)

export default class EntryDetails extends Component {

    constructor(props){

        super(props);
        this.state = {entries: []};
    
    }

    componentDidMount(){

        axios.get('http://localhost:5000/api/entries')
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
                <table className="table table-striped">
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