import './FilterBrand.css'

import React from 'react'

function FilterBrand() {
    return (
        <div className="BrandFilter">
            <fieldset>
                <legend>Marca</legend>

                <div>
                    <input type="checkbox" name="brand" id="brand-adidas" value="adidas" />
                    <label htmlFor="brand-adidas">Adidas</label>
                </div>

                <div>
                    <input type="checkbox" name="brand" id="brand-balenciaga" value="balenciaga" />
                    <label htmlFor="brand-balenciaga">Balenciaga</label>
                </div>

                <div>
                    <input type="checkbox" name="brand" id="brand-kswiss" value="kswiss" />
                    <label htmlFor="brand-kswiss">K-Swis</label>
                </div>

                <div>
                    <input type="checkbox" name="brand" id="brand-nike" value="nike" />
                    <label htmlFor="brand-nike">Nike</label>
                </div>

                <div>
                    <input type="checkbox" name="brand" id="brand-puma" value="puma" />
                    <label htmlFor="brand-puma">Puma</label>
                </div>
            </fieldset>
        </div>
    )
}

export default FilterBrand
