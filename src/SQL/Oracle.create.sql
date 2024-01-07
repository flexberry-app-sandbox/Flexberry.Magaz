



CREATE TABLE "Сланцы"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодСланцев" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Стоимость" FLOAT(126) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Заказы"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодЗаказа" NUMBER(10) NULL,

	"Дата" DATE NULL,

	"ТипОплаты" NVARCHAR2(10) NULL,

	"ТипВручения" NVARCHAR2(1) NULL,

	"Колво" NUMBER(10) NULL,

	"Комментарий" NVARCHAR2(255) NULL,

	"Сумма" FLOAT(126) NULL,

	"Адрес" RAW(16) NOT NULL,

	"Клиенты" RAW(16) NOT NULL,

	"Сотрудник" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ХарСланцев"
(

	"primaryKey" RAW(16) NOT NULL,

	"Количество" NUMBER(10) NULL,

	"Размер" NUMBER(10) NULL,

	"Категория" RAW(16) NOT NULL,

	"Сланцы" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудник"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодСотрудника" NUMBER(10) NULL,

	"Фамилия" NVARCHAR2(255) NULL,

	"Имя" NVARCHAR2(255) NULL,

	"Отчество" NVARCHAR2(255) NULL,

	"НомерТелефона" NUMBER(10) NULL,

	"Должность" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЗаказСланцев"
(

	"primaryKey" RAW(16) NOT NULL,

	"Комментарий" NVARCHAR2(255) NULL,

	"Сланцы" RAW(16) NOT NULL,

	"Заказы" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Адрес"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодАдреса" NUMBER(10) NULL,

	"Город" NVARCHAR2(255) NULL,

	"Улица" NVARCHAR2(255) NULL,

	"Дом" NVARCHAR2(255) NULL,

	"Квартира" NUMBER(10) NULL,

	"Индекс" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Тапочки"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодТапочек" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Стоимость" FLOAT(126) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должность"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодДолжности" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Категория"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодКатегории" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЗаказТапочек"
(

	"primaryKey" RAW(16) NOT NULL,

	"Комментарий" NVARCHAR2(255) NULL,

	"Тапочки" RAW(16) NOT NULL,

	"Заказы" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ХарТапочек"
(

	"primaryKey" RAW(16) NOT NULL,

	"Количество" NUMBER(10) NULL,

	"Размер" NUMBER(10) NULL,

	"Категория" RAW(16) NOT NULL,

	"Тапочки" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Клиенты"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодКлиента" NUMBER(10) NULL,

	"Фамилия" NVARCHAR2(255) NULL,

	"Имя" NVARCHAR2(255) NULL,

	"Отчество" NVARCHAR2(255) NULL,

	"НомерТелефона" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Заказы"
	ADD CONSTRAINT "Заказы_FАдрес_0" FOREIGN KEY ("Адрес") REFERENCES "Адрес" ("primaryKey");

CREATE INDEX "Заказы_IАдрес" on "Заказы" ("Адрес");

ALTER TABLE "Заказы"
	ADD CONSTRAINT "Заказы_FКлиенты_0" FOREIGN KEY ("Клиенты") REFERENCES "Клиенты" ("primaryKey");

CREATE INDEX "Заказы_IКлиенты" on "Заказы" ("Клиенты");

ALTER TABLE "Заказы"
	ADD CONSTRAINT "Заказы_FСотруд_830" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "Заказы_IСотру_1132" on "Заказы" ("Сотрудник");

ALTER TABLE "ХарСланцев"
	ADD CONSTRAINT "ХарСланцев_FК_2637" FOREIGN KEY ("Категория") REFERENCES "Категория" ("primaryKey");

CREATE INDEX "ХарСланцев_IКа_563" on "ХарСланцев" ("Категория");

ALTER TABLE "ХарСланцев"
	ADD CONSTRAINT "ХарСланцев_FС_1364" FOREIGN KEY ("Сланцы") REFERENCES "Сланцы" ("primaryKey");

CREATE INDEX "ХарСланцев_IС_4920" on "ХарСланцев" ("Сланцы");

ALTER TABLE "Сотрудник"
	ADD CONSTRAINT "Сотрудник_FДо_9849" FOREIGN KEY ("Должность") REFERENCES "Должность" ("primaryKey");

CREATE INDEX "Сотрудник_IДо_2523" on "Сотрудник" ("Должность");

ALTER TABLE "ЗаказСланцев"
	ADD CONSTRAINT "ЗаказСланцев__9031" FOREIGN KEY ("Сланцы") REFERENCES "Сланцы" ("primaryKey");

CREATE INDEX "ЗаказСланцев__4001" on "ЗаказСланцев" ("Сланцы");

ALTER TABLE "ЗаказСланцев"
	ADD CONSTRAINT "ЗаказСланцев__5224" FOREIGN KEY ("Заказы") REFERENCES "Заказы" ("primaryKey");

CREATE INDEX "ЗаказСланцев__3699" on "ЗаказСланцев" ("Заказы");

ALTER TABLE "ЗаказТапочек"
	ADD CONSTRAINT "ЗаказТапочек__2171" FOREIGN KEY ("Тапочки") REFERENCES "Тапочки" ("primaryKey");

CREATE INDEX "ЗаказТапочек__6736" on "ЗаказТапочек" ("Тапочки");

ALTER TABLE "ЗаказТапочек"
	ADD CONSTRAINT "ЗаказТапочек__7511" FOREIGN KEY ("Заказы") REFERENCES "Заказы" ("primaryKey");

CREATE INDEX "ЗаказТапочек__6141" on "ЗаказТапочек" ("Заказы");

ALTER TABLE "ХарТапочек"
	ADD CONSTRAINT "ХарТапочек_FК_1262" FOREIGN KEY ("Категория") REFERENCES "Категория" ("primaryKey");

CREATE INDEX "ХарТапочек_IК_6844" on "ХарТапочек" ("Категория");

ALTER TABLE "ХарТапочек"
	ADD CONSTRAINT "ХарТапочек_FТ_9989" FOREIGN KEY ("Тапочки") REFERENCES "Тапочки" ("primaryKey");

CREATE INDEX "ХарТапочек_IТ_3366" on "ХарТапочек" ("Тапочки");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


