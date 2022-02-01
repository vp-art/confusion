import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    // Test
    renderDish(dish) {
        if(dish!=null) {
            return (
                <div key={dish.id}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                <Card>
                                    <CardImg top src={dish.image} alt={dish.name} />
                                    <CardBody>
                                        <CardTitle>{dish.name}</CardTitle>
                                        <CardText>{dish.description}</CardText>
                                    </CardBody>
                                </Card>
                            </div> 
                            <div className="col-12 col-md-5 m-1">
                                    {this.renderComments(dish)}
                            </div>
                        </div>
                    </div>
                </div>  
            );
        }
        else {
            <div></div>
        }
    }

    renderComments(dish){
        return (
            <div>
                <h4> Comments </h4>
                {dish.comments.map((comment) => {
                    return (
                        <ListGroup>
                            <ListGroupItem className="border-0">{comment.comment}</ListGroupItem>
                            <ListGroupItem className="border-0">-- {comment.author}</ListGroupItem>
                        </ListGroup>
                    )     
                })}
            </div>
        );
    }

    render() {
        return (
            <div>
                { this.renderDish(this.props.dish) }
            </div>
        );
    }

}

export default DishDetail;