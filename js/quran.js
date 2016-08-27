
// Quran Metadata (ver 1.0) 
// Copyright (C) 2008-2009 Tanzil.info
// License: Creative Commons Attribution 3.0


var QuranData = {};

//------------------ Sura Data ---------------------

QuranData.Sura = [
	// [start, ayas, order, rukus, name, tname, ename, type]
	[],
	[0, 7, 5, 1, 'الفاتحة', "Al-Faatiha", 'The Opening', 'Meccan'],
	[7, 286, 87, 40, 'البقرة', "Al-Baqara", 'The Cow', 'Medinan'],
	[293, 200, 89, 20, 'آل عمران', "Aal-i-Imraan", 'The Family of Imraan', 'Medinan'],
	[493, 176, 92, 24, 'النساء', "An-Nisaa", 'The Women', 'Medinan'],
	[669, 120, 112, 16, 'المائدة', "Al-Maaida", 'The Table', 'Medinan'],
	[789, 165, 55, 20, 'الأنعام', "Al-An'aam", 'The Cattle', 'Meccan'],
	[954, 206, 39, 24, 'الأعراف', "Al-A'raaf", 'The Heights', 'Meccan'],
	[1160, 75, 88, 10, 'الأنفال', "Al-Anfaal", 'The Spoils of War', 'Medinan'],
	[1235, 129, 113, 16, 'التوبة', "At-Tawba", 'The Repentance', 'Medinan'],
	[1364, 109, 51, 11, 'يونس', "Yunus", 'Jonas', 'Meccan'],
	[1473, 123, 52, 10, 'هود', "Hud", 'Hud', 'Meccan'],
	[1596, 111, 53, 12, 'يوسف', "Yusuf", 'Joseph', 'Meccan'],
	[1707, 43, 96, 6, 'الرعد', "Ar-Ra'd", 'The Thunder', 'Medinan'],
	[1750, 52, 72, 7, 'ابراهيم', "Ibrahim", 'Abraham', 'Meccan'],
	[1802, 99, 54, 6, 'الحجر', "Al-Hijr", 'The Rock', 'Meccan'],
	[1901, 128, 70, 16, 'النحل', "An-Nahl", 'The Bee', 'Meccan'],
	[2029, 111, 50, 12, 'الإسراء', "Al-Israa", 'The Night Journey', 'Meccan'],
	[2140, 110, 69, 12, 'الكهف', "Al-Kahf", 'The Cave', 'Meccan'],
	[2250, 98, 44, 6, 'مريم', "Maryam", 'Mary', 'Meccan'],
	[2348, 135, 45, 8, 'طه', "Taa-Haa", 'Taa-Haa', 'Meccan'],
	[2483, 112, 73, 7, 'الأنبياء', "Al-Anbiyaa", 'The Prophets', 'Meccan'],
	[2595, 78, 103, 10, 'الحج', "Al-Hajj", 'The Pilgrimage', 'Medinan'],
	[2673, 118, 74, 6, 'المؤمنون', "Al-Muminoon", 'The Believers', 'Meccan'],
	[2791, 64, 102, 9, 'النور', "An-Noor", 'The Light', 'Medinan'],
	[2855, 77, 42, 6, 'الفرقان', "Al-Furqaan", 'The Criterion', 'Meccan'],
	[2932, 227, 47, 11, 'الشعراء', "Ash-Shu'araa", 'The Poets', 'Meccan'],
	[3159, 93, 48, 7, 'النمل', "An-Naml", 'The Ant', 'Meccan'],
	[3252, 88, 49, 8, 'القصص', "Al-Qasas", 'The Stories', 'Meccan'],
	[3340, 69, 85, 7, 'العنكبوت', "Al-Ankaboot", 'The Spider', 'Meccan'],
	[3409, 60, 84, 6, 'الروم', "Ar-Room", 'The Romans', 'Meccan'],
	[3469, 34, 57, 3, 'لقمان', "Luqman", 'Luqman', 'Meccan'],
	[3503, 30, 75, 3, 'السجدة', "As-Sajda", 'The Prostration', 'Meccan'],
	[3533, 73, 90, 9, 'الأحزاب', "Al-Ahzaab", 'The Clans', 'Medinan'],
	[3606, 54, 58, 6, 'سبإ', "Saba", 'Sheba', 'Meccan'],
	[3660, 45, 43, 5, 'فاطر', "Faatir", 'The Originator', 'Meccan'],
	[3705, 83, 41, 5, 'يس', "Yaseen", 'Yaseen', 'Meccan'],
	[3788, 182, 56, 5, 'الصافات', "As-Saaffaat", 'Those drawn up in Ranks', 'Meccan'],
	[3970, 88, 38, 5, 'ص', "Saad", 'The letter Saad', 'Meccan'],
	[4058, 75, 59, 8, 'الزمر', "Az-Zumar", 'The Groups', 'Meccan'],
	[4133, 85, 60, 9, 'غافر', "Al-Ghaafir", 'The Forgiver', 'Meccan'],
	[4218, 54, 61, 6, 'فصلت', "Fussilat", 'Explained in detail', 'Meccan'],
	[4272, 53, 62, 5, 'الشورى', "Ash-Shura", 'Consultation', 'Meccan'],
	[4325, 89, 63, 7, 'الزخرف', "Az-Zukhruf", 'Ornaments of gold', 'Meccan'],
	[4414, 59, 64, 3, 'الدخان', "Ad-Dukhaan", 'The Smoke', 'Meccan'],
	[4473, 37, 65, 4, 'الجاثية', "Al-Jaathiya", 'Crouching', 'Meccan'],
	[4510, 35, 66, 4, 'الأحقاف', "Al-Ahqaf", 'The Dunes', 'Meccan'],
	[4545, 38, 95, 4, 'محمد', "Muhammad", 'Muhammad', 'Medinan'],
	[4583, 29, 111, 4, 'الفتح', "Al-Fath", 'The Victory', 'Medinan'],
	[4612, 18, 106, 2, 'الحجرات', "Al-Hujuraat", 'The Inner Apartments', 'Medinan'],
	[4630, 45, 34, 3, 'ق', "Qaaf", 'The letter Qaaf', 'Meccan'],
	[4675, 60, 67, 3, 'الذاريات', "Adh-Dhaariyat", 'The Winnowing Winds', 'Meccan'],
	[4735, 49, 76, 2, 'الطور', "At-Tur", 'The Mount', 'Meccan'],
	[4784, 62, 23, 3, 'النجم', "An-Najm", 'The Star', 'Meccan'],
	[4846, 55, 37, 3, 'القمر', "Al-Qamar", 'The Moon', 'Meccan'],
	[4901, 78, 97, 3, 'الرحمن', "Ar-Rahmaan", 'The Beneficent', 'Medinan'],
	[4979, 96, 46, 3, 'الواقعة', "Al-Waaqia", 'The Inevitable', 'Meccan'],
	[5075, 29, 94, 4, 'الحديد', "Al-Hadid", 'The Iron', 'Medinan'],
	[5104, 22, 105, 3, 'المجادلة', "Al-Mujaadila", 'The Pleading Woman', 'Medinan'],
	[5126, 24, 101, 3, 'الحشر', "Al-Hashr", 'The Exile', 'Medinan'],
	[5150, 13, 91, 2, 'الممتحنة', "Al-Mumtahana", 'She that is to be examined', 'Medinan'],
	[5163, 14, 109, 2, 'الصف', "As-Saff", 'The Ranks', 'Medinan'],
	[5177, 11, 110, 2, 'الجمعة', "Al-Jumu'a", 'Friday', 'Medinan'],
	[5188, 11, 104, 2, 'المنافقون', "Al-Munaafiqoon", 'The Hypocrites', 'Medinan'],
	[5199, 18, 108, 2, 'التغابن', "At-Taghaabun", 'Mutual Disillusion', 'Medinan'],
	[5217, 12, 99, 2, 'الطلاق', "At-Talaaq", 'Divorce', 'Medinan'],
	[5229, 12, 107, 2, 'التحريم', "At-Tahrim", 'The Prohibition', 'Medinan'],
	[5241, 30, 77, 2, 'الملك', "Al-Mulk", 'The Sovereignty', 'Meccan'],
	[5271, 52, 2, 2, 'القلم', "Al-Qalam", 'The Pen', 'Meccan'],
	[5323, 52, 78, 2, 'الحاقة', "Al-Haaqqa", 'The Reality', 'Meccan'],
	[5375, 44, 79, 2, 'المعارج', "Al-Ma'aarij", 'The Ascending Stairways', 'Meccan'],
	[5419, 28, 71, 2, 'نوح', "Nooh", 'Noah', 'Meccan'],
	[5447, 28, 40, 2, 'الجن', "Al-Jinn", 'The Jinn', 'Meccan'],
	[5475, 20, 3, 2, 'المزمل', "Al-Muzzammil", 'The Enshrouded One', 'Meccan'],
	[5495, 56, 4, 2, 'المدثر', "Al-Muddaththir", 'The Cloaked One', 'Meccan'],
	[5551, 40, 31, 2, 'القيامة', "Al-Qiyaama", 'The Resurrection', 'Meccan'],
	[5591, 31, 98, 2, 'الانسان', "Al-Insaan", 'Man', 'Medinan'],
	[5622, 50, 33, 2, 'المرسلات', "Al-Mursalaat", 'The Emissaries', 'Meccan'],
	[5672, 40, 80, 2, 'النبإ', "An-Naba", 'The Announcement', 'Meccan'],
	[5712, 46, 81, 2, 'النازعات', "An-Naazi'aat", 'Those who drag forth', 'Meccan'],
	[5758, 42, 24, 1, 'عبس', "Abasa", 'He frowned', 'Meccan'],
	[5800, 29, 7, 1, 'التكوير', "At-Takwir", 'The Overthrowing', 'Meccan'],
	[5829, 19, 82, 1, 'الإنفطار', "Al-Infitaar", 'The Cleaving', 'Meccan'],
	[5848, 36, 86, 1, 'المطففين', "Al-Mutaffifin", 'Defrauding', 'Meccan'],
	[5884, 25, 83, 1, 'الإنشقاق', "Al-Inshiqaaq", 'The Splitting Open', 'Meccan'],
	[5909, 22, 27, 1, 'البروج', "Al-Burooj", 'The Constellations', 'Meccan'],
	[5931, 17, 36, 1, 'الطارق', "At-Taariq", 'The Morning Star', 'Meccan'],
	[5948, 19, 8, 1, 'الأعلى', "Al-A'laa", 'The Most High', 'Meccan'],
	[5967, 26, 68, 1, 'الغاشية', "Al-Ghaashiya", 'The Overwhelming', 'Meccan'],
	[5993, 30, 10, 1, 'الفجر', "Al-Fajr", 'The Dawn', 'Meccan'],
	[6023, 20, 35, 1, 'البلد', "Al-Balad", 'The City', 'Meccan'],
	[6043, 15, 26, 1, 'الشمس', "Ash-Shams", 'The Sun', 'Meccan'],
	[6058, 21, 9, 1, 'الليل', "Al-Lail", 'The Night', 'Meccan'],
	[6079, 11, 11, 1, 'الضحى', "Ad-Dhuhaa", 'The Morning Hours', 'Meccan'],
	[6090, 8, 12, 1, 'الشرح', "Ash-Sharh", 'The Consolation', 'Meccan'],
	[6098, 8, 28, 1, 'التين', "At-Tin", 'The Fig', 'Meccan'],
	[6106, 19, 1, 1, 'العلق', "Al-Alaq", 'The Clot', 'Meccan'],
	[6125, 5, 25, 1, 'القدر', "Al-Qadr", 'The Power, Fate', 'Meccan'],
	[6130, 8, 100, 1, 'البينة', "Al-Bayyina", 'The Evidence', 'Medinan'],
	[6138, 8, 93, 1, 'الزلزلة', "Az-Zalzala", 'The Earthquake', 'Medinan'],
	[6146, 11, 14, 1, 'العاديات', "Al-Aadiyaat", 'The Chargers', 'Meccan'],
	[6157, 11, 30, 1, 'القارعة', "Al-Qaari'a", 'The Calamity', 'Meccan'],
	[6168, 8, 16, 1, 'التكاثر', "At-Takaathur", 'Competition', 'Meccan'],
	[6176, 3, 13, 1, 'العصر', "Al-Asr", 'The Declining Day, Epoch', 'Meccan'],
	[6179, 9, 32, 1, 'الهمزة', "Al-Humaza", 'The Traducer', 'Meccan'],
	[6188, 5, 19, 1, 'الفيل', "Al-Fil", 'The Elephant', 'Meccan'],
	[6193, 4, 29, 1, 'قريش', "Quraish", 'Quraysh', 'Meccan'],
	[6197, 7, 17, 1, 'الماعون', "Al-Maa'un", 'Almsgiving', 'Meccan'],
	[6204, 3, 15, 1, 'الكوثر', "Al-Kawthar", 'Abundance', 'Meccan'],
	[6207, 6, 18, 1, 'الكافرون', "Al-Kaafiroon", 'The Disbelievers', 'Meccan'],
	[6213, 3, 114, 1, 'النصر', "An-Nasr", 'Divine Support', 'Medinan'],
	[6216, 5, 6, 1, 'المسد', "Al-Masad", 'The Palm Fibre', 'Meccan'],
	[6221, 4, 22, 1, 'الإخلاص', "Al-Ikhlaas", 'Sincerity', 'Meccan'],
	[6225, 5, 20, 1, 'الفلق', "Al-Falaq", 'The Dawn', 'Meccan'],
	[6230, 6, 21, 1, 'الناس', "An-Naas", 'Mankind', 'Meccan'],
	[6236, 1]
];


