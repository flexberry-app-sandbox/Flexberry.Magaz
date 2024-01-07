import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипПолученияEnum from '../enums/i-i-s-magaz-тип-получения';

export default FlexberryEnum.extend({
  enum: ТипПолученияEnum,
  sourceType: 'IIS.Magaz.ТипПолучения'
});
