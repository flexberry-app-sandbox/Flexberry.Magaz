package Magaz.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Magaz.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Тапочки
 */
@Entity(name = "IISMagazТапочки")
@Table(schema = "public", name = "Тапочки")
public class Tapochki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодТапочек")
    private Integer кодтапочек;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Стоимость")
    private Double стоимость;

    @OneToMany(mappedBy = "tapochki", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<XarTapochek> xartapocheks;


    public Tapochki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодТапочек() {
      return кодтапочек;
    }

    public void setКодТапочек(Integer кодтапочек) {
      this.кодтапочек = кодтапочек;
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