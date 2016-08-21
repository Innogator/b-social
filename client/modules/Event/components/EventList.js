import React, { PropTypes } from 'react';

import EventListItem from './EventListItem/EventListItem';

function EventList(props) {
  return (
    <div className="listView">
      {
        props.events.map(event => (
          <EventListItem
            event={event}
            key={event.cuid}
            onDelete={() => props.handleDeleteEvent(event.cuid)}
          />
        ))
      }
    </div>
  );
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired
  })).isRequired,
  handleDeleteEvent: PropTypes.func.isRequired,
};

export default EventList;
