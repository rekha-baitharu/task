import { Button, Checkbox } from '@material-ui/core';
import React from 'react';
export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: "",
            completed: []
        }
    }
    componentDidMount() {
        // this.getData();
        // this.getNewData();

    }
    getNewData = () => {
        // this.setState({
        //     value:this.state.value
        // })
        fetch("https://reqres.in/api/users?page=1")
            .then((res) => res.json())
            .then(resJson => {
                this.setState({
                    data: resJson.data
                })
                console.log(resJson);

            })
    }


    getFirst = () => {
        if(this.state.value ===""){
            alert('Please Choose');
            return;
        }
        let arr = []
        arr = this.state.data;
        let filArr = arr.filter(arrf => arrf.id !== this.state.value);
        filArr.splice(0, 0, arr[(this.state.value)-1]);
        this.setState({
            data: filArr,
            value:""
        })
        
    }
    getLast = (value) => {
        if(this.state.value ===""){
            alert('Please Choose');
            return;
        }
        let arr = []
        arr = this.state.data;
        let filArr = arr.filter(arrf => arrf.id !== this.state.value);
        filArr.splice(5, 0, arr[(this.state.value)-1]);
        this.setState({
            data: filArr,
            value:""
        })

    }

    getUp = () => {
        if(this.state.value ===""){
            alert('Please Choose');
            return;
        }
        let arr = []
        arr = this.state.data;
        let filArr = arr.filter(arrf => arrf.id !== this.state.value);
        filArr.splice((this.state.value) - 2, 0, arr[(this.state.value)-1]);
        console.log(filArr)
        this.setState({
            data: filArr,
            value:""
        })
    }

    getDown = () => {
        if(this.state.value ===""){
            alert('Please Choose');
            return;
        }
        let arr = []
        arr = this.state.data;
        let filArr = arr.filter(arrf => arrf.id !== this.state.value);
        filArr.splice((this.state.value) , 0, arr[(this.state.value)-1]);
        console.log(filArr)
        this.setState({
            data: filArr,
            value:""
        })
    }

    

    render() {
        return (
            <div>
                <ol>
                    {this.state.data
                        // .filter((value) => {if(value ===this.state.value){
                        //     value.push({
                        //         value:5
                        //     })
                        // }})
                        .map((s, index) => {
                            return (
                                <div>
                                    <li>{index}_{s.email}_{s.first_name}_{s.last_name}
                                        <Checkbox value={this.state.value}
                                            // onChange={(e)=>{console.log(e.target.checked)}}
                                            //  onClick={(e) =>{ if(e.target.checked === true){this.setState({value:index}) }} }
                                            onClick={(e) => { if (e.target.checked === true) { this.setState({ value: s.id }) } }}
                                        />
                                    </li>
                                </div>
                            )
                        })}

                </ol>

                <button onClick={this.getNewData}>Click</button>
                <Button onClick={this.getFirst}>First</Button>
                <Button onClick={this.getLast}>Last</Button>
                <Button onClick={this.getUp}>Up</Button>
                <Button onClick={this.getDown}>Down</Button>
            </div>
        )
    }
}