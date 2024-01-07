package Magaz.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Magaz.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ХарТапочек
 */
@Entity(name = "IISMagazХарТапочек")
@Table(schema = "public", name = "ХарТапочек")
public class XarTapochek {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "Размер")
    private Integer размер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kategoriya")
    @Convert("Kategoriya")
    @Column(name = "Категория", length = 16, unique = true, nullable = false)
    private UUID _kategoriyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kategoriya", insertable = false, updatable = false)
    private Kategoriya kategoriya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Tapochki")
    @Convert("Tapochki")
    @Column(name = "Тапочки", length = 16, unique = true, nullable = false)
    private UUID _tapochkiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Tapochki", insertable = false, updatable = false)
    private Tapochki tapochki;


    public XarTapochek() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }

    public Integer getРазмер() {
      return размер;
    }

    public void setРазмер(Integer размер) {
      this.размер = размер;
    }


}