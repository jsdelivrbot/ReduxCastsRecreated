import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//const API_KEY = 'AIzaSyBs8J1k_Ze50ibR2TCTyI8qTvgFcs4zGKE';
const API_KEY = 'AIzaSyDgEs57CJ_KXFffm9bh6eZlk8Ji9PS0lsI';

// Create a new component to produce some HTML
// (type this code into babeljs.io)

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null 
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render () {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch } />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos = {this.state.videos} />
            </div>
        );
    }
}


// Take this components generated HTML nd put it on the page
// (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));