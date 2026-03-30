#!/usr/bin/env node
/**
 * Updates device-data.json from a tab-separated list: employeeId, names, costCenter
 * Uses user list as source of truth - updates name/costCenter when they differ
 */

const fs = require('fs');
const path = require('path');

const USER_LIST = `8	TANEKO Sandra	H K
17	MILTON Ellen	H K
45	ARUOMEA Christina	Finance
57	SUIMAEA, Rachel S. 	FBP
67	RUKUIWAQA Moffat	Security
74	FANASIA, Gretal 	H K
105	RUKASI, Florence	Security
129	SIUNARII, Alison	H K
139	OGE, Marvin	FBP
270	PENIOP Clement	Security
285	NAPS Patteson	POMEC
304	TOVAGETO Derrick	FBP
330	TALUASI Elizabeth	H K
365	LEGUMANA Titus	FBP
409	BUNIA Cleophas	H K
428	BELIGA Jenny	H K
438	JULIAN Salote	H K
455	MANU Rose	H K
465	RIKO Annette	H K
467	BELO Alick	H K
482	NE'E Glenda	FBP
494	ADI Joana	FBP
513	HAMBALU Lorina	H K
519	KWANAFIA Lovelyn	FBP
556	TATAU Enest	H K
559	LONGANIMALA Ben	FBP
578	Kuper Yvonne	FBS
583	ANISI Celesty	FBP
585	PITUMANA Madlyn	H K
587	WAKI Frank 	Finance
590	GAROSEPI FAY Veronica	H K
601	SIATA ALICK EDDIMOND 	POMEC
605	LUI Philip 	FO
611	TALAI Martin 	Security
629	IDU Pricilla	H K
642	Sina Selina	Security
654	Halumae Muriel	FBS
656	Kwanga Esther	FBP
683	Alatala Grace Evalyn	FBS
694	Kala Jessy 	H K
750	Hikinao Dalcy 	FO
762	Baulo John	POMEC
806	Spillius Balinda	Finance
821	Ngivalasi Neverlyn 	FBP
839	Junior Elifau Eddie 	Admin
843	Ramofafia David	FBS
856	Seimoana Elizabeth 	FBS
883	Kasukea Weape Meverlyn 	FO
892	Fiku Siapu Florence 	FBS
893	Ino Sylvia 	H K
901	Futia Maery	Security
906	Walani Sheila	FBS
915	Parkinson Moses 	POMEC
917	Aigah Jerol	FBS
918	Faifu Kate	FBS
920	Mara Joy Hadassah	FBS
921	Nisha Joy 	FO
925	Roko Joyce	H K
937	Salu Linma	FBP
941	Pavu N Salina 	H K
945	Maehorana Renetta	FBP
946	Luis Marion	FBP
948	Noli M Mary	FBP
953	Hou Rose Diana	Finance
956	Hasi Delma	FO
971	Toku Odikana 	Security
972	Tiba John 	Security
974	Anilafa Amasia Davy	Admin
975	Mena'a Margaret	FBP
991	Masura Hellen	FBP
999	O'oi Jerlyn	H K
1000	Vuthia Ngelea Bounty	FBP
1002	Honihuitoro Lovelyn	FBP
1004	Sorumana Don 	FBS
1005	Hadobola Augustine 	FBS
1006	Afia Anisca	FBS
1009	Batalididi Joycelyn 	H K
1011	Moale Jenny	FBP
1012	Gordon Doncy	Finance
1013	Sunaone Daledan Chris	Finance
1016	Gasibule Zebrina Joy	FBS
1019	Leni Simon Junior	FBS
1020	Basu Ivory	FBS
1022	Ariki Bareth 	FBS
1023	Muiri'i Marisha	FBP
1025	Kalae Junior	FBS
1027	Saeve Rosina	FBP
1032	Anilafa Oge Adon	Finance
1033	Makania Esther 	H K
1034	Kiini Barbra 	H K
1039	Ruru Rose	FBP
1043	Kemangava Pretty Lovelyn	FBP
1044	Donga Eddie Alisha	FBS
1045	Gu'ufo'oa Jnr Jock	POMEC
1046	Maite Austin	POMEC
1049	Ieva Helmah	FBS
1053	Baniatawa Kramon	FBP
1055	Fiulawa Niute'e Jimmy 	Admin
1056	Uiga Sarah	FBP
1057	Nerry Jossephil	FBS
1058	Rau Samantha	FBP
1059	Fernandez Betotina Marguerita	Admin
1060	Kuper Koi Robert	Finance
1062	Nasihunu Varinah 	FBS
1063	Kanaoli Jerolyn	FBS
1067	Lago Hansol	FBP
1068	Elson Hezishel	FBP
1069	Tepai Ninah	FBP
1070	Nego Joddy	FBP
1071	Tekosi Bravelyn	FBS
1072	Riitefia Justin 	POMEC
1073	Waiwori Lynette	FBP
1075	Titiri Simmy	FBP
1078	Mesepitu Tarepala Tonia	Finance
1080	Deve Haoia Gloria	POMEC
1081	Siau Tracy	H K
1082	Takarii Margret	H K
1083	Roosevelt Genesis	H K
1084	Melapi Junior	FBS
1086	Ekotani Kefa William	Admin
1087	Elega John	FBS
1088	Monohoru Senrose	H K
1090	Honi Greyleen	FBS
1093	Parangaina William	FO
1094	Lio Ella	Finance
1095	Sara Cecilia	FBP
1096	Hivapule Rodney	POMEC
1097	Pio Dava Frank Junior	FBS
1098	Rasini Fagana Susan	H K
1100	Vaeto Cranolyn	FBP
1101	Panda Clinton	POMEC
1102	Hadosaia Greyleen	FBS
1103	Ouou Stacey	FBS
1104	Kala Doreen	H K
1105	Papage Barbra	H K
1106	Dao Piqu Florence	Admin
1107	Mamata Jordan	H K`;

function trim(s) {
  return typeof s === 'string' ? s.trim() : s;
}

const userEntries = USER_LIST.split('\n')
  .map(line => line.split('\t'))
  .filter(parts => parts.length >= 3)
  .map(([id, names, costCenter]) => ({
    employeeId: String(trim(id)),
    names: trim(names),
    costCenter: trim(costCenter)
  }));

const dataPath = path.join(__dirname, '../server/device-data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const byId = new Map(data.map(e => [String(e.employeeId), e]));

let updated = 0;
let added = 0;

for (const u of userEntries) {
  const existing = byId.get(u.employeeId);
  if (existing) {
    const nameChanged = trim(existing.names) !== u.names;
    const ccChanged = trim(existing.costCenter) !== u.costCenter;
    if (nameChanged || ccChanged) {
      existing.names = u.names;
      existing.costCenter = u.costCenter;
      updated++;
    }
  } else {
    data.push({
      employeeId: u.employeeId,
      names: u.names,
      costCenter: u.costCenter,
      startDate: '',
      npf: '',
      bsp: '',
      basicWage: '',
      hAllow: '',
      shift: '',
      status: 'Active'
    });
    added++;
  }
}

// Sort by employeeId as number
data.sort((a, b) => Number(a.employeeId) - Number(b.employeeId));

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Updated ${updated} employees, added ${added} new employees.`);
process.exit(0);
