import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useGetProductField } from "@/api/getProductField";
import { ResultFilterTypes } from "@/types/filters";

type FilterVendedorProps = {
  setFilterVendedor: (vendedor: string) => void;
}

const FilterVendedor = (props: FilterVendedorProps) => {
  const { setFilterVendedor } = props;
  const { result, loading }: { result: ResultFilterTypes | null, loading: boolean } = useGetProductField();

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Vendedor</p>
      {loading && result !== null && <p>Loading...</p>}

      <RadioGroup onValueChange={(value) => setFilterVendedor(value)}>
        {result !== null &&
          Array.isArray(result.schema.attributes.vendedor.nombreVendedor) &&
          result.schema.attributes.vendedor.nombreVendedor.map((vendedor: string) => (
            <div key={vendedor} className="flex items-center space-x-2">
              <RadioGroupItem value={vendedor} id={vendedor}></RadioGroupItem>
              <Label htmlFor={vendedor}>{vendedor}</Label>
            </div>
          ))}
      </RadioGroup>
    </div>
  );
};

export default FilterVendedor;