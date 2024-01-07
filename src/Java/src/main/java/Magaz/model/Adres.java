package Magaz.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Magaz.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Адрес
 */
@Entity(name = "IISMagazАдрес")
@Table(schema = "public", name = "Адрес")
public class Adres {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодАдреса")
    private Integer кодадреса;

    @Column(name = "Город")
    private String город;

    @Column(name = "Улица")
    private String улица;

    @Column(name = "Дом")
    private String дом;

    @Column(name = "Квартира")
    private Integer квартира;

    @Column(name = "Индекс")
    private Integer индекс;


    public Adres() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодАдреса() {
      return кодадреса;
    }

    public void setКодАдреса(Integer кодадреса) {
      this.кодадреса = кодадреса;
    }

    public String getГород() {
      return город;
    }

    public void setГород(String город) {
      this.город = город;
    }

    public String getУлица() {
      return улица;
    }

    public void setУлица(String улица) {
      this.улица = улица;
    }

    public String getДом() {
      return дом;
    }

    public void setДом(String дом) {
      this.дом = дом;
    }

    public Integer getКвартира() {
      return квартира;
    }

    public void setКвартира(Integer квартира) {
      this.квартира = квартира;
    }

    public Integer getИндекс() {
      return индекс;
    }

    public void setИндекс(Integer индекс) {
      this.индекс = индекс;
    }


}