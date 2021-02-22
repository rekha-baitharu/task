import { Button, Checkbox } from '@material-ui/core';
import React from 'react';
export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: "",
        }
    }
    getNewData = () => {   
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
        let arrfirst = []
        arrfirst = this.state.data;
        let arrfirstfilter = arrfirst.filter(arrf => arrf.first_name !== this.state.value);
        let removeElement = arrfirst.filter(arrf => arrf.first_name === this.state.value);
        arrfirstfilter.splice(0, 0,removeElement[0]);
        this.setState({
            data: arrfirstfilter,
            value:""
        })
        
    }
    getLast = () => {
        if(this.state.value ===""){
            alert('Please Choose');
            return;
        }
        let arrLast = []
        arrLast = this.state.data;
         console.log("state value"+this.state.value)
        console.log(arrLast)
        let arrLastFilter = arrLast.filter(arrf => arrf.first_name !== this.state.value);
        let removeElement = arrLast.filter(arrf => arrf.first_name === this.state.value);
        arrLastFilter.splice(5, 0, removeElement[0]);
      
        this.setState({
            data: arrLastFilter,
            value:""
        })

    }

    getUp = () => {
        if(this.state.value ===""){
            alert('Please Choose');
            return;
        }
        let upArr = []
        upArr = this.state.data;
        let upFilArr = upArr.filter(arrf => arrf.first_name !== this.state.value);
        let removeElement = upArr.filter(arrf => arrf.first_name === this.state.value);
        let index = upArr.findIndex( element => {
        if (element.first_name === this.state.value) {
            return true;
        }
        });
        if(index === 0){
            alert("Cannot be Placed To Up");
            this.setState({
        })
            return;
        }
        upFilArr.splice(index - 1, 0,removeElement[0]);
        this.setState({
            data: upFilArr,
            value:""
        })
      
    }

    getDown = () => {
        if(this.state.value ===""){
            alert('Please Choose');
            return;
        }
        let downArr = []
        downArr = this.state.data;
        let downfilArr = downArr.filter(arrf => arrf.first_name !== this.state.value);
        let removeElement = downArr.filter(arrf => arrf.first_name === this.state.value);
        let index = downArr.findIndex( element => {
        if (element.first_name === this.state.value) {
            return true;
        }
        });
        if(index === 5){
            alert("Cannot be Placed To Down");
            return;
        }
        downfilArr.splice(index+1, 0, removeElement[0]);
        this.setState({
            data: downfilArr,
            value:""
        })
       
    }

    

    render() {
        return (
            <div>
                <ol>
                    {this.state.data
                        .map((s, index) => {
                            return (
                                <div >
                                    <li key={s.id}>{s.email}{s.first_name}{s.last_name} 
                                        <Checkbox value={this.state.value} 
                                            onClick={(e) => { if (e.target.checked === true) { this.setState({ value: s.first_name }) } }}
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