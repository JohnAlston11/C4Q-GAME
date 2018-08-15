import React,{Component} from 'react';
import './home.css';


export default class Home extends Component{
    render(){
        return(
            <div className="App">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://www.moregameslike.com/wp-content/uploads/2016/10/Tetris-810x456.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="http://veedif.com/files/thumbs/frogger.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://techviral.net/wp-content/uploads/2017/02/Now-You-Can-Play-The-Nokia-3310s-Iconic-Snake-Game-On-Facebook-Messenger.png" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="top-games">
                    <div className='game game-1'>
                        <button classname="play-button" >Play</button>
                    </div>
                    <div className='game' >
                        <button classname="play-button" >Play</button>
                    </div>
                    <div className='game' >
                        <button classname="play-button" >Play</button>
                    </div>
                </div>
            </div>
        )
    }
}