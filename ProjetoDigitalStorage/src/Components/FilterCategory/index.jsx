import React from 'react'

function FilterCategory() {
    return (
        <div className="FilterCategory">
            <fieldset>
                <legend>Categoria</legend>

                <div>
                    <input type="checkbox" name="category" id="category-esporte-lazer" value="esporte-lazer" />
                    <label htmlFor="category-esporte-lazer">Esporte e Lazer</label>
                </div>

                <div>
                    <input type="checkbox" name="category" id="category-casual" value="casual" />
                    <label htmlFor="category-casual">Casual</label>
                </div>

                <div>
                    <input type="checkbox" name="category" id="category-utilitario" value="utilitario" />
                    <label htmlFor="category-utilitario">Utilitário</label>
                </div>

                <div>
                    <input type="checkbox" name="category" id="category-corrida" value="corrida" />
                    <label htmlFor="category-corrida">Corrida</label>
                </div>
            </fieldset>
        </div>
    )
}

export default FilterCategory
