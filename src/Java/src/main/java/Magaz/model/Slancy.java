package Magaz.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Magaz.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Сланцы
 */
@Entity(name = "IISMagazСланцы")
@Table(schema = "public", name = "Сланцы")
public class Slancy {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодСланцев")
    private Integer кодсланцев;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Стоимость")
    private Double стоимость;

    @OneToMany(mappedBy = "slancy", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<XarSlancev> xarslancevs;


    public Slancy() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодСланцев() {
      return кодсланцев;
    }

    public void setКодСланцев(Integer кодсланцев) {
      this.кодсланцев = кодсланцев;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public Double getСтоимость() {
      return стоимость;
    }

    public void setСтоимость(Double стоимость) {
      this.стоимость = стоимость;
    }


}