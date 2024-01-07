import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ХарСланцевMixin
} from '../mixins/regenerated/models/i-i-s-magaz-хар-сланцев';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ХарСланцевMixin, Validations, {
});

defineProjections(Model);

export default Model;
