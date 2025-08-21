import { create } from 'zustand';

const additionalList = [
  'Acknowledgements',
  'API Reference',
  'Appendix',
  'Authors',
  'Badges',
  'Color Reference',
  'Deployment',
  'Documentation',
  'Environment Variables',
  'FAQ',
  'Features',
  'Title and Description',
  'Usage',
  'Installation',
  'License',
  'Contributing'
]

type DraggableState = {
  sectionData: string[]
  data: string[]
  addToData: (newData: string) => void;
  removeData: (newData: string) => void;
}

export const useDraggable = create<DraggableState>((set) => ({
  sectionData: additionalList,
  data: [],
  addToData: (newData: string) => set((state) => ({
    data: [...state.data, newData],
    sectionData: state.sectionData.filter((d) => d !== newData),
  })),
  removeData: (newData: string) => set((state) => ({
    sectionData: [...state.sectionData, newData],
    data: state.data.filter((d) => d !== newData),
  }))
}))