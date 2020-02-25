import React from 'react';
import './Card.css';

function Card(props) {
    let details = [];
    let detailsList = [];
    if(props.details !== undefined) {
        details = props.details.split(',');
        details.forEach(detail => {
            detailsList.push(<div className="details">
                {detail}
            </div>);
        });
        }
    else detailsList = undefined;

    let divContainer;
    if(detailsList !== undefined)
        divContainer = <div className="divContainer">
            { detailsList }
        </div>;

    return (
        <div className="Card">
            <h1 className="title"> {props.title} </h1>
            <h6 className="subtitle"> {props.subtitle} </h6>
            <div className="alignedInfo">
                <h6 className="leftInfo"> { props.leftInfo } </h6>
                <h6 className="rightInfo"> {props.rightInfo} </h6>
            </div>
            <br />
            { divContainer }
        </div>
    );
}

export default Card;
