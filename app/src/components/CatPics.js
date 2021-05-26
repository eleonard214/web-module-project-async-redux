import axios from 'axios' 

function CatPics(props){
    return (
        <div>
            {props.catpics.map((catpic)=>{
                return (
                    <div className='catpic'>
                        <img src={catpic.img}/>
                    </div>
                )
            })}
        </div>
    )
}
export default CatPics;