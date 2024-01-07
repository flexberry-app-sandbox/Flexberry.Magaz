import {
  defineNamespace,
  defineProjections,
  Model as ХарТапочекMixin
} from '../mixins/regenerated/models/i-i-s-magaz-хар-тапочек';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ХарТапочекMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
