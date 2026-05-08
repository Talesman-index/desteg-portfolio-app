const fs = require('fs');
const files = `
/visuels/ODYSÉÉ/Présentation_.jpg
/visuels/ODYSÉÉ/INVITÉ.jpg
/visuels/ODYSÉÉ/Odyssé.jpg
/visuels/ODYSÉÉ/PARTENAIRES SPONSORS.jpg
/visuels/CAMPAGNE PRÉSIDENTIELLE/ENTRÉÉ-01.jpg
/visuels/CAMPAGNE PRÉSIDENTIELLE/ENTRÉÉ-03.jpg
/visuels/CAMPAGNE PRÉSIDENTIELLE/TOTEM copie-02.jpg
/visuels/CAMPAGNE PRÉSIDENTIELLE/TOTEM copie-03.jpg
/visuels/CAMPAGNE PRÉSIDENTIELLE/TOTEM copie-01.jpg
/visuels/CTG/train_.jpg
/visuels/BARBE À HUILE/LOGO -13.png
/visuels/BARBE À HUILE/LOGO -02.png
/visuels/FREEZE CORLEONE/LE SHE_.jpg
/visuels/FREEZE CORLEONE/Freeze.jpg
/visuels/FREEZE CORLEONE/FREEZE ANNONCE.jpg
/visuels/LA BANQUE ISLAMIQUE/BIG_Plan de travail 1.jpg
/visuels/LA BANQUE ISLAMIQUE/BIG_Plan de travail 1 copie 2.jpg
/visuels/LA BANQUE ISLAMIQUE/BIG_Plan de travail 1 copie.jpg
/visuels/CARREFOUR /VISUEL.jpg
/visuels/CARREFOUR /400cmx300cm.jpg
/visuels/CARREFOUR /102cm x 171 cm_.jpg
/visuels/CARREFOUR /300cmx 400cm.jpg
/visuels/CARREFOUR /400cmx300cm 2.jpg
/visuels/CARREFOUR /Révélation_Plan de travail 1.jpg
/visuels/CARREFOUR /Visuelle 3.jpg
/visuels/CARREFOUR /Chèque Factis_Plan de travail 1.jpg
/visuels/CARREFOUR /Visuelle 2.jpg
/visuels/CARREFOUR /700cm x 150cm.jpg
/visuels/CARREFOUR /MARCHANDISE.jpg
/visuels/CARREFOUR /Visuelle_.jpg
/visuels/CARREFOUR /VISUEL.2 psd.jpg
/visuels/CARREFOUR /Votre super marché.jpg
/visuels/CARREFOUR /Suivez nous.jpg
/visuels/CALENDRIER CNA/Calendrier mural_Plan de travail 1.jpg
/visuels/CALENDRIER CNA/Calendrier mural 2_Plan de travail 1 copie.jpg
/visuels/CALENDRIER CNA/Calendrier mural 2_Plan de travail 1 copie 2.jpg
/visuels/PORT AUTONOME /42cm x 60cm_Plan de travail 1 copie.jpg
/visuels/PORT AUTONOME /42cm x 60cm_Plan de travail 1.jpg
/visuels/PORT AUTONOME /42cm x 60cm_Plan de travail 1 copie 4.jpg
/visuels/PORT AUTONOME /42cm x 60cm_Plan de travail 1 copie 2.jpg
/visuels/PORT AUTONOME /42cm x 60cm_Plan de travail 1 copie 3.jpg
/visuels/INDIGO/PANNEAU DÉROULANT.jpg
/visuels/INDIGO/PANNEAU SUCETTE.jpg
/visuels/INDIGO/Façade Ramadan 3_.jpg
/visuels/INDIGO/SUCETTE.jpg
/visuels/INDIGO/Façade Ramadan_Plan de travail 1 copie 2.jpg
/visuels/INDIGO/DÉROULANT.jpg
/visuels/INDIGO/GRANDE FAÇADE LA RNTRÉE_.jpg
/visuels/MISS GUINNÉE/410x290cm.jpg
/visuels/MISS GUINNÉE/43x26cm.GBGjpg.jpg
/visuels/MISS GUINNÉE/DOS CHAPITEAU 3145X1200 cm.jpg
/visuels/MISS GUINNÉE/43x31cm.jpg
/visuels/MISS GUINNÉE/bache candidates.jpg
/visuels/MISS GUINNÉE/43x26cm.jpg
/visuels/LOGO/Logo Burritos PNG (1).png
/visuels/LOGO/LOGO -08.png
/visuels/LOGO/LOGO -09.png
/visuels/LOGO/MCA_Plan de travail 1 copie.png
/visuels/LOGO/LOGOOOO-03.jpg
/visuels/LOGO/LOGOOOO-01.jpg
/visuels/LOGO/LOGO _Plan de travail 1.png
/visuels/LOGO/BEL PHOTO ET CHARTE /LOGO -05.png
/visuels/LOGO/EXPERT.jpg
/visuels/LOGO/MÈCHE.EN.OR.LOGO -02.jpg
/visuels/LOGO/LOGO MISS GUINÉE_Plan de travail 1.jpg
/visuels/LOGO/LOGO -10.png
/visuels/LOGO/LOGO -04.png
/visuels/LOGO/LOGO -11.png
/visuels/LOGO/LOGO -07.png
/visuels/LOGO/LOGO -06.png
/visuels/LOGO/LOGO -03.png
/visuels/MINISTÈRE DE L'EMPLOIE/510 cm x 300 RETENUS jpg.jpg
/visuels/MINISTÈRE DE L'EMPLOIE/BACHE 150cm X 230cm psb.jpg
/visuels/MINISTÈRE DE L'EMPLOIE/69cm x 18 cm_.jpg
/visuels/MINISTÈRE DE L'EMPLOIE/VISUEL 700X300. MR MOHAMED origipsd copie 2.jpg
/visuels/MINISTÈRE DE L'EMPLOIE/VISUEL 400X800. MR MOHAMED origipsd copie 2.jpg
/visuels/MINISTÈRE DE L'EMPLOIE/VISUEL 400X800. origipsd copie.jpg
/visuels/CGE-GUI/CGE-GUI KAKEMONO, BANDEROLE_Plan de travail 1.jpg
/visuels/CGE-GUI/CGE-GUI KAKEMONO, BANDEROLE-02.jpg
/visuels/VISUELS/Sans titre - 4-03.png
/visuels/VISUELS/Sans titre - 4-02.png
/visuels/VISUELS/Sans titre - 4_Plan de travail 1.png
/visuels/VISUELS/Médicament.jpg
/visuels/VISUELS/Sans titre - 4-04.png
/visuels/VISUELS/Pêche.2 jpg.jpg
/visuels/VISUELS/ISHOW SPEED.jpg
/visuels/VISUELS/Benfica real.jpg
/visuels/VISUELS/CIGAR 2.jpg
/visuels/VISUELS/Real Bayer retour.jpg
/visuels/VISUELS/Mèches.jpg
/visuels/VISUELS/Why.jpg
/visuels/VISUELS/SAMOU BÉHANZIN KÉSSIEN GAING GAING_.jpg
/visuels/VISUELS/Barça Retour_.jpg
/visuels/VISUELS/BÉNIN. 2.jpg
/visuels/VISUELS/BIRTHDAY.jpg
/visuels/VISUELS/ZORO TRAFAL.jpg
/visuels/VISUELS/JEANOU.jpg
/visuels/VISUELS/TENNIS2.jpg
/visuels/VISUELS/CURRY.jpg
/visuels/VISUELS/NIKE AIR.jpg
/visuels/VISUELS/AMERICCCCC.jpg
/visuels/VISUELS/PSG MATCH_.jpg
/visuels/VISUELS/REAL CYTY_.jpg
/visuels/VISUELS/ROAD TRIP .jpg
/visuels/VISUELS/HEROS.jpg
/visuels/VISUELS/real getaf.jpg
/visuels/VISUELS/ITACHI.jpg
/visuels/VISUELS/REAL CITY.jpg
`.trim().split('\n');

