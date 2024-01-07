import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТапочкиMixin
} from '../mixins/regenerated/models/i-i-s-magaz-тапочки';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТапочкиMixin, Validations, {
});

defineProjections(Model);

export default Model;
