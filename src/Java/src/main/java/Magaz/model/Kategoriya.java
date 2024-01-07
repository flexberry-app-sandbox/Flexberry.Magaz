package Magaz.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Magaz.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Категория
 */
@Entity(name = "IISMagazКатегория")
@Table(schema = "public", name = "Категория")
public class Kategoriya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодКатегории")
    private Integer кодкатегории;

    @Column(name = "Наименование")
    private String наименование;


    public Kategoriya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодКатегории() {
      return кодкатегории;
    }

    public void setКодКатегории(Integer кодкатегории) {
      this.кодкатегории = кодкатегории;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }


}