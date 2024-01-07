import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ХарТапочекMixin
} from '../mixins/regenerated/models/i-i-s-magaz-хар-тапочек';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ХарТапочекMixin, Validations, {
});

defineProjections(Model);

export default Model;
