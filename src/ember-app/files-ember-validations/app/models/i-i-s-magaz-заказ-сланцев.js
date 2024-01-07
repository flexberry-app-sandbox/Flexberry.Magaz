import {
  defineNamespace,
  defineProjections,
  Model as ЗаказСланцевMixin
} from '../mixins/regenerated/models/i-i-s-magaz-заказ-сланцев';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаказСланцевMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
