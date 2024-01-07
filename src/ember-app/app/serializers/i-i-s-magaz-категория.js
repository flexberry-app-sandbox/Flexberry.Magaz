import { Serializer as КатегорияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-magaz-категория';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КатегорияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
