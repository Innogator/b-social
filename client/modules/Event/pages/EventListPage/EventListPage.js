import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import EventList from '../../components/EventList';
import EventCreateWidget from '../../components/EventCreateWidget/EventCreateWidget';

// Import Actions
import { addEventRequest, fetchEvents, deleteEventRequest } from '../../EventActions';
import { toggleAddEvent } from '../../../App/AppActions';

// Import Selectors
import { getShowAddEvent } from '../../../App/AppReducer';
import { getEvents } from '../../EventReducer';

class EventListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchEvents());
  }

  handleDeleteEvent = event => {
    if (confirm('Do you want to delete this event')) { // eslint-disable-line
      this.props.dispatch(deleteEventRequest(event));
    }
  };

  handleAddEvent = (title, description, date) => {
    this.props.dispatch(toggleAddEvent());
    this.props.dispatch(addEventRequest({ title, description, date }));
  };

  render() {
    return (
      <div>
        <EventCreateWidget addEvent={this.handleAddEvent} showAddEvent={this.props.showAddEvent} />
        <EventList handleDeleteEvent={this.handleDeleteEvent} events={this.props.events} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
EventListPage.need = [() => { return fetchEvents(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddEvent: getShowAddEvent(state),
    events: getEvents(state),
  };
}

EventListPage.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  showAddEvent: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

EventListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(EventListPage);
