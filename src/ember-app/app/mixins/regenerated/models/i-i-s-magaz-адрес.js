import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  город: DS.attr('string'),
  дом: DS.attr('string'),
  индекс: DS.attr('number'),
  квартира: DS.attr('number'),
  кодАдреса: DS.attr('number'),
  улица: DS.attr('string')
});

export let ValidationRules = {
  город: {
    descriptionKey: 'models.i-i-s-magaz-адрес.validations.город.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дом: {
    descriptionKey: 'models.i-i-s-magaz-адрес.validations.дом.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  индекс: {
    descriptionKey: 'models.i-i-s-magaz-адрес.validations.индекс.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  квартира: {
    descriptionKey: 'models.i-i-s-magaz-адрес.validations.квартира.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодАдреса: {
    descriptionKey: 'models.i-i-s-magaz-адрес.validations.кодАдреса.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  улица: {
    descriptionKey: 'models.i-i-s-magaz-адрес.validations.улица.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АдресE', 'i-i-s-magaz-адрес', {
    кодАдреса: attr('Код адреса', { index: 0 }),
    город: attr('Город', { index: 1 }),
    улица: attr('Улица', { index: 2 }),
    дом: attr('Дом', { index: 3 }),
    квартира: attr('Квартира', { index: 4 }),
    индекс: attr('Индекс', { index: 5 })
  });

  modelClass.defineProjection('АдресL', 'i-i-s-magaz-адрес', {
    кодАдреса: attr('Код адреса', { index: 0 }),
    город: attr('Город', { index: 1 }),
    улица: attr('Улица', { index: 2 }),
    дом: attr('Дом', { index: 3 }),
    квартира: attr('Квартира', { index: 4 }),
    индекс: attr('Индекс', { index: 5 })
  });
};
