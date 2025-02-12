
import './event.css'
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Event() {
  return (
    <div className='event-section'>
      <header className='event-header'>
        <div className='serchicon'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <Form.Control className='search'
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='Search ShowOps'
        />
      </header>
      <Form className='eventform'>
      <div className='toptext'>
      <h3>Create an Event</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
      </div>
      </Form>
    </div>
  );
}

export default Event;