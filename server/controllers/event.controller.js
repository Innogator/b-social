import Event from '../models/event';
import cuid from 'cuid';
import slug from 'limax';
import santizeHtml from 'sanitize-html';

export function getEvents(req, res) {
  Event.find().sort('-data').exec((err, events) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ events });
  });
}

export function addEvent(req, res) {
  if (!req.body.event.title || !req.body.event.description || !req.body.event.data) {
    res.status(403).end();
  }

  const newEvent = new Event(req.body.event);

  newEvent.title = santizeHtml(newEvent.title);
  newEvent.description = santizeHtml(newEvent.description);
  newEvent.date = santizeHtml(newEvent.date);

  newEvent.slug = slug(newEvent.title.toLowerCase(), { lowercase: true });
  newEvent.cuid = cuid();
  newEvent.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ event: saved });
  });
}

export function getEvent(req, res) {
  Event.findOne({ cuid: req.params.cuid }).exec((err, event) => {
    if (err) {
      req.status(500).send(err);
    }
    res.json({ event });
  });
}

export function deleteEvent(req, res) {
  Event.findOne({ cuid: req.params.cuid }).exec((err, event) => {
    if (err) {
      res.status(500).send(err);
    }

    event.remove(() => {
      res.status(200).end();
    });
  });
}