//------------------ Juz Data ---------------------

QuranData.Juz = [
	// [sura, aya]
	[],	
	[1, 1], 	[2, 142], 	[2, 253], 	[3, 93], 	[4, 24],
	[4, 148], 	[5, 82], 	[6, 111], 	[7, 88], 	[8, 41],
	[9, 93], 	[11, 6], 	[12, 53], 	[15, 1], 	[17, 1],
	[18, 75], 	[21, 1], 	[23, 1], 	[25, 21], 	[27, 56],
	[29, 46], 	[33, 31], 	[36, 28], 	[39, 32], 	[41, 47],
	[46, 1], 	[51, 31], 	[58, 1], 	[67, 1], 	[78, 1],
	[115, 1] 
];

//------------------ Hizb Data ---------------------

QuranData.HizbQaurter = [
	// [sura, aya]
	[],	
	[1, 1], 	[2, 26], 	[2, 44], 	[2, 60],
	[2, 75], 	[2, 92], 	[2, 106], 	[2, 124],
	[2, 142], 	[2, 158], 	[2, 177], 	[2, 189],
	[2, 203], 	[2, 219], 	[2, 233], 	[2, 243],
	[2, 253], 	[2, 263], 	[2, 272], 	[2, 283],
	[3, 15], 	[3, 33], 	[3, 52], 	[3, 75],
	[3, 93], 	[3, 113], 	[3, 133], 	[3, 153],
	[3, 171], 	[3, 186], 	[4, 1], 	[4, 12],
	[4, 24], 	[4, 36], 	[4, 58], 	[4, 74],
	[4, 88], 	[4, 100], 	[4, 114], 	[4, 135],
	[4, 148], 	[4, 163], 	[5, 1], 	[5, 12],
	[5, 27], 	[5, 41], 	[5, 51], 	[5, 67],
	[5, 82], 	[5, 97], 	[5, 109], 	[6, 13],
	[6, 36], 	[6, 59], 	[6, 74], 	[6, 95],
	[6, 111], 	[6, 127], 	[6, 141], 	[6, 151],
	[7, 1], 	[7, 31], 	[7, 47], 	[7, 65],
	[7, 88], 	[7, 117], 	[7, 142], 	[7, 156],
	[7, 171], 	[7, 189], 	[8, 1], 	[8, 22],
	[8, 41], 	[8, 61], 	[9, 1], 	[9, 19],
	[9, 34], 	[9, 46], 	[9, 60], 	[9, 75],
	[9, 93], 	[9, 111], 	[9, 122], 	[10, 11],
	[10, 26], 	[10, 53], 	[10, 71], 	[10, 90],
	[11, 6], 	[11, 24], 	[11, 41], 	[11, 61],
	[11, 84], 	[11, 108], 	[12, 7], 	[12, 30],
	[12, 53], 	[12, 77], 	[12, 101], 	[13, 5],
	[13, 19], 	[13, 35], 	[14, 10], 	[14, 28],
	[15, 1], 	[15, 50], 	[16, 1], 	[16, 30],
	[16, 51], 	[16, 75], 	[16, 90], 	[16, 111],
	[17, 1], 	[17, 23], 	[17, 50], 	[17, 70],
	[17, 99], 	[18, 17], 	[18, 32], 	[18, 51],
	[18, 75], 	[18, 99], 	[19, 22], 	[19, 59],
	[20, 1], 	[20, 55], 	[20, 83], 	[20, 111],
	[21, 1], 	[21, 29], 	[21, 51], 	[21, 83],
	[22, 1], 	[22, 19], 	[22, 38], 	[22, 60],
	[23, 1], 	[23, 36], 	[23, 75], 	[24, 1],
	[24, 21], 	[24, 35], 	[24, 53], 	[25, 1],
	[25, 21], 	[25, 53], 	[26, 1], 	[26, 52],
	[26, 111], 	[26, 181], 	[27, 1], 	[27, 27],
	[27, 56], 	[27, 82], 	[28, 12], 	[28, 29],
	[28, 51], 	[28, 76], 	[29, 1], 	[29, 26],
	[29, 46], 	[30, 1], 	[30, 31], 	[30, 54],
	[31, 22], 	[32, 11], 	[33, 1], 	[33, 18],
	[33, 31], 	[33, 51], 	[33, 60], 	[34, 10],
	[34, 24], 	[34, 46], 	[35, 15], 	[35, 41],
	[36, 28], 	[36, 60], 	[37, 22], 	[37, 83],
	[37, 145], 	[38, 21], 	[38, 52], 	[39, 8],
	[39, 32], 	[39, 53], 	[40, 1], 	[40, 21],
	[40, 41], 	[40, 66], 	[41, 9], 	[41, 25],
	[41, 47], 	[42, 13], 	[42, 27], 	[42, 51],
	[43, 24], 	[43, 57], 	[44, 17], 	[45, 12],
	[46, 1], 	[46, 21], 	[47, 10], 	[47, 33],
	[48, 18], 	[49, 1], 	[49, 14], 	[50, 27],
	[51, 31], 	[52, 24], 	[53, 26], 	[54, 9],
	[55, 1], 	[56, 1], 	[56, 75], 	[57, 16],
	[58, 1], 	[58, 14], 	[59, 11], 	[60, 7],
	[62, 1], 	[63, 4], 	[65, 1], 	[66, 1],
	[67, 1], 	[68, 1], 	[69, 1], 	[70, 19],
	[72, 1], 	[73, 20], 	[75, 1], 	[76, 19],
	[78, 1], 	[80, 1], 	[82, 1], 	[84, 1],
	[87, 1], 	[90, 1], 	[94, 1], 	[100, 9],
	[115, 1] 
];

