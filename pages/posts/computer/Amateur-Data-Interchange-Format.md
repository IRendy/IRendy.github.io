---
title: Amateur-Data-Interchange-Format (ADIF) Specification
ADIF-Version: 3.1.6
updated: 2025-09-15
reference: https://www.adif.org/316/ADIF_316.htm
categories: HAM
tags:
  - ADIF
---
## 0. 关于 ADIF

ADIF is an open standard for exchange of data between ham radio software packages available from different vendors.

Support for ADIF 3`.adx` format (XML) is emerging, while the `.adi` format also used by ADIF 2, is widely supported.

你可以通过链接 <https://adif.org/adif> 轻松访问最新发行的 ADIF。

ADIF questions and requests can be made in the **ADIF DEVELOPERS GROUP**.

## 1. 简介

### 1.1. 背景

从软件刚进入业余无线电领域以来，几乎每一个业余无线电软件程序员都会有一种数据格式标准。HAM 们苦于在各种格式之间转换数据。1996年初，KK7A 提出了HAM数据交换标准的想法，并设立了一个互联网反射器用于讨论这样的标准。商用业余无线电软件的发行商 Ray WF1B 和 Dennis WN4AZY 从这次讨论中吸取了一些优秀的建议，并提出了业余数据接口格式 (ADIF)，Ray 在 1996 年的 Dayton Hamvention 上将其作为 ADIF 1.0 引入。一年之内，该标准被大多数软件发行商采用。

从2002年开始，ADIF 2.0.0 支持向上兼容扩展，添加了新的数据类型、形式枚举、附加字段和枚举值。

During 2010, the need to support international characters led to this proposal to define a second file format (syntax) that would introduce international data types using Unicode encoded with UTF-8, and that would employ XML syntax. This second file format, refered to as ADX, references the same Data Types, Enumerations, and Fields as are referenced by the original ADIF file format, now referred to as ADI.

### 1.2. 开发

如果您想要讨论规范、请求更改或报告错误，请加入 ADIF 开发人员组

The ADIF Developers Group produces the ADIF specification and is open to developers of logging software, web sites, amateur radio applications, and others who have a vested interest in the ADIF standard and who will actively participate in its definition, maintenance, and promotion. Decisions are made by majority vote in the ADIF Voting group, with each application or service represented by exactly one ADIF Voting group member.

### 1.3. 术语

- 导出：将应用程序或服务中的数据保存为 ADIF 格式。
- 导入：将 ADIF 格式的数据加载到应用程序或服务中。

### 1.4. Applicability

### 1.5. Support of Fields

### 1.6. Changes from Previous Versions

## 2. 原则

### 2.1 向上兼容

ADIF 新的版本在数据类型、枚举、字段和格式上都应兼容旧的版本。

### 2.2 弃用

导入 ADIF 文件时应接受已弃用的字段和枚举值，但不会在导出 ADIF 文件时将弃用的字段和枚举值一并导出。已弃用的项被称作“仅导入”。

### 2.3 删除

## 3. 数据类型, 枚举和字段

### 3.1 数据类型

| 数据类型名称                              | 数据类型指示 | 描述(所有数字均为10进制数) |
|:------------------------------------------|:-------------|:---------------------------|
| AwardList                                 |              |                            |
| CreditList                                |              |                            |
| SponsoredAwardList                        |              |                            |
| Boolean                                   | B            |                            |
| Digit                                     |              |                            |
| Integer                                   |              |                            |
| Number                                    | N            |                            |
| PositiveInteger                           |              |                            |
| Character                                 |              |                            |
| IntlCharacter                             |              |                            |
| Date                                      | D            |                            |
| Time                                      | T            |                            |
| IOTARefNo                                 |              |                            |
| String                                    | S            |                            |
| IntlString                                | I            |                            |
| MultilineString                           | M            |                            |
| IntlMultilineString                       | G            |                            |
| Enumeration                               | E            |                            |
| GridSquare                                |              |                            |
| GridSquareList                            |              |                            |
| Location                                  |              |                            |
| POTARef                                   |              |                            |
| POTARefList                               |              |                            |
| SecondarySubdivisionList                  |              |                            |
| SecondaryAdministrativeSubdivisionListAlt |              |                            |
| SOTARef                                   |              |                            |
| WWFFRef                                          |              |                            |
#### 3.1.1 梅登黑德定位

### 3.2 枚举

### 3.3 字段

#### 3.3.1 ADIF 定义的字段

ADIF 字段名称不区分大小写。

##### 3.1.1.1 标题字段

在标题中，任何字段名称都不能出现在多个数据说明符中。


