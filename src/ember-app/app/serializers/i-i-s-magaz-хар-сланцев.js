import { Serializer as ХарСланцевSerializer } from
  '../mixins/regenerated/serializers/i-i-s-magaz-хар-сланцев';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ХарСланцевSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
