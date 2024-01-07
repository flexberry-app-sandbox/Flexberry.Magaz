package Magaz.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Magaz.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ХарСланцев
 */
@Entity(name = "IISMagazХарСланцев")
@Table(schema = "public", name = "ХарСланцев")
public class XarSlancev {

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
    @Converter(converterClass = UUIDConverter.class, name = "Slancy")
    @Convert("Slancy")
    @Column(name = "Сланцы", length = 16, unique = true, nullable = false)
    private UUID _slancyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Slancy", insertable = false, updatable = false)
    private Slancy slancy;


    public XarSlancev() {
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