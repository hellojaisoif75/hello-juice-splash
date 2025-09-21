interface SpecTableData {
  nutrient: string;
  per100ml: string;
  perPortion: string;
}

interface SpecTableProps {
  data: SpecTableData[];
}

const SpecTable = ({ data }: SpecTableProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-brand-white border border-gray-200 rounded-lg overflow-hidden shadow-card">
        <table className="w-full">
          <thead>
            <tr className="bg-brand-gray-light">
              <th className="font-playfair text-left p-4 text-brand-black font-semibold">
                Valeurs nutritionnelles
              </th>
              <th className="font-inter text-center p-4 text-brand-black font-medium">
                Pour 100 ml
              </th>
              <th className="font-inter text-center p-4 text-brand-black font-medium">
                Par portion (200ml)
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-brand-white" : "bg-brand-gray-light/30"}>
                <td className="font-inter p-4 text-brand-black font-medium">
                  {row.nutrient}
                </td>
                <td className="font-inter p-4 text-center text-brand-gray-medium">
                  {row.per100ml}
                </td>
                <td className="font-inter p-4 text-center text-brand-gray-medium">
                  {row.perPortion}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpecTable;