import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Magaz',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Magaz',
          title: 'Magaz'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
