import { Serializer as СланцыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-magaz-сланцы';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СланцыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
