import FilterVendedor from "./filter-origin";

type FiltersControlsCategoryProps = {
    setFilterVendedor: (vendedor: string) => void;
}

const FiltersControlsCategory = (props: FiltersControlsCategoryProps) => {
    const { setFilterVendedor } = props;
    return (
        <div className="sm:w-[350px] sm:nt-5 p-6">
            <FilterVendedor setFilterVendedor={setFilterVendedor} />
        </div>
    );
}

export default FiltersControlsCategory;