//------------------ Manzil Data ---------------------

QuranData.Manzil = [
	// [sura, aya]
	[],	
	[1, 1], 	[5, 1], 	[10, 1], 	[17, 1],
	[26, 1], 	[37, 1], 	[50, 1]
];


//------------------ Ruku Data ---------------------

QuranData.Ruku = [
	// [sura, aya]
	[],	
	[1, 1], 	[2, 1], 	[2, 8], 	[2, 21], 	[2, 30],
	[2, 40], 	[2, 47], 	[2, 60], 	[2, 62], 	[2, 72],
	[2, 83], 	[2, 87], 	[2, 97], 	[2, 104], 	[2, 113],
	[2, 122], 	[2, 130], 	[2, 142], 	[2, 148], 	[2, 153],
	[2, 164], 	[2, 168], 	[2, 177], 	[2, 183], 	[2, 189],
	[2, 197], 	[2, 211], 	[2, 217], 	[2, 222], 	[2, 229],
	[2, 232], 	[2, 236], 	[2, 243], 	[2, 249], 	[2, 254],
	[2, 258], 	[2, 261], 	[2, 267], 	[2, 274], 	[2, 282],
	[2, 284], 	[3, 1], 	[3, 10], 	[3, 21], 	[3, 31],
	[3, 42], 	[3, 55], 	[3, 64], 	[3, 72], 	[3, 81],
	[3, 92], 	[3, 102], 	[3, 110], 	[3, 121], 	[3, 130],
	[3, 144], 	[3, 149], 	[3, 156], 	[3, 172], 	[3, 181],
	[3, 190], 	[4, 1], 	[4, 11], 	[4, 15], 	[4, 23],
	[4, 26], 	[4, 34], 	[4, 43], 	[4, 51], 	[4, 60],
	[4, 71], 	[4, 77], 	[4, 88], 	[4, 92], 	[4, 97],
	[4, 101], 	[4, 105], 	[4, 113], 	[4, 116], 	[4, 127],
	[4, 135], 	[4, 142], 	[4, 153], 	[4, 163], 	[4, 172],
	[5, 1], 	[5, 6], 	[5, 12], 	[5, 20], 	[5, 27],
	[5, 35], 	[5, 44], 	[5, 51], 	[5, 57], 	[5, 67],
	[5, 78], 	[5, 87], 	[5, 94], 	[5, 101], 	[5, 109],
	[5, 116], 	[6, 1], 	[6, 11], 	[6, 21], 	[6, 31],
	[6, 42], 	[6, 51], 	[6, 56], 	[6, 61], 	[6, 71],
	[6, 83], 	[6, 91], 	[6, 95], 	[6, 101], 	[6, 111],
	[6, 122], 	[6, 130], 	[6, 141], 	[6, 145], 	[6, 151],
	[6, 155], 	[7, 1], 	[7, 11], 	[7, 26], 	[7, 32],
	[7, 40], 	[7, 48], 	[7, 54], 	[7, 59], 	[7, 65],
	[7, 73], 	[7, 85], 	[7, 94], 	[7, 100], 	[7, 109],
	[7, 127], 	[7, 130], 	[7, 142], 	[7, 148], 	[7, 152],
	[7, 158], 	[7, 163], 	[7, 172], 	[7, 182], 	[7, 189],
	[8, 1], 	[8, 11], 	[8, 20], 	[8, 29], 	[8, 38],
	[8, 45], 	[8, 49], 	[8, 59], 	[8, 65], 	[8, 70],
	[9, 1], 	[9, 7], 	[9, 17], 	[9, 25], 	[9, 30],
	[9, 38], 	[9, 43], 	[9, 60], 	[9, 67], 	[9, 73],
	[9, 81], 	[9, 90], 	[9, 100], 	[9, 111], 	[9, 119],
	[9, 123], 	[10, 1], 	[10, 11], 	[10, 21], 	[10, 31],
	[10, 41], 	[10, 54], 	[10, 61], 	[10, 71], 	[10, 83],
	[10, 93], 	[10, 104], 	[11, 1], 	[11, 9], 	[11, 25],
	[11, 36], 	[11, 50], 	[11, 61], 	[11, 69], 	[11, 84],
	[11, 96], 	[11, 110], 	[12, 1], 	[12, 7], 	[12, 21],
	[12, 30], 	[12, 36], 	[12, 43], 	[12, 50], 	[12, 58],
	[12, 69], 	[12, 80], 	[12, 94], 	[12, 105], 	[13, 1],
	[13, 8], 	[13, 19], 	[13, 27], 	[13, 32], 	[13, 38],
	[14, 1], 	[14, 7], 	[14, 13], 	[14, 22], 	[14, 28],
	[14, 35], 	[14, 42], 	[15, 1], 	[15, 16], 	[15, 26],
	[15, 45], 	[15, 61], 	[15, 80], 	[16, 1], 	[16, 10],
	[16, 22], 	[16, 26], 	[16, 35], 	[16, 41], 	[16, 51],
	[16, 61], 	[16, 66], 	[16, 71], 	[16, 77], 	[16, 84],
	[16, 90], 	[16, 101], 	[16, 111], 	[16, 120], 	[17, 1],
	[17, 11], 	[17, 23], 	[17, 31], 	[17, 41], 	[17, 53],
	[17, 61], 	[17, 71], 	[17, 78], 	[17, 85], 	[17, 94],
	[17, 101], 	[18, 1], 	[18, 13], 	[18, 18], 	[18, 23],
	[18, 32], 	[18, 45], 	[18, 50], 	[18, 54], 	[18, 60],
	[18, 71], 	[18, 83], 	[18, 102], 	[19, 1], 	[19, 16],
	[19, 41], 	[19, 51], 	[19, 66], 	[19, 83], 	[20, 1],
	[20, 25], 	[20, 55], 	[20, 77], 	[20, 90], 	[20, 105],
	[20, 116], 	[20, 129], 	[21, 1], 	[21, 11], 	[21, 30],
	[21, 42], 	[21, 51], 	[21, 76], 	[21, 94], 	[22, 1],
	[22, 11], 	[22, 23], 	[22, 26], 	[22, 34], 	[22, 39],
	[22, 49], 	[22, 58], 	[22, 65], 	[22, 73], 	[23, 1],
	[23, 23], 	[23, 33], 	[23, 51], 	[23, 78], 	[23, 93],
	[24, 1], 	[24, 11], 	[24, 21], 	[24, 27], 	[24, 35],
	[24, 41], 	[24, 51], 	[24, 58], 	[24, 62], 	[25, 1],
	[25, 10], 	[25, 21], 	[25, 35], 	[25, 45], 	[25, 61],
	[26, 1], 	[26, 10], 	[26, 34], 	[26, 53], 	[26, 70],
	[26, 105], 	[26, 123], 	[26, 141], 	[26, 160], 	[26, 176],
	[26, 192], 	[27, 1], 	[27, 15], 	[27, 32], 	[27, 45],
	[27, 59], 	[27, 67], 	[27, 83], 	[28, 1], 	[28, 14],
	[28, 22], 	[28, 29], 	[28, 43], 	[28, 51], 	[28, 61],
	[28, 76], 	[29, 1], 	[29, 14], 	[29, 23], 	[29, 31],
	[29, 45], 	[29, 52], 	[29, 64], 	[30, 1], 	[30, 11],
	[30, 20], 	[30, 28], 	[30, 41], 	[30, 54], 	[31, 1],
	[31, 12], 	[31, 20], 	[32, 1], 	[32, 12], 	[32, 23],
	[33, 1], 	[33, 9], 	[33, 21], 	[33, 28], 	[33, 35],
	[33, 41], 	[33, 53], 	[33, 59], 	[33, 69], 	[34, 1],
	[34, 10], 	[34, 22], 	[34, 31], 	[34, 37], 	[34, 46],
	[35, 1], 	[35, 8], 	[35, 15], 	[35, 27], 	[35, 38],
	[36, 1], 	[36, 13], 	[36, 33], 	[36, 51], 	[36, 68],
	[37, 1], 	[37, 22], 	[37, 75], 	[37, 114], 	[37, 139],
	[38, 1], 	[38, 15], 	[38, 27], 	[38, 41], 	[38, 65],
	[39, 1], 	[39, 10], 	[39, 22], 	[39, 32], 	[39, 42],
	[39, 53], 	[39, 64], 	[39, 71], 	[40, 1], 	[40, 10],
	[40, 21], 	[40, 28], 	[40, 38], 	[40, 51], 	[40, 61],
	[40, 69], 	[40, 79], 	[41, 1], 	[41, 9], 	[41, 19],
	[41, 26], 	[41, 33], 	[41, 45], 	[42, 1], 	[42, 10],
	[42, 20], 	[42, 30], 	[42, 44], 	[43, 1], 	[43, 16],
	[43, 26], 	[43, 36], 	[43, 46], 	[43, 57], 	[43, 68],
	[44, 1], 	[44, 30], 	[44, 43], 	[45, 1], 	[45, 12],
	[45, 22], 	[45, 27], 	[46, 1], 	[46, 11], 	[46, 21],
	[46, 27], 	[47, 1], 	[47, 12], 	[47, 20], 	[47, 29],
	[48, 1], 	[48, 11], 	[48, 18], 	[48, 27], 	[49, 1],
	[49, 11], 	[50, 1], 	[50, 16], 	[50, 30], 	[51, 1],
	[51, 24], 	[51, 47], 	[52, 1], 	[52, 29], 	[53, 1],
	[53, 26], 	[53, 33], 	[54, 1], 	[54, 23], 	[54, 41],
	[55, 1], 	[55, 26], 	[55, 46], 	[56, 1], 	[56, 39],
	[56, 75], 	[57, 1], 	[57, 11], 	[57, 20], 	[57, 26],
	[58, 1], 	[58, 7], 	[58, 14], 	[59, 1], 	[59, 11],
	[59, 18], 	[60, 1], 	[60, 7], 	[61, 1], 	[61, 10],
	[62, 1], 	[62, 9], 	[63, 1], 	[63, 9], 	[64, 1],
	[64, 11], 	[65, 1], 	[65, 8], 	[66, 1], 	[66, 8],
	[67, 1], 	[67, 15], 	[68, 1], 	[68, 34], 	[69, 1],
	[69, 38], 	[70, 1], 	[70, 36], 	[71, 1], 	[71, 21],
	[72, 1], 	[72, 20], 	[73, 1], 	[73, 20], 	[74, 1],
	[74, 32], 	[75, 1], 	[75, 31], 	[76, 1], 	[76, 23],
	[77, 1], 	[77, 41], 	[78, 1], 	[78, 31], 	[79, 1],
	[79, 27], 	[80, 1], 	[81, 1], 	[82, 1], 	[83, 1],
	[84, 1], 	[85, 1], 	[86, 1], 	[87, 1], 	[88, 1],
	[89, 1], 	[90, 1], 	[91, 1], 	[92, 1], 	[93, 1],
	[94, 1], 	[95, 1], 	[96, 1], 	[97, 1], 	[98, 1],
	[99, 1], 	[100, 1], 	[101, 1], 	[102, 1], 	[103, 1],
	[104, 1], 	[105, 1], 	[106, 1], 	[107, 1], 	[108, 1],
	[109, 1], 	[110, 1], 	[111, 1], 	[112, 1], 	[113, 1],
	[114, 1]
];


