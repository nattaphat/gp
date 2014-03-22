--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: gprocurement; Type: COMMENT; Schema: -; Owner: moac
--

COMMENT ON DATABASE gprocurement IS 'เก็บข้อมูลจัดซื้อจัดจ้างภาครัฐ';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: gp_notice; Type: TABLE; Schema: public; Owner: moac; Tablespace: 
--

CREATE TABLE gp_notice (
    id character varying,
    title character varying
);


ALTER TABLE public.gp_notice OWNER TO moac;

--
-- Name: COLUMN gp_notice.id; Type: COMMENT; Schema: public; Owner: moac
--

COMMENT ON COLUMN gp_notice.id IS 'รหัสประเภทประกาศ';


--
-- Name: COLUMN gp_notice.title; Type: COMMENT; Schema: public; Owner: moac
--

COMMENT ON COLUMN gp_notice.title IS 'ชื่อประเภทประกาศ';


--
-- Name: gp_province; Type: TABLE; Schema: public; Owner: moac; Tablespace: 
--

CREATE TABLE gp_province (
    id character varying,
    title character varying
);


ALTER TABLE public.gp_province OWNER TO moac;

--
-- Name: COLUMN gp_province.id; Type: COMMENT; Schema: public; Owner: moac
--

COMMENT ON COLUMN gp_province.id IS 'รหัสจังหวัด';


--
-- Name: COLUMN gp_province.title; Type: COMMENT; Schema: public; Owner: moac
--

COMMENT ON COLUMN gp_province.title IS 'ชือจังหวัด';


--
-- Data for Name: gp_notice; Type: TABLE DATA; Schema: public; Owner: moac
--

