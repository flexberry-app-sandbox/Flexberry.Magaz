import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as АдресMixin
} from '../mixins/regenerated/models/i-i-s-magaz-адрес';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АдресMixin, Validations, {
});

defineProjections(Model);

export default Model;
