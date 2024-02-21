import React from "react";

import "./Autocomplete.css";
import { getProducts } from "../../repository/product";
import { debounce } from "../../services/utils";
import { Product } from "../../types/product";
import { filterProducts } from "../../services/product";
import { Loading } from "..";

interface AutocompleteProps {
  loadLocalData?: boolean;
}

export const Autocomplete = ({ loadLocalData = false }: AutocompleteProps) => {
  const [results, setResults] = React.useState<Array<Product>>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [hasSearched, setHasSearched] = React.useState<boolean>(false);

  const onInputChange = React.useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      setLoading(true);
      setHasSearched(true);

      const query = event.target.value;
      const response = await getProducts(loadLocalData);

      if (response?.products) {
        const filteredProducts = filterProducts(query, response?.products);
        setResults(filteredProducts);
      }

      setLoading(false);
    },
    [getProducts, loadLocalData]
  );

  const cancelAutocomplete = React.useCallback(() => {
    setLoading(false);
    setResults([]);
    setHasSearched(false);
  }, []);

  return (
    <div className="autocomplete">
      <input
        className="autocomplete__input"
        name="autocomplete"
        onBlur={cancelAutocomplete}
        onChange={debounce(onInputChange, 300)}
      />

      {results?.length ? (
        <ul className="autocomplete__results">
          {results?.map((result) => (
            <li
              key={result.id}
              dangerouslySetInnerHTML={{ __html: result.title }}
            ></li>
          ))}
        </ul>
      ) : null}

      {hasSearched && !results?.length && !loading ? (
        <ul className="autocomplete__results">
          <li>No results found</li>
        </ul>
      ) : null}

      {loading ? <Loading /> : null}
    </div>
  );
};