const mapped = files.map(file => {
  let type = "Visual";
  const folder = file.split('/')[2];
  if (["LOGO", "BARBE À HUILE"].includes(folder)) type = "Logo";
  else if (["CARREFOUR ", "CAMPAGNE PRÉSIDENTIELLE", "INDIGO", "LA BANQUE ISLAMIQUE", "MISS GUINNÉE", "MINISTÈRE DE L'EMPLOIE"].includes(folder)) type = "Campagne";
  else if (["CALENDRIER CNA", "CGE-GUI"].includes(folder)) type = "Édition";
  else if (["ODYSÉÉ", "PORT AUTONOME ", "FREEZE CORLEONE", "CTG"].includes(folder)) type = "Print";
  else type = "Visual"; // VISUELS
  return `{ src: "${file.trim()}", type: "${type}" }`;
});

const fileContent = fs.readFileSync('src/app/projects/page.tsx', 'utf8');

let newContent = fileContent.replace(
  /const allVisuals = \[[^\]]+\];/, 
  `const allVisuals = [\n  ${mapped.join(',\n  ')}\n];`
);

// Also replace the categories
newContent = newContent.replace(
  /const categories = \[[^\]]+\];/,
  `const categories = ["Tous", "Campagne", "Visual", "Print", "Édition", "Logo"];`
);

fs.writeFileSync('src/app/projects/page.tsx', newContent);
console.log("Replaced successfully!");
