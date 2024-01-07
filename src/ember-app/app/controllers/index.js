import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.magaz.caption'),
          title: i18n.t('forms.application.sitemap.magaz.title'),
          children: [{
            link: 'i-i-s-magaz-сланцы-l',
            caption: i18n.t('forms.application.sitemap.magaz.i-i-s-magaz-сланцы-l.caption'),
            title: i18n.t('forms.application.sitemap.magaz.i-i-s-magaz-сланцы-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-magaz-заказы-l',
            caption: i18n.t('forms.application.sitemap.magaz.i-i-s-magaz-заказы-l.caption'),
            title: i18n.t('forms.application.sitemap.magaz.i-i-s-magaz-заказы-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-magaz-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.magaz.i-i-s-magaz-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.magaz.i-i-s-magaz-сотрудник-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-magaz-адрес-l',
            caption: i18n.t('forms.application.sitemap.magaz.i-i-s-magaz-адрес-l.caption'),
            title: i18n.t('forms.application.sitemap.magaz.i-i-s-magaz-адрес-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-magaz-тапочки-l',
            caption: i18n.t('forms.application.sitemap.magaz.i-i-s-magaz-тапочки-l.caption'),
            title: i18n.t('forms.application.sitemap.magaz.i-i-s-magaz-тапочки-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-magaz-должность-l',
            caption: i18n.t('forms.application.sitemap.magaz.i-i-s-magaz-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.magaz.i-i-s-magaz-должность-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-magaz-категория-l',
            caption: i18n.t('forms.application.sitemap.magaz.i-i-s-magaz-категория-l.caption'),
            title: i18n.t('forms.application.sitemap.magaz.i-i-s-magaz-категория-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-magaz-клиенты-l',
            caption: i18n.t('forms.application.sitemap.magaz.i-i-s-magaz-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.magaz.i-i-s-magaz-клиенты-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})