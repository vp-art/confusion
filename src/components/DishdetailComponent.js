import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, 
    ListGroup, ListGroupItem, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish}) {
    if(dish!=null) {
        return (
            <div key={dish.id}>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>  
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

function RenderComments({comments}) {
    return (
        <div>
            <h4> Comments </h4>
            {comments.map((comment) => {
                return (
                    <ListGroup>
                        <ListGroupItem className="border-0">{comment.comment}</ListGroupItem>
                        <ListGroupItem className="border-0"><p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p></ListGroupItem>
                    </ListGroup>
                );     
            })}
        </div>
    );
}

const DishDetail = (props) => {
    if(props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'> Menu </Link></BreadcrumbItem>
                        <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

export default DishDetail;