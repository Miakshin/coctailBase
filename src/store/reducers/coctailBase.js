const initialState=[
  {
    name: 'Negroni',
    img : '../img/someCoct.png',
    components: [
      'Джин: 30ml',
      'Красный вермут Martini:30ml',
      'Кампари:30ml',
      'Апельсин:30g',
      'Лед в кубиках:120g']
    ,
    recipe : 'Наполни рокс кубиками льда доверху. Налей в бокал красный вермут 30 мл и кампари 30 мл. Добавь джин 30 мл и размешай коктейльной ложкой.Укрась кружком апельсина. '
  },
  {
    name: 'Daykiry',
    img : 'img/someCoct.png',
    components: [
      'Белый ром: 60ml',
      'Сахарный сироп:15ml',
      'Лаймовый сок:30ml',
      'Лед в кубиках:200g'
    ],
    recipe : 'Налей в шейкер лаймовый сок 30 мл, сахарный сироп 15 мл и белый ром 60 мл. Наполни шейкер кубиками льда и взбей.Перелей через стрейнер в охлажденное шампанское блюдце.'
  }
];
export default function coctailBase(state = initialState, action){
   if(action.type === "ADD_COCTAIL"){
     return[ ...state, action.payload];


   }else if(action.type === "DELETE_COCTAIL"){
     return
       [...state,
       action.payload
     ];
   }else if(action.type === "SERCH_COCTAIL"){
     return
       [...state,
       action.payload
     ];
   }

   return state;
 }
