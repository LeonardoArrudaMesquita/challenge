import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import circle from './circle.png'
import x from './x.png'

function Square(props) {
    return (

        //<button className="casa" onClick={this.play}></button>
        <div className="casa" onClick={props.onClick}>

            {props.value}

        </div>
    );
}


class Board extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            squares: Array(9).fill(null), // Array que representa cada Square do Board
            xIsNext: true,
            move: 0
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';        
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext   
        })
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {

        console.log(this.state);

        const winner = calculateWinner(this.state.squares);
        let status = "Status da jogada: ";

        if (winner) {
            status += "O jogador '" + winner + "' venceu !";
        }

        return ( 
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

                <div className="status">{status}</div>
                <input type="button" value="Reiniciar" onClick={() => document.location.reload(true)}></input>                
            </div>
        );
    }

}

class Game extends React.Component {
    render() {
        return (
            <div id="jogo">
                <Board />
            </div>
        )
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // === operador lógico que verifica se os valores são iguais e são do mesmo tipo
    for (let i = 0; i < lines.length; i++) {
        
        const [a, b, c] = lines[i];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

ReactDOM.render(<Game />,
    document.getElementById("root")
);