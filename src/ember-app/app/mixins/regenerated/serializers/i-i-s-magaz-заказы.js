import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      адрес: { serialize: 'odata-id', deserialize: 'records' },
      клиенты: { serialize: 'odata-id', deserialize: 'records' },
      сотрудник: { serialize: 'odata-id', deserialize: 'records' },
      заказСланцев: { serialize: false, deserialize: 'records' },
      заказТапочек: { serialize: false, deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
