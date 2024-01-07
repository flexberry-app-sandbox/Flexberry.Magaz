import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  комментарий: DS.attr('string'),
  тапочки: DS.belongsTo('i-i-s-magaz-тапочки', { inverse: null, async: false }),
  заказы: DS.belongsTo('i-i-s-magaz-заказы', { inverse: 'заказТапочек', async: false })
});

export let ValidationRules = {
  комментарий: {
    descriptionKey: 'models.i-i-s-magaz-заказ-тапочек.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  тапочки: {
    descriptionKey: 'models.i-i-s-magaz-заказ-тапочек.validations.тапочки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказы: {
    descriptionKey: 'models.i-i-s-magaz-заказ-тапочек.validations.заказы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказТапочекE', 'i-i-s-magaz-заказ-тапочек', {
    комментарий: attr('Комментарий', { index: 0 })
  });
};
