import {
  defineNamespace,
  defineProjections,
  Model as КатегорияMixin
} from '../mixins/regenerated/models/i-i-s-magaz-категория';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КатегорияMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