| 字段名称          | 数据类型 | 枚举 | 描述                                                                                                                                                                                                                                                                                                                               |
|:------------------|:---------|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ADIF_VER          | 字符串   |      | 标识此文件中使用的 ADIF 版本，格式为 X.Y.Z, where <br>X is an integer designating the ADIF epoch <br>Y is an integer between 0 and 9 designating the major version <br> Z is an integer between 0 and 9 designating the minor version                                                                                              |
| CREATED_TIMESTAMP | 字符串   |      | identifies the UTC date and time that the files was created in the format of 15 characters YYYYMMDD HHMMSS where <br> YYYYMMDD is a Date data type <br> HHMMSS is a 6 character Time data type                                                                                                                                     |
| PROGRAMID         | 字符串   |      | identifies the name of the logger, converter, or utility that created or processed this ADIF file<br>To help avoid name clashes, the ADIF PROGRAMID Register provides a voluntary list of PROGRAMID values.                                                                                                                        |
| PROGRAMVERSION    | 字符串   |      | identifies the version of the logger, converter, or utility that created or processed this ADIF file                                                                                                                                                                                                                               |
| USERDEFn          | 字符串   |      | specifies the name and optional enumeration or range of the *n*th user-defined field, where *n* is a positive integer <br> The name of a user-defined field may **not**<br>- be an ADIF Field name<br>- contain: a comma, a colon, an open-angle-bracket or close-angle-bracket character<br>- begin or end with a space character |

##### 3.1.2 QSO 字段

A Field can specify a Default Value to be assumed when that Field is not specified in a QSO record, or when a Data-Specifier for that Field contains no data.

In a record, no field name may appear in more than one Data Specifier.

