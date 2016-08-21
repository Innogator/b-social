import { Router } from 'express';
import * as EventController from '../controllers/event.controller';
const router = new Router();

// Get all Events
router.route('/events').get(EventController.getEvents);

// Get one event by cuid
router.route('/events/:cuid').get(EventController.getEvent);

// Add a new Event
router.route('/events').post(EventController.addEvent);

// Delete an Event by cuid
router.route('/events/:cuid').delete(EventController.deleteEvent);

export default router;