INSERT INTO gp_notice VALUES ('15', 'ประกาศราคากลาง');
INSERT INTO gp_notice VALUES ('1', 'ประกาศร่าง TOR');
INSERT INTO gp_notice VALUES ('2', 'ประกาศเชิญชวน');
INSERT INTO gp_notice VALUES ('3', 'ประกาศรายชื่อผู้ผ่านการตรวจสอบผู้ไม่มีผลประโยชน์ร่วมกัน
');
INSERT INTO gp_notice VALUES ('4', 'ประกาศรายชื่อผู้ชนะการเสนอราคา');
INSERT INTO gp_notice VALUES ('5', 'แสดงข้อมูลสาระสำคัญในสัญญา');
INSERT INTO gp_notice VALUES ('6', 'เปลี่ยนแปลงประกาศเชิญชวน');
INSERT INTO gp_notice VALUES ('7', 'เปลี่ยนแปลงประกาศรายชื่อผู้ผ่านการตรวจสอบผู้ไม่มีผลประโยชน์ร่วมกัน
');
INSERT INTO gp_notice VALUES ('8', 'เปลี่ยนแปลงประกาศรายชื่อผู้ชนะการเสนอราคา
');
INSERT INTO gp_notice VALUES ('9', 'ยกเลิกประกาศเชิญชวน');
INSERT INTO gp_notice VALUES ('10', 'ยกเลิกประกาศรายชื่อผู้ผ่านการตรวจสอบผู้ไม่มีผลประโยชน์ร่วมกัน
');
INSERT INTO gp_notice VALUES ('11', 'ยกเลิกประกาศรายชื่อผู้ชนะการเสนอราคา');
INSERT INTO gp_notice VALUES ('12', 'ประกาศเชิญชวน เปลี่ยนแปลงประกาศเชิญชวน
');
INSERT INTO gp_notice VALUES ('13', 'ประกาศรายชื่อผู้ไม่มีผลฯ เปลี่ยนแปลงประกาศรายชื่อผู้ไม่มีผลฯ และยกเลิกประกาศรายชื่อผู้ไม่มีผลฯ');
INSERT INTO gp_notice VALUES ('14', 'ประกาศรายชื่อผู้ชนะฯ เปลี่ยนแปลงประกาศรายชื่อผู้ชนะฯ และยกเลิกประกาศรายชื่อผู้ชนะฯ');


--
-- Data for Name: gp_province; Type: TABLE DATA; Schema: public; Owner: moac
--

INSERT INTO gp_province VALUES ('810000', 'กระบี่');
INSERT INTO gp_province VALUES ('100000', 'กรุงเทพมหานคร');
INSERT INTO gp_province VALUES ('710000', 'กาญจนบุรี');
INSERT INTO gp_province VALUES ('460000', 'กาฬสินธุ์');
INSERT INTO gp_province VALUES ('620000', 'กำแพงเพชร');
INSERT INTO gp_province VALUES ('400000', 'ขอนแก่น');
INSERT INTO gp_province VALUES ('220000', 'จันทบุรี');
INSERT INTO gp_province VALUES ('240000', 'ฉะเชิงเทรา');
INSERT INTO gp_province VALUES ('200000', 'ชลบุรี');
INSERT INTO gp_province VALUES ('180000', 'ชัยนาท');
INSERT INTO gp_province VALUES ('360000', 'ชัยภูมิ');
INSERT INTO gp_province VALUES ('860000', 'ชุมพร');
INSERT INTO gp_province VALUES ('570000', 'เชียงราย');
INSERT INTO gp_province VALUES ('500000', 'เชียงใหม่');
INSERT INTO gp_province VALUES ('920000', 'ตรัง');
INSERT INTO gp_province VALUES ('230000', 'ตราด');
INSERT INTO gp_province VALUES ('630000', 'ตาก');
INSERT INTO gp_province VALUES ('260000', 'นครนายก');
INSERT INTO gp_province VALUES ('730000', 'นครปฐม');
INSERT INTO gp_province VALUES ('480000', 'นครพนม');
INSERT INTO gp_province VALUES ('300000', 'นครราชสีมา');
INSERT INTO gp_province VALUES ('800000', 'นครศรีธรรมราช');
INSERT INTO gp_province VALUES ('600000', 'นครสวรรค์');
INSERT INTO gp_province VALUES ('120000', 'นนทบุรี');
INSERT INTO gp_province VALUES ('960000', 'นราธิวาส');
INSERT INTO gp_province VALUES ('550000', 'น่าน');
INSERT INTO gp_province VALUES ('380000', 'บึงกาฬ');
INSERT INTO gp_province VALUES ('310000', 'บุรีรัมย์');
INSERT INTO gp_province VALUES ('130000', 'ปทุมธานี');
INSERT INTO gp_province VALUES ('770000', 'ประจวบคีรีขันธ์');
INSERT INTO gp_province VALUES ('250000', 'ปราจีนบุรี');
INSERT INTO gp_province VALUES ('940000', 'ปัตตานี');
INSERT INTO gp_province VALUES ('140000', 'พระนครศรีอยุธยา');
INSERT INTO gp_province VALUES ('560000', 'พะเยา');
INSERT INTO gp_province VALUES ('820000', 'พังงา');
INSERT INTO gp_province VALUES ('930000', 'พัทลุง');
INSERT INTO gp_province VALUES ('660000', 'พิจิตร');
INSERT INTO gp_province VALUES ('650000', 'พิษณุโลก');
INSERT INTO gp_province VALUES ('760000', 'เพชรบุรี');
INSERT INTO gp_province VALUES ('670000', 'เพชรบูรณ์');
INSERT INTO gp_province VALUES ('540000', 'แพร่');
INSERT INTO gp_province VALUES ('830000', 'ภูเก็ต');
INSERT INTO gp_province VALUES ('440000', 'มหาสารคาม');
INSERT INTO gp_province VALUES ('490000', 'มุกดาหาร');
INSERT INTO gp_province VALUES ('580000', 'แม่ฮ่องสอน');
INSERT INTO gp_province VALUES ('350000', 'ยโสธร');
INSERT INTO gp_province VALUES ('950000', 'ยะลา');
INSERT INTO gp_province VALUES ('450000', 'ร้อยเอ็ด');
INSERT INTO gp_province VALUES ('850000', 'ระนอง');
INSERT INTO gp_province VALUES ('210000', 'ระยอง');
INSERT INTO gp_province VALUES ('700000', 'ราชบุรี');
INSERT INTO gp_province VALUES ('160000', 'ลพบุรี');
INSERT INTO gp_province VALUES ('520000', 'ลำปาง');
INSERT INTO gp_province VALUES ('510000', 'ลำพูน');
INSERT INTO gp_province VALUES ('420000', 'เลย');
INSERT INTO gp_province VALUES ('330000', 'ศรีสะเกษ');
INSERT INTO gp_province VALUES ('470000', 'สกลนคร');
INSERT INTO gp_province VALUES ('900000', 'สงขลา');
INSERT INTO gp_province VALUES ('910000', 'สตูล');
INSERT INTO gp_province VALUES ('110000', 'สมุทรปราการ');
INSERT INTO gp_province VALUES ('750000', 'สมุทรสงคราม');
INSERT INTO gp_province VALUES ('740000', 'สมุทรสาคร');
INSERT INTO gp_province VALUES ('270000', 'สระแก้ว');
INSERT INTO gp_province VALUES ('190000', 'สระบุรี');
INSERT INTO gp_province VALUES ('170000', 'สิงห์บุรี');
INSERT INTO gp_province VALUES ('640000', 'สุโขทัย');
INSERT INTO gp_province VALUES ('720000', 'สุพรรณบุรี');
INSERT INTO gp_province VALUES ('840000', 'สุราษฎร์ธานี');
INSERT INTO gp_province VALUES ('320000', 'สุรินทร์');
INSERT INTO gp_province VALUES ('430000', 'หนองคาย');
INSERT INTO gp_province VALUES ('390000', 'หนองบัวลำภู');
INSERT INTO gp_province VALUES ('150000', 'อ่างทอง');
INSERT INTO gp_province VALUES ('370000', 'อำนาจเจริญ');
INSERT INTO gp_province VALUES ('410000', 'อุดรธานี');
INSERT INTO gp_province VALUES ('530000', 'อุตรดิตถ์');
INSERT INTO gp_province VALUES ('610000', 'อุทัยธานี');
INSERT INTO gp_province VALUES ('340000', 'อุบลราชธานี');


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--