//------------------ Page Data ---------------------

QuranData.Page = [
	// [sura, aya]
	[],	
	[1, 1], 	[2, 1], 	[2, 6], 	[2, 17], 	[2, 25],
	[2, 30], 	[2, 38], 	[2, 49], 	[2, 58], 	[2, 62],
	[2, 70], 	[2, 77], 	[2, 84], 	[2, 89], 	[2, 94],
	[2, 102], 	[2, 106], 	[2, 113], 	[2, 120], 	[2, 127],
	[2, 135], 	[2, 142], 	[2, 146], 	[2, 154], 	[2, 164],
	[2, 170], 	[2, 177], 	[2, 182], 	[2, 187], 	[2, 191],
	[2, 197], 	[2, 203], 	[2, 211], 	[2, 216], 	[2, 220],
	[2, 225], 	[2, 231], 	[2, 234], 	[2, 238], 	[2, 246],
	[2, 249], 	[2, 253], 	[2, 257], 	[2, 260], 	[2, 265],
	[2, 270], 	[2, 275], 	[2, 282], 	[2, 283], 	[3, 1],
	[3, 10], 	[3, 16], 	[3, 23], 	[3, 30], 	[3, 38],
	[3, 46], 	[3, 53], 	[3, 62], 	[3, 71], 	[3, 78],
	[3, 84], 	[3, 92], 	[3, 101], 	[3, 109], 	[3, 116],
	[3, 122], 	[3, 133], 	[3, 141], 	[3, 149], 	[3, 154],
	[3, 158], 	[3, 166], 	[3, 174], 	[3, 181], 	[3, 187],
	[3, 195], 	[4, 1], 	[4, 7], 	[4, 12], 	[4, 15],
	[4, 20], 	[4, 24], 	[4, 27], 	[4, 34], 	[4, 38],
	[4, 45], 	[4, 52], 	[4, 60], 	[4, 66], 	[4, 75],
	[4, 80], 	[4, 87], 	[4, 92], 	[4, 95], 	[4, 102],
	[4, 106], 	[4, 114], 	[4, 122], 	[4, 128], 	[4, 135],
	[4, 141], 	[4, 148], 	[4, 155], 	[4, 163], 	[4, 171],
	[4, 176], 	[5, 3], 	[5, 6], 	[5, 10], 	[5, 14],
	[5, 18], 	[5, 24], 	[5, 32], 	[5, 37], 	[5, 42],
	[5, 46], 	[5, 51], 	[5, 58], 	[5, 65], 	[5, 71],
	[5, 77], 	[5, 83], 	[5, 90], 	[5, 96], 	[5, 104],
	[5, 109], 	[5, 114], 	[6, 1], 	[6, 9], 	[6, 19],
	[6, 28], 	[6, 36], 	[6, 45], 	[6, 53], 	[6, 60],
	[6, 69], 	[6, 74], 	[6, 82], 	[6, 91], 	[6, 95],
	[6, 102], 	[6, 111], 	[6, 119], 	[6, 125], 	[6, 132],
	[6, 138], 	[6, 143], 	[6, 147], 	[6, 152], 	[6, 158],
	[7, 1], 	[7, 12], 	[7, 23], 	[7, 31], 	[7, 38],
	[7, 44], 	[7, 52], 	[7, 58], 	[7, 68], 	[7, 74],
	[7, 82], 	[7, 88], 	[7, 96], 	[7, 105], 	[7, 121],
	[7, 131], 	[7, 138], 	[7, 144], 	[7, 150], 	[7, 156],
	[7, 160], 	[7, 164], 	[7, 171], 	[7, 179], 	[7, 188],
	[7, 196], 	[8, 1], 	[8, 9], 	[8, 17], 	[8, 26],
	[8, 34], 	[8, 41], 	[8, 46], 	[8, 53], 	[8, 62],
	[8, 70], 	[9, 1], 	[9, 7], 	[9, 14], 	[9, 21],
	[9, 27], 	[9, 32], 	[9, 37], 	[9, 41], 	[9, 48],
	[9, 55], 	[9, 62], 	[9, 69], 	[9, 73], 	[9, 80],
	[9, 87], 	[9, 94], 	[9, 100], 	[9, 107], 	[9, 112],
	[9, 118], 	[9, 123], 	[10, 1], 	[10, 7], 	[10, 15],
	[10, 21], 	[10, 26], 	[10, 34], 	[10, 43], 	[10, 54],
	[10, 62], 	[10, 71], 	[10, 79], 	[10, 89], 	[10, 98],
	[10, 107], 	[11, 6], 	[11, 13], 	[11, 20], 	[11, 29],
	[11, 38], 	[11, 46], 	[11, 54], 	[11, 63], 	[11, 72],
	[11, 82], 	[11, 89], 	[11, 98], 	[11, 109], 	[11, 118],
	[12, 5], 	[12, 15], 	[12, 23], 	[12, 31], 	[12, 38],
	[12, 44], 	[12, 53], 	[12, 64], 	[12, 70], 	[12, 79],
	[12, 87], 	[12, 96], 	[12, 104], 	[13, 1], 	[13, 6],
	[13, 14], 	[13, 19], 	[13, 29], 	[13, 35], 	[13, 43],
	[14, 6], 	[14, 11], 	[14, 19], 	[14, 25], 	[14, 34],
	[14, 43], 	[15, 1], 	[15, 16], 	[15, 32], 	[15, 52],
	[15, 71], 	[15, 91], 	[16, 7], 	[16, 15], 	[16, 27],
	[16, 35], 	[16, 43], 	[16, 55], 	[16, 65], 	[16, 73],
	[16, 80], 	[16, 88], 	[16, 94], 	[16, 103], 	[16, 111],
	[16, 119], 	[17, 1], 	[17, 8], 	[17, 18], 	[17, 28],
	[17, 39], 	[17, 50], 	[17, 59], 	[17, 67], 	[17, 76],
	[17, 87], 	[17, 97], 	[17, 105], 	[18, 5], 	[18, 16],
	[18, 21], 	[18, 28], 	[18, 35], 	[18, 46], 	[18, 54],
	[18, 62], 	[18, 75], 	[18, 84], 	[18, 98], 	[19, 1],
	[19, 12], 	[19, 26], 	[19, 39], 	[19, 52], 	[19, 65],
	[19, 77], 	[19, 96], 	[20, 13], 	[20, 38], 	[20, 52],
	[20, 65], 	[20, 77], 	[20, 88], 	[20, 99], 	[20, 114],
	[20, 126], 	[21, 1], 	[21, 11], 	[21, 25], 	[21, 36],
	[21, 45], 	[21, 58], 	[21, 73], 	[21, 82], 	[21, 91],
	[21, 102], 	[22, 1], 	[22, 6], 	[22, 16], 	[22, 24],
	[22, 31], 	[22, 39], 	[22, 47], 	[22, 56], 	[22, 65],
	[22, 73], 	[23, 1], 	[23, 18], 	[23, 28], 	[23, 43],
	[23, 60], 	[23, 75], 	[23, 90], 	[23, 105], 	[24, 1],
	[24, 11], 	[24, 21], 	[24, 28], 	[24, 32], 	[24, 37],
	[24, 44], 	[24, 54], 	[24, 59], 	[24, 62], 	[25, 3],
	[25, 12], 	[25, 21], 	[25, 33], 	[25, 44], 	[25, 56],
	[25, 68], 	[26, 1], 	[26, 20], 	[26, 40], 	[26, 61],
	[26, 84], 	[26, 112], 	[26, 137], 	[26, 160], 	[26, 184],
	[26, 207], 	[27, 1], 	[27, 14], 	[27, 23], 	[27, 36],
	[27, 45], 	[27, 56], 	[27, 64], 	[27, 77], 	[27, 89],
	[28, 6], 	[28, 14], 	[28, 22], 	[28, 29], 	[28, 36],
	[28, 44], 	[28, 51], 	[28, 60], 	[28, 71], 	[28, 78],
	[28, 85], 	[29, 7], 	[29, 15], 	[29, 24], 	[29, 31],
	[29, 39], 	[29, 46], 	[29, 53], 	[29, 64], 	[30, 6],
	[30, 16], 	[30, 25], 	[30, 33], 	[30, 42], 	[30, 51],
	[31, 1], 	[31, 12], 	[31, 20], 	[31, 29], 	[32, 1],
	[32, 12], 	[32, 21], 	[33, 1], 	[33, 7], 	[33, 16],
	[33, 23], 	[33, 31], 	[33, 36], 	[33, 44], 	[33, 51],
	[33, 55], 	[33, 63], 	[34, 1], 	[34, 8], 	[34, 15],
	[34, 23], 	[34, 32], 	[34, 40], 	[34, 49], 	[35, 4],
	[35, 12], 	[35, 19], 	[35, 31], 	[35, 39], 	[35, 45],
	[36, 13], 	[36, 28], 	[36, 41], 	[36, 55], 	[36, 71],
	[37, 1], 	[37, 25], 	[37, 52], 	[37, 77], 	[37, 103],
	[37, 127], 	[37, 154], 	[38, 1], 	[38, 17], 	[38, 27],
	[38, 43], 	[38, 62], 	[38, 84], 	[39, 6], 	[39, 11],
	[39, 22], 	[39, 32], 	[39, 41], 	[39, 48], 	[39, 57],
	[39, 68], 	[39, 75], 	[40, 8], 	[40, 17], 	[40, 26],
	[40, 34], 	[40, 41], 	[40, 50], 	[40, 59], 	[40, 67],
	[40, 78], 	[41, 1], 	[41, 12], 	[41, 21], 	[41, 30],
	[41, 39], 	[41, 47], 	[42, 1], 	[42, 11], 	[42, 16],
	[42, 23], 	[42, 32], 	[42, 45], 	[42, 52], 	[43, 11],
	[43, 23], 	[43, 34], 	[43, 48], 	[43, 61], 	[43, 74],
	[44, 1], 	[44, 19], 	[44, 40], 	[45, 1], 	[45, 14],
	[45, 23], 	[45, 33], 	[46, 6], 	[46, 15], 	[46, 21],
	[46, 29], 	[47, 1], 	[47, 12], 	[47, 20], 	[47, 30],
	[48, 1], 	[48, 10], 	[48, 16], 	[48, 24], 	[48, 29],
	[49, 5], 	[49, 12], 	[50, 1], 	[50, 16], 	[50, 36],
	[51, 7], 	[51, 31], 	[51, 52], 	[52, 15], 	[52, 32],
	[53, 1], 	[53, 27], 	[53, 45], 	[54, 7], 	[54, 28],
	[54, 50], 	[55, 17], 	[55, 41], 	[55, 68], 	[56, 17],
	[56, 51], 	[56, 77], 	[57, 4], 	[57, 12], 	[57, 19],
	[57, 25], 	[58, 1], 	[58, 7], 	[58, 12], 	[58, 22],
	[59, 4], 	[59, 10], 	[59, 17], 	[60, 1], 	[60, 6],
	[60, 12], 	[61, 6], 	[62, 1], 	[62, 9], 	[63, 5],
	[64, 1], 	[64, 10], 	[65, 1], 	[65, 6], 	[66, 1],
	[66, 8], 	[67, 1], 	[67, 13], 	[67, 27], 	[68, 16],
	[68, 43], 	[69, 9], 	[69, 35], 	[70, 11], 	[70, 40],
	[71, 11], 	[72, 1], 	[72, 14], 	[73, 1], 	[73, 20],
	[74, 18], 	[74, 48], 	[75, 20], 	[76, 6], 	[76, 26],
	[77, 20], 	[78, 1], 	[78, 31], 	[79, 16], 	[80, 1],
	[81, 1], 	[82, 1], 	[83, 7], 	[83, 35], 	[85, 1],
	[86, 1], 	[87, 16], 	[89, 1], 	[89, 24], 	[91, 1],
	[92, 15], 	[95, 1], 	[97, 1], 	[98, 8], 	[100, 10],
	[103, 1], 	[106, 1], 	[109, 1], 	[112, 1], 	[115, 1]
];


