import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаказТапочекMixin
} from '../mixins/regenerated/models/i-i-s-magaz-заказ-тапочек';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаказТапочекMixin, Validations, {
});

defineProjections(Model);

export default Model;
