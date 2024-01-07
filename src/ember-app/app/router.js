import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-magaz-адрес-l');
  this.route('i-i-s-magaz-адрес-e',
  { path: 'i-i-s-magaz-адрес-e/:id' });
  this.route('i-i-s-magaz-адрес-e.new',
  { path: 'i-i-s-magaz-адрес-e/new' });
  this.route('i-i-s-magaz-должность-l');
  this.route('i-i-s-magaz-должность-e',
  { path: 'i-i-s-magaz-должность-e/:id' });
  this.route('i-i-s-magaz-должность-e.new',
  { path: 'i-i-s-magaz-должность-e/new' });
  this.route('i-i-s-magaz-заказы-l');
  this.route('i-i-s-magaz-заказы-e',
  { path: 'i-i-s-magaz-заказы-e/:id' });
  this.route('i-i-s-magaz-заказы-e.new',
  { path: 'i-i-s-magaz-заказы-e/new' });
  this.route('i-i-s-magaz-категория-l');
  this.route('i-i-s-magaz-категория-e',
  { path: 'i-i-s-magaz-категория-e/:id' });
  this.route('i-i-s-magaz-категория-e.new',
  { path: 'i-i-s-magaz-категория-e/new' });
  this.route('i-i-s-magaz-клиенты-l');
  this.route('i-i-s-magaz-клиенты-e',
  { path: 'i-i-s-magaz-клиенты-e/:id' });
  this.route('i-i-s-magaz-клиенты-e.new',
  { path: 'i-i-s-magaz-клиенты-e/new' });
  this.route('i-i-s-magaz-сланцы-l');
  this.route('i-i-s-magaz-сланцы-e',
  { path: 'i-i-s-magaz-сланцы-e/:id' });
  this.route('i-i-s-magaz-сланцы-e.new',
  { path: 'i-i-s-magaz-сланцы-e/new' });
  this.route('i-i-s-magaz-сотрудник-l');
  this.route('i-i-s-magaz-сотрудник-e',
  { path: 'i-i-s-magaz-сотрудник-e/:id' });
  this.route('i-i-s-magaz-сотрудник-e.new',
  { path: 'i-i-s-magaz-сотрудник-e/new' });
  this.route('i-i-s-magaz-тапочки-l');
  this.route('i-i-s-magaz-тапочки-e',
  { path: 'i-i-s-magaz-тапочки-e/:id' });
  this.route('i-i-s-magaz-тапочки-e.new',
  { path: 'i-i-s-magaz-тапочки-e/new' });
});

export default Router;