//------------------ Sajda Data ---------------------

QuranData.Sajda = [
	// [sura, aya, type]
	[],
	[7, 206, 'recommended'],
	[13, 15, 'recommended'],
	[16, 50, 'recommended'],
	[17, 109, 'recommended'],
	[19, 58, 'recommended'],
	[22, 18, 'recommended'],
	[22, 77, 'recommended'],
	[25, 60, 'recommended'],
	[27, 26, 'recommended'],
	[32, 15, 'obligatory'],
	[38, 24, 'recommended'],
	[41, 38, 'obligatory'],
	[53, 62, 'obligatory'],
	[84, 21, 'recommended'],
	[96, 19, 'obligatory'],
];

///////////////////// BUCK STUFF ///////////////////////////
var BuckToBare = function(str){ if(!str) return;
	str = str.replace(/[{`><]/g, 'A').replace(/[\&]/g, 'w').replace(/[}]/g, 'y').replace( /[\FNK#aeiou~\^]/g, '');
	return str;
}

var isArabic = function (word){ if(!word) return false; 
	var regex = /^[\u0600-\u06ff]*$/, result=null;
	$.each(word.split(''), function(a, token){
		if(token){token = $.trim(token);
			if(token != "-") //lets ignore hyphen
				result == null ? result = regex.test( token ) : result = result && regex.test(token);
		}
	});
	return result;
	//var arabic = ArToEn(word).trim();
	//return ('' != arabic && word.trim().length == arabic.length );
}

var isEnglish = function (word){ if(!word) return; var eng = EnToAr(word).trim();
	return ('' != eng && word.trim().length == eng.length );
}

var EnToAr = function(word){
	if(!word) return null;
	initializeMapper();
	var ar = '', l, letter, found=false;
	try{
		var wordArr = word.split(''); //split into letters.	//lookup from english to arabic letter. and return it.
		for(l=0; l<wordArr.length; ++l){
			letter = wordArr[l]; found = false;
			for(n=1; n<_buckArr.length; ++n){
				if(letter == _buckArr[n]){
					ar += _charsArr[n]; found=true;
					break;
				}
			}
			if(!found)  ar += ''; //letter; //' ??'+letter+'?? ';
		}
	}catch(ex){
		debugger;
		ar = '-err: ' + ex + ex.message + ex.lineno;
	}
	return ar;
}

var ArToEn = function(word){
	if(!word) return null;
	initializeMapper();
	var ar = '', l, letter, found=false;
	try{
		var wordArr = word.split(''); //split into letters.	//lookup from english to arabic letter. and return it.
		for(l=0; l<wordArr.length; ++l){
			letter = wordArr[l]; found = false;
			for(n=1; n<_charsArr.length; ++n){
				if(letter == _charsArr[n]){
					ar += _buckArr[n]; found=true;
					break;
				}
			}
			if(!found){  ar += '?'; _log('No mapping found:\t' + letter + ''); 
			}
		}
	}catch(ex){
		debugger;
		ar = '-err: ' + ex + ex.message + ex.lineno;
	}
	return ar;
}

var _charsArr, _buckArr, bInitialized = false;
var initializeMapper = function(){
	if(bInitialized) return;
	var qBare = null, qBuck = null;		
	var stopletters = "ۚۖۛۗۙ";
	var chars='آ ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي آ';
	var buck = 'A A b t v j H x d * r z s $ S D T Z E g f q k l m n h w y A';
	var buckArr, charsArr;
	var ext = new Array();
	var map = { };
	charsArr = chars.split(' ');
	buckArr  = buck.split(' ');
	//mISSING CHARACTERS:		// أ إ ئ ء ة ؤ
	charsArr.push( 'ى' ); buckArr.push( 'Y' );
	charsArr.push( 'أ' ); buckArr.push( '>' );
	charsArr.push( 'إ' ); buckArr.push( '<' );	//charsArr.push( ' ' ); buckArr.push( ' ' ); //charsArr.push( '' ); buckArr.push( '' );
	charsArr.push( 'ئ' ); buckArr.push( '}' );
	charsArr.push( 'ء' ); buckArr.push( '\'' ); //buckArr.push( '\'' );
	//charsArr.push( 'ة' ); buckArr.push( 'P' );
	charsArr.push( 'ؤ' ); buckArr.push( '&' );
	//missing characters for harakath.
	charsArr.push( '\u0652' ); buckArr.push( 'o' );
	charsArr.push( '\u064e' ); buckArr.push( 'a' );
	charsArr.push( '\u0650' ); buckArr.push( 'i' );
	charsArr.push( '\u064f' ); buckArr.push( 'u' );
	charsArr.push( '\u064b' ); buckArr.push( 'F' );
	charsArr.push( '\u064d' ); buckArr.push( 'K' );
	charsArr.push( '\u064c' ); buckArr.push( 'N' );
	charsArr.push( '\u0626' ); buckArr.push( '}' );
	charsArr.push( '\u0640' ); buckArr.push( '_' );
	charsArr.push( '\u0651' ); buckArr.push( '~' );
	charsArr.push( '\u0653' ); buckArr.push( '^' );
	charsArr.push( '\u0654' ); buckArr.push( '#' );
	charsArr.push( '\u0671' ); buckArr.push( '{' );
	charsArr.push( '\u0670' ); buckArr.push( '`' );
	charsArr.push( '\u06e5' ); buckArr.push( ',' );
	charsArr.push( '\u06e6' ); buckArr.push( '.' );
	charsArr.push( 'ة' ); buckArr.push( 'p' );
	charsArr.push( '\u06df' ); buckArr.push( '@' );
	charsArr.push( '\u06e2' ); buckArr.push( '[' );
	charsArr.push( '\u06ed' ); buckArr.push( ']' );
	charsArr.push( '\u0621' ); buckArr.push( '\'' );
	charsArr.push( '\u06DC' ); buckArr.push( ':' );
	charsArr.push( '\u06E0' ); buckArr.push( '\"' );
	charsArr.push( ' ' ); buckArr.push( ' ' );
	charsArr.push( ';' ); buckArr.push( ';' );
	charsArr.push( '\n' ); buckArr.push( '\n' );
	_charsArr = charsArr; _buckArr = buckArr;
	bInitialized = true;
}		
initializeMapper();
////////////////// END BUCK STUFF /////////////////////////

function toArabDigits(num) {
  var anum = '';
  var arabdigits = [ '٠', '١', '٢', '٣', '٤', '٥', '٦', '٧',  '٨','٩' ];
  num = Number(num);
  while (num) {
    anum += arabdigits[num%10]; 
    num = Math.floor(num/10,0);
  }
  return anum;
}


// THIS NEEDED FOR IE browsers, since Array.forEach is missing: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fn, scope) {
        'use strict';
        var i, len;
        for (i = 0, len = this.length; i < len; ++i) {
            if (i in this) {
                fn.call(scope, this[i], i, this);
            }
        }
    };
}

if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {
 
    var T, A, k;
 
    if (this == null) {
      throw new TypeError(" this is null or not defined");
    }
 
    // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
    var O = Object(this);
 
    // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;
 
    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
 
    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }
 
    // 6. Let A be a new array created as if by the expression new Array(len) where Array is
    // the standard built-in constructor with that name and len is the value of len.
    A = new Array(len);
 
    // 7. Let k be 0
    k = 0;
 
    // 8. Repeat, while k < len
    while(k < len) {
 
      var kValue, mappedValue;
 
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {
 
        // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
        kValue = O[ k ];
 
        // ii. Let mappedValue be the result of calling the Call internal method of callback
        // with T as the this value and argument list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);
 
        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor {Value: mappedValue, : true, Enumerable: true, Configurable: true},
        // and false.
 
        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, Pk, { value: mappedValue, writable: true, enumerable: true, configurable: true });
 
        // For best browser support, use the following:
        A[ k ] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }
 
    // 9. return A
    return A;
  };      
}

