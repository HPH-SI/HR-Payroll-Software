#!/usr/bin/env node
/**
 * Updates attendance for Feb 16 - Mar 1 fortnight.
 * Format: Name \t CostCenter \t day0..day13 \t OT \t PH/DO \t Sick \t Annual \t HHS \t Conveyance
 */

const fs = require('fs');
const path = require('path');

const FORTNIGHT = '2026-02-16_2026-03-01';

const RAW = `TANEKO Sandra	H K	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50						 45.00 	 180 
MILTON Ellen	H K	7.50	7.50	7.50	7.50	7.50	7.50			7.50	7.50	7.00	7.50	7.50		7.50			 2 		 33.50 	 68 
ARUOMEA Christina	Finance	7.50	7.50	3.50		7.50	6.50	7.50		7.00	7.50	7.00	7.00	7.00	7.50							 165 
SUIMAEA, Rachel S. 	FBP	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50							 165 
RUKUIWAQA Moffat	Security	7.50	7.00	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50						 90 
FANASIA, Gretal 	H K	7.50	7.50	7.50		7.50	7.50		7.50	7.50	7.50			7.50	7.50	7.50					 37.50 	 68 
RUKASI, Florence	Security	7.50	6.50		7.50	7.50	7.50	7.50	6.50	7.50	7.00	7.50	7.50	7.50	7.00							 90 
SIUNARII, Alison	H K	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50					 45.00 	 180 
OGE, Marvin	FBP	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50							 90 
PENIOP Clement	Security	7.50	7.50	7.50	7.50	7.50	7.50			7.50	7.50	7.50	7.50	7.50								 75 
NAPS Patteson	POMEC	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50						 45.00 	 180 
TOVAGETO Derrick	FBP	7.50		7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50	7.00							 83 
TALUASI Elizabeth	H K	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50					 45.00 	 180 
LEGUMANA Titus	FBP	7.50					7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50						 68 
BUNIA Cleophas	H K	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50						 45.00 	 180 
BELIGA Jenny	H K	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50					 45.00 	 180 
JULIAN Salote	H K	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50					 45.00 	 180 
MANU Rose	H K	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50					 45.00 	 180 
RIKO Annette	H K	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50					 45.00 	 180 
BELO Alick	H K	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50						 45.00 	 180 
NE'E Glenda	FBP	7.50	7.50	7.50	7.50	7.50	7.50		7.00	7.50	7.50	7.50	7.00			7.50						 90 
ADI Joana	FBP	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50							 90 
HAMBALU Lorina	H K	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50						 45.00 	 90 
KWANAFIA Lovelyn	FBP	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50						 90 
TATAU Enest	H K	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50					 45.00 	 180 
LONGANIMALA Ben	FBP	7.50	7.50				7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50						 75 
Kuper Yvonne	FBS	7.50	7.50	6.00	7.50	7.50					7.50	7.50	7.50	7.50		7.50						 60 
ANISI Celesty	FBP	7.50	7.50	7.50	7.00		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50						 90 
PITUMANA Madlyn	H K	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50					 45.00 	 180 
WAKI Frank 	Finance	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50							 180 
GAROSEPI FAY Veronica	H K	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50						 45.00 	 180 
SIATA ALICK EDDIMOND 	POMEC	7.50		6.50	7.50	7.00	7.50	7.00	7.50		7.50	7.50	7.00	7.50	7.50	7.50					 43.75 	 90 
LUI Philip 	FO	7.50	6.00	7.00	7.00	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50	7.50								 135 
TALAI Martin 	Security	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50						 90 
IDU Pricilla	H K	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50						 45.00 	 180 
Sina Selina	Security	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50		7.50						 83 
Halumae Muriel	FBS	7.50	7.50	7.50	7.50	7.50	7.50			7.50	7.50	7.50	7.50	7.50	7.50							 165 
Kwanga Esther	FBP	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50		7.50						 90 
Alatala Grace Evalyn	FBS	7.50	7.50	7.50		7.50	7.50	7.50	7.50	6.50	7.50	7.50	7.50	7.50		7.50						 90 
Kala Jessy 	H K	7.50	7.50	7.50	7.50	7.50	7.00		7.50	7.50	7.50	7.50	7.50			7.50					 41.00 	 165 
Hikinao Dalcy 	FO	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50						 90 
Baulo John	POMEC	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50					 45.00 	 90 
Spillius Balinda	Finance	7.50	7.50	7.50		7.00		7.50		7.50	7.50	7.00	6.50	7.50	7.00							 150 
Ngivalasi Neverlyn 	FBP	7.50	7.00	7.50	7.00	7.50	7.50			7.50	7.50	7.50	7.00	7.50	7.50							 165 
Junior Elifau Eddie 	Admin	7.50	11.00	9.00	7.00	7.50	8.00	7.50	7.50	7.50		7.00		6.50	7.50	7.50	 5.50 					 180 
Ramofafia David 	FBS	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50		7.50	7.50	7.50							 83 
Seimoana Elizabeth 	FBS	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.00	7.50	7.50		7.50	7.50	7.50						 90 
Kasukea Weape Meverlyn 	FO	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50						 90 
Fiku Siapu Florence 	FBS	7.50	7.50	6.50	7.00	7.50	6.50		7.50	7.50	7.50	7.00	7.50	7.50		7.50			 3 			 135 
Ino Sylvia 	H K	7.50											7.50	7.50	7.50						 11.25 	 30 
Futia Maery	Security	7.50	7.50	7.00	6.50		7.50		7.00	7.00	7.50	7.50	7.50	7.50	7.50							 165 
Walani Sheila	FBS	7.50		7.00	7.50	7.50	7.50	7.00	7.50	7.00	7.50		7.50	7.00	7.50	7.50						 150 
Parkinson Moses 	POMEC	7.50	7.50	13.00	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		 5.50 				 45.00 	 158 
Aigah Jerol	FBS	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50							 90 
Faifu Kate	FBS	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50		7.50	7.00	7.50	7.50	7.00						 90 
Mara Joy Hadassah	FBS	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50							 90 
Nisha Joy 	FO	7.50	7.50	7.50	7.50	7.50	7.50	7.50		6.00	7.50	7.50	7.50	7.50	7.50							 180 
Roko Joyce	H K	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50					 45.00 	 180 
Salu Linma	FBP	7.50	7.50		7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50	7.50	7.50						 90 
Pavu N Salina 	H K	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50						 45.00 	 180 
Maehorana Renetta 	FBP	7.50	7.50		7.50	7.50	8.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	 1.00 					 180 
Luis Marion	FBP	7.50	7.50		7.50	8.50	7.50	7.50		7.50	7.50	7.50	7.00	7.50	7.50		 1.00 					 128 
Noli M Mary	FBP	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50							 90 
Hou Rose Diana	Finance	7.50	7.50	7.50	7.50	7.50	7.50			7.50	7.50	7.50	7.50	7.50					 3 			 105 
Hasi Delma	FO	7.50		5.00	7.50	7.50	7.50		7.50	7.50												 53 
Toku Odikana 	Security	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50						 90 
Tiba John 	Security	7.50	7.00		7.50		7.50	7.50	7.50	7.50		7.50	7.00	7.50	7.50	7.50			 1 			 75 
Anilafa Amasia Davy	Admin	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	14.00		7.50	7.50	7.50	 6.50 					 180 
Mena'a Margaret	FBP	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50						 90 
Masura Hellen	FBP	7.50		7.50	7.50		7.50	7.50	7.50	7.50	7.50				7.50							 60 
O'oi Jerlyn	H K	7.50	7.50	7.50	7.00	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50					 44.75 	 180 
Vuthia Ngelea Bounty	FBP	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.00	7.00							 90 
Honihuitoro Lovelyn	FBP	7.50	7.50	7.50	7.50	7.50	7.50			7.50	7.50	7.50	7.50	7.50		7.50						 83 
Sorumana Don 	FBS	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50						 90 
Hadobola Augustine 	FBS	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50						 90 
Afia Anisca	FBS	7.50	7.50	7.50	4.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50						 90 
Batalididi Joycelyn 	H K	7.50	7.50	7.50	7.00	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50					 44.75 	 90 
Moale Jenny	FBP	7.50	7.50	6.50	6.00		7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50						 90 
Gordon Doncy	Finance	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50			 1 			 165 
Sunaone Daledan Chris	Finance	7.50	7.00	7.50	7.50	7.50	7.50			7.50	7.50	7.50	7.50	7.50	7.50							 165 
Gasibule Zebrina Joy	FBS	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50			7.50	7.50	7.50	7.50						 165 
Leni Simon Junior	FBS	7.50			7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50						 83 
Basu Ivory	FBS	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50						 90 
Ariki Bareth 	FBS	7.50	7.50	7.00	7.50	7.00	7.50		7.50	7.50	7.50	7.00	7.50	7.50		7.50						 90 
Muiri'i Marisha 	FBP	7.50		6.50	7.50	4.50	7.50	7.50	7.50				7.00		7.50	7.50			 3 	 15 		 68 
Kalae Junior	FBS	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50									 75 
Saeve Rosina	FBP	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50		7.50						 83 
Anilafa Oge Adon 	Finance	7.50	7.50	9.00	7.50	7.50	10.00	7.50		9.00	9.50	7.50	7.00	7.50	7.50		 7.50 		 2 			 75 
Makania Esther 	H K	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	13.50	 6.00 				 45.00 	 180 
Kiini Barbra 	H K	7.50		7.50	7.50	7.50	7.50		7.50		7.50	7.50	7.50	7.50	7.50						 37.50 	 75 
Ruru Rose	FBP	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	4.00						 98 
Kemangava Pretty Lovelyn	FBP	7.50	7.50	7.00	7.50	7.00	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50						 90 
Donga Eddie Alisha	FBS	7.50		7.50																		 -   
Gu'ufo'oa Jnr Jock	POMEC	7.50	7.50	7.50	7.50					7.50	7.50	7.50				7.50					 26.25 	 105 
Maite Austin	POMEC	7.50	7.50	7.50	7.50	8.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		 1.00 				 45.00 	 180 
Ieva Helmah	FBS	7.50	7.50	7.50	7.50	7.50	7.50			7.50	7.50	7.50	7.50	7.50		7.50						 83 
Baniatawa Kramon	FBP	7.50	7.50		7.50	7.50		7.50	7.00	7.50	7.50		7.50	7.50	7.50	7.50						 83 
Fiulawa Niute'e Jimmy 	Admin	7.50	11.00	8.50	7.00	7.00	7.50	6.50	7.50	7.00	6.50		7.00		7.50	6.50	 4.50 		 2 			 150 
Rau Samantha	FBP	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50	7.50	7.00	7.50	7.50							 90 
Kuper Koi Robert	Finance	7.50	7.50	7.50						7.50	7.50	7.50	7.50			7.00						 53 
Nasihunu Varinah 	FBS	7.50												7.50	7.50	7.50						 30 
Kanaoli Jerolyn	FBS	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50						 90 
Lago Hansol	FBP	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50				 15 		 90 
Elson Hezishel	FBP	7.50												7.50	7.50	7.50						 23 
Tepai Ninah	FBP	7.50		7.00	7.50	7.50	7.50		7.50		7.50	7.50	7.50	7.50								 120 
Nego Joddy	FBP	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50		7.50	7.50	7.50						 150 
Tekosi Bravelyn	FBS	7.50	7.50	7.50	7.50		7.50		7.50	7.50	7.50	7.50		7.50	7.50	7.50						 83 
Riitefia Justin 	POMEC	7.50	8.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50	7.50	 1.00 	 7.50 			 45.00 	 120 
Waiwori Lynette	FBP	7.50		7.50		7.50	7.50	7.50	7.50		7.50	7.50	6.50	6.50		7.50			 2 			 68 
Titiri Simmy	FBP	7.50	7.50	7.50	7.50		7.50		7.50		7.50	7.50		7.50	7.50							 75 
Mesepitu Tarepala Tonia	Finance	7.50	7.50	7.50	7.00	7.50	7.00	7.50		7.50	6.50	7.00	7.50	7.50	4.50							 180 
Deve Haoia Gloria	POMEC	7.50			7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50	6.50					 40.75 	 158 
Siau Tracy	H K	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50						 45.00 	 180 
Takarii Margret	H K	7.50	7.00	7.50	7.50		7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50						 41.00 	 165 
Roosevelt Genesis	H K	7.50	7.50	7.50			7.50	7.50	7.50		7.50	7.50		7.50	7.50	7.50					 37.50 	 75 
Melapi Junior	FBS	7.50									7.50	7.50	7.50	7.50	7.50	7.50						 45 
Ekotani Kefa William	Admin	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50						 180 
Elega John	FBS	7.50		7.50			7.50	7.50			7.50	7.50	7.50	7.50	7.50	7.50			 2 			 60 
Monohoru Senrose	H K	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50						 45.00 	 180 
Honi Greyleen	FBS	7.50			7.50		7.50	7.50			7.50	7.50			7.00				 2 			 45 
Lio Ella	Finance	7.50	7.50	7.50	7.50	7.00	7.50	7.50		7.50	7.00	7.50	7.50	7.50	7.50							 180 
Hivapule Rodney	POMEC	7.50	7.50	7.50	7.50	7.00	7.50		7.50	7.50		7.50	7.50	7.50	7.00	7.50					 44.50 	 135 
Pio Dava Frank Junior	FBS	7.50	7.50	7.50	8.50		9.50	7.00	7.00	7.00	7.00	7.50		4.50	7.00		 3.00 					 165 
Rasini Fagana Susan	H K	7.50			7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50			 2 		 33.75 	 165 
Vaeto Cranolyn	FBP	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50						 120 
Panda Clinton	POMEC	7.50	7.50		7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50						 41.25 	 165 
Hadosaia Greyleen	FBS	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50							 83 
Ouou Stacey	FBS	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50							 90 
Papage Barbra	H K	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50					 45.00 	 90 
Dao Piqu Florence	Admin	7.50	7.50	7.50	7.50	7.50	7.50	4.00		7.50	7.50	7.50	7.50	7.50	7.50							 180 
Mamata Jordan	H K	7.50	7.50		7.50	7.00	7.50		7.50	7.50		7.00	7.50	6.50	7.50	7.50					 40.25 	 83 
Taisia Tahirih Zaynab	Finance	7.50	7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50							 180 
Manetoali Alice	FO	7.50	7.00	7.50	7.50		7.50			7.50	7.50	7.50		7.50	7.50	7.50						 75 
Tulumae Wesley	FO	7.50	7.00	7.50	7.50	7.00		7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50						 90 
Paulsen Alexander	FO	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50	7.50	7.50	7.50	7.50						 120 
Nasihunu Sharon	FO	7.50			7.00	7.50	7.50		7.50	7.50	7.50	7.50	7.50	7.50		7.50						 75 
Angitau Silas	POMEC	7.50				7.50	7.50	7.50	7.50	7.50	7.50		7.50		7.50	7.50					 33.75 	 135 
Tagalegaina Jahd Eugyn	Finance	7.50								7.50	7.50	7.50	7.50	7.50		7.50						 53 
Fernandez Hadassah Fragrance	Admin	7.50							7.50	6.50	7.00	7.50	7.50	6.50		10.50	 3.00 					 105 
`;

