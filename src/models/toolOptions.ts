export const exteriorToolOptions = {
  GLASS: '리어 접합 창유리(태양빛/소음흠수)',
  NOZZLE: '열선식 앞유리 와셔 노즐',
  CARBON_KIT: 'Light 실외 카본 키트',
  DOOR_CLOSE: '소프트 도어 클로즈',
  HEADLIGHT: '블랙 외관 마감 헤드라이트',
  NERISSIMO_CARBON_PACKAGE: 'NERISSIMO CARBON PACKAGE',
  NERISSIMO_PACKAGE: 'NERISSIMO PACKAGE',
} as const;

export const interiorToolOptions = {
  TWO_TONE: '투톤 가죽 인테리어',
  PREMIUM_LEATHER: '최고급 가죽 인테리어',
  HARD_PREMIUM_LEATHER: '천공된 최고급 가죽 인테리어',
  VENTILATED_FRONT_SEAT: '앞좌석 통풍 시트',
  STEERING_WHEEL: '우드 인서트와 함께 가죽으로 덮인 스티어링 휠',
  SABBIA_STEERING_WHEEL:
    '우드 인서트와 함께 SABBIA 가죽으로 덮인 열선식 스티어링 휠',
  BRUSHED_PEDDAL: '브러시드 스테인리스 스틸의 스포트 페달',
  FRONT_SEAT: '앞좌석 시트',
  PREMIUM_REAR_ARM_REST: '프리미엄 리어 암레스트',
  CUP_HOLDER: '미국 규격의 컵홀더',
  PIENO_FIORE_LEATHER: 'PIENO FIORE 천연 가죽',
} as const;

export const forSafetyOptions = {
  SKY_HOOK_DAMPING_CTL: 'SKYHOOK 전자식 댐핑 컨트롤',
  PEDESTRIAN_AWARENESS: '보행자 감지',
  ADVANCED_BREAK_ASSIST:
    '어드밴스드 브레이크 어시스트(전방 충돌 경고 + 자동 비상 제등)',
};

export interface ToolOptionTypes {
  exterior?: Array<keyof typeof exteriorToolOptions>;
  interior: Array<keyof typeof interiorToolOptions>;
  safety?: Array<keyof typeof forSafetyOptions>;
}
