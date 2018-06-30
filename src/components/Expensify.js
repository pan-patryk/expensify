import React from 'react';

export default class Expensify extends React.Component{
    constructor(props){
        super(props);
        console.log('Expensify constructor');
    }

    render(){
        return (
            <div>
                <p> This is from my Expensify component</p>
            </div>
        )
    }
}