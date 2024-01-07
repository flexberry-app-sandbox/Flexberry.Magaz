import {
  defineNamespace,
  defineProjections,
  Model as ХарСланцевMixin
} from '../mixins/regenerated/models/i-i-s-magaz-хар-сланцев';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ХарСланцевMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