/**
 *
 * Return a custom rendering function for a given selector
 *
 **/
// function getRenderFunc(params) { 
//   var elem = params.elem;
//   var selector = params.selector;
//   var trans = params.trans;
//   var verse = params.verse|0;
//   var randnum = Math.random()*1000000|0;
//   var func = 'quran' + randnum;

//   window[func] = function(x) {
//     // late resolution of elem 
//     if (!elem) {
//       elem = document.querySelector(params.selector);
//     }
//     if (x.entry && x.entry.content) {
//       elem.innerHTML = x.entry.content.$t + ' ﴿' + toArabDigits(verse) + '﴾ ';
//     } else {
//       elem.innerHTML = x.table.rows.map(function(row,idx) {
//         return row.c[0].v; // + '<nobr> ﴿' + toArabDigits(verse+idx) + '﴾ </nobr>';
//       }).join('');
//       if (trans) {
//         document.querySelector(trans).innerHTML = x.table.rows.map(function(row,idx) {
//           return row.c[1].v;
//         }).join(' ');
//       }
//     }
//   }
//   return func;
// }

// function getDataSource(params) {
//   var vnum = 0;
//   var chapter = params.chapter;
//   var count = params.count|0;
//   var verse = params.verse|0;
//   var chapter = params.chapter|0;
//   var trans = params.trans;
//   var src = "https://spreadsheets.google.com/";
//   var func = getRenderFunc(params);
//   var end;

