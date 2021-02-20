export const ExteriorCarColorTypes = {
  NERO: 'Nero',
  BIANCO: 'Bianco',
  NERO_RIBELLE: 'Nero Ribelle',
  GRIGIO_MARATEA: 'Grigio Maratea',
  GRIGIO: 'Grigio',
  BLU_PASSIONE: 'Blu Passione',
  BLU_EMOZIONE: 'Blu Emozione',
  ROSSO_FOLGORE: 'Rosso Folgore',
  BIANCO_ALPI: 'Bianco Alpi',
  BLU_NOBILE: 'Blu Nobile',
} as const;

export interface BreakCaliperOptionTypes {
  breakCaliperOptions: 'Grigio' | 'Nero' | 'Rosso' | 'Blu' | 'Argrento';
}

export interface WheelOptionTypes {
  wheelOption:
    | "19'Poseidon"
    | "19'Proteo"
    | "20'Urano Nero (Diamond)"
    | "20'Urano (Diamond)"
    | "20'Urano Nero"
    | "20'Teseo"
    | "20'Teseo Black"
    | "21'Titano Anthractie"
    | "21'Titano Black";
}

/**
 * 내 차량 만들기 외관, 실내 Color Types
 */

export interface CarCustomExteriorOptionTypes {
  exteriorColor: keyof typeof ExteriorCarColorTypes;
  breakCaliperOptions: BreakCaliperOptionTypes['breakCaliperOptions'];
  wheelOptions: WheelOptionTypes['wheelOption'];
}
