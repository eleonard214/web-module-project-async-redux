import './App.css';
import { connect } from 'react-dux' 
import { useEffect } from 'react' 
import axios from 'axios' 
import CatPics from './components/CatPics'

function App(props) {
  useEffect(() {
    axios
    .get('https://thatcopy.pw/catapi/rest')
    .then((res)=>{
      console.log(res.data);
      props.dispatch({ type: 'SET_STATE', payload: res.data});
    })
    .catch((err)=>{
      console.log(err);
    });
  },[]);

  return (
    <div className="App">
      {props.loading ? (
        'Fetching Cat Pic'
      ):(
        <CatPics catpics={props.catpics}/>
      )}
    </div>
  );
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);
