import { CarCustomExteriorOptionTypes } from './exteriorOptions';
import { CarCustomInteriorOptionTypes } from './interiorOptions';
import { ToolOptionTypes } from './toolOptions';

/**
 * 내 차량 만들기 전체 Type
 */

export interface CarCustomTypes {
  exterior: CarCustomExteriorOptionTypes;
  interior: CarCustomInteriorOptionTypes;
  toolOptions: ToolOptionTypes;
}
