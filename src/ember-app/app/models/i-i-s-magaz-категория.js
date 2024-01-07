import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КатегорияMixin
} from '../mixins/regenerated/models/i-i-s-magaz-категория';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КатегорияMixin, Validations, {
});

defineProjections(Model);

export default Model;
