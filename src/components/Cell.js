import React, { Component } from "react";

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cell:
                <div
                    key={`${this.props.i}${this.props.j}`}
                    onClick={(e) => this.onClick()}
                    style={{
                        backgroundColor: "white",
                        width: "50px",
                        height: "50px",
                        border: "1px solid black"
                    }}
                />
        };
    }


    onClick = () => {
        this.props.onChange(this.props.i, this.props.j)
        const newCell =
            <div
                key={`${this.props.i}${this.props.j}`}
                onClick={(e) => this.onClick()}
                style={{
                    backgroundColor: this.state.cell.props.style.backgroundColor === 'white' ? 'black' : 'white',
                    width: "50px",
                    height: "50px",
                    border: "1px solid black"
                }}
            />
        this.setState({ cell: newCell })
    }

    render() {
        return this.state.cell
    }
}

export default Cell;