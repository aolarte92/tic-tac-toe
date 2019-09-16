import React from 'react';

class Square extends React.Component {

    render(props){
        return (
            <button 
                className="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

export default Square;