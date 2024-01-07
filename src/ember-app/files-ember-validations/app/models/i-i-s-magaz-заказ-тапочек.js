import {
  defineNamespace,
  defineProjections,
  Model as ЗаказТапочекMixin
} from '../mixins/regenerated/models/i-i-s-magaz-заказ-тапочек';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаказТапочекMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
