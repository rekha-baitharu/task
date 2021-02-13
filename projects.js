import { Button, Checkbox } from '@material-ui/core';
import React from 'react';
export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: 0,
        }
    }
    componentDidMount() {
        // this.getData();
        this.getNewData();
    
    }
    getNewData=()=>{
        // this.setState({
        //     value:this.state.value
        // })
        fetch("https://reqres.in/api/users?page=1")
        .then((res) => res.json())
        .then(resJson => {
            this.setState({
                data: resJson.data,
                value:this.state.value
            })
            console.log(resJson);

        })
    }
 

    getFirst = () => {
        this.setState({
            value: 0
        })

        console.log(this.state.value);
    }
    getLast = () => {
        let dataArray=[];
        dataArray=this.state.data;
         let alterarray = dataArray.slice(this.state.value)
         console.log(alterarray)
         console.log(dataArray)
        // console.log(this.state.data)
        // console.log(this.state.data.slice(this.state.value));
        // console.log(this.state.value)
        // this.setState({
        //     value:5  
        // })
       
    }

    getUp = () => {
        this.setState({
            value: parseInt(this.state.value) - 1
        })
        this.getNewData();
        console.log(this.state.value);

    }

    getDown = () => {
        this.setState({
            value: parseInt(this.state.value) + 1
        })
        this.getNewData();
        console.log(this.state.value);

    }

    render() {
        return (
            <div>
                <ol>
                    {this.state.data.map((s, index) => {
                        return (
                            <div>
                                <li>{s.id}_{s.email}_{s.first_name}_{s.last_name} </li>
                                <Checkbox value={this.state.value}

                                // onChange={(e)=>{console.log(e.target.checked)}}
                                 onClick={(e) =>{ if(e.target.checked === true){this.setState({value:s.id}) }} }
                                 />
                            </div>
                        )
                    })}

                </ol>
                {/* <button onClick={this.getData}>Click</button> */}
                <Button onClick={this.getFirst}>First</Button>
                <Button onClick={this.getLast}>Last</Button>
                <Button onClick={this.getUp}>Up</Button>
                <Button onClick={this.getDown}>Down</Button>
            </div>
        )
    }
}