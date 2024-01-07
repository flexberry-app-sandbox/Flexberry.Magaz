import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодТапочек: DS.attr('number'),
  наименование: DS.attr('string'),
  стоимость: DS.attr('decimal'),
  харТапочек: DS.hasMany('i-i-s-magaz-хар-тапочек', { inverse: 'тапочки', async: false })
});

export let ValidationRules = {
  кодТапочек: {
    descriptionKey: 'models.i-i-s-magaz-тапочки.validations.кодТапочек.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-magaz-тапочки.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-magaz-тапочки.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  харТапочек: {
    descriptionKey: 'models.i-i-s-magaz-тапочки.validations.харТапочек.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТапочкиE', 'i-i-s-magaz-тапочки', {
    кодТапочек: attr('Код тапочек', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 }),
    харТапочек: hasMany('i-i-s-magaz-хар-тапочек', 'Хар тапочек', {
      количество: attr('Количество', { index: 0 }),
      размер: attr('Размер', { index: 1 })
    })
  });

  modelClass.defineProjection('ТапочкиL', 'i-i-s-magaz-тапочки', {
    кодТапочек: attr('Код тапочек', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 })
  });
};
