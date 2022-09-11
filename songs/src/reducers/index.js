import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Generator', duration: '4.05' },
    { title: 'Bulls On Parade', duration: '2:30' },
    { title: 'One', duration: '8:17' },
    { title: "I'm Just a Girl", duration: '1.45'  }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});