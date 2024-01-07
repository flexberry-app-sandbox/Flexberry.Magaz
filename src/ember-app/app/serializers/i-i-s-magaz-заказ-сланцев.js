import { Serializer as ЗаказСланцевSerializer } from
  '../mixins/regenerated/serializers/i-i-s-magaz-заказ-сланцев';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаказСланцевSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
