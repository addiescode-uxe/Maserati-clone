export const interiorSeatColorTypes = {
  NERO: 'Nero',
  CUOIO: 'Cuoio',
  SABBIA: 'Sabbia',
  MARRONE: 'Marrone',
  BLU: 'Blu',
  ROSSO_ROSSO: 'Rosso / Rosso',
  NERO_GRIGIO: 'Nero /Grigio',
  NERO_ROSSO: 'Nero / Rosso',
  ROSSO_NERO: 'Rosso / Nero',
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
