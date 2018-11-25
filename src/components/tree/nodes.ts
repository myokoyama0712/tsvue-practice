export default () => {
  return {
    id: 0,
    isSelected: false,
    maxId: 5,
    children: [
      {
        id: 1,
        isSelected: false,
        children: [
          {
            id: 4,
            isSelected: false,
            children: [],
          },
          {
            id: 5,
            isSelected: false,
            children: [],
          },
        ],
      },
      {
        id: 2,
        isSelected: false,
        children: [],
      },
      {
        id: 3,
        isSelected: false,
        children: [],
      },
    ],
  }
}