//   for (var i = 1; i < chapter; i++) {
//     vnum += QuranData.Sura[i][1];
//   }
//   vnum += verse + 1; // compensate for header row
//   if (count || trans) {
//     end = trans?'D':'C';
//     src+="a/zaidi.me/tq?key=0Aps7j0tW_eq0dFUzN3djMC1IUUYyMHV4VFhqRUhJSmc&range=C" + vnum + "%3a"+end+(vnum+count)+"&tqx=responseHandler:" + func;
//   } else {
//     src+="feeds/cells/0Aps7j0tW_eq0dFUzN3djMC1IUUYyMHV4VFhqRUhJSmc/od6/public/values/R" + vnum + "C3?alt=json-in-script&callback=" + func ;
//   }
//   return src;
// }

function buckescape(buck){
	return buck.replace(/\</g, '&lt;');
}

function getDataSource2(params) { //Ex: //api.globalquran.com/surah/114/quran-simple?beta&jsoncallback=
  var url = "//api.globalquran.com/ayah/$SURA:$AYAH/$QURANTYPE?beta&format=jsonp&callback=", DEFAULT='quran-simple', TRANS = 'en.sahih', WORD2WORD = 'quran-wordbyword', CORPUS = 'quran-corpus-qd';
  var vnum = 0;
  var chapter = params.chapter;
  var count = params.count|0;
  var verse = params.verse|0;
  var chapter = params.chapter|0;
  var trans = params.trans;
  var qurantype = params.qurantype;
  params.qurantype = qurantype = ( qurantype ? (qurantype == 'grammar' ? CORPUS : (qurantype == 'wordbyword' ? WORD2WORD : DEFAULT) ) : DEFAULT );
  qurantype = trans ? qurantype +'|'+ TRANS : qurantype;
  var src = url.replace(/\$SURA/g, chapter).replace(/\$AYAH/g, verse).replace(/\$QURANTYPE/g, qurantype);
  var func = getRenderFunc2(params);
  var end;
  src += func;
  return src;
}

