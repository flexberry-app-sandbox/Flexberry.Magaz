package Magaz.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Magaz.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Заказы
 */
@Entity(name = "IISMagazЗаказы")
@Table(schema = "public", name = "Заказы")
public class Zakazy {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодЗаказа")
    private Integer кодзаказа;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "ТипОплаты")
    private String типоплаты;

    @Column(name = "ТипВручения")
    private String типвручения;

    @Column(name = "Колво")
    private Integer колво;

    @Column(name = "Комментарий")
    private String комментарий;

    @Column(name = "Сумма")
    private Double сумма;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Adres")
    @Convert("Adres")
    @Column(name = "Адрес", length = 16, unique = true, nullable = false)
    private UUID _adresid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Adres", insertable = false, updatable = false)
    private Adres adres;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klienty")
    @Convert("Klienty")
    @Column(name = "Клиенты", length = 16, unique = true, nullable = false)
    private UUID _klientyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klienty", insertable = false, updatable = false)
    private Klienty klienty;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;

    @OneToMany(mappedBy = "zakazy", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<ZakazSlancev> zakazslancevs;

    @OneToMany(mappedBy = "zakazy", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<ZakazTapochek> zakaztapocheks;


    public Zakazy() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодЗаказа() {
      return кодзаказа;
    }

    public void setКодЗаказа(Integer кодзаказа) {
      this.кодзаказа = кодзаказа;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getТипОплаты() {
      return типоплаты;
    }

    public void setТипОплаты(String типоплаты) {
      this.типоплаты = типоплаты;
    }

    public String getТипВручения() {
      return типвручения;
    }

    public void setТипВручения(String типвручения) {
      this.типвручения = типвручения;
    }

    public Integer getКолво() {
      return колво;
    }

    public void setКолво(Integer колво) {
      this.колво = колво;
    }

    public String getКомментарий() {
      return комментарий;
    }

    public void setКомментарий(String комментарий) {
      this.комментарий = комментарий;
    }

    public Double getСумма() {
      return сумма;
    }

    public void setСумма(Double сумма) {
      this.сумма = сумма;
    }


}