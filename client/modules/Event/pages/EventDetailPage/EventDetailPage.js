import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import styles from '../../components/EventListItem/EventListItem.css';

import { fetchEvent } from '../../EventActions';

import { getEvent } from '../../EventReducer';

export function EventDetailPage(props) {
  return (
    <div>
      <Helmet title={props.event.title} />
      <div className={`${styles['single-event']} ${styles['event-detail']}`}>
        <h3 className={styles['event-title']}>{props.event.title}</h3>
        <p className={styles['event-date']}>{props.event.date}</p>
        <p className={styles['event-desc']}>{props.event.description}</p>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server-side
EventDetailPage.need = [params => {
  return fetchEvent(params.cuid);
}];

// Retrieve data form store as props
function mapStateToProps(state, props) {
  return {
    event: getEvent(state, props.params.cuid)
  };
}

EventDetailPage.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired
  }).isRequired
};

export default connect(mapStateToProps)(EventDetailPage);
