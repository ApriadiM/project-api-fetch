import React, { Component } from 'react'
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const API_PACEHOLDER = process.env.REACT_APP_API_PLACEHOLDER;

// export default class ComponentMount extends Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             data: {}
//         };
//     }

//     componentDidMount = () => {
//         // fetch("https://api.github.com/users/apriadim")
//         // .then(response => {
//         //     return response.json();
//         // })
//         // .then(data => {
//         //     this.setState({ data: data});
//         // });
//         axios
//         .get("https://api.github.com/users/apriadim")
//         .then(response => {
//             this.setState({data: response.data});
//         })
//         .catch(error => {
//             console.log(error)
//         })
//     };
//     render() {
//         return (
//             <div>
//                 <ComponentUnmount />
//                 <p>this color is {this.state.color}</p>
//                 <p style={{ background: "red" }}>
//                     {this.state.text !== "" && this.state.text}{" "}
//                 </p>
//                 <img src={this.state.data.avatar_url} alt="profile_picture" />
//                 <ComponentUpdate text={this.state.text} />
//             </div>
//         )
//     }
// }
export default class ComponentMount extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: {}
        };
    }

    componentDidMount = () => {
        axios
        .get(`${API_PACEHOLDER}/users/${id}/posts`)
        .then(response => {
            this.setState({data: response.data});
        })
        .catch(error => {
            console.log(error)
        })
    };
    render() {
        return (
            <div 
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
            }}
            >
                {this.state.data.length > 0 &&
                this.state.data.map(item => {return(
                    <Card style={{ maxWidth: "300px", margin: "10px"}}>
                        <CardContent>
                            <Typography color="textSecondary">
                                {item.email}
                            </Typography>
                            <Typography variant="body1" component="p">
                                My name is : {item.name}
                            </Typography>
                            <br/>
                            <Typography component="p">
                                Phone : {item.phone}
                            </Typography>
                            <Typography component="p">
                                Website : {item.website}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">View</Button>
                        </CardActions>
                    </Card>                
                )

                })}
                
            </div>
        )
    }
}