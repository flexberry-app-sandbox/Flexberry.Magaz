import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISMagazАдресLForm from './forms/i-i-s-magaz-адрес-l';
import IISMagazДолжностьLForm from './forms/i-i-s-magaz-должность-l';
import IISMagazЗаказыLForm from './forms/i-i-s-magaz-заказы-l';
import IISMagazКатегорияLForm from './forms/i-i-s-magaz-категория-l';
import IISMagazКлиентыLForm from './forms/i-i-s-magaz-клиенты-l';
import IISMagazСланцыLForm from './forms/i-i-s-magaz-сланцы-l';
import IISMagazСотрудникLForm from './forms/i-i-s-magaz-сотрудник-l';
import IISMagazТапочкиLForm from './forms/i-i-s-magaz-тапочки-l';
import IISMagazАдресEForm from './forms/i-i-s-magaz-адрес-e';
import IISMagazДолжностьEForm from './forms/i-i-s-magaz-должность-e';
import IISMagazЗаказыEForm from './forms/i-i-s-magaz-заказы-e';
import IISMagazКатегорияEForm from './forms/i-i-s-magaz-категория-e';
import IISMagazКлиентыEForm from './forms/i-i-s-magaz-клиенты-e';
import IISMagazСланцыEForm from './forms/i-i-s-magaz-сланцы-e';
import IISMagazСотрудникEForm from './forms/i-i-s-magaz-сотрудник-e';
import IISMagazТапочкиEForm from './forms/i-i-s-magaz-тапочки-e';
import IISMagazАдресModel from './models/i-i-s-magaz-адрес';
import IISMagazДолжностьModel from './models/i-i-s-magaz-должность';
import IISMagazЗаказСланцевModel from './models/i-i-s-magaz-заказ-сланцев';
import IISMagazЗаказТапочекModel from './models/i-i-s-magaz-заказ-тапочек';
import IISMagazЗаказыModel from './models/i-i-s-magaz-заказы';
import IISMagazКатегорияModel from './models/i-i-s-magaz-категория';
import IISMagazКлиентыModel from './models/i-i-s-magaz-клиенты';
import IISMagazСланцыModel from './models/i-i-s-magaz-сланцы';
import IISMagazСотрудникModel from './models/i-i-s-magaz-сотрудник';
import IISMagazТапочкиModel from './models/i-i-s-magaz-тапочки';
import IISMagazХарСланцевModel from './models/i-i-s-magaz-хар-сланцев';
import IISMagazХарТапочекModel from './models/i-i-s-magaz-хар-тапочек';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-magaz-адрес': IISMagazАдресModel,
    'i-i-s-magaz-должность': IISMagazДолжностьModel,
    'i-i-s-magaz-заказ-сланцев': IISMagazЗаказСланцевModel,
    'i-i-s-magaz-заказ-тапочек': IISMagazЗаказТапочекModel,
    'i-i-s-magaz-заказы': IISMagazЗаказыModel,
    'i-i-s-magaz-категория': IISMagazКатегорияModel,
    'i-i-s-magaz-клиенты': IISMagazКлиентыModel,
    'i-i-s-magaz-сланцы': IISMagazСланцыModel,
    'i-i-s-magaz-сотрудник': IISMagazСотрудникModel,
    'i-i-s-magaz-тапочки': IISMagazТапочкиModel,
    'i-i-s-magaz-хар-сланцев': IISMagazХарСланцевModel,
    'i-i-s-magaz-хар-тапочек': IISMagazХарТапочекModel
  },

  'application-name': 'Magaz',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Magaz',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Magaz',
          title: 'Magaz'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        magaz: {
          caption: 'Magaz',
          title: 'Magaz',
          'i-i-s-magaz-сланцы-l': {
            caption: 'Сланцы',
            title: ''
          },
          'i-i-s-magaz-заказы-l': {
            caption: 'Заказы',
            title: ''
          },
          'i-i-s-magaz-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-magaz-адрес-l': {
            caption: 'Адрес',
            title: ''
          },
          'i-i-s-magaz-тапочки-l': {
            caption: 'Тапочки',
            title: ''
          },
          'i-i-s-magaz-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-magaz-категория-l': {
            caption: 'Категория',
            title: ''
          },
          'i-i-s-magaz-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-magaz-адрес-l': IISMagazАдресLForm,
    'i-i-s-magaz-должность-l': IISMagazДолжностьLForm,
    'i-i-s-magaz-заказы-l': IISMagazЗаказыLForm,
    'i-i-s-magaz-категория-l': IISMagazКатегорияLForm,
    'i-i-s-magaz-клиенты-l': IISMagazКлиентыLForm,
    'i-i-s-magaz-сланцы-l': IISMagazСланцыLForm,
    'i-i-s-magaz-сотрудник-l': IISMagazСотрудникLForm,
    'i-i-s-magaz-тапочки-l': IISMagazТапочкиLForm,
    'i-i-s-magaz-адрес-e': IISMagazАдресEForm,
    'i-i-s-magaz-должность-e': IISMagazДолжностьEForm,
    'i-i-s-magaz-заказы-e': IISMagazЗаказыEForm,
    'i-i-s-magaz-категория-e': IISMagazКатегорияEForm,
    'i-i-s-magaz-клиенты-e': IISMagazКлиентыEForm,
    'i-i-s-magaz-сланцы-e': IISMagazСланцыEForm,
    'i-i-s-magaz-сотрудник-e': IISMagazСотрудникEForm,
    'i-i-s-magaz-тапочки-e': IISMagazТапочкиEForm
  },

});

export default translations;
