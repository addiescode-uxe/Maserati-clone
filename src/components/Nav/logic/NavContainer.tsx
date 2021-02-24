import React from 'react';
import NavView from '../view/NavView';

interface modelData {
  name: string;
  imgUrl: string;
}

const NavContainer: React.FC = () => {
  return <NavView modelData={modelData} />;
};

export default NavContainer;

const modelData: modelData[] = [
  {
    name: 'model',
    imgUrl:
      'https://s7g10.scene7.com/is/image/maserati/maserati/international/Models/default/2019/ghibli/ghibli_side.png.png?$1920x2000$&fmt=png-alpha&fit=constrain',
  },
  {
    name: 'Levante',
    imgUrl:
      'https://s7g10.scene7.com/is/image/maserati/maserati/international/Models/default/2019/levante/levante_side_V2.png?$1920x2000$&fmt=png-alpha&fit=constrain',
  },
  {
    name: 'Quattroporte',
    imgUrl:
      'https://s7g10.scene7.com/is/image/maserati/maserati/international/Models/default/2019/quattroporte/quattroporte_side.png?$1920x2000$&fmt=png-alpha&fit=constrain',
  },
  {
    name: 'MC20',
    imgUrl:
      'https://s7g10.scene7.com/is/image/maserati/maserati/international/Models/default/2021/mc20/MC20_side.png?$1920x2000$&fmt=png-alpha&fit=constrain',
  },
];
