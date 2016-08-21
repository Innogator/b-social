import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './EventListItem.css';

function EventListItem(props) {
  return (
    <div className={styles['single-event']}>
      <h3 className={styles['post-title']}>
        <Link to={`/events/${props.event.slug}-${props.event.cuid}`} >
          {props.event.title}
        </Link>
      </h3>
      <p className={styles['date']}>{props.event.title}</p>
      <p className={styles['event-desc']}>{props.event.description}</p>
      <p className={styles['event-action']}><a href="#" onClick={props.onDelete}>Delete</a></p>
      <hr className={styles.divider} />
    </div>
  );
}

EventListItem.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EventListItem;
