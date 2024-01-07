import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СланцыMixin
} from '../mixins/regenerated/models/i-i-s-magaz-сланцы';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СланцыMixin, Validations, {
});

defineProjections(Model);

export default Model;
