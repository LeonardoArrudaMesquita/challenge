import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// const play = event => {

//     if (condition) {

//     } else {

//     }

// }

//Declarando o Square como um componente React
class Square extends React.Component {    
    render() {
        return(

            //className = class => css
            //<button className="casa" onClick={this.play}></button>
            <div className="casa" 
                onClick={() => this.props.onClick()}>

                {this.state.value}

            </div>
        );
    }
}

class Board extends React.Component {
    constructor(props) {

        super(props);
        this.setState = {
            squares: Array(9).fill(null) // Array que representa cada Square do Board
        }
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares})
    }    

    //Método passando como parametro um inteiro e que retorna o Component Square
    renderSquare(i){
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        return(
            <div>
                {/* Linha 1 */}
                <div className="linha">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>

                {/* //Linha 2 */}
                <div className="linha">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>

                {/* //Linha 3 */}
                <div className="linha">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

}

class Game extends React.Component {
    render() {
        return (
            <div className="jogo">
                <Board />
            </div>
        )
    }
}

// //Define qual component será inicializado primeiramente
ReactDOM.render(<Game />,
    document.getElementById("root")
);