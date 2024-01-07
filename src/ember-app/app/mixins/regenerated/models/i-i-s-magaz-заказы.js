import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  кодЗаказа: DS.attr('number'),
  колво: DS.attr('number'),
  комментарий: DS.attr('string'),
  сумма: DS.attr('decimal'),
  типВручения: DS.attr('i-i-s-magaz-тип-получения'),
  типОплаты: DS.attr('i-i-s-magaz-тип-оплаты'),
  адрес: DS.belongsTo('i-i-s-magaz-адрес', { inverse: null, async: false }),
  клиенты: DS.belongsTo('i-i-s-magaz-клиенты', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-magaz-сотрудник', { inverse: null, async: false }),
  заказСланцев: DS.hasMany('i-i-s-magaz-заказ-сланцев', { inverse: 'заказы', async: false }),
  заказТапочек: DS.hasMany('i-i-s-magaz-заказ-тапочек', { inverse: 'заказы', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-magaz-заказы.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаказа: {
    descriptionKey: 'models.i-i-s-magaz-заказы.validations.кодЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колво: {
    descriptionKey: 'models.i-i-s-magaz-заказы.validations.колво.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-magaz-заказы.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-magaz-заказы.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  типВручения: {
    descriptionKey: 'models.i-i-s-magaz-заказы.validations.типВручения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-magaz-заказы.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-magaz-заказы.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-magaz-заказы.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-magaz-заказы.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказСланцев: {
    descriptionKey: 'models.i-i-s-magaz-заказы.validations.заказСланцев.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  заказТапочек: {
    descriptionKey: 'models.i-i-s-magaz-заказы.validations.заказТапочек.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказыE', 'i-i-s-magaz-заказы', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    типОплаты: attr('Тип оплаты', { index: 2 }),
    типВручения: attr('Тип вручения', { index: 3 }),
    колво: attr('Колво', { index: 4 }),
    комментарий: attr('Комментарий', { index: 5 }),
    сумма: attr('Сумма', { index: 6 }),
    заказТапочек: hasMany('i-i-s-magaz-заказ-тапочек', 'Заказ тапочек', {
      комментарий: attr('Комментарий', { index: 0 })
    }),
    заказСланцев: hasMany('i-i-s-magaz-заказ-сланцев', 'Заказ сланцев', {
      комментарий: attr('Комментарий', { index: 0 })
    })
  });

  modelClass.defineProjection('ЗаказыL', 'i-i-s-magaz-заказы', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    типОплаты: attr('Тип оплаты', { index: 2 }),
    типВручения: attr('Тип вручения', { index: 3 }),
    колво: attr('Колво', { index: 4 }),
    комментарий: attr('Комментарий', { index: 5 }),
    сумма: attr('Сумма', { index: 6 })
  });
};
