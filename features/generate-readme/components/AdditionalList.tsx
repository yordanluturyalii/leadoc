"use client"

const additionalList = [
  'Acknowledgements', 'API Reference', 'Appendix', 'Authors', 'Badges', 'Color Reference', 'Deployment', 'Documentation', 'Environtment Variables', 'FAQ', 'Features'
]

export const AdditionalList = () => {
  return (
      <div className='bg-neutral-200 p-2 rounded-lg grid gap-1 mt-4'>
            <span className="px-3 py-1 font-semibold text-body-sm">
                Click a section to add it to your README.
            </span>

            <div className="grid gap-1.5">
              {additionalList.map((item, i) => (
                  <div className='bg-white py-[10px] px-3 font-semibold rounded-lg' key={i}>
                    {item}
                  </div>
              ))}
            </div>
      </div>
  );
};
