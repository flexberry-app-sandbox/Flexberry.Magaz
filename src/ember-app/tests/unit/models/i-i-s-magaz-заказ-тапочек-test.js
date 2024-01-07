import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-magaz-заказ-тапочек', 'Unit | Model | i-i-s-magaz-заказ-тапочек', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-magaz-адрес',
    'model:i-i-s-magaz-должность',
    'model:i-i-s-magaz-заказ-сланцев',
    'model:i-i-s-magaz-заказ-тапочек',
    'model:i-i-s-magaz-заказы',
    'model:i-i-s-magaz-категория',
    'model:i-i-s-magaz-клиенты',
    'model:i-i-s-magaz-сланцы',
    'model:i-i-s-magaz-сотрудник',
    'model:i-i-s-magaz-тапочки',
    'model:i-i-s-magaz-хар-сланцев',
    'model:i-i-s-magaz-хар-тапочек',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
