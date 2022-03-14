import { Card, Button } from 'react-bootstrap';

function MeetUpItem(props){
    return(
        <div className='card-body'>
            <Card style={{ width: '28rem' }}>
                <Card.Img variant="top" src={props.image} alt={props.title} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.address}
                    </Card.Text>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button className="card-button" variant="primary">Add Favorites</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MeetUpItem;

