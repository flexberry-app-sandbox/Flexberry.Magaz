import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодКатегории: DS.attr('number'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  кодКатегории: {
    descriptionKey: 'models.i-i-s-magaz-категория.validations.кодКатегории.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-magaz-категория.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КатегорияE', 'i-i-s-magaz-категория', {
    кодКатегории: attr('Код категории', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });

  modelClass.defineProjection('КатегорияL', 'i-i-s-magaz-категория', {
    кодКатегории: attr('Код категории', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });
};