| 字段名称                   | 数据类型       | 枚举 | 描述 |
|:--------------------------:|:--------------:|:----:|:----:|
| ADDRESS                    | 多行字符串     |      |      |
| ADDRESS_INTL               | 国际多行字符串 |      |      |
| AGE                        |                |      |      |
| ALTITUDE                   |                |      |      |
| ANT_AZ                     |                |      |      |
| ANT_EL                     |                |      |      |
| ANT_PATH                   |                |      |      |
| ARRL_SECT                  |                |      |      |
| AWARD_SUBMITTED            |                |      |      |
| AWARD_GRANTED              |                |      |      |
| A_INDEX                    |                |      |      |
| BAND                       |                |      |      |
| BAND_RX                    |                |      |      |
| CALL                       |                |      |      |
| CHECK                      |                |      |      |
| CLASS                      |                |      |      |
| CLUBLOG_QSO_UPLOAD_DATE    |                |      |      |
| CLUBLOG_QSO_UPLOAD_STATUS  |                |      |      |
| CNTY                       |                |      |      |
| CNTY_ALT                   |                |      |      |
| COMMENT                    |                |      |      |
| COMMENT_INTL               |                |      |      |
| CONT                       |                |      |      |
| COUNTACTED_OP              |                |      |      |
| CONTEST_ID                 |                |      |      |
| COUNTRY                    |                |      |      |
| COUNTRY_INTL               |                |      |      |
| CQZ                        |                |      |      |
| CREDIT_SUBMITTED           |                |      |      |
| CREDIT_GRANTED             |                |      |      |
| DARC_DOK                   |                |      |      |
| DCL_QSLRDATE               |                |      |      |
| DCL_QSLSDATE               |                |      |      |
| DCL_QSL_RCVD               |                |      |      |
| DCL_QSL_SENT               |                |      |      |
| DISTANCE                   |                |      |      |
| DXCC                       |                |      |      |
| EMAIL                      |                |      |      |
| EQ_CALL                    |                |      |      |
| EQSL_AGE                   |                |      |      |
| EQSL_QSLRDATE              |                |      |      |
| EQSL_QSLSDATE              |                |      |      |
| EQSL_QSL_RCVD              |                |      |      |
| EQSL_QSL_SENT              |                |      |      |
| FISTS                      |                |      |      |
| FISTS_CC                   |                |      |      |
| FORCE_INITio               |                |      |      |
| FREQ                       |                |      |      |
| FREQ_RX                    |                |      |      |
| GRIDSQUARE                 |                |      |      |
| GRIDQAURE_EXT              |                |      |      |
| GUEST_OP                   |                |      |      |
| HAMLOGEU_QSO_UPLOAD_DATE   |                |      |      |
| HAMLOGEU_QSO_UPLOAD_STATUS |                |      |      |
| HAMQTH_QSO_UPLOAD_DATE     |                |      |      |
| HAMQTH_QSO_UPLOAD_STATUS   |                |      |      |
| HAMLOG_QSO_UPLOAD_DATE     |                |      |      |
| HAMLOG_QSO_UPLOAD_STATUS   |                |      |      |
| IOTA                       |                |      |      |
| IOTA_ISLAND_ID             |                |      |      |
| ITUZ                       |                |      |      |
| K_INDEX                    |                |      |      |
| LAT                        |                |      |      |
| LON                        |                |      |      |
| LOTW_QSLRDATE              |                |      |      |
| LOTW_QSLSDATE              |                |      |      |
| LOTW_QSL_SENT              |                |      |      |
| MAX_BURSTS                 |                |      |      |
| MODE                       |                |      |      |
| MORSE_KEY_INFO             |                |      |      |
| MORSE_KEY_TYPE             |                |      |      |
| MS_SHOWER                  |                |      |      |
| MY_ALTITUDE                |                |      |      |
| MY_ANTENNA                 |                |      |      |
| MY_ANTENNA_INTL            |                |      |      |
| MY_ARRL_SECT               |                |      |      |
| MY_CNTY                    |                |      |      |
| MY_CNTY_ALT                |                |      |      |
| MY_COUNTRY                 |                |      |      |
| MY_COUNTRY_INTL            |                |      |      |
| MY_CQ_ZONE                 |                |      |      |
| MY_DARC_DOK                |                |      |      |
| MY_DXCC                    |                |      |      |
| MY_FISTS                   |                |      |      |
| MY_GRIDSQUARE              |                |      |      |
| MY_GRIDSQUARE_EXT          |                |      |      |
| MY_IOTA                    |                |      |      |
| MY_IOTA_ISLAND_ID          |                |      |      |
| MY_ITU_ZONE                |                |      |      |
| MY_LAT                     |                |      |      |
| MY_LON                     |                |      |      |
| MY_MORSE_KEY_INFO          |                |      |      |
| MY_MORSE_KEY_TYPE          |                |      |      |
| MY_NAME                    |                |      |      |
| MY_NAME_INTL               |                |      |      |
| MY_POSTAL_CODE             |                |      |      |
| MY_POSTAL_CODE_INTL        |                |      |      |
| MY_POTA_REF                |                |      |      |
| MY_RIG                     |                |      |      |
| MY_RIG_INTL                |                |      |      |
| MY_SIG                     |                |      |      |
| MY_SIG_INTL                |                |      |      |
| MY_SIG_INFO                |                |      |      |
| MY_SIG_INFO_INTL           |                |      |      |
| MY_SOTA_REF                |                |      |      |
| MY_STATE                   |                |      |      |
| MY_STREET                  |                |      |      |
| MY_STREET_INTL             |                |      |      |
| MY_USACA_COUNTIES          |                |      |      |
| MY_VUCC_GRIDS              |                |      |      |
| MY_WWFF_REF                |                |      |      |
| NAME                       |                |      |      |
| NAME_INTL                  |                |      |      |
| NOTES                      |                |      |      |
| NOTES_INTL                 |                |      |      |
| NR_BURSTS                  |                |      |      |
| NR_PINGS                   |                |      |      |
| OPERATOR                   |                |      |      |
| OWNER_CALLSIGN             |                |      |      |
| PFX                        |                |      |      |
| MY_POTA_REFPRECEDENCE      |                |      |      |
| PROP_MODE                  |                |      |      |
| PUBLIC_KEY                 |                |      |      |
| QRZCOM_QSO_DOWNLOAD_DATE   |                |      |      |
| QRZCOM_QSO_DOWNLOAD_STATUS |                |      |      |
| QRZCOM_QSO_UPLOAD_DATE     |                |      |      |
| QRZCOM_QSO_UPLOAD_STATUS   |                |      |      |
| QSLMSG                     |                |      |      |
| QSLMG_INTL                 |                |      |      |
| QSLMSG_RCVD                |                |      |      |
| QSLRDATE                   |                |      |      |
| QSLSDATE                   |                |      |      |
| QSL_RCVD                   |                |      |      |
| QSL_RCVD_VIA               |                |      |      |
| QSL_SENT                   |                |      |      |
| QSL_SENT_VIA               |                |      |      |
| QSL_VIA                    |                |      |      |
| QSO_COMPLETE               |                |      |      |
| QSO_DATE                   |                |      |      |
| QSO_DATE_OFF               |                |      |      |
| QSO_RANDOM                 |                |      |      |
| QTH                        |                |      |      |
| QTH_INTL                   |                |      |      |
| REGION                     |                |      |      |
| RIG                        |                |      |      |
| RIG_INTL                   |                |      |      |
| RST_RCVD                   |                |      |      |
| RST_SENT                   |                |      |      |
| RX_PWR                     |                |      |      |
| SAT_MODE                   |                |      |      |
| SAT_NAME                   |                |      |      |
| SFI                        |                |      |      |
| SIG                        |                |      |      |
| SIG_INTL                   |                |      |      |
| SIG_INFO                   |                |      |      |
| SIG_INFO_INTL              |                |      |      |
| SILENT_KEY                 |                |      |      |
| SKCC                       |                |      |      |
| SOTA_REF                   |                |      |      |
| SRX                        |                |      |      |
| SRX_STRING                 |                |      |      |
| STATE                      |                |      |      |
| STATION_CALLSIGN           |                |      |      |
| STX                        |                |      |      |
| STX_STRING                 |                |      |      |
| SUBMODE                    |                |      |      |
| SWL                        |                |      |      |
| TEN_TEN                    |                |      |      |
| TIME_OFF                   |                |      |      |
| TIME_ON                    |                |      |      |
| TX_PWR                     |                |      |      |
| UKSMG                      |                |      |      |
| USACA_COUNTIES             |                |      |      |
| VE_PROV                    |                |      |      |
| VUCC_GRIDS                 |                |      |      |
| WWFF_REFF                  |                |      |      |

## 4. File Formats

## 5. ADIF Resources

## 6. 外部链接
