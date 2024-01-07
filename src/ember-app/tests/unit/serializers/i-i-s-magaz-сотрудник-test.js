import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-magaz-сотрудник', 'Unit | Serializer | i-i-s-magaz-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-magaz-сотрудник',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-magaz-тип-оплаты',
    'transform:i-i-s-magaz-тип-получения',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