function getRenderFunc2(params) { 
  var DEFAULT='quran-simple', TRANS = 'en.sahih', WORD2WORD = 'quran-wordbyword', CORPUS = 'quran-corpus-qd';
  var elem = params.elem;
  var selector = params.selector;
  var trans = params.trans;
  var qurantype = params.qurantype;
  var verse = params.verse|0;
  var randnum = Math.random()*1000000|0;
  var func = 'quran' + randnum;

  window[func] = function(x) {var html = '', htmlEn = '';
    // late resolution of elem 
    if (!elem) {
      elem = document.querySelector(params.selector);
    }
    if (x.entry && x.entry.content) {
      elem.innerHTML = x.entry.content.$t + ' ﴿' + toArabDigits(verse) + '﴾ ';
    } else {
	  if( x && x.quran && x.quran[qurantype] ){ html = ''; htmlEn = '';
	   for(var item in x.quran[qurantype]){
		html += renderVerse( x.quran[qurantype][ item ].verse, params ) + '<nobr> ﴿' + toArabDigits(verse).split("").reverse().join("") + '﴾ </nobr>';
		if(trans){ htmlEn += x.quran[TRANS][ item ].verse + '<nobr> (' + x.quran[TRANS][item].surah +':'+ x.quran[TRANS][item].ayah + ') </nobr>'; }
	   }
	   elem.innerHTML = html; 
	   if(trans){ params.elemTrans.innerHTML = htmlEn; }
	  }
    }
  }
  return func;
}


function renderVerse(verse, params){
	if(verse.indexOf('⚓') != -1 || verse.indexOf('★') != -1 ){//Corpus
		return verse.split('★').map( function(o){
			return o ? '<span class=word><span dir=rtl class=buck>'+ EnToAr(o.split('⚓')[0]) +'</span><span dir=ltr class=en>'+ o.split('⚓')[1] + '</span><span dir=ltr class=corpus>' + buckescape(o.split('⚓')[2]) + '</span><span style="display:none">' + buckescape(o.split('⚓')[0]) + '</span></span>' : '';
		}).join('');
	}
	else if(verse.indexOf('$') != -1){//WordByWord
		return verse.split('$').map( function(o){ 
			return o ? '<span class=word><span dir=rtl class=ar>'+ o.split('|')[0] +'</span><span dir=ltl class=en>'+ o.split('|')[1] + '</span></span>' : '';
		}).join('');
	}
	else{
		if(params.word && parseInt(params.word)){

			var i = parseInt(params.word) - 1; if(i<0) i = 0;
			//var pauseMarks = ["ۖ","م","لا","ج","قلی","صلی","∴"];
			if(i == 11) debugger;
			var words = verse.split(' ');
			var stopletters = "ۚۖۛۗۙ".split('');
			for(var k = 0; k <= i; k++){ //now, account for cases when we have ayah pause marks etc; dont count that in word boundaries.
				if( -1 != stopletters.indexOf( words[k] ) ){ ++i; }
			}
			if(i < words.length){
				words.splice(i, 0, "<span class='highlight'>");
				words.splice(i + 2, 0, "</span>");
				verse = words.join(' ');
			}
		}
		return verse;
	}
}


(function() {
  var scripts = document.getElementsByTagName('script');
  var thisScript = document.currentScript || scripts[scripts.length-1];
  var params = {};
  var s = scripts[0];
  var gs,l;

  [ 'chapter', 'verse', 'count', 'selector', 'trans', 'qurantype', 'word', 'ref' ].forEach(function(k) {
    var p =thisScript.getAttribute(k);
    if (p) {
      params[k] = p;
    }else{
    	if(k == 'trans'){params[k] = true;}
    }
  });
  if(params.ref){//this takes precedence over explicit chapter/verse/word
	  var a = params.ref.split(':');
	  if(a.length == 3){ params.chapter = a[0]; params.verse = a[1]; params.word = a[2]; } 
	  else if(a.length == 2){ params.chapter = a[0]; params.verse = a[1]; params.word = 1; }
  }

  if (!params.selector) {
    l = document.createElement('link');
    l.setAttribute('rel','stylesheet');
    l.setAttribute('type','text/css');
    l.setAttribute('href', thisScript.getAttribute('src').replace('.js','.css'));
    s.parentNode.insertBefore(l,s);
    params.elem = document.createElement('div');
	if(params.trans === true){	params.elemTrans = document.createElement('div');	} //create new div element unless...
	else if(params.trans){ params.elemTrans = document.querySelector(params.trans);} //if an explicit ID given use it
    params.elem.className = 'qarabic qdoublespaced';
	params.elemTrans.className = 'translation';
    //params.elem.style.cssText="direction: rtl; line-height: 2.35em; font-size: 20px; word-spacing: 5px";
    thisScript.parentNode.insertBefore(params.elem,thisScript);
	thisScript.parentNode.insertBefore(params.elemTrans,thisScript);
  }

  gs = document.createElement('script');
  gs.async="true";
  gs.src=getDataSource2(params);
  s.parentNode.insertBefore(gs, s);
}());
