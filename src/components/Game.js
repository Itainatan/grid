import React, { Component } from "react";
import Cell from "./Cell"


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matrix: this.setGame(this.props.row, this.props.column)
        };
    }

    setGame = (rows, columns) => {
        let matrix = [];
        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < columns; j++) {
                row.push({ cell: <Cell i={i} j={j} key={`${i}${j}`} onChange={this.onChange} />, flag: false });
            }
            matrix.push(row);
        }
        return matrix
    }

    onChange = (i, j) => {
        let { matrix } = this.state;
        matrix[i][j].flag = !matrix[i][j].flag
        this.setState({ matrix });
    };

    showGrid = () =>
        this.state.matrix.map(row => {
            return <div style={{ display: "flex" }}>{row.map((cell) => {
                return cell.cell
            })}
            </div>;
        })


    render() {
        return (
            <div>
                {this.showGrid()}
            </div>
        );
    }
}

export default Game;