function normalizeName(s) {
  return (s || '').trim().replace(/\s+/g, ' ');
}

function parseNum(s) {
  const v = parseFloat(String(s || '').trim());
  return Number.isFinite(v) ? v : 0;
}

const devicePath = path.join(__dirname, '../server/device-data.json');
const sheetPath = path.join(__dirname, '../server/attendance-sheet-manual.json');

const employees = JSON.parse(fs.readFileSync(devicePath, 'utf8'));
const nameToId = new Map();
employees.forEach((e) => {
  const n = normalizeName(e.names);
  if (n) nameToId.set(n, String(e.employeeId));
  nameToId.set(n.toLowerCase(), String(e.employeeId));
});

const sheet = JSON.parse(fs.readFileSync(sheetPath, 'utf8'));
if (!sheet[FORTNIGHT]) sheet[FORTNIGHT] = {};

let updated = 0;
let notFound = [];
let ccUpdates = [];

const lines = RAW.trim().split('\n');
for (const line of lines) {
  const parts = line.split('\t').map((p) => p.trim());
  const name = parts[0];
  const costCenter = parts[1] || '';
  const dayVals = parts.slice(2, 16);
  const tail = parts.slice(-6);
  const otVal = tail[0] || '';
  const phDoVal = tail[1] || '';
  const sickVal = tail[2] || '';
  const annualVal = tail[3] || '';
  const hhsVal = tail[4] || '';
  const convRaw = (tail[5] || '0').replace(/^-\s*$/, '0');
  const convVal = parseNum(convRaw);
  if (!name) continue;

  const n = normalizeName(name);
  const id = nameToId.get(n) || nameToId.get(n.toLowerCase());
  if (!id) {
    notFound.push(name);
    continue;
  }

  const dayValues = Array(14).fill('');
  for (let i = 0; i < 14; i++) {
    const v = dayVals[i];
    dayValues[i] = (v === '' || v == null) ? '' : String(v);
  }

  const ot = parseNum(otVal);
  const phDo = phDoVal !== '' ? String(parseNum(phDoVal)) : '';
  const sick = sickVal !== '' ? String(parseNum(sickVal)) : '';
  const annual = annualVal !== '' ? parseNum(annualVal) : 0;

  const existing = sheet[FORTNIGHT][id] || {};
  sheet[FORTNIGHT][id] = {
    ...existing,
    dayValues,
    totalOvertime: ot,
    phDo: phDo !== '' ? phDo : (existing.phDo ?? ''),
    phPay: existing.phPay ?? 0,
    sickDays: sick !== '' ? sick : (existing.sickDays ?? ''),
    annualLeave: annual,
    conveyanceAll: convVal,
    compassionate: existing.compassionate ?? '',
    metLeave: existing.metLeave ?? 0,
  };

  if (costCenter) {
    const emp = employees.find((e) => String(e.employeeId) === id);
    if (emp && (emp.costCenter || '').trim() !== costCenter) {
      emp.costCenter = costCenter;
      ccUpdates.push(name + ' -> ' + costCenter);
    }
  }
  updated++;
}

fs.writeFileSync(sheetPath, JSON.stringify(sheet, null, 2), 'utf8');
if (ccUpdates.length) {
  fs.writeFileSync(devicePath, JSON.stringify(employees, null, 2), 'utf8');
}
console.log('Updated ' + updated + ' employees for Feb 16 - Mar 1.');
if (ccUpdates.length) console.log('Cost center updated:', ccUpdates.length);
if (notFound.length) console.log('Names not found:', notFound.join(', '));
