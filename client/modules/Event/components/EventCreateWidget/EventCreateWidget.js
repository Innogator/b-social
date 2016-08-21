import React, { Component, PropTypes } from 'react';

// Import Style
import styles from './EventCreateWidget.css';

export class EventCreateWidget extends Component {
  addEvent = () => {
    const titleRef = this.refs.title;
    const descriptionRef = this.refs.description;
    const dateRef = this.refs.date;
    if (titleRef.value && descriptionRef.value && dateRef.value) {
      this.props.addEvent(titleRef.value, descriptionRef.value, dateRef.value);
      titleRef.value = descriptionRef.value = dateRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddEvent ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Create New Event</h2>
          <input placeholder="Title" className={styles['form-field']} ref="title" />
          <textarea placeholder="Description" className={styles['form-field']} ref="description" />
          <input placeholder="Date" className={styles['form-field']} ref="date" />
          <a className={styles['post-submit-button']} href="#" onClick={this.addEvent}>Submit</a>
        </div>
      </div>
    );
  }
}

EventCreateWidget.propTypes = {
  addEvent: PropTypes.func.isRequired,
  showAddEvent: PropTypes.bool.isRequired
};

export default EventCreateWidget;
