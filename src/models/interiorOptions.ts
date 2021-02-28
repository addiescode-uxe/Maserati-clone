export const interiorSeatColorTypes = {
  NERO: 'Nero',
  CUOIO: 'Cuoio',
  SABBIA: 'Sabbia',
  BLU: 'Blu',
} as const;

export const carpetColorTypes = {
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

export const dashBoardColorTypes = {
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

export const headLiningColorTypes = {
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

export const steeringWheelColorTypes = {
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

export const trimColorTypes = {
  RADICA: 'Radica',
  Ebano: 'Ebano',
  BLACK_PIANO: 'Black Piano',
  HIGH_GLOSS_FIVER: '고광택 카본 파이버 능직 직물',
  HIGH_GLOSS_ROVERE: '고광택 Rovere 베니어',
} as const;

/**
 * 내 차량 만들기 외관, 실내 Color Types
 */

export interface CarCustomInteriorOptionTypes {
  seat: keyof typeof interiorSeatColorTypes;
  dashboard: keyof typeof dashBoardColorTypes;
  carpet: keyof typeof carpetColorTypes;
  steeringWheel: keyof typeof steeringWheelColorTypes;
  headlining: keyof typeof headLiningColorTypes;
  trim: keyof typeof trimColorTypes;
}
