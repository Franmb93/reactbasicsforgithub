import ListGroup from 'react-bootstrap/ListGroup';
import MeetUpItem from './MeetUpItem';

function MeetUpList(props) {
    return (
        <div className='eachcard'>
            <ListGroup>
                <ListGroup.Item>{props.meetups.map(meetup => 
                    <MeetUpItem 
                        key={meetup.id} 
                        id={meetup.id} 
                        image={meetup.image}
                        title={meetup.title}
                        address={meetup.address}
                        description={meetup.description}                    
                    />)}</ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default MeetUpList;